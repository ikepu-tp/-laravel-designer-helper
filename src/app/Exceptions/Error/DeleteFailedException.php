<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class DeleteFailedException extends ErrorException
{
    public $abstract = "DELETE FAILED";
    public $title = "削除失敗";
    public $errorCode = 500003;
}
