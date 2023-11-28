import { Model } from './model';

export default class FunctionUser extends Model<FunctionUserResource, FunctionUserStoreResource> {
	protected path: string = '/v1/projects/{project}/functions/users/{function_user?}';
	protected resourceId_key: string = 'function_user';
}
export type FunctionUserResource = {
	id: number;
	name: string;
	note: string | null;
};
export type FunctionUserStoreResource = {
	name: string;
	note?: string;
};
export const FunctionUserStoreInit: FunctionUserStoreResource = {
	name: '',
	note: '',
};
