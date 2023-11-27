import { ReactElement } from 'react';
import { TableOutlineIndexView, TableOutlineShowView, TableOutlineStoreView } from '~/Views/tables/TableOutlineView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ListController, ShowController, StoreController } from '../Controller';
import TableOutline, { TableOutlineStoreInit } from '~/Models/TableOutline';
import TableDetail from '~/Models/TableDetail';
import { TableDetailIndexView } from '~/Views/tables/TableDetailView';

export type TableOutlineRoute = {
	project: string;
	table_outline: string;
};
export function TableOutlineIndexController(): ReactElement {
	const { project } = useParams<TableOutlineRoute>();
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
			model={new TableOutline({ project })}
			child={TableOutlineIndexView}
			childElement={{ project }}
		/>
	);
}
export function TableOutlineStoreController(): ReactElement {
	const { project, table_outline } = useParams<TableOutlineRoute>();
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
			model={new TableOutline({ project })}
			id={table_outline}
			storeInit={TableOutlineStoreInit}
			child={TableOutlineStoreView}
			childElement={{ project }}
		/>
	);
}
export function TableOutlineShowController(): ReactElement {
	const { project, table_outline } = useParams<TableOutlineRoute>();
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
			model={new TableOutline({ project })}
			id={table_outline}
			child={TableOutlineShowView}
			childElement={{ project }}
		>
			<ListController
				model={new TableDetail({ project, table_outline })}
				child={TableDetailIndexView}
				childElement={{ project, table_outline }}
			/>
		</ShowController>
	);
}
