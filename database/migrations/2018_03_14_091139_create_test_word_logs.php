<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestWordLogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_word_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id', false,true);
            $table->date('date');
            $table->integer('word_id', false, true)->comment('The word from vocabulary table');
            $table->string('mean');
            $table->boolean('status');
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');

            $table->foreign('word_id')
                ->references('id')->on('vocabularies')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('test_word_logs');
    }
}
