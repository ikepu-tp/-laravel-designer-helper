import { ReactElement } from 'react';

export default function TextWrapper({
	children,
	style,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): ReactElement {
	return (
		<div {...props} style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', ...style }}>
			{children}
		</div>
	);
}
