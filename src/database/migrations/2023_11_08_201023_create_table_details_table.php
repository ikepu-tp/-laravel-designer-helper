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
        Schema::connection(config("designer.connection"))->create('table_details', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('col_name', 50);
            $table->string('col_type', 50);
            $table->Integer('col_digits')->nullable();
            $table->boolean('col_nullable')->default(false);
            $table->string('col_default')->nullable();
            $table->boolean('col_unique')->default(false);
            $table->boolean('col_primary')->default(false);
            $table->boolean('col_index')->default(false);
            $table->text('note')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_details');
    }
};
