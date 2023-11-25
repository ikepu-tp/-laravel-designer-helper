import { PageWrapper as BasePageWrapper, BreadCrumbType, PageWrapperProps } from '@ikepu-tp/react-bootstrap-extender';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const site_title_element = document.getElementById('site_title') as HTMLMetaElement | null;
const SITE_TITLE: string = site_title_element ? site_title_element.content : 'JIDOU';
export default function PageWrapper({ ...props }: PageWrapperProps): JSX.Element {
	const navigate = useNavigate();

	function changeLink(link: string): void {
		navigate(link);
	}
	function onAnchorClick(e: MouseEvent<HTMLAnchorElement>): void {
		e.preventDefault();
		navigate(e.currentTarget.pathname);
	}
	function breadCrumbOnClick(e: MouseEvent<HTMLAnchorElement>, item: BreadCrumbType): void {
		e.preventDefault();
		navigate(item.link);
	}
	return (
		<BasePageWrapper
			{...props}
			breadCrumbOnClick={breadCrumbOnClick}
			onAnchorClick={onAnchorClick}
			changeLink={changeLink}
			siteTitle={SITE_TITLE}
			changeTitle
		/>
	);
}
