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
        Schema::connection(config("designer.connection"))->create('table_outlines', function (Blueprint $table) {
            $table->id();
            $table->foreignId('table_outline_id')->constrained('');
            $table->string('name');
            $table->text('note')->nullable();
            $table->boolean('timestamps')->default(true);
            $table->boolean('soft_delete')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_outlines');
    }
};