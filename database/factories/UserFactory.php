<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(\csi0n\LaravelAdminApi\System\Entities\User::class, function (Faker $faker) {
    static $password;
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(\csi0n\LaravelAdminApi\System\Entities\Menu::class, function (Faker $faker) {
    return [
        'language' => 'zh',
        'icon' => 'sidebar-menu-item-icon vuestic-icon vuestic-icon-auth',
        'sort' => 0,
        'status' => 'enable'
    ];
});

$factory->define(\csi0n\LaravelAdminApi\System\Entities\Permission::class, function (Faker $faker) {
    return [];
});

$factory->define(\csi0n\LaravelAdminApi\System\Entities\Role::class, function (Faker $faker) {
    return [];
});