import { Button, Col, Row } from 'react-bootstrap';
import { FormWrapper } from '@ikepu-tp/react-bootstrap-extender/Form';
import { ListViewProps } from '@ikepu-tp/react-bootstrap-extender';
import React, { PropsWithChildren, ReactNode } from 'react';
import Anchor from '~/components/Anchor';
import ListView from '~/components/ListView';
import { FormProps } from '~/components/form';

export type IndexViewProps<R = any> = ListViewProps<R> & {
	createLink?: string;
	menus?: ReactNode;
	sub_menus?: ReactNode;
};
export function IndexView<R = any>(props: IndexViewProps<R>): JSX.Element {
	return (
		<>
			<Row>
				<Col className="mb-2">{props.menus}</Col>
				<Col className="mb-2" xs="auto">
					{props.sub_menus}
					{props.createLink && (
						<Anchor as="button" href={props.createLink} className="ms-2">
							新規登録
						</Anchor>
					)}
				</Col>
			</Row>
			<ListView {...props} />
		</>
	);
}
export type StoreViewProps<R = any | { [s: string]: any }> = FormProps<R> &
	PropsWithChildren & {
		id?: string;
		buttonChildren?: React.ReactNode;
	};
export function StoreView(props: StoreViewProps): JSX.Element {
	return (
		<FormWrapper onSubmit={props.onSubmit} success={props.success} setButtonDisabled={props.setButtonDisabled}>
			{props.children}
			<Button variant="primary" type="submit" disabled={props.ButtonDisabled}>
				{props.buttonChildren ? props.buttonChildren : props.id !== 'new' && props.id !== undefined ? '変更' : '登録'}
			</Button>
		</FormWrapper>
	);
}
export type ShowViewProps<R = any> = {
	Resource: R;
};
export type ShowParentViewProps = PropsWithChildren & {};
export function ShowView(props: ShowParentViewProps): JSX.Element {
	return <>{props.children}</>;
}
