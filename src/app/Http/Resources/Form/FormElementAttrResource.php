<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Form;

use ikepu_tp\DesignerHelper\app\Models\Form_element_attr;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Form_element_attr $resource
 */
class FormElementAttrResource extends JsonResource
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
            "placeholder" => $this->resource->placeholder,
            "default_value" => $this->resource->default_value,
            "attr_required" => $this->resource->attr_required,
            "attr_min" => $this->resource->attr_min,
            "attr_max" => $this->resource->attr_max,
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}