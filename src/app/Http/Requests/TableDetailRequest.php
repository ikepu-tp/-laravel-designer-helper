<?php

namespace ikepu_tp\DesignerHelper\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TableDetailRequest extends FormRequest
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
            "name" => ["string", "required", "max:30"],
            "col_name" => ["string", "required", "max:50"],
            "table_setting.id" => ["numeric", "required"],
            "col_digits" => ["numeric", "nullable"],
            "col_nullable" => ["boolean"],
            "col_default" => ["string", "nullable"],
            "col_unique" => ["boolean"],
            "col_primary" => ["boolean"],
            "col_index" => ["boolean"],
            "note" => ["string", "nullable"],
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