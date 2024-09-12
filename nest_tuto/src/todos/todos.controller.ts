import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos') // listen to url localhost:3000/todos
export class TodosController {
	constructor(private readonly todosService: TodosService) {}
	
	@Get(':id') // : before id specify it's dynamic and not "id" itself
	findOne(@Param('id') id: string) {
		console.log('id', id);
		return this.todosService.findOne(id);
	}
	
	@Get()
	findAll(): Todo[]{
		return this.todosService.findAll();
	}

	@Post()
	createTodo(@Body() newTodo: CreateTodoDto){
		console.log('newTodo', newTodo);
		this.todosService.create(newTodo);
	}

	@Patch(':id') 
	updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto){
		return this.todosService.update(id, todo);
	}

	@Delete(':id')
	deleteTodo(@Param('id') id: string){
		return this.todosService.delete(id);
	}
}

