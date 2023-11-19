<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Project>
 */
class ProjectFactory extends Factory
{
    public $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->name,
            "sub_name" => $this->faker->name,
            "note" => $this->faker->paragraph,
        ];
    }
}