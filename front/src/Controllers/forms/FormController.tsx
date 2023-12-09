import { ChangeEvent, ReactElement, useState } from 'react';
import { FormIndexView, FormShowView, FormStoreView } from '~/Views/forms/FormView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import Form, { FormStoreInit, FormStoreResource } from '~/Models/Form';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import { Model } from '~/Models/model';
import Screen, { ScreenResource } from '~/Models/Screen';

export type FormRoute = {
	project: string;
	form: string;
};
export function FormIndexController(): ReactElement {
	const { project } = useParams<FormRoute>();
	return (
		<IndexController
			title="フォーム一覧"
			breadCrumb={[
				{
					link: route('project.index'),
					text: 'プロジェクト一覧',
				},
				{
					link: route('project.show', { project }),
					text: 'プロジェクト詳細',
				},
			]}
			model={new Form({ project })}
			child={FormIndexView}
			childElement={{ project }}
		/>
	);
}
export function FormStoreController(): ReactElement {
	const { project, form } = useParams<FormRoute>();
	const [Screens, setScreens] = useState<number[]>([]);

	async function getItems<R>(model: Model, params: ParamIndexType): Promise<ResponseIndexType<R> | false> {
		const response = await model.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	async function getScreens(params: ParamIndexType): Promise<ResponseIndexType<ScreenResource> | false> {
		return await getItems<ScreenResource>(new Screen({ project }), params);
	}
	function changeScreen(e: ChangeEvent<HTMLInputElement>): void {
		const idx: number = Screens.indexOf(Number(e.currentTarget.value));
		if (idx > -1) {
			Screens.splice(idx, 1);
			setScreens([...Screens]);
		} else {
			setScreens([...Screens, Number(e.currentTarget.value)]);
		}
	}
	function beforeSubmit(resource: FormStoreResource): FormStoreResource {
		resource.screens = [];
		Screens.forEach((screen: number) => {
			resource.screens.push({ id: screen });
		});
		return resource;
	}
	return (
		<StoreController
			title="フォーム編集"
			breadCrumb={[
				{
					link: route('project.index'),
					text: 'プロジェクト一覧',
				},
				{
					link: route('project.show', { project }),
					text: 'プロジェクト詳細',
				},
				{
					link: route('form.index', { project }),
					text: 'フォーム一覧',
				},
			]}
			model={new Form({ project })}
			id={form}
			storeInit={FormStoreInit}
			beforeSubmit={beforeSubmit}
			child={FormStoreView}
			childElement={{ project, getScreens, Screens, changeScreen }}
		/>
	);
}
export function FormShowController(): ReactElement {
	const { project, form } = useParams<FormRoute>();
	return (
		<ShowController
			title="フォーム詳細"
			breadCrumb={[
				{
					link: route('project.index'),
					text: 'プロジェクト一覧',
				},
				{
					link: route('project.show', { project }),
					text: 'プロジェクト詳細',
				},
				{
					link: route('form.index', { project }),
					text: 'フォーム一覧',
				},
			]}
			model={new Form({ project })}
			id={form}
			child={FormShowView}
			childElement={{ project }}
		/>
	);
}
