import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Card, Form, Table } from 'react-bootstrap';
import { FormElementResource, FormElementStoreResource } from '~/Models/FormElement';
import route from '~/route';
import { Control, InputWrapper } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import ListView from '~/components/ListView';
import { FormSettingResource } from '~/Models/FormSetting';
import { FormSettingListParent } from './FormSettingView';

export type FormElementIndexViewProps = {
	project: string;
	form: string;
};
export function FormElementIndexView(
	props: IndexViewProps<FormElementResource> & FormElementIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FormElementResource) => (
				<FormElementListItem key={item.id} item={item} projectId={props.project} formId={props.form} />
			)}
			itemWrapper={FormElementListParent}
			createLink={route('form_element.store', { project: props.project, form: props.form, form_element: 'new' })}
		/>
	);
}
function FormElementListItem(props: { projectId: string; formId: string; item: FormElementResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor
					href={route('form_element.show', {
						project: props.projectId,
						form: props.formId,
						form_element: props.item.id,
					})}
				>
					{props.item.label}
				</Anchor>
			</td>
			<td>{props.item.name}</td>
			<td>{props.item.type.name}</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('form_element.store', {
						project: props.projectId,
						form: props.formId,
						form_element: props.item.id,
					})}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function FormElementListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>項目名</th>
						<th>項目キー</th>
						<th>項目タイプ</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FormElementStoreViewProps = {
	getFormSettings: (param: ParamIndexType) => Promise<ResponseIndexType<FormSettingResource> | false>;
};
export function FormElementStoreView(
	props: StoreViewProps<FormElementStoreResource> & FormElementStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="項目名"
				name="label"
				value={props.Resource.label}
				maxLength={50}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="項目キー"
				name="name"
				value={props.Resource.name}
				maxLength={50}
				onChange={props.changeResourceStr}
				required
			/>
			<InputWrapper label="項目タイプ" required>
				<ListView
					getItems={props.getFormSettings}
					itemWrapper={FormSettingListParent}
					itemCallback={(item: FormSettingResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									name="type.id"
									id={`form_setting_${item.id}`}
									value={item.id}
									checked={props.Resource.type.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`form_setting_${item.id}`}>{item.type}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource.note}
				onChange={props.changeResourceStr}
			/>
			<Card className="mb-3">
				<Card.Header>属性値</Card.Header>
				<Card.Body>
					<Form.Check
						type="switch"
						label="必須"
						id="attributes_required_check"
						name="attributes.attr_required"
						checked={props.Resource.attributes?.attr_required}
						onChange={props.changeResourceCheck}
						className="mb-3"
					/>
					<Control
						label="プレースホルダー"
						name="attributes.placeholder"
						maxLength={250}
						value={props.Resource.attributes?.placeholder}
						onChange={props.changeResourceStr}
					/>
					<Control
						label="初期値"
						name="attributes.default_value"
						maxLength={250}
						value={props.Resource.attributes?.default_value}
						onChange={props.changeResourceStr}
					/>
					<Control
						label="最小値"
						name="attributes.attr_min"
						value={props.Resource.attributes?.attr_min}
						onChange={props.changeResourceStr}
					/>
					<Control
						label="最大文字数（最大値）"
						name="attributes.attr_max"
						value={props.Resource.attributes?.attr_max}
						onChange={props.changeResourceStr}
					/>
				</Card.Body>
			</Card>
		</StoreView>
	);
}

export type FormElementShowViewProps = {};
export function FormElementShowView(
	props: ShowViewProps<FormElementResource> & FormElementShowViewProps
): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>項目名</th>
						<td>{props.Resource.label}</td>
					</tr>
					<tr>
						<th>項目キー</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>項目タイプ</th>
						<td>{props.Resource.type.name}</td>
					</tr>
					<tr>
						<th>備考</th>
						<td>
							<TextWrapper>{props.Resource.note}</TextWrapper>
						</td>
					</tr>
				</tbody>
			</Table>
			<Card>
				<Card.Header>属性値</Card.Header>
				<Card.Body>
					<Table striped responsive>
						<tbody>
							<tr>
								<th>必須</th>
								<td>{props.Resource.attributes.attr_required ? '必須' : '任意'}</td>
							</tr>
							<tr>
								<th>プレースホルダー</th>
								<td>{props.Resource.attributes.placeholder}</td>
							</tr>
							<tr>
								<th>初期値</th>
								<td>{props.Resource.attributes.default_value}</td>
							</tr>
							<tr>
								<th>最小値</th>
								<td>{props.Resource.attributes.attr_min}</td>
							</tr>
							<tr>
								<th>最大値</th>
								<td>{props.Resource.attributes.attr_max}</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>
	);
}
