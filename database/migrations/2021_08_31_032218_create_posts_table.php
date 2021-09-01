<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('user_id');        
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('title');
            $table->string('cover_file_name');
            $table->text('description');
            $table->text('markdown');
            $table->text('slug')->unique();
            $table->text('sanitized_html');
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
        Schema::dropIfExists('posts');
    }
}
