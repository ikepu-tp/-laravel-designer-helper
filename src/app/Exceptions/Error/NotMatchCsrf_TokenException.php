<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotMatchCsrf_TokenException extends ErrorException
{
    public $abstract = 'NOT MATCH CSRF-TOKEN';
    public $title = 'CSRFトークン不一致';
    public $errorCode = 401003;
}
