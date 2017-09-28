<?php
namespace app\controllers\service\models;

/**
 * Signup form
 */
use Yii;
use yii\base\Model;

class ResponseAPI extends Model {
  /**
   * @inheritdoc
   */
  public function init($responseData = [], $error = null) {
    $headers = Yii::$app->response->headers;

    // add a Pragma header. Existing Pragma headers will NOT be overwritten.
    $headers->add('access-token', base64_encode(date('U')));

    $response = array(
      'status' => empty($error) ? 'successful' : 'unsuccessful',
      'response-data' => $responseData,
      'error-message' => $error,
   );
    return $response;
  }
}
