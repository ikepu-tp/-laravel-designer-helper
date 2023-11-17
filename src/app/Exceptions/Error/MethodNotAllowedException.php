<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class MethodNotAllowedException extends ErrorException
{
    public $abstract = 'METHOD NOT ALLOWED';
    public $title = '許可されていないメソッド';
    public $errorCode = 405000;
}
