import { ReactElement } from 'react';
import { IndexView, IndexViewProps } from './View';
import { ListGroup } from 'react-bootstrap';
import { ProjectResource } from '~/Models/Project';
import route from '~/route';

export type ProjectIndexViewProps = {};
export function ProjectIndexView(props: IndexViewProps<ProjectResource> & ProjectIndexViewProps): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: ProjectResource) => <ListGroup.Item key={item.id}></ListGroup.Item>}
			itemWrapper={ListGroup}
			createLink={route('project.store', { project: 'new' })}
		/>
	);
}
