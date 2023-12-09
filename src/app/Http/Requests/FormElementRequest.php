<?php

namespace ikepu_tp\DesignerHelper\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;

class FormElementRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        if (!$this->routeIs(["*.store", "*.update"])) return [];
        return [
            "label" => ["required", "string", "max:50"],
            "name" => ["required", "string", "max:50"],
            "type.id" => ["required", "numeric", "exists:form_settings,id"],
            "note" => ["nullable", "string"],
            "attributes.placeholder" => ["nullable", "string", "max:250"],
            "attributes.default_value" => ["nullable", "string", "max:250"],
            "attributes.attr_required" => ["required", "boolean"],
            "attributes.attr_min" => ["required", "numeric"],
            "attributes.attr_max" => ["required", "numeric"],
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes(): array
    {
        return [];
    }
}