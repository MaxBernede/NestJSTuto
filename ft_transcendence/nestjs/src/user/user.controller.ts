import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';

@Controller('Users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async findAll(): Promise<User[]> {
		// return [{ id: 1, name: 'John Doe', email: 't@test.com'}];
		return this.usersService.findAll();
	}

	@Post()
	async create(@Body() user: User): Promise<User> {
		return this.usersService.create(user);
	}

	@Get(':id') // Retrieve a single user by ID
	async findOne(@Param('id') id: number): Promise<User> {
		return this.usersService.findOne(id);
	}

	@Delete(':id') // Delete a user by ID
	async remove(@Param('id') id: number): Promise<void> {
		return this.usersService.remove(id);
	}
}
