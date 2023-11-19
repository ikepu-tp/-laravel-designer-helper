<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class LackHeaderException extends ErrorException
{
    public $abstract = 'LACK HEADER';
    public $title = 'ヘッダ不足';
    public $errorCode = 406004;
}
