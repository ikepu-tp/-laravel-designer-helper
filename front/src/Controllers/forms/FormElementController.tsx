import { ReactElement } from 'react';
import { FormElementIndexView, FormElementShowView, FormElementStoreView } from '~/Views/forms/FormElementView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { ListController, ShowController, StoreController } from '../Controller';
import FormElement, { FormElementStoreInit } from '~/Models/FormElement';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import { Model } from '~/Models/model';
import FormSetting, { FormSettingResource } from '~/Models/FormSetting';

export type FormElementRoute = {
	project: string;
	form: string;
	form_element: string;
};
export function FormElementIndexController(): ReactElement {
	const { project, form } = useParams<FormElementRoute>();
	return (
		<ListController
			model={new FormElement({ project, form })}
			child={FormElementIndexView}
			childElement={{ project, form }}
		/>
	);
}
export function FormElementStoreController(): ReactElement {
	const { project, form, form_element } = useParams<FormElementRoute>();

	async function getItems<R>(model: Model, params: ParamIndexType): Promise<ResponseIndexType<R> | false> {
		const response = await model.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	async function getFormSettings(params: ParamIndexType): Promise<ResponseIndexType<FormSettingResource> | false> {
		return await getItems<FormSettingResource>(new FormSetting({ project }), params);
	}
	return (
		<StoreController
			title="フォーム要素編集"
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
					link: route('form.show', { project, form }),
					text: 'フォーム詳細',
				},
			]}
			model={new FormElement({ project, form })}
			id={form_element}
			storeInit={FormElementStoreInit}
			child={FormElementStoreView}
			childElement={{ project, form, getFormSettings }}
		/>
	);
}
export function FormElementShowController(): ReactElement {
	const { project, form, form_element } = useParams<FormElementRoute>();
	return (
		<ShowController
			title="フォーム要素詳細"
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
					link: route('form.show', { project, form }),
					text: 'フォーム詳細',
				},
				{
					link: route('form_element.index', { project, form }),
					text: 'フォーム要素一覧',
				},
			]}
			model={new FormElement({ project, form })}
			id={form_element}
			child={FormElementShowView}
			childElement={{ project, form }}
		/>
	);
}
