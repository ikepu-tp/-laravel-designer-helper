<?php

namespace ikepu_tp\DesignerHelper\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TableSettingRequest extends FormRequest
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
            "model_cast" => ["required", "string", "max:50"],
            "db_type" => ["required", "string", "max:50"],
            "php_type" => ["required", "string", "max:50"],
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