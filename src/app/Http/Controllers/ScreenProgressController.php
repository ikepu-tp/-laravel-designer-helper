<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\ScreenProgressRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Screen\ScreenProgressResource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen_progress;

class ScreenProgressController extends BaseController
{
    /** @var Screen_progress|Screen_progress[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(ScreenProgressRequest $screenProgressRequest, Project $project)
    {
        $this->model = $project->screenProgresses();
        return Resource::pagination($this->model, ScreenProgressResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ScreenProgressRequest $screenProgressRequest, Project $project)
    {
        $this->model = new Screen_progress();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($screenProgressRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new ScreenProgressResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(ScreenProgressRequest $screenProgressRequest, Project $project, Screen_progress $screen_progress)
    {
        $this->model = $screen_progress;
        return Resource::success(new ScreenProgressResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ScreenProgressRequest $screenProgressRequest, Project $project, Screen_progress $screen_progress)
    {
        $this->model = $screen_progress;
        $this->model->fill($screenProgressRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new ScreenProgressResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScreenProgressRequest $screenProgressRequest, Project $project, Screen_progress $screen_progress)
    {
        if (!$screen_progress->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}
