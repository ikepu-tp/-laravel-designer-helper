import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { FunctionProgressResource, FunctionProgressStoreResource } from '~/Models/FunctionProgress';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';

export type FunctionProgressIndexViewProps = {
	project: string;
};
export function FunctionProgressIndexView(
	props: IndexViewProps<FunctionProgressResource> & FunctionProgressIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FunctionProgressResource) => (
				<FunctionProgressListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={FunctionProgressListParent}
			createLink={route('function_progress.store', { project: props.project, function_progress: 'new' })}
		/>
	);
}
function FunctionProgressListItem(props: { projectId: string; item: FunctionProgressResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('function_progress.show', { project: props.projectId, function_progress: props.item.id })}>
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
					href={route('function_progress.store', { project: props.projectId, function_progress: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function FunctionProgressListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>進捗</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FunctionProgressStoreViewProps = {
	getCategoriesItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionProgressResource> | false>;
};
export function FunctionProgressStoreView(
	props: StoreViewProps<FunctionProgressStoreResource> & FunctionProgressStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="進捗"
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

export type FunctionProgressShowViewProps = {};
export function FunctionProgressShowView(
	props: ShowViewProps<FunctionProgressResource> & FunctionProgressShowViewProps
): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>進捗</th>
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
