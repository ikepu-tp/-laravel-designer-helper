import { ReactElement } from 'react';
import { FunctionUserIndexView, FunctionUserShowView, FunctionUserStoreView } from '~/Views/function/FunctionUserView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import FunctionUser, { FunctionUserResource, FunctionUserStoreInit } from '~/Models/FunctionUser';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';

export type FunctionUserRoute = {
	project: string;
	function_user: string;
};
export function FunctionUserIndexController(): ReactElement {
	const { project } = useParams<FunctionUserRoute>();
	return (
		<IndexController
			title="機能ユーザー範囲一覧"
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
			model={new FunctionUser({ project })}
			child={FunctionUserIndexView}
			childElement={{ project }}
		/>
	);
}
export function FunctionUserStoreController(): ReactElement {
	const { project, function_user } = useParams<FunctionUserRoute>();

	async function getCategoriesItems(params: ParamIndexType): Promise<ResponseIndexType<FunctionUserResource> | false> {
		const m = new FunctionUser({ project, except: function_user });
		const response = await m.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	return (
		<StoreController
			title="機能ユーザー範囲編集"
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
					link: route('function_user.index', { project }),
					text: '機能ユーザー範囲一覧',
				},
			]}
			model={new FunctionUser({ project })}
			id={function_user}
			storeInit={FunctionUserStoreInit}
			child={FunctionUserStoreView}
			childElement={{ project, getCategoriesItems }}
		/>
	);
}
export function FunctionUserShowController(): ReactElement {
	const { project, function_user } = useParams<FunctionUserRoute>();
	return (
		<ShowController
			title="機能ユーザー範囲詳細"
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
					link: route('function_user.index', { project }),
					text: '機能ユーザー範囲一覧',
				},
			]}
			model={new FunctionUser({ project })}
			id={function_user}
			child={FunctionUserShowView}
			childElement={{ project }}
		/>
	);
}
