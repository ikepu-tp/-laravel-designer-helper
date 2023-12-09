import { Model } from './model';

export default class FormSetting extends Model<FormSettingResource, FormSettingStoreResource> {
	protected path: string = '/v1/projects/{project}/forms/settings/{form_setting?}';
	protected resourceId_key: string = 'form_setting';
}
export type FormSettingResource = {
	id: number;
	name: string;
	type: string;
};
export type FormSettingStoreResource = {
	name: string;
	type: string;
};
export const FormSettingStoreInit: FormSettingStoreResource = {
	name: '',
	type: '',
};
