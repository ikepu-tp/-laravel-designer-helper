// 関数引数
export type ApiBaseType = {
	url: string;
	headers?: object;
};
export type ApiType = ApiBaseType & {
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	body?: BodyInit;
};
export type ApiGetType = ApiBaseType & {};
export type ApiPostType = ApiBaseType & {
	body?: BodyInit;
};
// レスポンスステータス
export type ResponseStatusType = {
	result: boolean;
	nonce: string;
	code: number;
};
//エラーレスポンス
export type ResponseErrorType = {
	abstract: string;
	title: string;
	code: number;
	message: string[];
};
//ページネーションメタ
export type ResponseMetaType = {
	currentPage: number;
	lastPage: number;
	length: number;
	getLength: number;
	per: number;
};
export type ResponseIndexType<T = object> = {
	meta: ResponseMetaType;
	items: T[];
};
// レスポンス
export type ResponseType<T = object> = {
	status: ResponseStatusType;
	payloads?: T;
	error?: ResponseErrorType;
};

export type ParamType = {
	[s: string]: string | number | undefined;
};
export type ParamIndexType = ParamType & {
	per?: number;
	page?: number;
	order?: 'asc' | 'desc';
};
