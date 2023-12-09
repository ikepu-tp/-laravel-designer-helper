<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FormElementRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Form\FormElementResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Form;
use ikepu_tp\DesignerHelper\app\Models\Form_element;
use ikepu_tp\DesignerHelper\app\Models\Form_element_attr;
use ikepu_tp\DesignerHelper\app\Models\Project;

class FormElementController extends BaseController
{
    /** @var Form_element|Form_element[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FormElementRequest $formElementRequest, Project $project, Form $form)
    {
        $this->model = $form->formElements();
        return Resource::pagination($this->model, FormElementResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormElementRequest $formElementRequest, Project $project, Form $form)
    {
        $this->model = new Form_element();
        $this->model->fill(
            [
                "form_id" => $form->id,
                "form_setting_id" => $formElementRequest->validated("type.id"),
            ]
        );
        $this->model->fill($formElementRequest->safe()->except(["type", "attributes"]));
        if (!$this->model->save()) throw new SaveFailedException();
        $attrs = new Form_element_attr();
        $attrs->fill(
            [
                "form_element_id" => $this->model->id,
            ]
        );
        $attrs->fill($formElementRequest->validated("attributes"));
        if (!$attrs->save()) throw new SaveFailedException();
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
        $this->model->fill(
            [
                "form_setting_id" => $formElementRequest->validated("type.id"),
            ]
        );
        $this->model->fill($formElementRequest->safe()->except(["type", "attributes"]));
        if (!$this->model->save()) throw new SaveFailedException();
        $attrs = $this->model->formElementAttrs ?: new Form_element_attr(["form_element_id" => $this->model->id,]);
        $attrs->fill($formElementRequest->validated("attributes"));
        if (!$attrs->save()) throw new SaveFailedException();
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