<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\ScreenRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen;

class ScreenController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(ScreenRequest $screen, Project $project)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ScreenRequest $screen, Project $project)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ScreenRequest $screenRequest, Project $project, Screen $screen)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ScreenRequest $screenRequest, Project $project, Screen $screen)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScreenRequest $screenRequest, Project $project, Screen $screen)
    {
        //
    }
}
