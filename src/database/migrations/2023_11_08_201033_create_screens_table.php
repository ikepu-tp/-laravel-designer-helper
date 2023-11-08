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
        Schema::connection(config("designer.connection"))->create('screens', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->foreignId('screen_class_id')->constrained('screen_classes');
            $table->foreignId('screen_progress_id')->constrained('screen_progresses');
            $table->text('note')->nullable();
            $table->string('url')->nullable();
            $table->string('route_name')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('screens');
    }
};
