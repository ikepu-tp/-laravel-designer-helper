<?php

namespace ikepu_tp\DesignerHelper\app\Observers;

use ikepu_tp\DesignerHelper\app\Models\Form_setting;
use ikepu_tp\DesignerHelper\app\Models\Project;
use ikepu_tp\DesignerHelper\app\Models\Table_setting;

class ProjectObserver
{
    protected string $now = "";

    /**
     * Handle the Project "created" event.
     */
    public function created(Project $project): void
    {
        $this->now = now()->format("Y-m-d H:i:s");
        $table_settings_value = [
            $this->createTableSettingValue($project, "id", "integer", "int", "integer"),
            $this->createTableSettingValue($project, "foreign", "integer", "int", "foreign"),
            $this->createTableSettingValue($project, "bigInteger", "integer", "int", "bigInteger"),
            $this->createTableSettingValue($project, "Integer", "integer", "int", "integer"),
            $this->createTableSettingValue($project, "tinyInteger", "integer", "int", "tinyInteger"),
            $this->createTableSettingValue($project, "longText", "string", "string", "longText"),
            $this->createTableSettingValue($project, "text", "string", "string", "text"),
            $this->createTableSettingValue($project, "string", "string", "string", "varchar"),
            $this->createTableSettingValue($project, "date", "date", "\Carbon\Carbon", "date"),
            $this->createTableSettingValue($project, "datetime", "datetime", "\Carbon\Carbon", "datetime"),
            $this->createTableSettingValue($project, "boolean", "bool", "boolean", "boolean"),
            $this->createTableSettingValue($project, "uuid", "string", "string", "varchar"),
        ];
        Table_setting::insert($table_settings_value);

        $form_settings_value = [
            $this->createFormSettingValue($project, "短文", "input"),
            $this->createFormSettingValue($project, "長文", "input"),
            $this->createFormSettingValue($project, "メールアドレス", "input:email"),
            $this->createFormSettingValue($project, "パスワード", "input:password"),
            $this->createFormSettingValue($project, "セレクトボックス", "select"),
            $this->createFormSettingValue($project, "チェックボックス", "input:checkbox"),
            $this->createFormSettingValue($project, "スイッチボックス", "input:switchbox"),
            $this->createFormSettingValue($project, "ラジオボタン", "input:radio"),
            $this->createFormSettingValue($project, "ファイルアップロード", "input:file"),
        ];
        Form_setting::insert($form_settings_value);
    }

    private function createFormSettingValue(Project $project, string $name, string  $type): array
    {
        return [
            "project_id" => $project->id,
            "name" => $name,
            "type" => $type,
            "created_at" => $this->now,
            "updated_at" => $this->now,
        ];
    }

    private function createTableSettingValue(Project $project, string $name, string $model_cast, string $php_type, string $db_type): array
    {
        return [
            "project_id" => $project->id,
            "name" => $name,
            "model_cast" => $model_cast,
            "db_type" => $db_type,
            "php_type" => $php_type,
            "created_at" => $this->now,
            "updated_at" => $this->now,
        ];
    }

    /**
     * Handle the Project "updated" event.
     */
    public function updated(Project $project): void
    {
        //
    }

    /**
     * Handle the Project "deleted" event.
     */
    public function deleted(Project $project): void
    {
        //
    }

    /**
     * Handle the Project "restored" event.
     */
    public function restored(Project $project): void
    {
        //
    }

    /**
     * Handle the Project "force deleted" event.
     */
    public function forceDeleted(Project $project): void
    {
        //
    }
}