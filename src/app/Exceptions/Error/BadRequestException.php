<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class BadRequestException extends ErrorException
{
    public $abstract = "BAD REQUEST";
    public $title = "クライアントエラー";
    public $errorCode = 400000;
}
