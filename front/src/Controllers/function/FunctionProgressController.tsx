import { ReactElement } from 'react';
import {
	FunctionProgressIndexView,
	FunctionProgressShowView,
	FunctionProgressStoreView,
} from '~/Views/function/FunctionProgressView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import FunctionProgress, { FunctionProgressResource, FunctionProgressStoreInit } from '~/Models/FunctionProgress';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';

export type FunctionProgressRoute = {
	project: string;
	function_progress: string;
};
export function FunctionProgressIndexController(): ReactElement {
	const { project } = useParams<FunctionProgressRoute>();
	return (
		<IndexController
			title="機能進捗一覧"
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
			model={new FunctionProgress({ project })}
			child={FunctionProgressIndexView}
			childElement={{ project }}
		/>
	);
}
export function FunctionProgressStoreController(): ReactElement {
	const { project, function_progress } = useParams<FunctionProgressRoute>();

	async function getCategoriesItems(
		params: ParamIndexType
	): Promise<ResponseIndexType<FunctionProgressResource> | false> {
		const m = new FunctionProgress({ project, except: function_progress });
		const response = await m.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	return (
		<StoreController
			title="機能進捗編集"
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
					link: route('function_progress.index', { project }),
					text: '機能進捗一覧',
				},
			]}
			model={new FunctionProgress({ project })}
			id={function_progress}
			storeInit={FunctionProgressStoreInit}
			child={FunctionProgressStoreView}
			childElement={{ project, getCategoriesItems }}
		/>
	);
}
export function FunctionProgressShowController(): ReactElement {
	const { project, function_progress } = useParams<FunctionProgressRoute>();
	return (
		<ShowController
			title="機能進捗詳細"
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
					link: route('function_progress.index', { project }),
					text: '機能進捗一覧',
				},
			]}
			model={new FunctionProgress({ project })}
			id={function_progress}
			child={FunctionProgressShowView}
			childElement={{ project }}
		/>
	);
}
