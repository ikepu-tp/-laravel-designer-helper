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
 * @property-read Func_category $func_category
 * @property-read Func_class $func_class
 * @property-read Func_user $func_user
 * @property-read Func_progress $func_progress
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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_category
     */
    public function func_category()
    {
        return $this->belongsTo(Func_category::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Project>|Project
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_class
     */
    public function func_class()
    {
        return $this->belongsTo(Func_class::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_user
     */
    public function func_user()
    {
        return $this->belongsTo(Func_user::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_progress
     */
    public function func_progress()
    {
        return $this->belongsTo(Func_progress::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen_func>|Screen_func[]
     */
    public function screen_funcs()
    {
        return $this->hasMany(Screen_func::class);
    }
}