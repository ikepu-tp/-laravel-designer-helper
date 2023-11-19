<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionUserRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Func_user;

class FunctionUserController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(FunctionUserRequest $functionUserRequest)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionUserRequest $functionUserRequest)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionUserRequest $functionUserRequest, Project $project, Func_user $func_user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionUserRequest $functionUserRequest, Project $project, Func_user $func_user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionUserRequest $functionUserRequest, Project $project, Func_user $func_user)
    {
        //
    }
}
