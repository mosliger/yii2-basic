<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use yii\helpers\Url;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?> 
  <header class='main-header'>
    <div class='logo'>
      <a href="<?=Url::home()?>" class="active">Home</a>
    </div>
    <div class='menu-bar'>
      <input type='checkbox' class='button-icon-mobile' />
      <i class='icon'></i>
      <nav>
        <ul>
          <li>
            <a href="<?=Url::to(['site/profile'])?>" class="icon-profile">Profile</a>
          </li>
          <li>
            <form action="<?=Url::to(['site/logout'])?>" method="post">
              <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->csrfToken; ?>" />
              <button type="submit" class="btn btn-link logout">Logout (<?=Yii::$app->user->identity->username?>)</button>
            </form>
          </li>
        </ul>
      </nav>
    </div>
    
  </header>
  <div class='wrap'>
    <?= $content ?>
  </div>

<?php
/*
<header class="main-header">
    <nav>
      <ul class="navigation">
        <li><a href="<?=Url::home()?>" class="active">Home</a></li>
        <!-- not login -->
        <?php if (Yii::$app->user->isGuest): ?>
          <!--<li><a href="<?=Url::to(['site/login'])?>">Login</a></li> -->
        <!-- login -->
        <?php else :?>
        <li><a href="<?=Url::to(['site/profile'])?>">Profile</a></li>
        <li>
          <form action="<?=Url::to(['site/logout'])?>" method="post">
            <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->csrfToken; ?>" />
            <button type="submit" class="btn btn-link logout">Logout (<?=Yii::$app->user->identity->username?>)</button>
          </form>
        </li>
        <?php endif; ?>         
      </ul>
    </nav>
  </header>
  <div class="wrap">
    <?= $content ?>
  </div>

*/

?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
