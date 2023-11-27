import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Form, Table } from 'react-bootstrap';
import { TableDetailResource, TableDetailStoreResource } from '~/Models/TableDetail';
import route from '~/route';
import { Control, InputWrapper } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import ListView from '~/components/ListView';
import { PaginationResource } from '@ikepu-tp/react-bootstrap-extender';
import { TableSettingResource } from '~/Models/TableSetting';
import { TableSettingListParent } from './TableSettingView';

export type TableDetailIndexViewProps = {
	project: string;
	table_outline: string;
};
export function TableDetailIndexView(
	props: IndexViewProps<TableDetailResource> & TableDetailIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: TableDetailResource) => (
				<TableDetailListItem key={item.id} item={item} projectId={props.project} tableOutlineId={props.table_outline} />
			)}
			itemWrapper={TableDetailListParent}
			createLink={route('table_detail.store', {
				project: props.project,
				table_outline: props.table_outline,
				table_detail: 'new',
			})}
		/>
	);
}
function TableDetailListItem(props: {
	projectId: string;
	tableOutlineId: string;
	item: TableDetailResource;
}): ReactElement {
	return (
		<tr>
			<td>{props.item.name}</td>
			<td>{props.item.col_name}</td>
			<td>{props.item.table_setting.db_type}</td>
			<td>{props.item.col_digits}</td>
			<td>{props.item.col_default}</td>
			<td>{props.item.col_nullable ? 'あり' : 'なし'}</td>
			<td>{props.item.col_unique ? 'あり' : 'なし'}</td>
			<td>{props.item.col_primary ? 'あり' : 'なし'}</td>
			<td>{props.item.col_index ? 'あり' : 'なし'}</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('table_detail.store', {
						project: props.projectId,
						table_outline: props.tableOutlineId,
						table_detail: props.item.id,
					})}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function TableDetailListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>カラム名（日本語）</th>
						<th>カラム名</th>
						<th>型</th>
						<th>文字数制限</th>
						<th>デフォルト値</th>
						<th>nullable</th>
						<th>一意性</th>
						<th>プライマリーの有無</th>
						<th>インデックスの有無</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type TableDetailStoreViewProps = {
	getTableSettingItems: (props: any) => Promise<false | PaginationResource<TableSettingResource>>;
};
export function TableDetailStoreView(
	props: StoreViewProps<TableDetailStoreResource> & TableDetailStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="カラム名（日本語）"
				name="name"
				value={props.Resource.name}
				onChange={props.changeResourceStr}
				required
				autoFocus
			/>
			<Control
				label="カラム名"
				name="col_name"
				value={props.Resource.col_name}
				onChange={props.changeResourceStr}
				required
			/>
			<InputWrapper label="型" required>
				<ListView
					getItems={props.getTableSettingItems}
					itemWrapper={TableSettingListParent}
					itemCallback={(item: TableSettingResource) => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.model_cast}
									id={`model_cast_${item.id}`}
									name="table_setting.id"
									value={item.id}
									checked={props.Resource.table_setting.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`model_cast_${item.id}`}>{item.db_type}</Form.Check.Label>
							</td>
							<td>
								<Form.Check.Label htmlFor={`model_cast_${item.id}`}>{item.php_type}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<Control
				label="文字数制限"
				name="col_digits"
				value={props.Resource.col_digits}
				onChange={props.changeResourceNum}
			/>
			<Control
				label="デフォルト値"
				name="col_default"
				value={props.Resource.col_default}
				onChange={props.changeResourceStr}
			/>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource.note}
				maxLength={100}
				onChange={props.changeResourceStr}
			/>
			<Form.Check
				label="nullable"
				id="col_nullable"
				name="col_nullable"
				className="my-2"
				checked={props.Resource.col_nullable}
				onChange={props.changeResourceCheck}
			/>
			<Form.Check
				label="一意性"
				id="col_unique"
				name="col_unique"
				className="my-2"
				checked={props.Resource.col_unique}
				onChange={props.changeResourceCheck}
			/>
			<Form.Check
				label="プライマリーの有無"
				id="col_primary"
				name="col_primary"
				className="my-2"
				checked={props.Resource.col_primary}
				onChange={props.changeResourceCheck}
			/>
			<Form.Check
				label="インデックスの有無"
				id="col_index"
				name="col_index"
				className="my-2"
				checked={props.Resource.col_index}
				onChange={props.changeResourceCheck}
			/>
		</StoreView>
	);
}

export type TableDetailShowViewProps = {};
export function TableDetailShowView(
	props: ShowViewProps<TableDetailResource> & TableDetailShowViewProps
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
				</tbody>
			</Table>
		</>
	);
}
