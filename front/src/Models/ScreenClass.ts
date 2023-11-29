import { Model } from './model';

export default class ScreenClass extends Model<ScreenClassResource, ScreenClassStoreResource> {
	protected path: string = '/v1/projects/{project}/screens/classes/{screen_class?}';
	protected resourceId_key: string = 'screen_class';
}
export type ScreenClassResource = {
	id: number;
	name: string;
	note: string;
};
export type ScreenClassStoreResource = {
	name: string;
	note?: string;
};
export const ScreenClassStoreInit: ScreenClassStoreResource = {
	name: '',
};
