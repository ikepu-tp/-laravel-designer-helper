<?php

namespace ikepu_tp\DesignerHelper\app\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;

class FrontController extends BaseController
{
    public function show($path = "")
    {
        $file_path = __DIR__ . "/../../../resources/front/{$path}";
        if (!file_exists($file_path) || empty($path)) $file_path = __DIR__ . "/../../../resources/front/index.html";
        $formats = [
            "html" => "text/html",
            "css" => "text/css",
            "js" => "text/javascript",
        ];
        return response(file_get_contents($file_path))->header("Content-Type", $formats[pathinfo($file_path, PATHINFO_EXTENSION)] ?? "text/html");
    }
}