<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\Func_categoryFactory;

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
 * @property-read Func_category $parentCategory
 * @property-read Func_category[] $childrenCategories
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

    protected static $factoryModel = Func_categoryFactory::class;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Func_category
     */
    public function parentCategory()
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
    public function childrenCategories()
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