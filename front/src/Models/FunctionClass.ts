import { Model } from './model';

export default class FunctionClass extends Model<FunctionClassResource, FunctionClassStoreResource> {
	protected path: string = '/v1/projects/{project}/functions/classes/{function_class?}';
	protected resourceId_key: string = 'function_class';
}
export type FunctionClassResource = {
	id: number;
	name: string;
	note: string | null;
};
export type FunctionClassStoreResource = {
	name: string;
	note?: string;
};
export const FunctionClassStoreInit: FunctionClassStoreResource = {
	name: '',
	note: '',
};
