import { ParamType } from './Models/interfaces';

export const routes: { [s: string]: string } = {
	'project.index': '/',
	'project.store': '/project/{project}/edit',
	'project.show': '/project/{project}',
	'table_setting.index': '/project/{project}/table_setting',
	'table_setting.store': '/project/{project}/table_setting/{table_setting}/edit',
	'table_setting.show': '/project/{project}/table_setting/{table_setting}',
	'table_outline.index': '/project/{project}/table_outline',
	'table_outline.store': '/project/{project}/table_outline/{table_outline}/edit',
	'table_outline.show': '/project/{project}/table_outline/{table_outline}',
	'table_detail.store': '/project/{project}/table_outline/{table_outline}/table_detail/{table_detail}/edit',
	'table_detail.show': '/project/{project}/table_outline/{table_outline}/table_detail/{table_detail}',
	'function_category.index': '/project/{project}/function_category',
	'function_category.store': '/project/{project}/function_category/{function_category}/edit',
	'function_category.show': '/project/{project}/function_category/{function_category}',
	'function_class.index': '/project/{project}/function_class',
	'function_class.store': '/project/{project}/function_class/{function_class}/edit',
	'function_class.show': '/project/{project}/function_class/{function_class}',
	'function_progress.index': '/project/{project}/function_progress',
	'function_progress.store': '/project/{project}/function_progress/{function_progress}/edit',
	'function_progress.show': '/project/{project}/function_progress/{function_progress}',
	'function_user.index': '/project/{project}/function_user',
	'function_user.store': '/project/{project}/function_user/{function_user}/edit',
	'function_user.show': '/project/{project}/function_user/{function_user}',
	'function.index': '/project/{project}/function',
	'function.store': '/project/{project}/function/{function}/edit',
	'function.show': '/project/{project}/function/{function}',
	'screen.index': '/project/{project}/screen',
	'screen.store': '/project/{project}/screen/{screen}/edit',
	'screen.show': '/project/{project}/screen/{screen}',
	'screen_class.index': '/project/{project}/screen_class',
	'screen_class.store': '/project/{project}/screen_class/{screen_class}/edit',
	'screen_class.show': '/project/{project}/screen_class/{screen_class}',
	'screen_progress.index': '/project/{project}/screen_progress',
	'screen_progress.store': '/project/{project}/screen_progress/{screen_progress}/edit',
	'screen_progress.show': '/project/{project}/screen_progress/{screen_progress}',
};
export default function route(route_name: keyof typeof routes, parameters: ParamType = {}): string {
	if (!routes[route_name]) throw new Error('存在しないパスです');
	return createUrlWithConvertParameters(routes[route_name], parameters);
}

export function createUrlWithConvertParameters(url: string, param: ParamType): string {
	param = { ...{}, ...param };
	//パラメータ変換
	const url_params: string[] | null = url.match(/{[a-zA-Z_]+}/gi);
	if (url_params !== null)
		url_params.forEach((paramName: string) => {
			const paramKey: string = paramName.replace(/{|}/gi, '');
			if (!param[paramKey]) throw new Error('Invalid parameter: ' + paramKey);
			url = url.replace(paramName, `${param[paramKey]}`);
			delete param[paramKey];
		});
	//オプションパラメータ変換
	const url_params_opt: string[] | null = url.match(/{[a-zA-Z_]+[?]}/gi);
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
