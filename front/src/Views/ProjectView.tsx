import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, StoreView, StoreViewProps } from './View';
import { Table } from 'react-bootstrap';
import { ProjectResource, ProjectStoreResource } from '~/Models/Project';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';

export type ProjectIndexViewProps = {};
export function ProjectIndexView(props: IndexViewProps<ProjectResource> & ProjectIndexViewProps): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: ProjectResource) => <ProjectListItem key={item.id} item={item} />}
			itemWrapper={ProjectListParent}
			createLink={route('project.store', { project: 'new' })}
		/>
	);
}
function ProjectListItem(props: { item: ProjectResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('project.show', { project: props.item.id })}>{props.item.name}</Anchor>
			</td>
			<td>{props.item.sub_name}</td>
			<td>{props.item.note}</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('project.store', { project: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function ProjectListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>プロジェクト名</th>
						<th>サブシステム名</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type ProjectStoreViewProps = {};
export function ProjectStoreView(props: StoreViewProps<ProjectStoreResource> & ProjectStoreViewProps): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="プロジェクト名"
				name="name"
				value={props.Resource['name']}
				maxLength={30}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="サブシステム名"
				name="sub_name"
				value={props.Resource['sub_name']}
				maxLength={30}
				onChange={props.changeResourceStr}
			/>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource['note']}
				onChange={props.changeResourceStr}
			/>
		</StoreView>
	);
}
