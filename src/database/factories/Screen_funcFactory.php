<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Functions;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen;
use ikepu_tp\DesignerHelper\app\Models\Screen_func;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Screen_func>
 */
class Screen_funcFactory extends Factory
{
    public $model = Screen_func::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $project = Project::factory()->create();
        return [
            "screen_id" => Screen::factory()->create(["project_id" => $project->id])->id,
            "function_id" => Functions::factory()->create(["function_id" => $project->id])->id,
        ];
    }
}