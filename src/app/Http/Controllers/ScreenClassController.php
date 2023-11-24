<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\ScreenClassRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Screen\ScreenClassResource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen_class;

class ScreenClassController extends BaseController
{
    /** @var Screen_class|Screen_class[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(ScreenClassRequest $screenClassRequest, Project $project)
    {
        $this->model = $project->screenClasses();
        return Resource::pagination($this->model, ScreenClassResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ScreenClassRequest $screenClassRequest, Project $project)
    {
        $this->model = new Screen_class();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($screenClassRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new ScreenClassResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(ScreenClassRequest $screenClassRequest, Project $project, Screen_class $screen_class)
    {
        $this->model = $screen_class;
        return Resource::success(new ScreenClassResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ScreenClassRequest $screenClassRequest, Project $project, Screen_class $screen_class)
    {
        $this->model = $screen_class;
        $this->model->fill($screenClassRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new ScreenClassResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScreenClassRequest $screenClassRequest, Project $project, Screen_class $screen_class)
    {
        if (!$screen_class->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}
