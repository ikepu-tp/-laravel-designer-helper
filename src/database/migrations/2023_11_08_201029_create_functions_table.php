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
        Schema::connection(config("designer.connection"))->create('functions', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->foreignId('func_category_id')->constrained('func_categories');
            $table->foreignId('func_class_id')->constrained('func_classes');
            $table->foreignId('func_user_id')->constrained('func_users');
            $table->foreignId('func_progress_id')->constrained('func_progresses');
            $table->text('outline')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('functions');
    }
};