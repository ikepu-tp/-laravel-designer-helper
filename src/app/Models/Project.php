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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Table_setting>|Table_setting[]
     */
    public function table_settings()
    {
        return $this->hasMany(Table_setting::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Table_outline>|Table_outline[]
     */
    public function table_outlines()
    {
        return $this->hasMany(Table_outline::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Func_class>|Func_class[]
     */
    public function func_classes()
    {
        return $this->hasMany(Func_class::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Func_user>|Func_user[]
     */
    public function func_users()
    {
        return $this->hasMany(Func_user::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Func_progress>|Func_progress[]
     */
    public function func_progresses()
    {
        return $this->hasMany(Func_progress::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Func_category>|Func_category[]
     */
    public function func_categories()
    {
        return $this->hasMany(Func_category::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Functions>|Functions[]
     */
    public function functions()
    {
        return $this->hasMany(Functions::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Exception>|Exception[]
     */
    public function exceptions()
    {
        return $this->hasMany(Exception::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen_class>|Screen_class[]
     */
    public function screen_classes()
    {
        return $this->hasMany(Screen_class::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen_progress>|Screen_progress[]
     */
    public function screen_progresses()
    {
        return $this->hasMany(Screen_progress::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Screen>|Screen[]
     */
    public function screens()
    {
        return $this->hasMany(Screen::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Form_setting>|Form_setting[]
     */
    public function form_settings()
    {
        return $this->hasMany(Form_setting::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Form>|Form[]
     */
    public function forms()
    {
        return $this->hasMany(Form::class);
    }
}
