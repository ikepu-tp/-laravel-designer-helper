<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Form;
use ikepu_tp\DesignerHelper\app\Models\Form_element;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Form_element>
 */
class Form_elementFactory extends Factory
{
    public $model = Form_element::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "form_id" => Form::factory()->create()->id,
            "label" => $this->faker->firstName,
            "name" => $this->faker->name,
            "type" => $this->faker->userName,
            "note" => $this->faker->paragraph,
        ];
    }
}
