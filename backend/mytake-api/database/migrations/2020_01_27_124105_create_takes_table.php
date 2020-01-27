<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTakesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('takes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->longText('body');
            $table->boolean('access')->default(0); // 1 - public, 0 - private
            $table->boolean('status')->default(0);//used to track data with no active link to main resource like takes, users to enable deleting of unused data.
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('takes');
    }
}
