import { ScreenResource } from './Screen';
import { Model } from './model';

export default class Form extends Model<FormResource, FormStoreResource> {
	protected path: string = '/v1/projects/{project}/forms/{form?}';
	protected resourceId_key: string = 'form';
}
export type FormResource = {
	id: number;
	name: string;
	screens: ScreenResource[];
	note: string | null;
};
export type FormStoreResource = {
	name: string;
	screens: {
		id: number;
	}[];
	note?: string;
};
export const FormStoreInit: FormStoreResource = {
	name: '',
	screens: [],
};
