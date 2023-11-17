<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class InternalServerErrorException extends ErrorException
{
    public $abstract = 'INTERNAL SERVER ERROR';
    public $title = 'サーバエラー';
    public $errorCode = 500000;
}
