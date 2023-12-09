<?php

use ikepu_tp\DesignerHelper\app\Http\Controllers\ExceptionController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FormController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FormElementController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FormSettingController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FrontController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FunctionCategoryController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FunctionClassController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FunctionController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FunctionProgressController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\FunctionUserController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\ProjectController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\ScreenClassController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\ScreenController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\ScreenProgressController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\TableDetailController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\TableOutlineController;
use ikepu_tp\DesignerHelper\app\Http\Controllers\TableSettingController;
use Illuminate\Support\Facades\Route;

Route::scopeBindings()->prefix("designers")->middleware(config("designer.middleware", []))->group(function () {
    //WEB
    Route::middleware(config("designer.web_middleware"))->group(function () {
        Route::get("", [FrontController::class, "show"])->name("designer.front.home");
        Route::fallback([FrontController::class, "show"])->name("designer.front");
    });
    //API
    Route::scopeBindings()->middleware(config("designer.api_middleware"))->prefix("v1")->group(function () {
        Route::prefix("projects/{project}")->group(function () {
            Route::prefix("tables")->group(function () {
                Route::apiResource("settings", TableSettingController::class)->parameter("settings", "table_setting")->names("table.setting");
                Route::apiResource("outlines", TableOutlineController::class)->parameter("outlines", "table_outline")->names("table.outline");
                Route::apiResource("{table_outline}/details", TableDetailController::class)->parameter("details", "table_detail")->names("table.detail");
            });
            Route::prefix("functions")->group(function () {
                Route::apiResource("categories", FunctionCategoryController::class)->parameter("categories", "func_category")->names("function.category");
                Route::apiResource("classes", FunctionClassController::class)->parameter("classes", "func_class")->names("function.class");
                Route::apiResource("progresses", FunctionProgressController::class)->parameter("progresses", "func_progress")->names("function.progress");
                Route::apiResource("users", FunctionUserController::class)->parameter("users", "func_user")->names("function.user");
                Route::apiResource("", FunctionController::class)->parameter("", "functions")->names("function");
            });
            Route::prefix("screens")->group(function () {
                Route::apiResource("classes", ScreenClassController::class)->parameter("classes", "screen_class")->names("screen.class");
                Route::apiResource("progresses", ScreenProgressController::class)->parameter("progresses", "screen_progress")->names("screen.progress");
                Route::apiResource("", ScreenController::class)->parameter("", "screen")->names("screen");
            });
            Route::prefix("exceptions")->group(function () {
                Route::apiResource("", ExceptionController::class)->parameter("", "exception")->names("exception");
            });
            Route::prefix("forms")->group(function () {
                Route::apiResource("settings", FormSettingController::class)->parameter("settings", "form_setting")->names("form.setting");
                Route::apiResource("{form}/elements", FormElementController::class)->parameter("elements", "form_element")->names("form.element");
                Route::apiResource("", FormController::class)->parameter("", "form")->names("form");
            });
        });
        Route::apiResource("projects", ProjectController::class)->names("project");
    });
});