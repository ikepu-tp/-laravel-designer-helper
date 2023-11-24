<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\ScreenRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Screen\ScreenResource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen;

class ScreenController extends BaseController
{
    /** @var Screen|Screen[] */
    public $model;
    /**
     * Display a listing of the resource.
     */
    public function index(ScreenRequest $screenRequest, Project $project)
    {
        $this->model = $project->screens();
        return Resource::pagination($this->model, ScreenResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ScreenRequest $screenRequest, Project $project)
    {
        $this->model = new Screen();
        $this->model->fill(
            [
                "project_id" => $project->id,
                "screen_class_id" => $screenRequest->validated("screen_class.id"),
                "screen_progress_id" => $screenRequest->validated("screen_progress.id"),
            ]
        );
        $this->model->fill($screenRequest->safe()->except(["screen_class", "screen_progress"]));
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new ScreenResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(ScreenRequest $screenRequest, Project $project, Screen $screen)
    {
        $this->model = $screen;
        return Resource::success(new ScreenResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ScreenRequest $screenRequest, Project $project, Screen $screen)
    {
        $this->model = $screen;
        $this->model->fill(
            [
                "screen_class_id" => $screenRequest->validated("screen_class.id"),
                "screen_progress_id" => $screenRequest->validated("screen_progress.id"),
            ]
        );
        $this->model->fill($screenRequest->safe()->except(["screen_class", "screen_progress"]));
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new ScreenResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScreenRequest $screenRequest, Project $project, Screen $screen)
    {
        if (!$screen->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}