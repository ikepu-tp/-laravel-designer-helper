import { Model } from './model';

export default class Project extends Model<ProjectResource, ProjectStoreResource> {
	protected path: string = '/v1/projects';
}
export type ProjectResource = {
	id: number;
	name: string;
	sub_name?: string | null;
	note?: string | null;
};
export type ProjectStoreResource = {
	name: string;
	sub_name?: string | null;
	note?: string | null;
};
