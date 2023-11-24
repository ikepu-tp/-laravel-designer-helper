<?php

namespace ikepu_tp\DesignerHelper\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScreenRequest extends FormRequest
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
            "name" => ["required", "string", "max:50"],
            "screen_class.id" => ["required", "exists:screen_classes,id"],
            "screen_progress.id" => ["required", "exists:screen_progresses,id"],
            "note" => ["string", "nullable"],
            "url" => ["string", "nullable"],
            "route_name" => ["string", "nullable"],
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