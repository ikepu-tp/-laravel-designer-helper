import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Form, Table } from 'react-bootstrap';
import { ScreenResource, ScreenStoreResource } from '~/Models/Screen';
import route from '~/route';
import { Control, InputWrapper } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import ListView from '~/components/ListView';
import { ScreenClassResource } from '~/Models/ScreenClass';
import { ScreenProgressResource } from '~/Models/ScreenProgress';
import { ScreenClassListParent } from './ScreenClassView';
import { ScreenProgressListParent } from './ScreenProgressView';

export type ScreenIndexViewProps = {
	project: string;
};
export function ScreenIndexView(props: IndexViewProps<ScreenResource> & ScreenIndexViewProps): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: ScreenResource) => <ScreenListItem key={item.id} item={item} projectId={props.project} />}
			itemWrapper={ScreenListParent}
			createLink={route('screen.store', { project: props.project, screen: 'new' })}
		/>
	);
}
function ScreenListItem(props: { projectId: string; item: ScreenResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('screen.show', { project: props.projectId, screen: props.item.id })}>
					{props.item.name}
				</Anchor>
			</td>
			<td>{props.item.screen_class.name}</td>
			<td>{props.item.screen_progress.name}</td>
			<td>{props.item.url}</td>
			<td>{props.item.route_name}</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('screen.store', { project: props.projectId, screen: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
export function ScreenListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>画面名</th>
						<th>区分</th>
						<th>進捗</th>
						<th>パス</th>
						<th>ルート名</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type ScreenStoreViewProps = {
	getClassesItems: (param: ParamIndexType) => Promise<ResponseIndexType<ScreenClassResource> | false>;
	getProgressesItems: (param: ParamIndexType) => Promise<ResponseIndexType<ScreenProgressResource> | false>;
};
export function ScreenStoreView(props: StoreViewProps<ScreenStoreResource> & ScreenStoreViewProps): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="画面名"
				name="name"
				value={props.Resource.name}
				maxLength={50}
				onChange={props.changeResourceStr}
				required
			/>
			<InputWrapper label="区分" required>
				<ListView
					getItems={props.getClassesItems}
					itemWrapper={ScreenClassListParent}
					itemCallback={(item: ScreenClassResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									name="screen_class.id"
									id={`screen_class_${item.id}`}
									value={item.id}
									checked={props.Resource.screen_class.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`screen_class_${item.id}`}>{item.note}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<InputWrapper label="進捗" required>
				<ListView
					getItems={props.getProgressesItems}
					itemWrapper={ScreenProgressListParent}
					itemCallback={(item: ScreenProgressResource): ReactElement => (
						<tr key={item.id}>
							<td>
								<Form.Check
									label={item.name}
									name="screen_progress.id"
									id={`screen_progress_${item.id}`}
									value={item.id}
									checked={props.Resource.screen_progress.id === item.id}
									onChange={props.changeResourceNum}
								/>
							</td>
							<td>
								<Form.Check.Label htmlFor={`screen_progress_${item.id}`}>{item.note}</Form.Check.Label>
							</td>
							<td></td>
						</tr>
					)}
				/>
			</InputWrapper>
			<Control label="パス" name="url" value={props.Resource.url} onChange={props.changeResourceStr} />
			<Control
				label="ルート名"
				name="route_name"
				value={props.Resource.route_name}
				onChange={props.changeResourceStr}
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

export type ScreenShowViewProps = {};
export function ScreenShowView(props: ShowViewProps<ScreenResource> & ScreenShowViewProps): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>画面名</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>区分</th>
						<td>{props.Resource.screen_class.name}</td>
					</tr>
					<tr>
						<th>進捗</th>
						<td>{props.Resource.screen_progress.name}</td>
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
