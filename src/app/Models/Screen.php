<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property int $screen_class_id
 * @property int $screen_progress_id
 * @property string $note
 * @property string $url
 * @property string $route_name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Screen_class $screenClass
 * @property-read Screen_progress $screenProgress
 * @property-read Form[] $forms
 * @property-read Screen_func[] $screenFuncs
 */
class Screen extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'screen_class_id' => 'integer',
        'screen_progress_id' => 'integer',
        'note' => 'string',
        'url' => 'string',
        'route_name' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Project>|Project
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Screen_class
     */
    public function screenClass()
    {
        return $this->belongsTo(Screen_class::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Screen_progress
     */
    public function screenProgress()
    {
        return $this->belongsTo(Screen_progress::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Form>|Form[]
     */
    public function forms()
    {
        return $this->hasMany(Form::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen_func>|Screen_func[]
     */
    public function screenFuncs()
    {
        return $this->hasMany(Screen_func::class);
    }
}
