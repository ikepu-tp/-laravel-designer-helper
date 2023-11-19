<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\ScreenProgressRequest;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen_progress;

class ScreenProgressController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(ScreenProgressRequest $screenProgressRequest, Project $project)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ScreenProgressRequest $screenProgressRequest, Project $project)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ScreenProgressRequest $screenProgressRequest, Project $project, Screen_progress $screen_progress)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ScreenProgressRequest $screenProgressRequest, Project $project, Screen_progress $screen_progress)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScreenProgressRequest $screenProgressRequest, Project $project, Screen_progress $screen_progress)
    {
        //
    }
}
