<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen;
use ikepu_tp\DesignerHelper\app\Models\Screen_class;
use ikepu_tp\DesignerHelper\app\Models\Screen_progress;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Screen>
 */
class ScreenFactory extends Factory
{
    public $model = Screen::class;

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
            "screen_class_id" => Screen_class::factory()->create(["project_id" => $project->id])->id,
            "screen_progress_id" => Screen_progress::factory()->create(["project_id" => $project->id])->id,
            "note" => $this->faker->paragraph,
            "url" => $this->faker->url,
            "route_name" => $this->faker->firstName,
        ];
    }
}
