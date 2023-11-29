import { ScreenClassResource } from './ScreenClass';
import { ScreenProgressResource } from './ScreenProgress';
import { Model } from './model';

export default class Screen extends Model<ScreenResource, ScreenStoreResource> {
	protected path: string = '/v1/projects/{project}/screens/{screen?}';
	protected resourceId_key: string = 'screen';
}
export type ScreenResource = {
	id: number;
	name: string;
	screen_class: ScreenClassResource;
	screen_progress: ScreenProgressResource;
	note: string;
	url: string;
	route_name: string;
};
export type ScreenStoreResource = {
	name: string;
	screen_class: { id: number };
	screen_progress: { id: number };
	note?: string;
	url?: string;
	route_name?: string;
};
export const ScreenStoreInit: ScreenStoreResource = {
	name: '',
	screen_class: { id: 0 },
	screen_progress: { id: 0 },
};
