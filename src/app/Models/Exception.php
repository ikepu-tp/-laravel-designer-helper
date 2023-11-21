<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\ExceptionFactory;

/**
 * @property int $id
 * @property string $name
 * @property string $http_code
 * @property string $error_code
 * @property string $abstract
 * @property string $title
 * @property string $default_message
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 */
class Exception extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'http_code' => 'string',
        'error_code' => 'string',
        'abstract' => 'string',
        'title' => 'string',
        'default_message' => 'string',
        'note' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    protected static $factoryModel = ExceptionFactory::class;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Project>|Project
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}