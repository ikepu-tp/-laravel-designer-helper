<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources;

use ikepu_tp\DesignerHelper\app\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Project $resource
 */
class ProjectResource extends JsonResource
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
            "sub_name" => $this->resource->sub_name,
            "note" => $this->resource->note,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}