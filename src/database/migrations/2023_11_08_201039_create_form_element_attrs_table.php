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
        Schema::connection(config("designer.connection"))->create('form_element_attrs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_element_id')->constrained('form_elements');
            $table->string('placeholder')->nullable();
            $table->string('default_value')->nullable();
            $table->boolean('attr_required')->default(false);
            $table->string('attr_min')->nullable();
            $table->string('attr_max')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_element_attrs');
    }
};