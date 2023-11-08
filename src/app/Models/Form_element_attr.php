<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;

/**
 * @property int $id
 * @property int $form_element_id
 * @property string $placeholder
 * @property string $default_value
 * @property boolean $attr_required
 * @property string $attr_min
 * @property string $attr_max
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 */
class Form_element_attr extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'form_element_id' => 'integer',
        'placeholder' => 'string',
        'default_value' => 'string',
        'attr_required' => 'boolean',
        'attr_min' => 'string',
        'attr_max' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];
}