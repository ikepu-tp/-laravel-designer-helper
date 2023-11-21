<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\Screen_classFactory;

/**
 * @property int $id
 * @property string $name
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Screen[] $screens
 */
class Screen_class extends BaseModel
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

    protected static $factoryModel = Screen_classFactory::class;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Project>|Project
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen>|Screen[]
     */
    public function screens()
    {
        return $this->hasMany(Screen::class);
    }
}