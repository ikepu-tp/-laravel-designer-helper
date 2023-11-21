<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\Func_progressFactory;

/**
 * @property int $id
 * @property string $name
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Functions[] $functions
 */
class Func_progress extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'note' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    protected static $factoryModel = Func_progressFactory::class;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Functions>|Functions[]
     */
    public function functions()
    {
        return $this->hasMany(Functions::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Project>|Project
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}