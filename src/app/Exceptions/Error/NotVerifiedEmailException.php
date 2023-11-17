<?php

namespace ikepu_tp\DesignerHelper\app\Exceptions\Error;

use ikepu_tp\DesignerHelper\app\Exceptions\ErrorException;

class NotVerifiedEmailException extends ErrorException
{
    public $abstract = 'NOT VERIFIED EMAIL';
    public $title = 'メールアドレス未認証';
    public $errorCode = 406006;
}
