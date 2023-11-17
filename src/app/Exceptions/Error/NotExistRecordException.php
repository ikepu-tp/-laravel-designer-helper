<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotExistRecordException extends ErrorException
{
    public $abstract = 'NOT EXIST RECORD';
    public $title = '存在しないレコード';
    public $errorCode = 404001;
}
