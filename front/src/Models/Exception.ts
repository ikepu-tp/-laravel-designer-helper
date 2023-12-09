import { Model } from './model';

export default class Exception extends Model<ExceptionResource, ExceptionStoreResource> {
	protected path: string = '/v1/projects/{project}/exceptions/{exception?}';
	protected resourceId_key: string = 'exception';
}
export type ExceptionResource = {
	id: number;
	name: string;
	http_code: string;
	error_code: string;
	abstract: string;
	title: string;
	default_message: string | null;
	note: string | null;
};
export type ExceptionStoreResource = {
	name: string;
	http_code: string;
	error_code: string;
	abstract: string;
	title: string;
	default_message?: string;
	note?: string;
};
export const ExceptionStoreInit: ExceptionStoreResource = {
	name: '',
	http_code: '',
	error_code: '',
	abstract: '',
	title: '',
};
