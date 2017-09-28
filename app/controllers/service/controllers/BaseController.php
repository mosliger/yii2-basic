<?php

namespace app\controllers\service\controllers;

use yii\web\Controller;
use Yii;
use app\controllers\service\models\AccessControl;
/**
 * Default controller for the `Service` module
 */
class BaseController extends Controller
{
  public function behaviors() {
    $headers = Yii::$app->request->headers;
    if (preg_match('/application\/xhtml/i', $headers->get('accept'))) {
      Yii::$app->response->format = yii\web\Response::FORMAT_XML; // FORMAT_JSON, FORMAT_XML
    } else {
      Yii::$app->response->format = yii\web\Response::FORMAT_JSON;
    }
    return [
      'access' => [
        'class' => AccessControl::className(),
      ]
    ];
  }
}
