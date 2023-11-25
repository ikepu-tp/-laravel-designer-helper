<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionProgressRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Func\FunctionProgressResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Func_progress;

class FunctionProgressController extends BaseController
{
    /** @var Func_progress|Func_progress[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FunctionProgressRequest $functionProgressRequest, Project $project)
    {
        $this->model = $project->funcProgresses();
        return Resource::pagination($this->model, FunctionProgressResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionProgressRequest $functionProgressRequest, Project $project)
    {
        $this->model = new Func_progress();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($functionProgressRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FunctionProgressResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionProgressRequest $functionProgressRequest, Project $project, Func_progress $func_progress)
    {
        $this->model = $func_progress;
        return Resource::success(new FunctionProgressResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionProgressRequest $functionProgressRequest, Project $project, Func_progress $func_progress)
    {
        $this->model = $func_progress;
        $this->model->fill($functionProgressRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FunctionProgressResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionProgressRequest $functionProgressRequest, Project $project, Func_progress $func_progress)
    {
        if (!$func_progress->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}