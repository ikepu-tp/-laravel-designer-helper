import { Model } from './model';

export default class TableOutline extends Model<TableOutlineResource, TableOutlineStoreResource> {
	protected path: string = '/v1/projects/{project}/tables/outlines/{table_outline?}';
	protected resourceId_key: string = 'table_outline';
}
export type TableOutlineResource = {
	id: number;
	name: string;
	note: string;
	timestamps: boolean;
	soft_delete: boolean;
};
export type TableOutlineStoreResource = {
	name: string;
	note?: string;
	timestamps: boolean;
	soft_delete: boolean;
};
export const TableOutlineStoreInit: TableOutlineStoreResource = {
	name: '',
	note: '',
	timestamps: true,
	soft_delete: true,
};
