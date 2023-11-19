<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\TableDetailRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Table_detail;

class TableDetailController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(TableDetailRequest $tableDetailRequest)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TableDetailRequest $tableDetailRequest)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TableDetailRequest $tableDetailRequest, Project $project, Table_detail $table_detail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TableDetailRequest $tableDetailRequest, Project $project, Table_detail $table_detail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TableDetailRequest $tableDetailRequest, Project $project, Table_detail $table_detail)
    {
        //
    }
}