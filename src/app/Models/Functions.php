<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\FunctionFactory;

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
 * @property-read Func_category $funcCategory
 * @property-read Func_class $funcClass
 * @property-read Func_user $funcUser
 * @property-read Func_progress $funcProgress
 * @property-read Screen_func[] $screenFuncs
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

    protected static $factoryModel = FunctionFactory::class;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_category
     */
    public function funcCategory()
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
    public function funcClass()
    {
        return $this->belongsTo(Func_class::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_user
     */
    public function funcUser()
    {
        return $this->belongsTo(Func_user::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_progress
     */
    public function funcProgress()
    {
        return $this->belongsTo(Func_progress::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen_func>|Screen_func[]
     */
    public function screenFuncs()
    {
        return $this->hasMany(Screen_func::class);
    }
}