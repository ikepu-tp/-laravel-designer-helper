<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FormElementRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Form\FormElementResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Exception;
use ikepu_tp\DesignerHelper\app\Models\Form;
use ikepu_tp\DesignerHelper\app\Models\Form_element;
use ikepu_tp\DesignerHelper\app\Models\Project;

class FormElementController extends BaseController
{
    /** @var Exception|Exception[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FormElementRequest $formElementRequest, Project $project)
    {
        $this->model = $project->screens();
        return Resource::pagination($this->model, FormElementResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormElementRequest $formElementRequest, Project $project)
    {
        $this->model = new Exception();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($formElementRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FormElementResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FormElementRequest $formElementRequest, Project $project, Form $form, Form_element $form_element)
    {
        $this->model = $form;
        return Resource::success(new FormElementResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormElementRequest $formElementRequest, Project $project, Form $form, Form_element $form_element)
    {
        $this->model = $form_element;
        $this->model->fill($formElementRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FormElementResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FormElementRequest $formElementRequest, Project $project, Form $form, Form_element $form_element)
    {
        if (!$form_element->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}