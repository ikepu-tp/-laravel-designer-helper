<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class ForbittenException extends ErrorException
{
    public $abstract = 'FORBITTEN';
    public $title = 'アクセス不可';
    public $errorCode = 403000;
}
