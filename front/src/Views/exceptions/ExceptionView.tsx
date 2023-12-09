import { PropsWithChildren, ReactElement } from 'react';
import { IndexView, IndexViewProps, ShowViewProps, StoreView, StoreViewProps } from './../View';
import { Table } from 'react-bootstrap';
import { ExceptionResource, ExceptionStoreResource } from '~/Models/Exception';
import route from '~/route';
import { Control } from '@ikepu-tp/react-bootstrap-extender/Form';
import Anchor from '~/components/Anchor';
import TextWrapper from '~/components/TextWrapper';

export type ExceptionIndexViewProps = {
	project: string;
};
export function ExceptionIndexView(props: IndexViewProps<ExceptionResource> & ExceptionIndexViewProps): ReactElement {
	return (
		<IndexView
			{...props}
			itemCallback={(item: ExceptionResource) => (
				<ExceptionListItem key={item.id} item={item} projectId={props.project} />
			)}
			itemWrapper={ExceptionListParent}
			createLink={route('exception.store', { project: props.project, exception: 'new' })}
		/>
	);
}
function ExceptionListItem(props: { projectId: string; item: ExceptionResource }): ReactElement {
	return (
		<tr>
			<td>
				<Anchor href={route('exception.show', { project: props.projectId, exception: props.item.id })}>
					{props.item.name}
				</Anchor>
			</td>
			<td>{props.item.http_code}</td>
			<td>{props.item.error_code}</td>
			<td>{props.item.abstract}</td>
			<td>{props.item.title}</td>
			<td>{props.item.default_message}</td>
			<td>
				<TextWrapper>{props.item.note}</TextWrapper>
			</td>
			<td>
				<Anchor
					as="button"
					variant="success"
					href={route('exception.store', { project: props.projectId, exception: props.item.id })}
					className="ms-2"
				>
					編集
				</Anchor>
			</td>
		</tr>
	);
}
function ExceptionListParent(props: PropsWithChildren): ReactElement {
	return (
		<>
			<Table striped hover>
				<thead>
					<tr>
						<th>例外名</th>
						<th>HTTPコード</th>
						<th>エラーコード</th>
						<th>アブストラクト</th>
						<th>タイトル</th>
						<th>初期メッセージ</th>
						<th>備考</th>
						<th></th>
					</tr>
				</thead>
				<tbody>{props.children}</tbody>
			</Table>
		</>
	);
}

export type ExceptionStoreViewProps = {};
export function ExceptionStoreView(
	props: StoreViewProps<ExceptionStoreResource> & ExceptionStoreViewProps
): ReactElement {
	return (
		<StoreView {...props}>
			<Control
				label="例外名"
				name="name"
				value={props.Resource.name}
				maxLength={30}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="HTTPコード"
				name="http_code"
				value={props.Resource.http_code}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="エラーコード"
				name="error_code"
				value={props.Resource.error_code}
				onChange={props.changeResourceStr}
				required
			/>
			<Control
				label="アブストラクト"
				name="abstract"
				value={props.Resource.abstract}
				onChange={props.changeResourceStr}
				required
			/>
			<Control label="タイトル" name="title" value={props.Resource.title} onChange={props.changeResourceStr} required />
			<Control
				label="初期メッセージ"
				name="default_message"
				value={props.Resource.default_message}
				onChange={props.changeResourceStr}
			/>
			<Control
				label="備考"
				as={'textarea'}
				name="note"
				value={props.Resource.note}
				onChange={props.changeResourceStr}
			/>
		</StoreView>
	);
}

export type ExceptionShowViewProps = {};
export function ExceptionShowView(props: ShowViewProps<ExceptionResource> & ExceptionShowViewProps): ReactElement {
	return (
		<>
			<Table striped hover responsive>
				<tbody>
					<tr>
						<th>例外名</th>
						<td>{props.Resource.name}</td>
					</tr>
					<tr>
						<th>HTTPコード</th>
						<td>{props.Resource.http_code}</td>
					</tr>
					<tr>
						<th>エラーコード</th>
						<td>{props.Resource.error_code}</td>
					</tr>
					<tr>
						<th>アブストラクト</th>
						<td>{props.Resource.abstract}</td>
					</tr>
					<tr>
						<th>タイトル</th>
						<td>{props.Resource.title}</td>
					</tr>
					<tr>
						<th>初期メッセージ</th>
						<td>{props.Resource.default_message}</td>
					</tr>
					<tr>
						<th>備考</th>
						<td>
							<TextWrapper>{props.Resource.note}</TextWrapper>
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}
