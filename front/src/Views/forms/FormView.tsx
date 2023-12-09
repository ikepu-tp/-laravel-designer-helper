import React, { ChangeEventHandler, PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Form, Table } from 'react-bootstrap';
import { FormResource, FormStoreResource } from '~/Models/Form';
import route from '~/route';
import { Control, InputWrapper } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import { ScreenResource } from '~/Models/Screen';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import ListView from '~/components/ListView';
import { ScreenListParent } from '../screens/ScreenView';

export type FormIndexViewProps = {
	project: string;
};
export function FormIndexView(props: IndexViewProps<FormResource> & FormIndexViewProps): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: FormResource) => <FormListItem key={item.id} item={item} projectId={props.project} />}
			itemWrapper={FormListParent}
			createLink={route('form.store', { project: props.project, form: 'new' })}
		/>
	);
}
function FormListItem(props: { projectId: string; item: FormResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('form.show', { project: props.projectId, form: props.item.id })}>{props.item.name}</Anchor>
			</td>
			<td>
				<ul>
					{props.item.screens.map(
						(screen: ScreenResource): React.ReactElement => (
							<li key={screen.id}>{screen.name}</li>
						)
					)}
				</ul>
			</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('form.store', { project: props.projectId, form: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function FormListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>フォーム名</th>
						<th>画面</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type FormStoreViewProps = {
	getScreens: (param: ParamIndexType) => Promise<ResponseIndexType<ScreenResource> | false>;
	Screens: number[];
	changeScreen: ChangeEventHandler<HTMLInputElement>;
};
export function FormStoreView(props: StoreViewProps<FormStoreResource> & FormStoreViewProps): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="フォーム名"
				name="name"
				value={props.Resource.name}
				maxLength={50}
				onChange={props.changeResourceStr}
				required
			/>
			<InputWrapper label="画面" required>
				<ListView
					getItems={props.getScreens}
					itemWrapper={ScreenListParent}
					itemCallback={(item: ScreenResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									id={`screen_${item.id}`}
									value={item.id}
									checked={props.Screens.indexOf(item.id) !== -1}
									onChange={props.changeScreen}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`screen_${item.id}`}>{item.screen_class.name}</Form.Check.Label>
							</td>
							<td>
								<Form.Check.Label htmlFor={`screen_${item.id}`}>{item.screen_progress.name}</Form.Check.Label>
							</td>
							<td>{item.url}</td>
							<td>{item.route_name}</td>
							<td>
								<Form.Check.Label htmlFor={`screen_${item.id}`}>
									<TextWrapper>{item.note}</TextWrapper>
								</Form.Check.Label>
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
				required
			/>
		</StoreView>
	);
}

export type FormShowViewProps = {};
export function FormShowView(props: ShowViewProps<FormResource> & FormShowViewProps): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>フォーム名</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>画面</th>
						<td>
							<ul>
								{props.Resource.screens.map(
									(screen: ScreenResource): ReactElement => (
										<li key={screen.id}>{screen.name}</li>
									)
								)}
							</ul>
						</td>
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
