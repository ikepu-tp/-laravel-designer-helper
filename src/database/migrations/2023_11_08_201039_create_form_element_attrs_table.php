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
            $table->string('placeholder');
            $table->string('default_value');
            $table->boolean('attr_required');
            $table->string('attr_min');
            $table->string('attr_max');
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