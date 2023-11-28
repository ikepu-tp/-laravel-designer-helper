import { ReactElement } from 'react';
import {
	FunctionClassIndexView,
	FunctionClassShowView,
	FunctionClassStoreView,
} from '~/Views/function/FunctionClassView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import FunctionClass, { FunctionClassResource, FunctionClassStoreInit } from '~/Models/FunctionClass';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';

export type FunctionClassRoute = {
	project: string;
	function_class: string;
};
export function FunctionClassIndexController(): ReactElement {
	const { project } = useParams<FunctionClassRoute>();
	return (
		<IndexController
			title="機能区分一覧"
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
			model={new FunctionClass({ project })}
			child={FunctionClassIndexView}
			childElement={{ project }}
		/>
	);
}
export function FunctionClassStoreController(): ReactElement {
	const { project, function_class } = useParams<FunctionClassRoute>();

	async function getCategoriesItems(params: ParamIndexType): Promise<ResponseIndexType<FunctionClassResource> | false> {
		const m = new FunctionClass({ project, except: function_class });
		const response = await m.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	return (
		<StoreController
			title="機能区分編集"
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
					link: route('function_class.index', { project }),
					text: '機能区分一覧',
				},
			]}
			model={new FunctionClass({ project })}
			id={function_class}
			storeInit={FunctionClassStoreInit}
			child={FunctionClassStoreView}
			childElement={{ project, getCategoriesItems }}
		/>
	);
}
export function FunctionClassShowController(): ReactElement {
	const { project, function_class } = useParams<FunctionClassRoute>();
	return (
		<ShowController
			title="機能区分詳細"
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
					link: route('function_class.index', { project }),
					text: '機能区分一覧',
				},
			]}
			model={new FunctionClass({ project })}
			id={function_class}
			child={FunctionClassShowView}
			childElement={{ project }}
		/>
	);
}
