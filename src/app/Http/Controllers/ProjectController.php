<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\ProjectRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\ProjectResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Project;

class ProjectController extends BaseController
{
    /** @var Project */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(ProjectRequest $projectRequest)
    {
        $this->model = Project::query();
        return Resource::pagination($this->model, ProjectResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $projectRequest)
    {
        $this->model = new Project();
        $this->model->fill($projectRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new ProjectResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(ProjectRequest $projectRequest, Project $project)
    {
        $this->model = $project;
        return Resource::success(new ProjectResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProjectRequest $projectRequest, Project $project)
    {
        $this->model = $project;
        $this->model->fill($projectRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new ProjectResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectRequest $projectRequest, Project $project)
    {
        if (!$project->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}
