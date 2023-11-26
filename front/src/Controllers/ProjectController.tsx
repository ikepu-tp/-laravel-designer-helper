import { ReactElement } from 'react';
import { IndexController, ShowController, StoreController } from './Controller';
import Project from '~/Models/Project';
import { ProjectIndexView, ProjectShowView, ProjectStoreView } from '~/Views/ProjectView';
import { useParams } from 'react-router-dom';
import route from '~/route';

export type ProjectRoute = {
	project: string;
};
export function ProjectIndexController(): ReactElement {
	return <IndexController title="プロジェクト一覧" model={new Project()} child={ProjectIndexView} />;
}
export function ProjectStoreController(): ReactElement {
	const { project } = useParams<ProjectRoute>();
	return (
		<StoreController
			title="プロジェクト編集"
			breadCrumb={[
				{
					link: route('project.index'),
					text: 'プロジェクト一覧',
				},
			]}
			model={new Project()}
			id={project}
			child={ProjectStoreView}
		/>
	);
}
export function ProjectShowController(): ReactElement {
	const { project } = useParams<ProjectRoute>();
	return (
		<ShowController
			title="プロジェクト詳細"
			breadCrumb={[{ link: route('project.index'), text: 'プロジェクト一覧' }]}
			model={new Project()}
			id={project}
			child={ProjectShowView}
		/>
	);
}
