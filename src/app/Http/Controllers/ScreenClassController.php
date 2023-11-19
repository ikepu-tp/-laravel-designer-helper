<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\ScreenClassRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen_class;

class ScreenClassController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(ScreenClassRequest $screenClass, Project $project)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ScreenClassRequest $screenClass, Project $project)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ScreenClassRequest $screenClassRequest, Project $project, Screen_class $screen_class)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ScreenClassRequest $screenClassRequest, Project $project, Screen_class $screen_class)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScreenClassRequest $screenClassRequest, Project $project, Screen_class $screen_class)
    {
        //
    }
}
