<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotAcceptableException extends ErrorException
{
    public $abstract = 'NOT ACCEPTABLE';
    public $title = '受付不可能な値，バリデーションエラー';
    public $errorCode = 406000;
}
