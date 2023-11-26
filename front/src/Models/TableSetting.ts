import { Model } from './model';

export default class TableSetting extends Model<TableSettingResource, TableSettingStoreResource> {
	protected path: string = '/v1/projects/{project}/tables/settings/{table_setting?}';
	protected resourceId_key: string = 'table_setting';
}
export type TableSettingResource = {
	id: number;
	model_cast: string;
	db_type: string;
	php_type: string;
};
export type TableSettingStoreResource = {
	model_cast: string;
	db_type: string;
	php_type: string;
};
export const TableSettingStoreInit: TableSettingStoreResource = {
	model_cast: 'string',
	db_type: 'string',
	php_type: 'string',
};
