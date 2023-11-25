import { ParamType } from './Models/interfaces';

export const routes: { [s: string]: string } = {
	'project.index': '/',
	'project.store': '/project/{project}/edit',
};
export default function route(
	route_name: keyof typeof routes,
	parameters: {
		[s: string]: string | number;
	} = {}
): string {
	if (!routes[route_name]) throw new Error('存在しないパスです');
	return createUrlWithConvertParameters(routes[route_name], parameters);
}

export function createUrlWithConvertParameters(url: string, param: { [s: string]: string | number }): string {
	param = { ...{}, ...param };
	//パラメータ変換
	const url_params: string[] | null = url.match(/{[a-zA-Z]+}/gi);
	if (url_params !== null)
		url_params.forEach((paramName: string) => {
			const paramKey: string = paramName.replace(/{|}/gi, '');
			if (!param[paramKey]) throw new Error('Invalid parameter');
			url = url.replace(paramName, `${param[paramKey]}`);
			delete param[paramKey];
		});
	//オプションパラメータ変換
	const url_params_opt: string[] | null = url.match(/{[a-zA-Z]+[?]}/gi);
	if (url_params_opt !== null)
		url_params_opt.forEach((paramName: string) => {
			const paramKey: string = paramName.replace(/[{|}|?]/gi, '');
			url = url.replace(paramName, param[paramKey] ? `${param[paramKey]}` : '');
			delete param[paramKey];
		});
	return createUrl(url, param);
}

export function createUrl(url: string, param: ParamType = {}): string {
	const splited_url: string[] = url.split('/');
	if (splited_url[splited_url.length - 1] === '') splited_url.splice(splited_url.length - 1, 1);
	url = splited_url.join('/');
	if (Object.keys(param).length) url = `${url}?${createQuery(param)}`;
	return url;
}

export function createQuery(param: ParamType): string {
	const queries: string[] = [];
	Object.keys(param).forEach(function (key) {
		queries.push(`${key}=${param[key]}`);
	});
	return queries.join('&');
}
