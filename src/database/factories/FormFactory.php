<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Form;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Screen;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Form>
 */
class FormFactory extends Factory
{
    public $model = Form::class;

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
            "screen_id" => Screen::factory()->create(["project_id" => $project->id])->id,
            "note" => $this->faker->paragraph,
        ];
    }
}
