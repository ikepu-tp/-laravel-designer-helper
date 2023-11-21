<?php

namespace ikepu_tp\DesignerHelper\database\factories;

use ikepu_tp\DesignerHelper\app\Models\Form_element;
use ikepu_tp\DesignerHelper\app\Models\Form_element_attr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Form_element_attr>
 */
class Form_element_attrFactory extends Factory
{
    public $model = Form_element_attr::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "form_element_id" => Form_element::factory()->create()->id,
            "placeholder" => "入力してください",
            "default_value" => $this->faker->name,
            "attr_required" => true,
            "attr_min" => 1,
            "attr_max" => 100,
        ];
    }
}