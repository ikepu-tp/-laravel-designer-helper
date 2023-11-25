import { ReactElement } from 'react';
import { IndexController } from './Controller';
import Project from '~/Models/Project';
import { ProjectIndexView } from '~/Views/ProjectView';

export function ProjectIndexController(): ReactElement {
	return <IndexController title="プロジェクト一覧" model={new Project()} child={ProjectIndexView} />;
}
