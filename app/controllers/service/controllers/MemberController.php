<?php

namespace app\controllers\service\controllers;

use app\controllers\service\controllers\BaseController;
use Yii;

class MemberController extends BaseController
{
  public function actionIndex(){
    return array('name' => 'mosliger', 'lasename' => 'eieiei');
  }
}
