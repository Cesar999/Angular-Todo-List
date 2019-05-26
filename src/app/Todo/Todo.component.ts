import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './Todo.component.html',
  styleUrls: ['./Todo.component.css']
})
export class TodoComponent {
  title = 'todo';
  isEditing = false;
  @Input() todo;
  @Output() removeTask = new EventEmitter<any>();
  @Output() editTask = new EventEmitter<any>();
  editForm: FormGroup;

  constructor() {
    this.editForm = new FormGroup({
      'task': new FormControl(null, [Validators.required])
    });
  }

  onRemove() {
    this.removeTask.emit(this.todo.id);
  }

  onEdit() {
    if (!this.isEditing) {
      this.editForm.get('task').setValue(this.todo.task);
    }
    this.isEditing = !this.isEditing;
  }

  onUpdate() {
    this.editTask.emit({newTask: this.editForm.value.task, id: this.todo.id});
    this.onEdit();
  }

  toggleComplete() {
    this.todo.completed = !this.todo.completed;
  }
}
