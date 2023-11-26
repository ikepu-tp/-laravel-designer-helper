import { ParamType } from './Models/interfaces';

export const routes: { [s: string]: string } = {
	'project.index': '/',
	'project.store': '/project/{project}/edit',
	'project.show': '/project/{project}',
	'table-setting.index': '/project/{project}/table-setting',
	'table-setting.store': '/project/{project}/table-setting/{table_setting}/edit',
	'table-setting.show': '/project/{project}/table-setting/{table_setting}',
	'table-outline.index': '/project/{project}/table-outline',
	'table-outline.store': '/project/{project}/table-outline/{table_outline}/edit',
	'table-outline.show': '/project/{project}/table-outline/{table_outline}',
	'table-detail.index': '/project/{project}/table-outline/{table-outline}/table-detail',
	'table-detail.store': '/project/{project}/table-outline/{table-outline}/table-detail/{table_detail}/edit',
	'table-detail.show': '/project/{project}/table-outline/{table-outline}/table-detail/{table_detail}',
	'function-category.index': '/project/{project}/function-category',
	'function-category.store': '/project/{project}/function-category/{function_category}/edit',
	'function-category.show': '/project/{project}/function-category/{function_category}',
	'function-class.index': '/project/{project}/function-class',
	'function-class.store': '/project/{project}/function-class/{function_class}/edit',
	'function-class.show': '/project/{project}/function-class/{function_class}',
	'function-progress.index': '/project/{project}/function-progress',
	'function-progress.store': '/project/{project}/function-progress/{function_progress}/edit',
	'function-progress.show': '/project/{project}/function-progress/{function_progress}',
	'function-user.index': '/project/{project}/function-user',
	'function-user.store': '/project/{project}/function-user/{function_user}/edit',
	'function-user.show': '/project/{project}/function-user/{function_user}',
	'function.index': '/project/{project}/function',
	'function.store': '/project/{project}/function/{function}/edit',
	'function.show': '/project/{project}/function/{function}',
	'screen.index': '/project/{project}/screen',
	'screen.store': '/project/{project}/screen/{screen}/edit',
	'screen.show': '/project/{project}/screen/{screen}',
	'screen-class.index': '/project/{project}/screen-class',
	'screen-class.store': '/project/{project}/screen-class/{screen_class}/edit',
	'screen-class.show': '/project/{project}/screen-class/{screen_class}',
	'screen-progress.index': '/project/{project}/screen-progress',
	'screen-progress.store': '/project/{project}/screen-progress/{screen_progress}/edit',
	'screen-progress.show': '/project/{project}/screen-progress/{screen_progress}',
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
	if (url.indexOf('/') === -1) url = `/${url}`;
	return `${url}`;
}

export function createQuery(param: ParamType): string {
	const queries: string[] = [];
	Object.keys(param).forEach(function (key) {
		queries.push(`${key}=${param[key]}`);
	});
	return queries.join('&');
}
