<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Func_category;
use ikepu_tp\DesignerHelper\app\Models\Func_class;
use ikepu_tp\DesignerHelper\app\Models\Func_progress;
use ikepu_tp\DesignerHelper\app\Models\Func_user;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Functions;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Functions>
 */
class FunctionFactory extends Factory
{
    public $model = Functions::class;

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
            "func_category_id" => Func_category::factory()->create(["project_id" => $project->id])->id,
            "func_class_id" => Func_class::factory()->create(["project_id" => $project->id])->id,
            "func_user_id" => Func_user::factory()->create(["project_id" => $project->id])->id,
            "func_progress_id" => Func_progress::factory()->create(["project_id" => $project->id])->id,
            "outline" => $this->faker->paragraph,
        ];
    }
}
