<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\helpers\Url;

$this->title = 'Signup';
$this->params['breadcrumbs'][] = $this->title;
?>

  <div class="site">
    <div class="header"> Register </div>
    <div class="form">
        <?php $form = ActiveForm::begin(['id' => 'form-signup', 'options' => ['enctype' => 'multipart/form-data']]); ?>
          <div id="signup-component" class="component"></div>
        <?php ActiveForm::end(); ?>
    </div>
    <div class="button-group">
      <a href="<?=Url::to(['site/login'])?>">กลับ</a>
    </div>
  </div>

<script type="text/javascript">
  window.onload = function() {
    var forms = {
      username: {
        name: 'SignupForm[username]',
        label: 'ชื่อผู้ใช้',
        rules: { required: 'value is require.' },
        placeholder: 'ชื่อผู้ใช้'
      },
      email: {
        name: 'SignupForm[email]',
        label: 'E-mail',
        rules: { required: 'value is require.', email: 'รูปแบบ E-mail ไม่ถูกต้อง' },
        placeholder: ''
      },
      password: {
        name: 'SignupForm[password]',
        label: 'รหัสผ่าน',
        rules: { required: 'value is require.' },
        placeholder: 'รหัสผ่าน'
      }
    };
    VENDOR.SignupComponent(forms, 'signup-component');
  }
</script>