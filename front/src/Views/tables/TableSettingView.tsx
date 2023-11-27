import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { TableSettingResource, TableSettingStoreResource } from '~/Models/TableSetting';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';

export type TableSettingIndexViewProps = {
	project: string;
};
export function TableSettingIndexView(
	props: IndexViewProps<TableSettingResource> & TableSettingIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: TableSettingResource) => (
				<TableSettingListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={TableSettingListParent}
			createLink={route('table_setting.store', { project: props.project, table_setting: 'new' })}
		/>
	);
}
function TableSettingListItem(props: { projectId: string; item: TableSettingResource }): ReactElement {
	return (
		<tr>
			<td>{props.item.model_cast}</td>
			<td>{props.item.db_type}</td>
			<td>{props.item.php_type}</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('table_setting.store', { project: props.projectId, table_setting: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
export function TableSettingListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>モデルキャスト</th>
						<th>テーブルカラム</th>
						<th>PHPDoc</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type TableSettingStoreViewProps = {};
export function TableSettingStoreView(
	props: StoreViewProps<TableSettingStoreResource> & TableSettingStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="モデルキャスト"
				name="model_cast"
				value={props.Resource.model_cast}
				maxLength={50}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="テーブルカラム"
				name="db_type"
				value={props.Resource.db_type}
				maxLength={50}
				onChange={props.changeResourceStr}
			/>
			<Control
				label="PHPDoc"
				name="php_type"
				value={props.Resource.php_type}
				maxLength={50}
				onChange={props.changeResourceStr}
			/>
		</StoreView>
	);
}

export type TableSettingShowViewProps = {};
export function TableSettingShowView(
	props: ShowViewProps<TableSettingResource> & TableSettingShowViewProps
): ReactElement {
	return (
		<>
			<Table>
				<tbody>
					<tr>
						<th>モデルキャスト</th>
						<td>{props.Resource.model_cast}</td>
					</tr>
					<tr>
						<th>テーブルカラム</th>
						<td>{props.Resource.db_type}</td>
					</tr>
					<tr>
						<th>PHPDoc</th>
						<td>{props.Resource.php_type}</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}
