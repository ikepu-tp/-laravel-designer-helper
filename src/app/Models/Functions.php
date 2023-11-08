<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property int $func_category_id
 * @property int $func_class_id
 * @property int $func_user_id
 * @property int $func_progress_id
 * @property string $outline
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Screen_func[] $screen_funcs
 */
class Functions extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'functions';

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'func_category_id' => 'integer',
        'func_class_id' => 'integer',
        'func_user_id' => 'integer',
        'func_progress_id' => 'integer',
        'outline' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen_func>|Screen_func[]
     */
    public function screen_funcs()
    {
        return $this->hasMany(Screen_func::class);
    }
}
