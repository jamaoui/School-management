<?php

use App\Http\Controllers\StudentParentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum,admin,teacher'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'parents' => StudentParentController::class,
]);

require __DIR__ . '/auth.php';
