<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class ValidationErrorException extends ErrorException
{
    public $abstract = 'VALIDATION ERROR';
    public $title = '入力値エラー';
    public $errorCode = 406003;
}
