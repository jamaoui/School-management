<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
  public function toArray(Request $request)
  {
    $student = parent::toArray($request);
    $student['formatted_updated_at'] = $this->resource->updated_at->diffForHumans();
    return $student;
  }
}
