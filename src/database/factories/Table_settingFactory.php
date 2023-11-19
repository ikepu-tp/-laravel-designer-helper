<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Table_setting;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Table_setting>
 */
class Table_settingFactory extends Factory
{
    public $model = Table_setting::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "project_id" => Project::factory()->create()->id,
            "model_cast" => "string",
            "db_type" => "varchar",
            "php_type" => "string",
        ];
    }
}