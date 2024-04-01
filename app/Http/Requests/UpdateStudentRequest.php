<?php

namespace App\Http\Requests;

use App\Enums\BloodEnum;
use App\Models\StudentParent;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStudentRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
          'firstname' => 'required|max:50',
          'lastname' => 'required|max:50',
          'student_parent_id' => Rule::exists(StudentParent::class,'id'),
          'date_of_birth' => 'required|date',
          'gender' => ['required', Rule::in(['m', 'f'])],
          'blood_type' => ['required', Rule::enum(BloodEnum::class)],
          'email' => 'required|email|unique:student_parents',
          'password' => 'required',
        ];
    }
}
