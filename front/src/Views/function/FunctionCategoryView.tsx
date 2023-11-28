import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Form, Table } from 'react-bootstrap';
import { FunctionCategoryResource, FunctionCategoryStoreResource } from '~/Models/FunctionCategory';
import route from '~/route';
import { Control, InputWrapper } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import ListView from '~/components/ListView';

export type FunctionCategoryIndexViewProps = {
	project: string;
};
export function FunctionCategoryIndexView(
	props: IndexViewProps<FunctionCategoryResource> & FunctionCategoryIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FunctionCategoryResource) => (
				<FunctionCategoryListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={FunctionCategoryListParent}
			createLink={route('function_category.store', { project: props.project, function_category: 'new' })}
		/>
	);
}
function FunctionCategoryListItem(props: { projectId: string; item: FunctionCategoryResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('function_category.show', { project: props.projectId, function_category: props.item.id })}>
					{props.item.name}
				</Anchor>
			</td>
			<td>{props.item.deps}</td>
			<td>{props.item.cat_id}</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('function_category.store', { project: props.projectId, function_category: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function FunctionCategoryListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>カテゴリー名</th>
						<th>カテゴリー粒度</th>
						<th>親カテゴリー</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FunctionCategoryStoreViewProps = {
	getCategoriesItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionCategoryResource> | false>;
};
export function FunctionCategoryStoreView(
	props: StoreViewProps<FunctionCategoryStoreResource> & FunctionCategoryStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="カテゴリー名"
				name="name"
				value={props.Resource.name}
				maxLength={50}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="粒度"
				name="deps"
				type="number"
				value={props.Resource.deps}
				onChange={props.changeResourceNum}
				required
			/>
			<InputWrapper label="親カテゴリー">
				<ListView
					getItems={props.getCategoriesItems}
					itemWrapper={FunctionCategoryListParent}
					itemCallback={(item: FunctionCategoryResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									id={`cat_id_${item.id}`}
									value={item.id}
									name="cat_id"
									checked={props.Resource.cat_id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`cat_id_${item.id}`}>{item.deps}</Form.Check.Label>
							</td>
							<td>
								<Form.Check.Label htmlFor={`cat_id_${item.id}`}>{item.cat_id}</Form.Check.Label>
							</td>
							<td>
								<Form.Check.Label htmlFor={`cat_id_${item.id}`}>{item.note}</Form.Check.Label>
							</td>
						</tr>
					)}
				/>
			</InputWrapper>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource.note}
				maxLength={100}
				onChange={props.changeResourceStr}
			/>
		</StoreView>
	);
}

export type FunctionCategoryShowViewProps = {};
export function FunctionCategoryShowView(
	props: ShowViewProps<FunctionCategoryResource> & FunctionCategoryShowViewProps
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
						<th>カテゴリー粒度</th>
						<td>{props.Resource.deps}</td>
					</tr>
					<tr>
						<th>親カテゴリー</th>
						<td>{props.Resource.cat_id}</td>
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
