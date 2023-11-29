import { ReactElement } from 'react';
import { ScreenClassIndexView, ScreenClassShowView, ScreenClassStoreView } from '~/Views/screens/ScreenClassView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import ScreenClass, { ScreenClassStoreInit } from '~/Models/ScreenClass';

export type ScreenClassRoute = {
	project: string;
	screen_class: string;
};
export function ScreenClassIndexController(): ReactElement {
	const { project } = useParams<ScreenClassRoute>();
	return (
		<IndexController
			title="画面区分区分一覧"
			breadCrumb={[
				{
					link: route('project.index'),
					text: 'プロジェクト一覧',
				},
				{
					link: route('project.show', { project }),
					text: 'プロジェクト詳細',
				},
			]}
			model={new ScreenClass({ project })}
			child={ScreenClassIndexView}
			childElement={{ project }}
		/>
	);
}
export function ScreenClassStoreController(): ReactElement {
	const { project, screen_class } = useParams<ScreenClassRoute>();
	return (
		<StoreController
			title="画面区分編集"
			breadCrumb={[
				{
					link: route('project.index'),
					text: 'プロジェクト一覧',
				},
				{
					link: route('project.show', { project }),
					text: 'プロジェクト詳細',
				},
				{
					link: route('screen_class.index', { project }),
					text: '画面区分一覧',
				},
			]}
			model={new ScreenClass({ project })}
			id={screen_class}
			storeInit={ScreenClassStoreInit}
			child={ScreenClassStoreView}
			childElement={{ project }}
		/>
	);
}
export function ScreenClassShowController(): ReactElement {
	const { project, screen_class } = useParams<ScreenClassRoute>();
	return (
		<ShowController
			title="画面区分詳細"
			breadCrumb={[
				{
					link: route('project.index'),
					text: 'プロジェクト一覧',
				},
				{
					link: route('project.show', { project }),
					text: 'プロジェクト詳細',
				},
				{
					link: route('screen_class.index', { project }),
					text: '画面区分一覧',
				},
			]}
			model={new ScreenClass({ project })}
			id={screen_class}
			child={ScreenClassShowView}
			childElement={{ project }}
		/>
	);
}
