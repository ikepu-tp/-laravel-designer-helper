<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class DeleteForbittenException extends ErrorException
{
    public $abstract = "DELETE FORBITTEN";
    public $title = "削除不可";
    public $errorCode = 403003;
}
