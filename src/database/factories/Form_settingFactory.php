<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Form_setting;
use ikepu_tp\DesignerHelper\app\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Form_setting>
 */
class Form_settingFactory extends Factory
{
    public $model = Form_setting::class;

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
            "type" => $this->faker->userName,
        ];
    }
}
