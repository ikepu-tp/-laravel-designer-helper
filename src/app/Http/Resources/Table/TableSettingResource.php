<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Table;

use ikepu_tp\DesignerHelper\app\Models\Table_setting;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Table_setting $resource
 */
class TableSettingResource extends JsonResource
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
            "model_cast" => $this->resource->model_cast,
            "db_type" => $this->resource->db_type,
            "php_type" => $this->resource->php_type,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}