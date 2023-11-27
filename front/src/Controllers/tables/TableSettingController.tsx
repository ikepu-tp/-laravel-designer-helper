import { ReactElement } from 'react';
import { TableSettingIndexView, TableSettingShowView, TableSettingStoreView } from '~/Views/tables/TableSettingView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import TableSetting from '~/Models/TableSetting';

export type TableSettingRoute = {
	project: string;
	table_setting: string;
};
export function TableSettingIndexController(): ReactElement {
	const { project } = useParams<TableSettingRoute>();
	return (
		<IndexController
			title="テーブル設定一覧"
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
			model={new TableSetting({ project })}
			child={TableSettingIndexView}
			childElement={{ project }}
		/>
	);
}
export function TableSettingStoreController(): ReactElement {
	const { project, table_setting } = useParams<TableSettingRoute>();
	return (
		<StoreController
			title="テーブル設定編集"
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
					link: route('table_setting.index', { project }),
					text: 'テーブル設定一覧',
				},
			]}
			model={new TableSetting({ project })}
			id={table_setting}
			child={TableSettingStoreView}
			childElement={{ project }}
		/>
	);
}
export function TableSettingShowController(): ReactElement {
	const { project, table_setting } = useParams<TableSettingRoute>();
	return (
		<ShowController
			title="テーブル設定詳細"
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
					link: route('table_setting.index', { project }),
					text: 'テーブル設定一覧',
				},
			]}
			model={new TableSetting({ project })}
			id={table_setting}
			child={TableSettingShowView}
			childElement={{ project }}
		/>
	);
}
