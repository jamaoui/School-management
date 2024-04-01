<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    User::factory(10)->create();

    User::factory()->create([
      'firstname' => 'Jamaoui',
      'lastname' => 'Mouad',
      'email' => 'mouad@jamaoui.com',
      'password' => '123456789'
    ]);

    Admin::factory()->create([
      'firstname' => 'Admin',
      'lastname' => 'Admin',
      'date_of_birth' => fake()->date(),
      'address' => fake()->address(),
      'phone' => substr(fake()->phoneNumber(), 10),
      'email' => 'admin@admin.admin',
      'password' => '$2y$10$ssjzkveLo5cC10ktCfJgvOtQcKsE0DuRmjijCBciikjPApZRyJHie'
    ]);

    Teacher::factory()->create([
      'firstname' => 'Teacher',
      'lastname' => 'Teacher',
      'date_of_birth' => fake()->date(),
      'address' => fake()->address(),
      'phone' => substr(fake()->phoneNumber(), 10),
      'email' => 'teacher@teacher.teacher',
      'password' => '$2y$10$ssjzkveLo5cC10ktCfJgvOtQcKsE0DuRmjijCBciikjPApZRyJHie'
    ]);
  }
}
