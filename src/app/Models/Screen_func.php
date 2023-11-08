<?php

namespace ikepu_tp\DesignerHelper\app\Models;

use Carbon\Carbon;

/**
 * @property int $id
 * @property int $screen_id
 * @property int $function_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 *
 * @property-read Screen $screen
 * @property-read Functions $function
 */
class Screen_func extends BaseModel
{
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'screen_id' => 'integer',
        'function_id' => 'integer',
        "created_at" => "datetime",
        "updated_at" => "datetime",
        "deleted_at" => "datetime",
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Screen
     */
    public function screen()
    {
        return $this->belongsTo(Screen::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Functions
     */
    public function function()
    {
        return $this->belongsTo(Functions::class);
    }
}
