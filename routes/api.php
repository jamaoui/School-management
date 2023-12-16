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

Route::middleware(['auth:sanctum', 'ability:student'])->prefix('student')->group(static function () {
    Route::get('/', function (Request $request) {
        return $request->user();
    });
});

Route::middleware(['auth:sanctum', 'ability:admin'])->prefix('admin')->group(static function () {
    Route::apiResources([
        'parents' => StudentParentController::class,
    ]);

    Route::get('/', function (Request $request) {
        return $request->user();
    });
});

Route::middleware(['auth:sanctum', 'ability:teacher'])->prefix('teacher')->group(static function () {
    Route::get('/', function (Request $request) {
        return $request->user();
    });
});



require __DIR__ . '/auth.php';
