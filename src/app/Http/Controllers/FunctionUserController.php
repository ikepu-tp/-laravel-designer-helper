<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FunctionUserRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Func\FunctionUserResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Func_user;

class FunctionUserController extends BaseController
{
    /** @var Func_user|Func_user[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FunctionUserRequest $functionUserRequest, Project $project)
    {
        $this->model = $project->funcUsers();
        return Resource::pagination($this->model, FunctionUserResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FunctionUserRequest $functionUserRequest, Project $project)
    {
        $this->model = new Func_user();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($functionUserRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FunctionUserResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FunctionUserRequest $functionUserRequest, Project $project, Func_user $func_user)
    {
        $this->model = $func_user;
        return Resource::success(new FunctionUserResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FunctionUserRequest $functionUserRequest, Project $project, Func_user $func_user)
    {
        $this->model = $func_user;
        $this->model->fill($functionUserRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FunctionUserResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunctionUserRequest $functionUserRequest, Project $project, Func_user $func_user)
    {
        if (!$func_user->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}
