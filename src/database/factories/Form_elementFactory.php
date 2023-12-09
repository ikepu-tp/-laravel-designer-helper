<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Form;
use ikepu_tp\DesignerHelper\app\Models\Form_element;
use ikepu_tp\DesignerHelper\app\Models\Form_setting;
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
        $form = Form::factory()->create();
        $form_setting = Form_setting::factory()->create(["project_id" => $form->project_id]);
        return [
            "form_id" => $form->id,
            "label" => $this->faker->firstName,
            "name" => $this->faker->name,
            "form_setting_id" => $form_setting->id,
            "note" => $this->faker->paragraph,
        ];
    }
}