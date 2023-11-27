import PageWrapper from '~/components/PageWrapper';
import { BreadCrumbType } from '@ikepu-tp/react-bootstrap-extender';
import { ChangeEvent, PropsWithChildren, useEffect, useState } from 'react';
import { Model } from '~/Models/model';
import { ParamIndexType, ResponseIndexType, ResponseType } from '~/Models/interfaces';

export type ControllerProps = PropsWithChildren & {
	title: string;
	breadCrumb?: BreadCrumbType[];
};
export default function Controller(props: ControllerProps): JSX.Element {
	return (
		<PageWrapper title={props.title} breadCrumb={props.breadCrumb}>
			{props.children}
		</PageWrapper>
	);
}
export type ChildControllerProps<R = any, S = any, C = any> = {
	model: Model<R, S>;
	child: (props: any) => JSX.Element;
	childElement?: C;
};
export type CommonControllerProps<R = any, S = any, C = any> = ControllerProps & ChildControllerProps<R, S, C>;
export type ListControllerProps<R = any> = ChildControllerProps<R> & {};
export function ListController<R = any>(props: ListControllerProps<R>): JSX.Element {
	async function getItems(params: ParamIndexType): Promise<ResponseIndexType<R> | false> {
		const m = Object.create(props.model);
		const response = await m.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	return (
		<>
			<props.child getItems={getItems} {...props.childElement} />
		</>
	);
}
export type IndexControllerProps<R = any> = CommonControllerProps<R> & ListControllerProps<R> & {};
export function IndexController<R = any>(props: IndexControllerProps<R>): JSX.Element {
	return (
		<Controller title={props.title} breadCrumb={props.breadCrumb}>
			<ListController {...props} />
			{props.children}
		</Controller>
	);
}
export type FormControllerProps<R = any, S = any> = ChildControllerProps<R, S> & {
	storeInit?: S;
	id?: string;
	success?: (payloads: R) => void;
	ButtonDisabled?: boolean;
	convertResource?: (resource: R) => S;
	beforeSubmit?: (resource: S) => S | Promise<S>;
};
export function FormController<R = any, S = any>(props: FormControllerProps<R, S>): JSX.Element {
	const [Resource, setResource] = useState<S | undefined>();
	const [ButtonDisabled, setButtonDisabled] = useState<boolean>(false);

	useEffect(() => {
		getResource();
	}, [props.id]);

	async function getResource(): Promise<void> {
		let resource: any = { ...{}, ...(props.storeInit || {}) };
		if (props.id === 'new') {
			if (props.convertResource) resource = props.convertResource(resource);
			setResource({ ...{}, ...resource });
			return;
		}
		const model = Object.create(props.model);
		model.setResourceId(props.id);
		const response = await model.show();
		if (!response || !response.payloads) throw new Error('Not Found');
		resource = response.payloads as R;
		if (props.convertResource) resource = props.convertResource(resource);
		setResource({ ...{}, ...resource });
	}
	function changeResource(key: string, value: any): void {
		if (!Resource) return;
		let resource = Resource as any;
		if (key.indexOf('.') === -1) {
			resource[key] = value as never;
		} else {
			const keys: string[] = key.split('.');
			let i = 0;
			for (; i < keys.length - 1; ++i) {
				resource = resource[keys[i]];
			}
			resource[keys[i]] = value as never;
		}
		setResource({ ...{}, ...Resource });
	}
	function changeResourceStr(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
		changeResource(e.currentTarget.name, e.currentTarget.value);
	}
	function changeResourceCheck(e: ChangeEvent<HTMLInputElement>): void {
		changeResource(e.currentTarget.name, e.currentTarget.checked);
	}
	function changeResourceNum(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
		changeResource(e.currentTarget.name, Number(e.currentTarget.value));
	}
	async function onSubmit(): Promise<ResponseType<R>> {
		if (!Resource) throw new Error('Unexpected resource.');
		const model = Object.create(props.model);
		let resource = Resource as S;
		if (props.beforeSubmit) resource = await props.beforeSubmit(resource);
		setResource({ ...{}, ...resource });
		if (props.id === 'new') return model.store(Resource);
		model.setResourceId(props.id);
		return model.update(Resource);
	}
	if (!Resource) return <></>;
	return (
		<props.child
			ButtonDisabled={props.ButtonDisabled === true ? true : ButtonDisabled}
			setButtonDisabled={setButtonDisabled}
			Resource={Resource}
			changeResource={changeResource}
			changeResourceStr={changeResourceStr}
			changeResourceNum={changeResourceNum}
			changeResourceCheck={changeResourceCheck}
			onSubmit={onSubmit}
			success={props.success}
			id={props.id}
			{...props.childElement}
		/>
	);
}
export type StoreControllerProps<R = any, S = any> = CommonControllerProps<R, S> & FormControllerProps<R, S> & {};
export function StoreController<R = any, S = any>(props: StoreControllerProps<R, S>): JSX.Element {
	return (
		<Controller title={props.title} breadCrumb={props.breadCrumb}>
			<FormController {...props} />
			{props.children}
		</Controller>
	);
}

export type DetailControllerProps<R = any> = ChildControllerProps<R> & {
	id?: string;
	convertResource?: (resource: R) => R;
	reload?: string;
};
export function DetailController<R = any>(props: DetailControllerProps<R>): JSX.Element {
	const [Resource, setResource] = useState<R | undefined>();

	useEffect(() => {
		if (!props.id) return;
		getResource();
	}, [props.id, props.reload]);

	async function getResource(): Promise<void> {
		const model = Object.create(props.model);
		model.setResourceId(props.id);
		const response = await model.show();
		if (!response || !response.payloads) throw new Error('Not Found');
		let resource = response.payloads;
		if (props.convertResource) resource = props.convertResource(resource);
		setResource({ ...{}, ...resource });
	}
	if (!Resource) return <></>;
	return (
		<>
			<props.child Resource={Resource} {...props.childElement} />
		</>
	);
}
export type ShowControllerProps<R = any> = CommonControllerProps<R> & DetailControllerProps<R>;
export function ShowController<R = any>(props: ShowControllerProps<R>): JSX.Element {
	return (
		<Controller title={props.title} breadCrumb={props.breadCrumb}>
			<DetailController {...props} />
			{props.children}
		</Controller>
	);
}
