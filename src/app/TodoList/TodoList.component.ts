import { Component } from '@angular/core';
import uuid from 'uuid/v4';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.css']
})
export class TodoListComponent {
  title = 'Todo List';
  todos = [
    {task: 'Some Task 1', completed: false, id: uuid()},
    {task: 'Some Task 2', completed: false, id: uuid()},
    {task: 'Some Task 3', completed: false, id: uuid()}
  ];

  onNewTask(data) {
    const newTask = {task: data, completed: false, id: uuid()}
    this.todos = [...this.todos, newTask];
  }

  onRemoveTask(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  onEditTask({id, newTask}) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, task: newTask};
      } else {
        return todo;
      }
    });
  }

  drop(event) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

}
