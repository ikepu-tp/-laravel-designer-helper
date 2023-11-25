<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionCategoryRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Func\FunctionCategoryResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Func_category;

class FunctionCategoryController extends BaseController
{
    /** @var Func_category[]|Func_category */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FunctionCategoryRequest $functionCategoryRequest, Project $project)
    {
        $this->model = $project->funcCategories();
        return Resource::pagination($this->model, FunctionCategoryResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionCategoryRequest $functionCategoryRequest, Project $project)
    {
        $this->model = new Func_category();
        $this->model->fill(["project_id" => $project->id]);
        $this->model->fill($functionCategoryRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FunctionCategoryResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionCategoryRequest $functionCategoryRequest, Project $project, Func_category $func_category)
    {
        $this->model = $func_category;
        return Resource::success(new FunctionCategoryResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionCategoryRequest $functionCategoryRequest, Project $project, Func_category $func_category)
    {
        $this->model = $func_category;
        $this->model->fill($functionCategoryRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FunctionCategoryResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionCategoryRequest $functionCategoryRequest, Project $project, Func_category $func_category)
    {
        if (!$func_category->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}