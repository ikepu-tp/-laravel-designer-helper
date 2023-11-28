import { ReactElement } from 'react';
import {
	FunctionCategoryIndexView,
	FunctionCategoryShowView,
	FunctionCategoryStoreView,
} from '~/Views/function/FunctionCategoryView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import FunctionCategory, { FunctionCategoryResource, FunctionCategoryStoreInit } from '~/Models/FunctionCategory';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';

export type FunctionCategoryRoute = {
	project: string;
	function_category: string;
};
export function FunctionCategoryIndexController(): ReactElement {
	const { project } = useParams<FunctionCategoryRoute>();
	return (
		<IndexController
			title="機能カテゴリー一覧"
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
			model={new FunctionCategory({ project })}
			child={FunctionCategoryIndexView}
			childElement={{ project }}
		/>
	);
}
export function FunctionCategoryStoreController(): ReactElement {
	const { project, function_category } = useParams<FunctionCategoryRoute>();

	async function getCategoriesItems(
		params: ParamIndexType
	): Promise<ResponseIndexType<FunctionCategoryResource> | false> {
		const m = new FunctionCategory({ project, except: function_category });
		const response = await m.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	return (
		<StoreController
			title="機能カテゴリー編集"
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
					link: route('function_category.index', { project }),
					text: '機能カテゴリー一覧',
				},
			]}
			model={new FunctionCategory({ project })}
			id={function_category}
			storeInit={FunctionCategoryStoreInit}
			child={FunctionCategoryStoreView}
			childElement={{ project, getCategoriesItems }}
		/>
	);
}
export function FunctionCategoryShowController(): ReactElement {
	const { project, function_category } = useParams<FunctionCategoryRoute>();
	return (
		<ShowController
			title="機能カテゴリー詳細"
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
					link: route('function_category.index', { project }),
					text: '機能カテゴリー一覧',
				},
			]}
			model={new FunctionCategory({ project })}
			id={function_category}
			child={FunctionCategoryShowView}
			childElement={{ project }}
		/>
	);
}
