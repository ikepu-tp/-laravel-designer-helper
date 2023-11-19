<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class LackParametersException extends ErrorException
{
    public $abstract = 'LACK PARAMETERS';
    public $title = 'パラメータ不足';
    public $errorCode = 406001;
}
