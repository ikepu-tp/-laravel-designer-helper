import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectIndexController, ProjectShowController, ProjectStoreController } from './ProjectController';
import {
	TableSettingIndexController,
	TableSettingShowController,
	TableSettingStoreController,
} from './tables/TableSettingController';
import {
	TableOutlineIndexController,
	TableOutlineShowController,
	TableOutlineStoreController,
} from './tables/TableOutlineController';
import { TableDetailShowController, TableDetailStoreController } from './tables/TableDetailController';
import {
	FunctionCategoryIndexController,
	FunctionCategoryShowController,
	FunctionCategoryStoreController,
} from './function/FunctionCategoryController';

export default function Router(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<ProjectIndexController />} />
				<Route path="project/:project">
					<Route index element={<ProjectShowController />} />
					<Route path="edit" element={<ProjectStoreController />} />
					<Route path="table_setting">
						<Route index element={<TableSettingIndexController />} />
						<Route path=":table_setting">
							<Route index element={<TableSettingShowController />} />
							<Route path="edit" element={<TableSettingStoreController />} />
						</Route>
					</Route>
					<Route path="table_outline">
						<Route index element={<TableOutlineIndexController />} />
						<Route path=":table_outline">
							<Route index element={<TableOutlineShowController />} />
							<Route path="edit" element={<TableOutlineStoreController />} />
							<Route path="table_detail">
								<Route path=":table_detail">
									<Route index element={<TableDetailShowController />} />
									<Route path="edit" element={<TableDetailStoreController />} />
								</Route>
							</Route>
						</Route>
					</Route>

					<Route path="function_category">
						<Route index element={<FunctionCategoryIndexController />} />
						<Route path=":function_category">
							<Route index element={<FunctionCategoryShowController />} />
							<Route path="edit" element={<FunctionCategoryStoreController />} />
						</Route>
					</Route>
					<Route path="function_class">
						<Route index element />
						<Route path=":function_class">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="function_progress">
						<Route index element />
						<Route path=":function_progress">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="function_user">
						<Route index element />
						<Route path=":function_user">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="function">
						<Route index element />
						<Route path=":function">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="screen">
						<Route index element />
						<Route path=":screen">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="screen_class">
						<Route index element />
						<Route path=":screen_class">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="screen_progress">
						<Route index element />
						<Route path=":screen_progress">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}
function Error(): ReactElement {
	return (
		<>
			<h1>Not Found</h1>
		</>
	);
}
