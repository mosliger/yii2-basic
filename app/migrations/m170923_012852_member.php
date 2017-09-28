<?php

use yii\db\Migration;

/**
 * Class m170923_012852_member
 */
class m170923_012852_member extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp() {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%member}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50),
            'lastname' => $this->string(50),
            'phone' => $this->string(15),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ], $tableOptions);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('{{%member}}');
    }

}
