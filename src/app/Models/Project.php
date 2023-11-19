<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\ProjectFactory;

/**
 * @property int $id
 * @property string $name
 * @property string $sub_name
 * @property string $note
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 */
class Project extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'sub_name' => 'string',
        'note' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    protected static $factoryModel = ProjectFactory::class;
}