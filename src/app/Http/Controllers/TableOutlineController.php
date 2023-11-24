<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\TableOutlineRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Table\TableOutlineResource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Table_outline;

class TableOutlineController extends BaseController
{
    /** @var Table_outline */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(TableOutlineRequest $tableOutlineRequest, Project $project)
    {
        $this->model = $project->tableOutlines();
        return Resource::pagination($this->model, TableOutlineResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TableOutlineRequest $tableOutlineRequest, Project $project)
    {
        $this->model = new Table_outline();
        $this->model->fill(
            ["project_id" => $project->id]
        );
        $this->model->fill($tableOutlineRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new TableOutlineResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(TableOutlineRequest $tableOutlineRequest, Project $project, Table_outline $table_outline)
    {
        $this->model = $table_outline;
        return Resource::success(new TableOutlineResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TableOutlineRequest $tableOutlineRequest, Project $project, Table_outline $table_outline)
    {
        $this->model = $table_outline;
        $this->model->fill($tableOutlineRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new TableOutlineResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TableOutlineRequest $tableOutlineRequest, Project $project, Table_outline $table_outline)
    {
        if (!$table_outline->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}