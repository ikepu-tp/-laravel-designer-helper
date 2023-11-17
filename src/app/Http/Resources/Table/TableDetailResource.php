<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Table;

use ikepu_tp\DesignerHelper\app\Models\Table_detail;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Table_detail $resource
 */
class TableDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array|null
    {
        return $this->createArray();
    }

    /**
     * @return array|null
     */
    public function createArray(): array|null
    {
        if (empty($this->resource)) return null;

        return [
            "id" => $this->resource->id,
            "name" => $this->resource->name,

            "table_setting" => (new TableSettingResource($this->resource->table_setting))->createArray(),
            "col_name" => $this->resource->column_name,
            "col_digits" => $this->resource->col_digits,
            "col_nullable" => $this->resource->col_nullable,
            "col_default" => $this->resource->col_default,
            "col_unique" => $this->resource->col_unique,
            "col_primary" => $this->resource->col_primary,
            "col_index" => $this->resource->col_index,

            "note" => $this->resource->note,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}