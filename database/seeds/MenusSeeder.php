<?php

use Illuminate\Database\Seeder;

class MenusSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		$userManage = factory( \csi0n\LaravelAdminApi\System\Entities\Menu::class)->create( [
			'pid' => 0,
			'name' => '用户管理',
			'slug' => 'system.user.manage',
			'url' => 'system.user.manage',
			'description' => '用户管理',
			'icon'=>'glyphicon glyphicon-user'
		] );
		factory( \csi0n\LaravelAdminApi\System\Entities\Menu::class )->create( [
			'pid' => $userManage->id,
			'name' => '用户列表',
			'slug' => 'system.user.lists',
			'url' => 'system.user.lists',
			'description' => '用户列表',
		] );

		$permissionManage = factory(\csi0n\LaravelAdminApi\System\Entities\Menu::class)->create([
			'pid' => 0,
			'name' => '权限管理',
			'url' => 'system.permission.manage',
			'slug' => 'system.permission.manage',
			'description'=>'权限管理',
			'icon'=>'fa fa-archive'
		]);

		factory(\csi0n\LaravelAdminApi\System\Entities\Menu::class)->create([
			'pid' => $permissionManage->id,
			'name' => '权限列表',
			'url' => 'system.permission.lists',
			'slug' => 'system.permission.lists',
			'description'=>'权限列表'
		]);

		$roleManage = factory(\csi0n\LaravelAdminApi\System\Entities\Menu::class)->create([
			'pid' => 0,
			'name' => '角色管理',
			'url' => 'system.role.manage',
			'slug' => 'system.role.manage',
			'description'=>'角色管理',
			'icon'=>'fa fa-group'
		]);

		factory(\csi0n\LaravelAdminApi\System\Entities\Menu::class)->create([
			'pid' => $roleManage->id,
			'name' => '角色列表',
			'url' => 'system.role.lists',
			'slug' => 'system.role.lists',
			'description'=>'角色列表'
		]);

		$menuManage=factory(\csi0n\LaravelAdminApi\System\Entities\Menu::class)->create([
			'pid'=>0,
			'name'=>'菜单管理',
			'url'=>'system.menu.manage',
			'slug'=>'system.menu.manage',
			'description'=>'菜单管理',
			'icon'=>'glyphicon glyphicon-tasks'
		]);

		factory(\csi0n\LaravelAdminApi\System\Entities\Menu::class)->create([
			'pid'=>$menuManage->id,
			'name'=>'菜单列表',
			'url'=>'system.menu.lists',
			'slug'=>'system.menu.lists',
			'description'=>'菜单管理'
		]);
	}
}
