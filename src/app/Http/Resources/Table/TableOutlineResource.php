<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Table;

use ikepu_tp\DesignerHelper\app\Models\Table_outline;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Table_outline $resource
 */
class TableOutlineResource extends JsonResource
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
            "note" => $this->resource->note,
            "timestamps" => $this->resource->timestamps,
            "soft_delete" => $this->resource->soft_delete,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}