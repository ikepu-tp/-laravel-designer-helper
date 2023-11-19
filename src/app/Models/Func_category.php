<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;

/**
 * @property int $id
 * @property int $deps
 * @property string $name
 * @property int $cat_id
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Func_category $parent_category
 * @property-read Func_category[] $children_categories
 * @property-read Functions[] $functions
 */
class Func_category extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'deps' => 'integer',
        'name' => 'string',
        'cat_id' => 'integer',
        'note' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_category
     */
    public function parent_category()
    {
        return $this->belongsTo(Func_category::class, "cat_id");
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Project>|Project
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Func_category>|Func_category[]
     */
    public function children_categories()
    {
        return $this->hasMany(Func_category::class, "cat_id");
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Functions>|Functions[]
     */
    public function functions()
    {
        return $this->hasMany(Functions::class);
    }
}