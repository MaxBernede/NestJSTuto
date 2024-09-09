import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
	todos: Todo[] =[
		{
			id: 1,
			title: 'todos app',
			description: 'Create NestJS todos app',
			done: false,
		},
		{
			id: 2,
			title: 'bread',
			description: 'buy bread',
			done: true,
		},
		{
			id: 3,
			title: 'wine',
			description: 'buy wine',
			done: true,
		},
	];

	findAll(): Todo[]{
		return this.todos;
	}
	
	findOne(id: string): Todo{
		return this.todos.find(todo => todo.id === Number(id));
	}

	create(todo: CreateTodoDto){
		this.todos = [...this.todos, todo]; // Psychopath syntax btw
	}

	update(id:string, todo: Todo) {
		//retrieve todo to update
		const todoToUpdate = this.todos.find(t => t.id === +id) //+ is like Number to typecast
		if (!todoToUpdate){
			return new NotFoundException('boooo did you find this todo')
		}
		if (todo.hasOwnProperty('done')){ // It's boolean so it would always or never enter here
			todoToUpdate.done = todo.done
		}
		if (todo.title){
			todoToUpdate.title = todo.title;
		}
		if (todo.description){
			todoToUpdate.description = todo.description;
		}
		const updatedTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
		this.todos = [...updatedTodos];
		return { updatedTodos: 1, todo: todoToUpdate};
		//apply modifs
	}

	delete(id:string){
		const nbOfTodosBeforeDelete = this.todos.length;
		this.todos = [...this.todos.filter(t => t.id !== +id)]
		const nbOfTodosAfterDelete = this.todos.length;
		return {nbOfTodosBeforeDelete, nbOfTodosAfterDelete}
	}
}
