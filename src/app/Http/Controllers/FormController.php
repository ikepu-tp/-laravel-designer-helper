<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FormRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Form\FormResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Exception;
use ikepu_tp\DesignerHelper\app\Models\Form;
use ikepu_tp\DesignerHelper\app\Models\Project;

class FormController extends BaseController
{
    /** @var Form|Form[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FormRequest $formRequest, Project $project)
    {
        $this->model = $project->screens();
        return Resource::pagination($this->model, FormResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormRequest $formRequest, Project $project)
    {
        $this->model = new Exception();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($formRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FormResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FormRequest $formRequest, Project $project, Form $form)
    {
        $this->model = $form;
        return Resource::success(new FormResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormRequest $formRequest, Project $project, Form $form)
    {
        $this->model = $form;
        $this->model->fill($formRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FormResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FormRequest $formRequest, Project $project, Form $form)
    {
        if (!$form->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}