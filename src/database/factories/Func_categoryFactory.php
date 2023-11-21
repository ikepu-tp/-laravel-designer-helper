<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Func_category;
use ikepu_tp\DesignerHelper\app\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Func_category>
 */
class Func_categoryFactory extends Factory
{
    public $model = Func_category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $project = Project::factory()->create();
        return [
            "project_id" => $project->id,
            "deps" => 0,
            "name" => $this->faker->name,
            "cat_id" => null,
            "note" => $this->faker->paragraph,
        ];
    }
}