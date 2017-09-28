<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\Url;

/* @var $this yii\web\View */
/* @var $model app\models\Customer */

$this->title = 'Update Profile';

?>

<div class="customer-form container">
  <?php $form = ActiveForm::begin(['id' => 'account-form', 'options' => ['enctype' => 'multipart/form-data']]); ?>
    <div id="account-component" class="account-component"></div>
  <?php ActiveForm::end(); ?>

</div>

<script>
  window.onload = function() {
  var src = '<?=$model->image?>';
  var forms = {
    image: {
      name: 'AccountForm[imageFile]',
      src: src !== '' ? '<?=Url::to('@web/')?>'+src : ''
    },
    name: {
      name: 'AccountForm[name]',
      label: 'ชื่อ',
      rules: { required: 'value is require.' },
      placeholder: '',
      value: '<?=$model->name?>'
    },
    lastname: {
      name: 'AccountForm[lastname]',
      label: 'สกุล',
      rules: { required: 'value is require.' },
      placeholder: '',
      value: '<?=$model->lastname?>'
    },
    phone: {
      name: 'AccountForm[phone]',
      label: 'เบอร์โทรศัพท์',
      rules: { },
      placeholder: '',
      value: '<?=$model->phone?>'
    },
    email: {
      name: 'AccountForm[email]',
      label: 'E-mail',
      rules: { required: 'value is require.', email: 'รูปแบบ E-mail ไม่ถูกต้อง' },
      placeholder: '',
      value: '<?=$model->email?>'
    }
  };
  VENDOR.ProfileComponent(forms, 'account-component');
  }
</script>
