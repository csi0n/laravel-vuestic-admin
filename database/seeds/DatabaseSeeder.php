<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call( UsersSeeder::class );
        $this->call( MenusSeeder::class );
        $this->call( PermissionsSeeder::class );
        $this->call( RolesSeeder::class );
    }
}
