import { ReactElement } from 'react';
import { ScreenIndexView, ScreenShowView, ScreenStoreView } from '~/Views/screens/ScreenView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import Screen, { ScreenStoreInit } from '~/Models/Screen';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import { Model } from '~/Models/model';
import ScreenClass, { ScreenClassResource } from '~/Models/ScreenClass';
import ScreenProgress, { ScreenProgressResource } from '~/Models/ScreenProgress';

export type ScreenRoute = {
	project: string;
	screen: string;
};
export function ScreenIndexController(): ReactElement {
	const { project } = useParams<ScreenRoute>();
	return (
		<IndexController
			title="画面一覧"
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
			model={new Screen({ project })}
			child={ScreenIndexView}
			childElement={{ project }}
		/>
	);
}
export function ScreenStoreController(): ReactElement {
	const { project, screen } = useParams<ScreenRoute>();

	async function getItems<R>(model: Model, params: ParamIndexType): Promise<ResponseIndexType<R> | false> {
		const response = await model.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	async function getClassesItems(params: ParamIndexType): Promise<ResponseIndexType<ScreenClassResource> | false> {
		return await getItems<ScreenClassResource>(new ScreenClass({ project }), params);
	}
	async function getProgressesItems(
		params: ParamIndexType
	): Promise<ResponseIndexType<ScreenProgressResource> | false> {
		return await getItems<ScreenProgressResource>(new ScreenProgress({ project }), params);
	}
	return (
		<StoreController
			title="画面編集"
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
					link: route('screen.index', { project }),
					text: '画面一覧',
				},
			]}
			model={new Screen({ project })}
			id={screen}
			storeInit={ScreenStoreInit}
			child={ScreenStoreView}
			childElement={{ project, getClassesItems, getProgressesItems }}
		/>
	);
}
export function ScreenShowController(): ReactElement {
	const { project, screen } = useParams<ScreenRoute>();
	return (
		<ShowController
			title="画面詳細"
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
					link: route('screen.index', { project }),
					text: '画面一覧',
				},
			]}
			model={new Screen({ project })}
			id={screen}
			child={ScreenShowView}
			childElement={{ project }}
		/>
	);
}
