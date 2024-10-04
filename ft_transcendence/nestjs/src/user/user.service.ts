import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async findAll(): Promise<User[]> {
		return this.userRepository.find();
	}

	async create(user: User): Promise<User> {
		return this.userRepository.save(user);
	}

	async findOne(id: number): Promise<User> {
		// Logic to find a user by ID
		return
	}

	// Implement update i'm not sure how
	async update(id: number, user: User): Promise<User> {
		// Logic to update a user
		return
	}

	async remove(id: number): Promise<void> {
		// Logic to delete a user
		return
	}
}
