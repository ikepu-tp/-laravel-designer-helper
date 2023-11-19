<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class SaveFailedException extends ErrorException
{
    public $abstract = 'SAVE FAILED';
    public $title = '保存失敗';
    public $errorCode = 500002;
}
