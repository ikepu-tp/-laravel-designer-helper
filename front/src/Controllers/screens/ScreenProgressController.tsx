import { ReactElement } from 'react';
import {
	ScreenProgressIndexView,
	ScreenProgressShowView,
	ScreenProgressStoreView,
} from '~/Views/screens/ScreenProgressView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import ScreenProgress, { ScreenProgressStoreInit } from '~/Models/ScreenProgress';

export type ScreenProgressRoute = {
	project: string;
	screen_progress: string;
};
export function ScreenProgressIndexController(): ReactElement {
	const { project } = useParams<ScreenProgressRoute>();
	return (
		<IndexController
			title="画面進捗一覧"
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
			model={new ScreenProgress({ project })}
			child={ScreenProgressIndexView}
			childElement={{ project }}
		/>
	);
}
export function ScreenProgressStoreController(): ReactElement {
	const { project, screen_progress } = useParams<ScreenProgressRoute>();
	return (
		<StoreController
			title="画面進捗編集"
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
					link: route('screen_progress.index', { project }),
					text: '画面進捗一覧',
				},
			]}
			model={new ScreenProgress({ project })}
			id={screen_progress}
			storeInit={ScreenProgressStoreInit}
			child={ScreenProgressStoreView}
			childElement={{ project }}
		/>
	);
}
export function ScreenProgressShowController(): ReactElement {
	const { project, screen_progress } = useParams<ScreenProgressRoute>();
	return (
		<ShowController
			title="画面進捗詳細"
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
					link: route('screen_progress.index', { project }),
					text: '画面進捗一覧',
				},
			]}
			model={new ScreenProgress({ project })}
			id={screen_progress}
			child={ScreenProgressShowView}
			childElement={{ project }}
		/>
	);
}
