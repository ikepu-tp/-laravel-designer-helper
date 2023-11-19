<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use ikepu_tp\DesignerHelper\app\Http\Requests\ScreenClassRequest;
use ikepu_tp\DesignerHelper\app\Models\Screen_class;

class ScreenClassController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(ScreenClassRequest $screenClassRequest)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ScreenClassRequest $screenClassRequest)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ScreenClassRequest $screenClassRequest, Screen_class $screen_class)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ScreenClassRequest $screenClassRequest, Screen_class $screen_class)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ScreenClassRequest $screenClassRequest, Screen_class $screen_class)
    {
        //
    }
}