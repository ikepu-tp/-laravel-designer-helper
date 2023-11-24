<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\TableDetailRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Table\TableDetailResource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Table_detail;
use ikepu_tp\DesignerHelper\app\Models\Table_outline;

class TableDetailController extends BaseController
{
    /** @var Table_detail */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(TableDetailRequest $tableDetailRequest, Project $project, Table_outline $table_outline)
    {
        $this->model = $table_outline->tableDetails();
        return Resource::pagination($this->model, TableDetailResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TableDetailRequest $tableDetailRequest, Project $project, Table_outline $table_outline)
    {
        $this->model = new Table_detail();
        $this->model->fill([
            "table_outline_id" => $table_outline->id,
            "table_setting_id" => $tableDetailRequest->validated("table_setting.id"),
        ]);
        $this->model->fill($tableDetailRequest->safe()->except(["table_setting"]));
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new TableDetailResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(TableDetailRequest $tableDetailRequest, Project $project, Table_outline $table_outline, Table_detail $table_detail)
    {
        $this->model = $table_detail;
        return Resource::success(new TableDetailResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TableDetailRequest $tableDetailRequest, Project $project, Table_outline $table_outline, Table_detail $table_detail)
    {
        $this->model = $table_detail;
        $this->model->fill($tableDetailRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new TableDetailResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TableDetailRequest $tableDetailRequest, Project $project, Table_outline $table_outline, Table_detail $table_detail)
    {
        if (!$table_detail->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}