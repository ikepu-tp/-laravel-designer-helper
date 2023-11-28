import { Model } from './model';

export default class FunctionCategory extends Model<FunctionCategoryResource, FunctionCategoryStoreResource> {
	protected path: string = '/v1/projects/{project}/functions/categories/{function_category?}';
	protected resourceId_key: string = 'function_category';
}
export type FunctionCategoryResource = {
	id: number;
	deps: number;
	name: string;
	cat_id: number | null;
	note: string | null;
};
export type FunctionCategoryStoreResource = {
	deps: number;
	name: string;
	cat_id?: number;
	note?: string;
};
export const FunctionCategoryStoreInit: FunctionCategoryStoreResource = {
	deps: 0,
	name: '',
	cat_id: undefined,
	note: '',
};
