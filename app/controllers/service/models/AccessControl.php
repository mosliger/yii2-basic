<?php


namespace app\controllers\service\models;

use Yii;
use yii\base\ActionFilter;

class AccessControl extends ActionFilter {

  public function beforeAction() {
    /*
      return true accress
      retuen false not accress
    */
    $headers = Yii::$app->request->headers;

    /*
      ตรวจสอบ token และ accept code
    */
 
    // if (empty($headers->get('token'))) {
    //   throw new \yii\web\HttpException(500, 'Token not found.');
    // }

    // if (empty($headers->get('accept-code'))) {
    //   throw new \yii\web\HttpException(500, 'Accept code not found.');
    // }
    return true;
  }
}

?>