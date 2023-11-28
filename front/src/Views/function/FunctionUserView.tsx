import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { FunctionUserResource, FunctionUserStoreResource } from '~/Models/FunctionUser';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';

export type FunctionUserIndexViewProps = {
	project: string;
};
export function FunctionUserIndexView(
	props: IndexViewProps<FunctionUserResource> & FunctionUserIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FunctionUserResource) => (
				<FunctionUserListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={FunctionUserListParent}
			createLink={route('function_user.store', { project: props.project, function_user: 'new' })}
		/>
	);
}
function FunctionUserListItem(props: { projectId: string; item: FunctionUserResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('function_user.show', { project: props.projectId, function_user: props.item.id })}>
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
					href={route('function_user.store', { project: props.projectId, function_user: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function FunctionUserListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>ユーザー範囲</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FunctionUserStoreViewProps = {
	getCategoriesItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionUserResource> | false>;
};
export function FunctionUserStoreView(
	props: StoreViewProps<FunctionUserStoreResource> & FunctionUserStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="ユーザー範囲"
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

export type FunctionUserShowViewProps = {};
export function FunctionUserShowView(
	props: ShowViewProps<FunctionUserResource> & FunctionUserShowViewProps
): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>ユーザー範囲</th>
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
