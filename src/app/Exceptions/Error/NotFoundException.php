<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotFoundException extends ErrorException
{
    public $abstract = 'NOT FOUND';
    public $title = '存在しないパス';
    public $errorCode = 404000;
}
