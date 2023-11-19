<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\TableSettingRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Table_setting;

class TableSettingController extends BaseController
{
    /** @var Table_setting */
    public $model;
    /**
     * Display a listing of the resource.
     */
    public function index(TableSettingRequest $tableSettingRequest, Project $project)
    {
        //$this->model=$project->
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TableSettingRequest $tableSetting, Project $project)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TableSettingRequest $tableSettingRequest, Project $project, Table_setting $table_setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TableSettingRequest $tableSettingRequest, Project $project, Table_setting $table_setting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TableSettingRequest $tableSettingRequest, Project $project, Table_setting $table_setting)
    {
        //
    }
}