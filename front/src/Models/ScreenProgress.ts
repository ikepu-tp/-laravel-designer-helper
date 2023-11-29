import { Model } from './model';

export default class ScreenProgress extends Model<ScreenProgressResource, ScreenProgressStoreResource> {
	protected path: string = '/v1/projects/{project}/screens/progresses/{screen_progress?}';
	protected resourceId_key: string = 'screen_progress';
}
export type ScreenProgressResource = {
	id: number;
	name: string;
	note: string;
};
export type ScreenProgressStoreResource = {
	name: string;
	note?: string;
};
export const ScreenProgressStoreInit: ScreenProgressStoreResource = {
	name: '',
};
