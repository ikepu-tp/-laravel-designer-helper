<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class ServiceUnavailableException extends ErrorException
{
    public $abstract = 'SERVICE UNAVAILABLE';
    public $title = 'サービス利用不可';
    public $errorCode = 503000;
}
