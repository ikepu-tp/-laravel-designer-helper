<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionProgressRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Func_progress;

class FunctionProgressController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(FunctionProgressRequest $functionProgressRequest, Project $project)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionProgressRequest $functionProgressRequest, Project $project)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionProgressRequest $functionProgressRequest, Project $project, Func_progress $func_progress)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionProgressRequest $functionProgressRequest, Project $project, Func_progress $func_progress)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionProgressRequest $functionProgressRequest, Project $project, Func_progress $func_progress)
    {
        //
    }
}
