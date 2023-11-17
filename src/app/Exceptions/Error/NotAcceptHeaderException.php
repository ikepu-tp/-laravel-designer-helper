<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotAcceptHeaderException extends ErrorException
{
    public $abstract = 'NOT ACCEPT HEADER';
    public $title = 'ヘッダ不可';
    public $errorCode = 406007;
}
