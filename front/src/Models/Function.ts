import { FunctionCategoryResource } from './FunctionCategory';
import { FunctionClassResource } from './FunctionClass';
import { FunctionProgressResource } from './FunctionProgress';
import { FunctionUserResource } from './FunctionUser';
import { Model } from './model';

export default class Function extends Model<FunctionResource, FunctionStoreResource> {
	protected path: string = '/v1/projects/{project}/functions/{function?}';
	protected resourceId_key: string = 'function';
}
export type FunctionResource = {
	id: number;
	name: string;
	function_category: FunctionCategoryResource;
	function_class: FunctionClassResource;
	function_user: FunctionUserResource;
	function_progress: FunctionProgressResource;
	outline: string | null;
};
export type FunctionStoreResource = {
	name: string;
	function_category: { id: number };
	function_class: { id: number };
	function_user: { id: number };
	function_progress: { id: number };
	outline?: string;
};
export const FunctionStoreInit: FunctionStoreResource = {
	name: '',
	function_category: { id: 0 },
	function_class: { id: 0 },
	function_user: { id: 0 },
	function_progress: { id: 0 },
	outline: undefined,
};
