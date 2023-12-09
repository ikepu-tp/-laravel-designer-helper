<?php

namespace ikepu_tp\DesignerHelper\app\Http\Resources\Form;

use ikepu_tp\DesignerHelper\app\Models\Form_element;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Form_element $resource
 */
class FormElementResource extends JsonResource
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
            "label" => $this->resource->label,
            "name" => $this->resource->name,
            "type" => (new FormSettingResource($this->resource->formSetting))->createArray(),
            "note" => $this->resource->note,
            "attributes" => (new FormElementAttrResource($this->resource->formElementAttr))->createArray(),
            "created_at" => $this->resource->created_at,
            "updated_at" => $this->resource->updated_at,
        ];
    }
}