<?php
namespace app\models;

use yii\base\Model;
use Yii;
/**
 * This is the model class for table "user".
 *
 * @property int $id
 * @property string $username
 * @property string $auth_key
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $email
 * @property string $name
 * @property string $lastname
 * @property string $phone
 * @property string $image
 * @property int $status
 * @property int $approve
 * @property int $created_at
 * @property int $updated_at
 */
class AccountForm extends Model {
  public $username;
  public $email;
  public $password;
  public $imageFile;
  public $name;
  public $lastname;
  public $phone;
  public $image;
  public $approve;
  public $status;

  private $user;

  public function setUser($user) {
    $this->user = $user;
    $this->email = $user->email;
    $this->username = $user->username;
    $this->name = $user->name;
    $this->lastname = $user->lastname;
    $this->phone = $user->phone;
    $this->image = $user->image;
    $this->approve = $user->approve;
    $this->status = $user->status;
  }

  /**
   * @inheritdoc
   */
  public function rules() {
    return [
      ['username', 'trim'],
      ['username', 'required'],
      ['username', 'string', 'min' => 2, 'max' => 255],

      [['status', 'approve'], 'integer'],

      ['image', 'string', 'max' => 100],

      [['name', 'lastname'], 'string', 'max' => 100],

      ['phone', 'string', 'max' => 15],

      ['email', 'trim'],
      ['email', 'required'],
      ['email', 'email'],
      ['email', 'string', 'max' => 255],

      ['password', 'string', 'min' => 6],

      [['imageFile'], 'file'],

    ];
  }

  public function attributeLabels() {
    return [
      'username' => 'Username',
      'email' => 'Email',
      'name' => 'Name',
      'lastname' => 'Lastname',
      'phone' => 'Phone',
      'image' => 'Image',
      'status' => 'Status',
      'approve' => 'Approve',
      'created_at' => 'Created At',
      'updated_at' => 'Updated At',
      ];
  }

  public function save() {
    if ($this->validate()) { 
      $this->user->username = $this->username;
      $this->user->email = $this->email;
      $this->user->name = $this->name;
      $this->user->lastname = $this->lastname;
      $this->user->phone = $this->phone;
      $this->user->image = $this->image;
      $this->user->updated_at = date("U");
      if ($this->password) {
        $this->user->setPassword($this->password);
      }
      return $this->user->save();
    }

    return null;
   
  }

  public function upload() {
    if ($this->validate()) {
      $part = 'uploads/image-'.date("U").'-'.$this->imageFile->baseName .'.'. $this->imageFile->extension;
      $this->imageFile->saveAs($part);
      return $part;
    } else {
      return '';
    }
  }
}