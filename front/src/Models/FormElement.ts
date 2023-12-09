import { FormSettingResource } from './FormSetting';
import { Model } from './model';

export default class FormElement extends Model<FormElementResource, FormElementStoreResource> {
	protected path: string = '/v1/projects/{project}/forms/{form}/elements/{form_element?}';
	protected resourceId_key: string = 'form_element';
}
export type FormElementAttributesResource = {
	id: number;
	placeholder: string | null;
	default_value: string | null;
	attr_required: boolean;
	attr_min: string | null;
	attr_max: string | null;
};
export type FormElementAttributesStoreResource = {
	placeholder?: string;
	default_value?: string;
	attr_required?: boolean;
	attr_min?: string;
	attr_max?: string;
};
export type FormElementResource = {
	id: number;
	label: string;
	name: string;
	type: FormSettingResource;
	note: string | null;
	attributes: FormElementAttributesResource;
};
export type FormElementStoreResource = {
	label: string;
	name: string;
	type: { id: number };
	note?: string;
	attributes?: FormElementAttributesStoreResource;
};
export const FormElementStoreInit: FormElementStoreResource = {
	label: '',
	name: '',
	type: { id: 0 },
	attributes: {},
};
