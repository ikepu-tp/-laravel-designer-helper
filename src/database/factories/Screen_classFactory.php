<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen_class;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Screen_class>
 */
class Screen_classFactory extends Factory
{
    public $model = Screen_class::class;

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
            "name" => $this->faker->name,
            "note" => $this->faker->paragraph,
        ];
    }
}
