<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Func;

use ikepu_tp\DesignerHelper\app\Models\Functions;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Functions $resource
 */
class FunctionResource extends JsonResource
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
            "function_category" => (new FunctionCategoryResource($this->resource->funcCategory))->createArray(),
            "function_class" => (new FunctionClassResource($this->resource->funcClass))->createArray(),
            "function_user" => (new FunctionUserResource($this->resource->funcUser))->createArray(),
            "function_progress" => (new FunctionProgressResource($this->resource->funcProgress))->createArray(),
            "outline" => $this->resource->outline,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}