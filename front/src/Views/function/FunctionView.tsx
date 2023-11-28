import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Form, Table } from 'react-bootstrap';
import { FunctionResource, FunctionStoreResource } from '~/Models/Function';
import route from '~/route';
import { Control, InputWrapper } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import ListView from '~/components/ListView';
import { FunctionClassListParent } from './FunctionClassView';
import { FunctionClassResource } from '~/Models/FunctionClass';
import { FunctionCategoryListParent } from './FunctionCategoryView';
import { FunctionCategoryResource } from '~/Models/FunctionCategory';
import { FunctionUserListParent } from './FunctionUserView';
import { FunctionUserResource } from '~/Models/FunctionUser';
import { FunctionProgressListParent } from './FunctionProgressView';
import { FunctionProgressResource } from '~/Models/FunctionProgress';

export type FunctionIndexViewProps = {
	project: string;
};
export function FunctionIndexView(props: IndexViewProps<FunctionResource> & FunctionIndexViewProps): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FunctionResource) => (
				<FunctionListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={FunctionListParent}
			createLink={route('function.store', { project: props.project, function: 'new' })}
		/>
	);
}
function FunctionListItem(props: { projectId: string; item: FunctionResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('function.show', { project: props.projectId, function: props.item.id })}>
					{props.item.name}
				</Anchor>
			</td>
			<td>{props.item.function_category.name}</td>
			<td>{props.item.function_class.name}</td>
			<td>{props.item.function_user.name}</td>
			<td>{props.item.function_progress.name}</td>
			<td>
				<TextWrapper>{props.item.outline}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('function.store', { project: props.projectId, function: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function FunctionListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>機能名</th>
						<th>分類</th>
						<th>区分</th>
						<th>ユーザー範囲</th>
						<th>進捗</th>
						<th>概要</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FunctionStoreViewProps = {
	getCategoriesItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionResource> | false>;
	getClassesItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionResource> | false>;
	getUsersItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionResource> | false>;
	getProgressesItems: (param: ParamIndexType) => Promise<ResponseIndexType<FunctionResource> | false>;
};
export function FunctionStoreView(props: StoreViewProps<FunctionStoreResource> & FunctionStoreViewProps): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="機能名"
				name="name"
				value={props.Resource.name}
				maxLength={250}
				onChange={props.changeResourceStr}
				required
			/>
			<InputWrapper label="分類" required>
				<ListView
					getItems={props.getCategoriesItems}
					itemWrapper={FunctionCategoryListParent}
					itemCallback={(item: FunctionCategoryResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									name="function_category.id"
									id={`function_category_${item.id}`}
									value={item.id}
									checked={props.Resource.function_category.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`function_category_${item.id}`}>{item.deps}</Form.Check.Label>
							</td>
							<td>
								<Form.Check.Label htmlFor={`function_category_${item.id}`}>{item.cat_id}</Form.Check.Label>
							</td>
							<td>
								<Form.Check.Label htmlFor={`function_category_${item.id}`}>{item.note}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<InputWrapper label="区分" required>
				<ListView
					getItems={props.getClassesItems}
					itemWrapper={FunctionClassListParent}
					itemCallback={(item: FunctionClassResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									name="function_class.id"
									id={`function_class_${item.id}`}
									value={item.id}
									checked={props.Resource.function_class.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`function_class_${item.id}`}>{item.note}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<InputWrapper label="ユーザー範囲" required>
				<ListView
					getItems={props.getUsersItems}
					itemWrapper={FunctionUserListParent}
					itemCallback={(item: FunctionUserResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									name="function_user.id"
									id={`function_user_${item.id}`}
									value={item.id}
									checked={props.Resource.function_user.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`function_user_${item.id}`}>{item.note}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<InputWrapper label="進捗" required>
				<ListView
					getItems={props.getProgressesItems}
					itemWrapper={FunctionProgressListParent}
					itemCallback={(item: FunctionProgressResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									name="function_progress.id"
									id={`function_progress_${item.id}`}
									value={item.id}
									checked={props.Resource.function_progress.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`function_progress_${item.id}`}>{item.note}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<Control
				label="概要"
				as={'textarea'}
				name="outline"
				value={props.Resource.outline}
				onChange={props.changeResourceStr}
			/>
		</StoreView>
	);
}

export type FunctionShowViewProps = {};
export function FunctionShowView(props: ShowViewProps<FunctionResource> & FunctionShowViewProps): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>区分</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>分類</th>
						<td>{props.Resource.function_category.name}</td>
					</tr>
					<tr>
						<th>区分</th>
						<td>{props.Resource.function_class.name}</td>
					</tr>
					<tr>
						<th>ユーザー範囲</th>
						<td>{props.Resource.function_user.name}</td>
					</tr>
					<tr>
						<th>進捗</th>
						<td>{props.Resource.function_progress.name}</td>
					</tr>
					<tr>
						<th>概要</th>
						<td>
							<TextWrapper>{props.Resource.outline}</TextWrapper>
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}
