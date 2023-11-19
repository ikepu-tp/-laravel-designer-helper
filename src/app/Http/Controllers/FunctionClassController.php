<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionClassRequest;
use ikepu_tp\DesignerHelper\app\Models\Func_class;

class FunctionClassController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(FunctionClassRequest $functionClassRequest)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionClassRequest $functionClassRequest)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionClassRequest $functionClassRequest, Func_class $func_class)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionClassRequest $functionClassRequest, Func_class $func_class)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionClassRequest $functionClassRequest, Func_class $func_class)
    {
        //
    }
}