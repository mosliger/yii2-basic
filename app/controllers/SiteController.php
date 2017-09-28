<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;
use app\models\SignupForm;
use yii\web\UploadedFile;
use app\models\AccountForm;
use app\models\User;

class SiteController extends Controller {
  /**
   * @inheritdoc
   */
  public function behaviors()     {
    return [
      'access' => [
        'class' => AccessControl::className(),
        'only' => ['logout', 'signup'],
        'rules' => [
          [
            'actions' => ['signup'],
            'allow' => true,
            'roles' => ['?'],
          ],
          [
            'actions' => ['logout'],
            'allow' => true,
            'roles' => ['@'],
          ],
        ],
      ],
      'verbs' => [
        'class' => VerbFilter::className(),
        'actions' => [
          'logout' => ['post'],
        ],
      ],
    ];
  }

  /**
   * @inheritdoc
   */
  public function actions()  {
    return [
      'error' => [
        'class' => 'yii\web\ErrorAction',
      ],
      'captcha' => [
        'class' => 'yii\captcha\CaptchaAction',
        'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
      ],
    ];
  }

  /**
   * Displays homepage.
   *
   * @return string
   */
  public function actionIndex() {
    if (Yii::$app->user->isGuest) {
      return $this->redirect(['site/login']);
    }

    return $this->render('index');
  }

  /**
   * Signs user up.
   *
   * @return mixed
   */
    public function actionSignup() {
      $this->layout = 'login';
      $model = new SignupForm();
      if ($model->load(Yii::$app->request->post())) {
        $model->imageFile = UploadedFile::getInstance($model, 'imageFile');
        // ไม่มีการ upload image
        if (empty($model->imageFile)) {
          if ($user = $model->signup()) {
            if (Yii::$app->getUser()->login($user)) {
              return $this->goHome();
            }
          }
        } else {          
          $uploadImage = $model->upload();
          if (!empty($uploadImage)) {
            $model->image = $uploadImage;
            if ($user = $model->signup()) {
              if (Yii::$app->getUser()->login($user)) {
                return $this->goHome();
              }
            }
          }
        }
      }

      return $this->render('signup', [
        'model' => $model,
      ]);
    }

  /**
   * Updates an existing Customer model.
   * If update is successful, the browser will be redirected to the 'view' page.
   * @param integer $id
   * @return mixed
   */
  public function actionProfile() {
    $model = new AccountForm();
    $model->setUser($this->findModel());

    if ($model->load(Yii::$app->request->post())) {
      $model->imageFile = UploadedFile::getInstance($model, 'imageFile');
      // ไม่มีการ upload image
      if (empty($model->imageFile)) {
       if ($model->save()) {
          return $this->goHome();
        } else {
          print_r($model->errors);
            exit();
        }
      } else {
        $uploadImage = $model->upload();
        if (!empty($uploadImage)) {
          $model->image = $uploadImage;
          if ($model->save()) {
            return $this->goHome();
          } else {
            print_r($model->errors);
            exit();
            // throw new NotFoundHttpException('The requested page does not exist.');
          }
        }
      }      
    }
    return $this->render('profile', ['model'=> $model]);
  }

  /**
   * Login action.
   *
   * @return Response|string
   */
  public function actionLogin() {
    if (!Yii::$app->user->isGuest) {
      return $this->goHome();
    }
    $this->layout = 'login';
    $model = new LoginForm();
    if ($model->load(Yii::$app->request->post()) && $model->login()) {
      return $this->goBack();
    }
    return $this->render('login', [
      'model' => $model,
    ]);
  }

  /**
   * Logout action.
   *
   * @return Response
   */
  public function actionLogout() {
    Yii::$app->user->logout();
    return $this->goHome();
  }


  /**
   * Finds the Customer model based on its primary key value.
   * If the model is not found, a 404 HTTP exception will be thrown.
   * @param integer $id
   * @return Customer the loaded model
   * @throws NotFoundHttpException if the model cannot be found
   */
  protected function findModel() {
    if (!empty(Yii::$app->user->identity->id)) {
       if (($model = User::findOne(Yii::$app->user->identity->id)) !== null) {
        return $model;
      } else {
        throw new NotFoundHttpException('The requested page does not exist.');
      }
    } else {
      throw new NotFoundHttpException('User not found.');
    }
   
  }
}
