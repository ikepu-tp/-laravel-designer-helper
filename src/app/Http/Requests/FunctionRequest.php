<?php

namespace ikepu_tp\DesignerHelper\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FunctionRequest extends FormRequest
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
            "name" => ["required", "string", "max:250"],
            "function_category.id" => ["required", "exists:func_categories,id"],
            "function_user.id" => ["required", "exists:func_users,id"],
            "function_class.id" => ["required", "exists:func_classes,id"],
            "function_progress.id" => ["required", "exists:func_progresses,id"],
            "outline" => ["nullable", "string"]
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