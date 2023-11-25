import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProjectIndexController } from "./ProjectController";

export default function Router():React.ReactElement{
    return <BrowserRouter>
    <Routes>
        <Route index element={<ProjectIndexController />} />
    </Routes>
    </BrowserRouter>
}
