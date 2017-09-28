<?php

use yii\db\Migration;

/**
 * Class m170915_044959_init
 */
class m170915_044959_init extends Migration {
  /**
   * @inheritdoc
   */
  public function safeUp() {
    $tableOptions = null;
    if ($this->db->driverName === 'mysql') {
        $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
    }

    $this->createTable('{{%user}}', [
      'id' => $this->primaryKey(),
      'username' => $this->string()->notNull()->unique(),
      'auth_key' => $this->string(32)->notNull(),
      'password_hash' => $this->string()->notNull(),
      'password_reset_token' => $this->string()->unique(),
      'email' => $this->string()->notNull()->unique(),
      'name' => $this->string(50),
      'lastname' => $this->string(50),
      'phone' => $this->string(15),
      'image' => $this->string(100),
      'status' => $this->smallInteger()->notNull()->defaultValue(10),
      'approve' => $this->smallInteger()->notNull()->defaultValue(0),
      'created_at' => $this->integer()->notNull(),
      'updated_at' => $this->integer()->notNull(),
    ], $tableOptions);
  }

  /**
   * @inheritdoc
   */
  public function safeDown() {
    $this->dropTable('{{%user}}');
  }
}
