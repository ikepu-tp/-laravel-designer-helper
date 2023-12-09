import { ReactElement } from 'react';
import { FormSettingIndexView, FormSettingShowView, FormSettingStoreView } from '~/Views/forms/FormSettingView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import FormSetting, { FormSettingStoreInit } from '~/Models/FormSetting';

export type FormSettingRoute = {
	project: string;
	form_setting: string;
};
export function FormSettingIndexController(): ReactElement {
	const { project } = useParams<FormSettingRoute>();
	return (
		<IndexController
			title="フォーム設定一覧"
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
			model={new FormSetting({ project })}
			child={FormSettingIndexView}
			childElement={{ project }}
		/>
	);
}
export function FormSettingStoreController(): ReactElement {
	const { project, form_setting } = useParams<FormSettingRoute>();

	return (
		<StoreController
			title="フォーム設定編集"
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
					link: route('form_setting.index', { project }),
					text: 'フォーム設定一覧',
				},
			]}
			model={new FormSetting({ project })}
			id={form_setting}
			storeInit={FormSettingStoreInit}
			child={FormSettingStoreView}
			childElement={{ project }}
		/>
	);
}
export function FormSettingShowController(): ReactElement {
	const { project, form_setting } = useParams<FormSettingRoute>();
	return (
		<ShowController
			title="フォーム設定詳細"
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
					link: route('form_setting.index', { project }),
					text: 'フォーム設定一覧',
				},
			]}
			model={new FormSetting({ project })}
			id={form_setting}
			child={FormSettingShowView}
			childElement={{ project }}
		/>
	);
}
