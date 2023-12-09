<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\DeleteFailedException;
use ikepu_tp\DesignerHelper\app\Exceptions\Error\SaveFailedException;
use ikepu_tp\DesignerHelper\app\Http\Requests\FormSettingRequest;
use ikepu_tp\DesignerHelper\app\Http\Resources\Form\FormSettingResource;
use ikepu_tp\DesignerHelper\app\Http\Resources\Resource;
use ikepu_tp\DesignerHelper\app\Models\Form_setting;
use ikepu_tp\DesignerHelper\app\Models\Project;

class FormSettingController extends BaseController
{
    /** @var Form_setting|Form_setting[] */
    public $model;

    /**
     * Display a listing of the resource.
     */
    public function index(FormSettingRequest $formSettingRequest, Project $project)
    {
        $this->model = $project->formSettings();
        return Resource::pagination($this->model, FormSettingResource::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormSettingRequest $formSettingRequest, Project $project)
    {
        $this->model = new Form_setting();
        $this->model->fill(
            [
                "project_id" => $project->id,
            ]
        );
        $this->model->fill($formSettingRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::create(new FormSettingResource($this->model));
    }

    /**
     * Display the specified resource.
     */
    public function show(FormSettingRequest $formSettingRequest, Project $project, Form_setting $form_setting)
    {
        $this->model = $form_setting;
        return Resource::success(new FormSettingResource($this->model));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormSettingRequest $formSettingRequest, Project $project, Form_setting $form_setting)
    {
        $this->model = $form_setting;
        $this->model->fill($formSettingRequest->validated());
        if (!$this->model->save()) throw new SaveFailedException();
        return Resource::success(new FormSettingResource($this->model));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FormSettingRequest $formSettingRequest, Project $project, Form_setting $form_setting)
    {
        if (!$form_setting->delete()) throw new DeleteFailedException();
        return Resource::NoContent();
    }
}