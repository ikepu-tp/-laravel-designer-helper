<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Table_outline;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Table_outline>
 */
class Table_outlineFactory extends Factory
{
    public $model = Table_outline::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "project_id" => Project::factory()->create()->id,
            "name" => $this->faker->name,
            "note" => $this->faker->paragraph,
            "timestamps" => true,
            "soft_delete" => true,
        ];
    }
}
