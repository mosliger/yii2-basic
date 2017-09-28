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
  <header class="main-header">
    <div class="logo">
      <a href="<?=Url::home()?>" class="active">Home</a>
    </div>
    <nav>
      <ul>
        <li>
          <a href="<?=Url::to(['site/profile'])?>" class="icon-profile">
            <img src='https://wwwf.imperial.ac.uk/blog/student-blogs/files/2017/01/mala-profile-400-150x150.png' alt='' />
          </a>
        </li>
        <li>
          <form action="<?=Url::to(['site/logout'])?>" method="post">
            <input type="hidden" name="<?= Yii::$app->request->csrfParam; ?>" value="<?= Yii::$app->request->csrfToken; ?>" />
            <button type="submit" class="btn btn-link logout">Logout (<?=Yii::$app->user->identity->username?>)</button>
          </form>
        </li>
      </ul>
    </nav>
  </header>
  <div class="wrap">
    <div class="menu-list">
      <ul>
        <li><a href='#'>Menu 1</a></li>
      </ul>
    </div>
    <div class="content">
      <?= $content ?>
    </div>
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
