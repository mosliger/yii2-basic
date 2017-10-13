<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\helpers\Url;

$this->title = 'Login';
$this->params['breadcrumbs'][] = $this->title;

?>

  <div class="site">
    <div class="header"> Welcome </div>
    <div class="form">
      <?php $form = ActiveForm::begin([]); ?>
        <div id="login-component" class="component"></div>
      <?php ActiveForm::end(); ?>
    </div>
    <div class="button-group">
      <a href="<?=Url::to(['site/signup'])?>">สมัครสมาชิก </a>
    </div>
  </div>


<script type="text/javascript">
  window.onload = function() {
    var forms = {
      username: {
        name: 'LoginForm[username]',
        label: 'ชื่อผู้ใช้',
        placeholder: 'ชื่อผู้ใช้'
      },
      password: {
        name: 'LoginForm[password]',
        label: 'รหัสผ่าน',
        placeholder: 'รหัสผ่าน'
      }
    };
    VENDOR.LoginComponent(forms, '<?= empty($errors) ? '' : 'กรุณาตรวจสอบ ชื่อผู้ใช้ หรือ หรัสผ่าน' ?>', 'login-component');
  }
</script>