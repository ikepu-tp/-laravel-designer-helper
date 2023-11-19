<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionCategoryRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Func_category;

class FunctionCategoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(FunctionCategoryRequest $functionCategoryRequest)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionCategoryRequest $functionCategoryRequest)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionCategoryRequest $functionCategoryRequest, Project $project, Func_category $func_category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionCategoryRequest $functionCategoryRequest, Project $project, Func_category $func_category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionCategoryRequest $functionCategoryRequest, Project $project, Func_category $func_category)
    {
        //
    }
}
