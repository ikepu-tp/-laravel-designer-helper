<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\ExceptionRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Exception\ExceptionResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Exception;
use ikepu_tp\DesignerHelper\app\Models\Project;

class ExceptionController extends BaseController
{
    /** @var Exception|Exception[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(ExceptionRequest $exceptionRequest, Project $project)
    {
        $this->model = $project->exceptions();
        return Resource::pagination($this->model, ExceptionResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ExceptionRequest $exceptionRequest, Project $project)
    {
        $this->model = new Exception();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($exceptionRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new ExceptionResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(ExceptionRequest $exceptionRequest, Project $project, Exception $exception)
    {
        $this->model = $exception;
        return Resource::success(new ExceptionResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExceptionRequest $exceptionRequest, Project $project, Exception $exception)
    {
        $this->model = $exception;
        $this->model->fill($exceptionRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new ExceptionResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ExceptionRequest $exceptionRequest, Project $project, Exception $exception)
    {
        if (!$exception->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}