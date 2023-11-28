import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { FunctionClassResource, FunctionClassStoreResource } from '~/Models/FunctionClass';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';

export type FunctionClassIndexViewProps = {
	project: string;
};
export function FunctionClassIndexView(
	props: IndexViewProps<FunctionClassResource> & FunctionClassIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FunctionClassResource) => (
				<FunctionClassListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={FunctionClassListParent}
			createLink={route('function_class.store', { project: props.project, function_class: 'new' })}
		/>
	);
}
function FunctionClassListItem(props: { projectId: string; item: FunctionClassResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('function_class.show', { project: props.projectId, function_class: props.item.id })}>
					{props.item.name}
				</Anchor>
			</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('function_class.store', { project: props.projectId, function_class: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function FunctionClassListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>区分</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FunctionClassStoreViewProps = {
	getCategoriesItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionClassResource> | false>;
};
export function FunctionClassStoreView(
	props: StoreViewProps<FunctionClassStoreResource> & FunctionClassStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="区分"
				name="name"
				value={props.Resource.name}
				maxLength={30}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource.note}
				onChange={props.changeResourceStr}
			/>
		</StoreView>
	);
}

export type FunctionClassShowViewProps = {};
export function FunctionClassShowView(
	props: ShowViewProps<FunctionClassResource> & FunctionClassShowViewProps
): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>区分</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>備考</th>
						<td>
							<TextWrapper>{props.Resource.note}</TextWrapper>
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}
