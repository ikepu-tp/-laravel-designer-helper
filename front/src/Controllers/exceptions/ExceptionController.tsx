import { ReactElement } from 'react';
import { ExceptionIndexView, ExceptionShowView, ExceptionStoreView } from '~/Views/exceptions/ExceptionView';
import { useParams } from 'react-router-dom';
import route from '~/route';
import { IndexController, ShowController, StoreController } from '../Controller';
import Exception, { ExceptionStoreInit } from '~/Models/Exception';

export type ExceptionRoute = {
	project: string;
	exception: string;
};
export function ExceptionIndexController(): ReactElement {
	const { project } = useParams<ExceptionRoute>();
	return (
		<IndexController
			title="例外一覧"
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
			model={new Exception({ project })}
			child={ExceptionIndexView}
			childElement={{ project }}
		/>
	);
}
export function ExceptionStoreController(): ReactElement {
	const { project, exception } = useParams<ExceptionRoute>();

	return (
		<StoreController
			title="例外編集"
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
					link: route('exception.index', { project }),
					text: '例外一覧',
				},
			]}
			model={new Exception({ project })}
			id={exception}
			storeInit={ExceptionStoreInit}
			child={ExceptionStoreView}
			childElement={{ project }}
		/>
	);
}
export function ExceptionShowController(): ReactElement {
	const { project, exception } = useParams<ExceptionRoute>();
	return (
		<ShowController
			title="例外詳細"
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
					link: route('exception.index', { project }),
					text: '例外一覧',
				},
			]}
			model={new Exception({ project })}
			id={exception}
			child={ExceptionShowView}
			childElement={{ project }}
		/>
	);
}
