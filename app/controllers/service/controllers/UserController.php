<?php

namespace app\controllers\service\controllers;

use app\controllers\service\controllers\BaseController;
use Yii;
use app\models\User;
use app\controllers\service\models\ResponseAPI;

class UserController extends BaseController {
  public function actionIndex(){
    $models = User::find()->all();
    $respenes = [];
    foreach ($models as $model) {
      $respenes[] = array(
        'name' => $model->name,
        'lastname' => $model->lastname,
        'email' => $model->email,
        'phone' => $model->phone, 
      );
    }
    return ResponseAPI::init(array($respenes));
  }
}
