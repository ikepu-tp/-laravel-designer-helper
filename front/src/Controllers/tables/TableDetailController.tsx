import { ReactElement } from 'react';
import { TableDetailIndexView, TableDetailShowView, TableDetailStoreView } from '~/Views/tables/TableDetailView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import TableDetail, { TableDetailStoreInit } from '~/Models/TableDetail';
import { ParamIndexType, ResponseIndexType } from '~/Models/interfaces';
import TableSetting, { TableSettingResource } from '~/Models/TableSetting';

export type TableDetailRoute = {
	project: string;
	table_outline: string;
	table_detail: string;
};
export function TableDetailIndexController(): ReactElement {
	const { project, table_outline } = useParams<TableDetailRoute>();
	return (
		<IndexController
			title="テーブル概要一覧"
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
			model={new TableDetail({ project })}
			child={TableDetailIndexView}
			childElement={{ project, table_outline }}
		/>
	);
}
export function TableDetailStoreController(): ReactElement {
	const { project, table_outline, table_detail } = useParams<TableDetailRoute>();

	async function getTableSettingItems(
		params: ParamIndexType
	): Promise<ResponseIndexType<TableSettingResource> | false> {
		const m = new TableSetting({ project });
		const response = await m.index(params);
		if (!response.payloads) return false;
		return response.payloads;
	}
	return (
		<StoreController
			title="テーブル概要編集"
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
					link: route('table_outline.index', { project }),
					text: 'テーブル概要一覧',
				},
			]}
			model={new TableDetail({ project, table_outline })}
			id={table_detail}
			storeInit={TableDetailStoreInit}
			child={TableDetailStoreView}
			childElement={{ project, table_outline, getTableSettingItems }}
		/>
	);
}
export function TableDetailShowController(): ReactElement {
	const { project, table_outline, table_detail } = useParams<TableDetailRoute>();
	return (
		<ShowController
			title="テーブル概要詳細"
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
					link: route('table_outline.index', { project }),
					text: 'テーブル概要一覧',
				},
			]}
			model={new TableDetail({ project, table_outline })}
			id={table_detail}
			child={TableDetailShowView}
			childElement={{ project, table_outline }}
		/>
	);
}
