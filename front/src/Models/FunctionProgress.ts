import { Model } from './model';

export default class FunctionProgress extends Model<FunctionProgressResource, FunctionProgressStoreResource> {
	protected path: string = '/v1/projects/{project}/functions/progresses/{function_progress?}';
	protected resourceId_key: string = 'function_progress';
}
export type FunctionProgressResource = {
	id: number;
	name: string;
	note: string | null;
};
export type FunctionProgressStoreResource = {
	name: string;
	note?: string;
};
export const FunctionProgressStoreInit: FunctionProgressStoreResource = {
	name: '',
	note: '',
};
