import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { ScreenProgressResource, ScreenProgressStoreResource } from '~/Models/ScreenProgress';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';

export type ScreenProgressIndexViewProps = {
	project: string;
};
export function ScreenProgressIndexView(
	props: IndexViewProps<ScreenProgressResource> & ScreenProgressIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: ScreenProgressResource) => (
				<ScreenProgressListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={ScreenProgressListParent}
			createLink={route('screen_progress.store', { project: props.project, screen_progress: 'new' })}
		/>
	);
}
export function ScreenProgressListItem(props: { projectId: string; item: ScreenProgressResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('screen_progress.show', { project: props.projectId, screen_progress: props.item.id })}>
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
					href={route('screen_progress.store', { project: props.projectId, screen_progress: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
export function ScreenProgressListParent(props: PropsWithChildren): ReactElement {
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

export type ScreenProgressStoreViewProps = {};
export function ScreenProgressStoreView(
	props: StoreViewProps<ScreenProgressStoreResource> & ScreenProgressStoreViewProps
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

export type ScreenProgressShowViewProps = {};
export function ScreenProgressShowView(
	props: ShowViewProps<ScreenProgressResource> & ScreenProgressShowViewProps
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
