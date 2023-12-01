<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Exception;

use ikepu_tp\DesignerHelper\app\Models\Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Exception $resource
 */
class ExceptionResource extends JsonResource
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
            "http_code" => $this->resource->http_code,
            "error_code" => $this->resource->error_code,
            "abstract" => $this->resource->abstract,
            "title" => $this->resource->title,
            "default_message" => $this->resource->default_message,
            "note" => $this->resource->note,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}