<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotAcceptQueriesException extends ErrorException
{
    public $abstract = 'NOT ACCEPT QUERIES';
    public $title = 'クエリ不可';
    public $errorCode = 406005;
}
