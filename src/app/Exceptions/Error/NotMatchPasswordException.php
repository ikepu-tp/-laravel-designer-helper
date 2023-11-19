<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotMatchPasswordException extends ErrorException
{
    public $abstract = 'NOT MATCH PASSWORD';
    public $title = '認証失敗';
    public $errorCode = 401002;
}
