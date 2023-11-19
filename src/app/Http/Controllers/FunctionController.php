<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Functions;

class FunctionController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(FunctionRequest $functionRequest, Project $project)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionRequest $functionRequest, Project $project)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionRequest $functionRequest, Project $project, Functions $functions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionRequest $functionRequest, Project $project, Functions $functions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionRequest $functionRequest, Project $project, Functions $functions)
    {
        //
    }
}
