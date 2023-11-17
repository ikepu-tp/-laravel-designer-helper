<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\ProjectRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;

class ProjectController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(ProjectRequest $projectRequest)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $projectRequest)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProjectRequest $projectRequest, Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProjectRequest $projectRequest, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectRequest $projectRequest, Project $project)
    {
        //
    }
}