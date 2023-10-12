<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $foods = [
            [
                'name' => 'Hamburger',
                'image' => 'storage/images/hamburger.jpg',
                'price' => 5,
            ],
            [
                'name' => 'Pizza',
                'image' => 'storage/images/pizza.jpg',
                'price' => 10,
            ],
            [
                'name' => 'Sushi',
                'image' => 'storage/images/sushi.jpg',
                'price' => 12,
            ],
        ];
        DB::table('food')->insert($foods);
    }
}
