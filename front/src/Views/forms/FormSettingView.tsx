import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { FormSettingResource, FormSettingStoreResource } from '~/Models/FormSetting';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';

export type FormSettingIndexViewProps = {
	project: string;
};
export function FormSettingIndexView(
	props: IndexViewProps<FormSettingResource> & FormSettingIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FormSettingResource) => (
				<FormSettingListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={FormSettingListParent}
			createLink={route('form_setting.store', { project: props.project, form_setting: 'new' })}
		/>
	);
}
function FormSettingListItem(props: { projectId: string; item: FormSettingResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('form_setting.show', { project: props.projectId, form_setting: props.item.id })}>
					{props.item.name}
				</Anchor>
			</td>
			<td>{props.item.type}</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('form_setting.store', { project: props.projectId, form_setting: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
export function FormSettingListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>フォーム設定名</th>
						<th>フォーム設定項目タイプ</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FormSettingStoreViewProps = {};
export function FormSettingStoreView(
	props: StoreViewProps<FormSettingStoreResource> & FormSettingStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="フォーム設定名"
				name="name"
				value={props.Resource.name}
				maxLength={30}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="フォーム設定項目タイプ"
				name="type"
				value={props.Resource.type}
				maxLength={30}
				onChange={props.changeResourceStr}
				required
			/>
		</StoreView>
	);
}

export type FormSettingShowViewProps = {};
export function FormSettingShowView(
	props: ShowViewProps<FormSettingResource> & FormSettingShowViewProps
): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>フォーム設定名</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>フォーム設定項目タイプ</th>
						<td>{props.Resource.type}</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}
