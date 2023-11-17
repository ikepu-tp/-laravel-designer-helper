<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class CreateForbittenException extends ErrorException
{
    public $abstract = "CREATE FORBITTEN";
    public $title = "登録不可";
    public $errorCode = 403002;
}
