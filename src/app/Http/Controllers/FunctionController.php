<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Func\FunctionResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Functions;

class FunctionController extends BaseController
{
    /** @var Functions|Functions[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FunctionRequest $functionRequest, Project $project)
    {
        $this->model = $project->functions();
        return Resource::pagination($this->model, FunctionResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionRequest $functionRequest, Project $project)
    {
        $this->model = new Functions();
        $this->model->fill(
            [
                "project_id" => $project->id,
                "func_category_id" => $functionRequest->validated("function_category.id"),
                "func_user_id" => $functionRequest->validated("function_user.id"),
                "func_class_id" => $functionRequest->validated("function_class.id"),
                "func_progress_id" => $functionRequest->validated("function_progress.id"),
            ]
        );
        $this->model->fill($functionRequest->safe()->except(["function_category", "function_user", "function_class", "function_progress"]));
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FunctionResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionRequest $functionRequest, Project $project, Functions $functions)
    {
        $this->model = $functions;
        return Resource::success(new FunctionResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionRequest $functionRequest, Project $project, Functions $functions)
    {
        $this->model = $functions;
        $this->model->fill(
            [
                "func_category_id" => $functionRequest->validated("function_category.id"),
                "func_user_id" => $functionRequest->validated("function_user.id"),
                "func_class_id" => $functionRequest->validated("function_class.id"),
                "func_progress_id" => $functionRequest->validated("function_progress.id"),
            ]
        );
        $this->model->fill($functionRequest->safe()->except(["function_category", "function_user", "function_class", "function_progress"]));
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FunctionResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionRequest $functionRequest, Project $project, Functions $functions)
    {
        if (!$functions->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}