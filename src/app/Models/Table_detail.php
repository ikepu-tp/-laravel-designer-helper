<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;

/**
 * @property int $id
 * @property int $table_outline_id
 * @property string $name
 * @property string $col_name
 * @property int $table_setting_id
 * @property int $col_digits
 * @property boolean $col_nullable
 * @property string $col_default
 * @property boolean $col_unique
 * @property boolean $col_primary
 * @property boolean $col_index
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Table_outline $table_outline
 * @property-read Table_setting $table_setting
 */
class Table_detail extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'col_name' => 'string',
        'col_type' => 'string',
        'col_digits' => 'integer',
        'col_nullable' => 'boolean',
        'col_default' => 'string',
        'col_unique' => 'boolean',
        'col_primary' => 'boolean',
        'col_index' => 'boolean',
        'note' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Table_outline
     */
    public function table_outline()
    {
        return $this->belongsTo(Table_outline::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Table_setting
     */
    public function table_setting()
    {
        return $this->belongsTo(Table_setting::class);
    }
}