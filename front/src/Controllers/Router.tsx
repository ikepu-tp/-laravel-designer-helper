import React from 'react';
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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
