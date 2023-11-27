import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Form, Table } from 'react-bootstrap';
import { TableOutlineResource, TableOutlineStoreResource } from '~/Models/TableOutline';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';

export type TableOutlineIndexViewProps = {
	project: string;
};
export function TableOutlineIndexView(
	props: IndexViewProps<TableOutlineResource> & TableOutlineIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: TableOutlineResource) => (
				<TableOutlineListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={TableOutlineListParent}
			createLink={route('table_outline.store', { project: props.project, table_outline: 'new' })}
		/>
	);
}
function TableOutlineListItem(props: { projectId: string; item: TableOutlineResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('table_outline.show', { project: props.projectId, table_outline: props.item.id })}>
					{props.item.name}
				</Anchor>
			</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>{props.item.timestamps ? 'あり' : 'なし'}</td>
			<td>{props.item.soft_delete ? 'あり' : 'なし'}</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('table_outline.store', { project: props.projectId, table_outline: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function TableOutlineListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>テーブル名</th>
						<th>備考</th>
						<th>タイムスタンプの保存</th>
						<th>論理削除の有無</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type TableOutlineStoreViewProps = {};
export function TableOutlineStoreView(
	props: StoreViewProps<TableOutlineStoreResource> & TableOutlineStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="テーブル名"
				name="name"
				value={props.Resource.name}
				maxLength={50}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource.note}
				maxLength={100}
				onChange={props.changeResourceStr}
			/>
			<Form.Switch
				label="タイムスタンプの保存"
				id="timestamps"
				name="timestamps"
				checked={props.Resource.timestamps}
				onChange={props.changeResourceCheck}
			/>
			<Form.Switch
				label="論理削除の有無"
				id="softDeletes"
				name="soft_delete"
				checked={props.Resource.soft_delete}
				onChange={props.changeResourceCheck}
				className="mb-3"
			/>
		</StoreView>
	);
}

export type TableOutlineShowViewProps = {};
export function TableOutlineShowView(
	props: ShowViewProps<TableOutlineResource> & PropsWithChildren & TableOutlineShowViewProps
): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>テーブル名</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>備考</th>
						<td>
							<TextWrapper>{props.Resource.note}</TextWrapper>
						</td>
					</tr>
					<tr>
						<th>タイムスタンプの保存</th>
						<td>{props.Resource.timestamps ? 'あり' : 'なし'}</td>
					</tr>
					<tr>
						<th>論理削除の有無</th>
						<td>{props.Resource.soft_delete ? 'あり' : 'なし'}</td>
					</tr>
				</tbody>
			</Table>
			<h3 className="mt-2">テーブル詳細</h3>
			{props.children}
		</>
	);
}
