<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\TableOutlineRequest;
use ikepu_tp\DesignerHelper\app\Models\Table_outline;

class TableOutlineController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(TableOutlineRequest $tableOutlineRequest)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TableOutlineRequest $tableOutlineRequest)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TableOutlineRequest $tableOutlineRequest, Table_outline $table_outline)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TableOutlineRequest $tableOutlineRequest, Table_outline $table_outline)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TableOutlineRequest $tableOutlineRequest, Table_outline $table_outline)
    {
        //
    }
}