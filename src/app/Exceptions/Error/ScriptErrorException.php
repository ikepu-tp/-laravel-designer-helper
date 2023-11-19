<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class ScriptErrorException extends ErrorException
{
    public $abstract = 'SCRIPT ERROR';
    public $title = 'スクリプトエラー';
    public $errorCode = 500001;
}
