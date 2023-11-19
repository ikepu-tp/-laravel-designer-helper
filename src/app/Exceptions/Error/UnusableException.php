<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class UnusableException extends ErrorException
{
    public $abstract = 'UNUSABLE';
    public $title = '利用不可';
    public $errorCode = 401004;
}
