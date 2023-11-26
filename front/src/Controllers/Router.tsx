import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectIndexController, ProjectShowController, ProjectStoreController } from './ProjectController';

export default function Router(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<ProjectIndexController />} />
				<Route path="project/:project">
					<Route index element={<ProjectShowController />} />
					<Route path="edit" element={<ProjectStoreController />} />
					<Route path="table-setting">
						<Route index element />
						<Route path=":table_setting">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="table-outline">
						<Route index element />
						<Route path=":table_outline">
							<Route index element />
							<Route path="edit" element />
							<Route path="table-detail">
								<Route index element />
								<Route path=":table_detail">
									<Route index element />
									<Route path="edit" element />
								</Route>
							</Route>
						</Route>
					</Route>

					<Route path="function-category">
						<Route index element />
						<Route path=":function-category">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="function-class">
						<Route index element />
						<Route path=":function-class">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="function-progress">
						<Route index element />
						<Route path=":function-progress">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="function-user">
						<Route index element />
						<Route path=":function-user">
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
					<Route path="screen-class">
						<Route index element />
						<Route path=":screen-class">
							<Route index element />
							<Route path="edit" element />
						</Route>
					</Route>
					<Route path="screen-progress">
						<Route index element />
						<Route path=":screen-progress">
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
