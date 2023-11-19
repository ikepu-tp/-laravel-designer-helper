<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class OverParametersException extends ErrorException
{
    public $abstract = 'OVER PARAMETERS';
    public $title = '過剰パラメータ';
    public $errorCode = 406002;
}
