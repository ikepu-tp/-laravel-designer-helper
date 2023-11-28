<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionClassRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Func\FunctionClassResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Func_class;

class FunctionClassController extends BaseController
{
    /** @var Func_class */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FunctionClassRequest $functionClassRequest, Project $project)
    {
        $this->model = $project->funcClasses();
        return Resource::pagination($this->model, FunctionClassResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionClassRequest $functionClassRequest, Project $project)
    {
        $this->model = new Func_class();
        $this->model->fill(["project_id" => $project->id]);
        $this->model->fill($functionClassRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FunctionClassResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionClassRequest $functionClassRequest, Project $project, Func_class $func_class)
    {
        $this->model = $func_class;
        return Resource::success(new FunctionClassResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionClassRequest $functionClassRequest, Project $project, Func_class $func_class)
    {
        $this->model = $func_class;
        $this->model->fill(["project_id" => $project->id]);
        $this->model->fill($functionClassRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FunctionClassResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionClassRequest $functionClassRequest, Project $project, Func_class $func_class)
    {
        if (!$func_class->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}
