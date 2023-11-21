<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Exception;
use ikepu_tp\DesignerHelper\app\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Exception>
 */
class ExceptionFactory extends Factory
{
    public $model = Exception::class;

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
            "http_code" => "404",
            "error_code" => "404000",
            "abstract" => "ERROR",
            "title" => "エラー",
            "default_message" => "エラーが発生しました",
            "note" => $this->faker->paragraph,
        ];
    }
}
