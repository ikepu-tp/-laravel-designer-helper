<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\TableSettingRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Table\TableSettingResource;
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
        $this->model = $project->table_settings();
        return Resource::pagination($this->model, TableSettingResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TableSettingRequest $tableSettingRequest, Project $project)
    {
        $this->model = new Table_setting();
        $this->model->project_id = $project->id;
        $this->model->fill($tableSettingRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new TableSettingResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(TableSettingRequest $tableSettingRequest, Project $project, Table_setting $table_setting)
    {
        $this->model = $table_setting;
        return Resource::success(new TableSettingResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TableSettingRequest $tableSettingRequest, Project $project, Table_setting $table_setting)
    {
        $this->model = $table_setting;
        $this->model->fill($tableSettingRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new TableSettingResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TableSettingRequest $tableSettingRequest, Project $project, Table_setting $table_setting)
    {
        if (!$table_setting->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}