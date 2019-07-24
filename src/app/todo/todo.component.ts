import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  constructor(todoService: TodoService) {
    this.todos = todoService.get();
  }

  ngOnInit() {
  }

}
