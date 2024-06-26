<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Expense>
 */
class ExpenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = Carbon::now()->subWeek(); // One week ago
        $endDate = Carbon::now(); // Today
        return [
            'type' => fake()->word(),
            'amount' => fake()->randomFloat(2, 50, 1000),
            'description' => fake()->sentence(3),
            'expense_date' => fake()->dateTimeBetween($startDate, $endDate),
        ];
    }
}
