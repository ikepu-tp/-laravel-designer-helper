<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class EditForbittenException extends ErrorException
{
    public $abstract = 'EDIT FORBITTEN';
    public $title = '編集不可';
    public $errorCode = 403001;
}
