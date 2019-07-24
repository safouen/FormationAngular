import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {Todo} from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // @ts-ignore
  private todos: Todo[];
  constructor(private logger: LoggerService) { }
  log(todo: Todo) {
    this.logger.logger(todo.nom + ' : ' + todo.contenu);
  }
  add(todo: Todo) {
    this.todos.push(todo) ;
  }
  get() {
    return this.todos ;
  }
  delete(todo: Todo) {
    const index = this.todos.indexOf(todo) ;
    // tslint:disable-next-line:triple-equals
    if (index != -1) {
      this.todos.slice(index, 1) ;
    }

  }
}
