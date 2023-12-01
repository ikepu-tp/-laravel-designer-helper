import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './View';
import { Card, ListGroup, Table } from 'react-bootstrap';
import { ProjectResource, ProjectStoreResource } from '~/Models/Project';
import route, { routes } from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';

export type ProjectIndexViewProps = {};
export function ProjectIndexView(props: IndexViewProps<ProjectResource> & ProjectIndexViewProps): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: ProjectResource) => <ProjectListItem key={item.id} item={item} />}
			itemWrapper={ProjectListParent}
			createLink={route('project.store', { project: 'new' })}
		/>
	);
}
function ProjectListItem(props: { item: ProjectResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('project.show', { project: props.item.id })}>{props.item.name}</Anchor>
			</td>
			<td>{props.item.sub_name}</td>
			<td>{props.item.note}</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('project.store', { project: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function ProjectListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>プロジェクト名</th>
						<th>サブシステム名</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type ProjectStoreViewProps = {};
export function ProjectStoreView(props: StoreViewProps<ProjectStoreResource> & ProjectStoreViewProps): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="プロジェクト名"
				name="name"
				value={props.Resource['name']}
				maxLength={30}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="サブシステム名"
				name="sub_name"
				value={props.Resource['sub_name']}
				maxLength={30}
				onChange={props.changeResourceStr}
			/>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource['note']}
				onChange={props.changeResourceStr}
			/>
		</StoreView>
	);
}

export type ProjectShowViewProps = {};
export function ProjectShowView(props: ShowViewProps<ProjectResource> & ProjectShowViewProps): ReactElement {
	return (
		<>
			<h2>{props.Resource.name}</h2>
			<h3>{props.Resource.sub_name}</h3>
			<TextWrapper>{props.Resource.note}</TextWrapper>
			<Card className="mb-3">
				<Card.Header>テーブル関連</Card.Header>
				<Card.Body>
					<ListGroup>
						<MenuLinkItem
							route_name="table_setting.index"
							route_param={{ project: props.Resource.id }}
							children="テーブル設定"
						/>
						<MenuLinkItem
							route_name="table_outline.index"
							route_param={{ project: props.Resource.id }}
							children="テーブル概要"
						/>
					</ListGroup>
				</Card.Body>
			</Card>
			<Card className="mb-3">
				<Card.Header>機能関連</Card.Header>
				<Card.Body>
					<ListGroup>
						<MenuLinkItem
							route_name="function_category.index"
							route_param={{ project: props.Resource.id }}
							children="機能カテゴリー"
						/>
						<MenuLinkItem
							route_name="function_class.index"
							route_param={{ project: props.Resource.id }}
							children="機能区分"
						/>
						<MenuLinkItem
							route_name="function_progress.index"
							route_param={{ project: props.Resource.id }}
							children="機能進捗"
						/>
						<MenuLinkItem
							route_name="function_user.index"
							route_param={{ project: props.Resource.id }}
							children="機能ユーザー範囲"
						/>
						<MenuLinkItem route_name="function.index" route_param={{ project: props.Resource.id }} children="機能" />
					</ListGroup>
				</Card.Body>
			</Card>
			<Card className="mb-3">
				<Card.Header>画面関連</Card.Header>
				<Card.Body>
					<ListGroup className="mt-3">
						<MenuLinkItem route_name="screen.index" route_param={{ project: props.Resource.id }} children="画面" />
						<MenuLinkItem
							route_name="screen_class.index"
							route_param={{ project: props.Resource.id }}
							children="画面区分"
						/>
						<MenuLinkItem
							route_name="screen_progress.index"
							route_param={{ project: props.Resource.id }}
							children="画面進捗"
						/>
					</ListGroup>
				</Card.Body>
			</Card>
		</>
	);
}
function MenuLinkItem(
	props: { route_name: keyof typeof routes; route_param: { [s: string]: string | number } } & PropsWithChildren
): ReactElement {
	return (
		<Anchor href={route(props.route_name, props.route_param)} className="list-group-item list-group-item-action">
			{props.children}
		</Anchor>
	);
}
