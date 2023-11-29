import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { ScreenClassResource, ScreenClassStoreResource } from '~/Models/ScreenClass';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';

export type ScreenClassIndexViewProps = {
	project: string;
};
export function ScreenClassIndexView(
	props: IndexViewProps<ScreenClassResource> & ScreenClassIndexViewProps
): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: ScreenClassResource) => (
				<ScreenClassListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={ScreenClassListParent}
			createLink={route('screen_class.store', { project: props.project, screen_class: 'new' })}
		/>
	);
}
function ScreenClassListItem(props: { projectId: string; item: ScreenClassResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('screen_class.show', { project: props.projectId, screen_class: props.item.id })}>
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
					href={route('screen_class.store', { project: props.projectId, screen_class: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
export function ScreenClassListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>区分</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type ScreenClassStoreViewProps = {};
export function ScreenClassStoreView(
	props: StoreViewProps<ScreenClassStoreResource> & ScreenClassStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="区分"
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

export type ScreenClassShowViewProps = {};
export function ScreenClassShowView(
	props: ShowViewProps<ScreenClassResource> & ScreenClassShowViewProps
): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>区分</th>
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
