<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\Form_elementFactory;

/**
 * @property int $id
 * @property int $form_id
 * @property string $label
 * @property string $name
 * @property string $type
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Form $form
 * @property-read Form_element_attr[] $formElementAttrs
 * @property-read Form_setting $formSetting
 */
class Form_element extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'form_id' => 'integer',
        'label' => 'string',
        'name' => 'string',
        'type' => 'string',
        'note' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    protected static $factoryModel = Form_elementFactory::class;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    /**
     * @return  \Illuminate\Database\Eloquent\Relations\HasMany<Form_element_attr>|Form_element_attr[]
     */
    public function formElementAttrs()
    {
        return $this->hasMany(Form_element_attr::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Form_setting>|Form_setting
     */
    public function formSetting()
    {
        return $this->belongsTo(Form_setting::class);
    }
}