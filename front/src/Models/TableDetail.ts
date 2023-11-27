import { TableSettingResource } from './TableSetting';
import { Model } from './model';

export default class TableDetail extends Model<TableDetailResource, TableDetailStoreResource> {
	protected path: string = '/v1/projects/{project}/tables/{table_outline}/details/{table_detail?}';
	protected resourceId_key: string = 'table_detail';
}
export type TableDetailResource = {
	id: number;
	name: string;
	col_name: string;
	table_setting: TableSettingResource;
	col_digits: number;
	col_nullable: boolean;
	col_default: string;
	col_unique: boolean;
	col_primary: boolean;
	col_index: boolean;
	note: string;
};
export type TableDetailStoreResource = {
	name: string;
	col_name: string;
	table_setting: { id: number };
	col_digits?: number;
	col_nullable: boolean;
	col_default?: string;
	col_unique: boolean;
	col_primary: boolean;
	col_index: boolean;
	note?: string;
};
export const TableDetailStoreInit: TableDetailStoreResource = {
	name: '',
	col_name: '',
	table_setting: { id: 0 },
	col_nullable: false,
	col_unique: false,
	col_primary: false,
	col_index: false,
	note: '',
};
