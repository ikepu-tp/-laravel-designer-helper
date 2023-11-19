<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Screen;

use ikepu_tp\DesignerHelper\app\Models\Screen;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Screen $resource
 */
class ScreenResource extends JsonResource
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
            "screen_class" => $this->resource->screen_class,
            "screen_progress" => $this->resource->screen_progress,
            "note" => $this->resource->note,
            "url" => $this->resource->url,
            "route_name" => $this->resource->route_name,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}