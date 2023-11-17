<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class UnauthorizedException extends ErrorException
{
    public $abstract = 'UNAUTHORIZED';
    public $title = '認証失敗';
    public $errorCode = 401000;
}
