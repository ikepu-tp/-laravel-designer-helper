<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class ConflictException extends ErrorException
{
    public $abstract = "CONFLICT";
    public $title = "データ競合";
    public $errorCode = 409000;
}