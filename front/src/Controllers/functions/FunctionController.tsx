import { ReactElement } from 'react';
import { FunctionIndexView, FunctionShowView, FunctionStoreView } from '~/Views/function/FunctionView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import Function, { FunctionStoreInit } from '~/Models/Function';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import FunctionCategory, { FunctionCategoryResource } from '~/Models/FunctionCategory';
import { Model } from '~/Models/model';
import FunctionClass, { FunctionClassResource } from '~/Models/FunctionClass';
import FunctionUser, { FunctionUserResource } from '~/Models/FunctionUser';
import FunctionProgress, { FunctionProgressResource } from '~/Models/FunctionProgress';

export type FunctionRoute = {
	project: string;
	_function: string;
};
export function FunctionIndexController(): ReactElement {
	const { project } = useParams<FunctionRoute>();
	return (
		<IndexController
			title="機能一覧"
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
			model={new Function({ project })}
			child={FunctionIndexView}
			childElement={{ project }}
		/>
	);
}
export function FunctionStoreController(): ReactElement {
	const { project, _function } = useParams<FunctionRoute>();

	async function getItems<R>(model: Model, params: ParamIndexType): Promise<ResponseIndexType<R> | false> {
		const response = await model.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	async function getCategoriesItems(
		params: ParamIndexType
	): Promise<ResponseIndexType<FunctionCategoryResource> | false> {
		return await getItems<FunctionCategoryResource>(new FunctionCategory({ project }), params);
	}
	async function getClassesItems(params: ParamIndexType): Promise<ResponseIndexType<FunctionClassResource> | false> {
		return await getItems<FunctionClassResource>(new FunctionClass({ project }), params);
	}
	async function getUsersItems(params: ParamIndexType): Promise<ResponseIndexType<FunctionUserResource> | false> {
		return await getItems<FunctionUserResource>(new FunctionUser({ project }), params);
	}
	async function getProgressesItems(
		params: ParamIndexType
	): Promise<ResponseIndexType<FunctionProgressResource> | false> {
		return await getItems<FunctionProgressResource>(new FunctionProgress({ project }), params);
	}
	return (
		<StoreController
			title="機能編集"
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
					link: route('function.index', { project }),
					text: '機能一覧',
				},
			]}
			model={new Function({ project })}
			id={_function}
			storeInit={FunctionStoreInit}
			child={FunctionStoreView}
			childElement={{ project, getCategoriesItems, getClassesItems, getUsersItems, getProgressesItems }}
		/>
	);
}
export function FunctionShowController(): ReactElement {
	const { project, _function } = useParams<FunctionRoute>();
	return (
		<ShowController
			title="機能詳細"
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
					link: route('function.index', { project }),
					text: '機能一覧',
				},
			]}
			model={new Function({ project })}
			id={_function}
			child={FunctionShowView}
			childElement={{ project }}
		/>
	);
}
