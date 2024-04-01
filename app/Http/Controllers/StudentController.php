<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Resources\StudentResource;
use App\Models\User;
use DateTime;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
  public function index(): AnonymousResourceCollection
  {
    return StudentResource::collection(User::all());
  }

  public function store(StoreStudentRequest $request): JsonResponse
  {
    $formFields = $request->validated();
    $formFields['password'] = Hash::make($formFields['password']);
    $formFields['last_login_date'] = new DateTime();
    $student = User::create($formFields);
    $response = new StudentResource($student);
    return response()->json([
      'student' => $response,
      'message' => __('Student created successfully')
    ]);
  }

  public function update(StoreStudentRequest $request, User $student): JsonResponse
  {
    $formFields = $request->validated();
    $formFields['password'] = Hash::make($formFields['password']);
    $student->update($formFields);
    return response()->json([
      'student' => new StudentResource($student),
      'message' => __('Student updated successfully')
    ]);
  }

  public function destroy(User $student): StudentResource
  {
    $student->delete();

    return new StudentResource($student);
  }
}
