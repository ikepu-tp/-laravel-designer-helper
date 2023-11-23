<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Table_detail;
use ikepu_tp\DesignerHelper\app\Models\Table_outline;
use ikepu_tp\DesignerHelper\app\Models\Table_setting;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Table_detail>
 */
class Table_detailFactory extends Factory
{
    public $model = Table_detail::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $table_outline = Table_outline::factory()->create();
        return [
            "table_outline_id" => $table_outline->id,
            "name" => $this->faker->name,
            "col_name" => $this->faker->name,
            "table_setting_id" => Table_setting::factory()->create(["project_id" => $table_outline->project_id])->id,
            "col_digits" => $this->faker->randomDigit() * 10,
            "col_nullable" => true,
            "col_default" => "test",
            "col_unique" => false,
            "col_primary" => false,
            "col_index" => true,
            "note" => $this->faker->paragraph,
        ];
    }
}