<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
          $table->dropColumn('name');
          $table->string('firstname', 50);
          $table->string('lastname', 50);
          $table->dateTime('date_of_birth')->nullable();
          $table->dateTime('last_login_date')->nullable();
          $table->enum('gender', ['m', 'f']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
