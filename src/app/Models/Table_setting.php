<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;
use ikepu_tp\DesignerHelper\database\factories\Table_settingFactory;

/**
 * @property int $id
 * @property int $project_id
 * @property string $name
 * @property string $model_cast
 * @property string $db_type
 * @property string $php_type
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Table_detail[] $tableDetails
 */
class Table_setting extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'model_cast' => 'string',
        'db_type' => 'string',
        'php_type' => 'string',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    protected static $factoryModel = Table_settingFactory::class;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Table_detail>|Table_detail[]
     */
    public function tableDetails()
    {
        return $this->hasMany(Table_detail::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Project>|Project
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}