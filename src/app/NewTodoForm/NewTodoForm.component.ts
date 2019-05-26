import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './NewTodoForm.component.html',
  styleUrls: ['./NewTodoForm.component.css']
})
export class NewTodoFormComponent {
  title = 'New Todo Form';
  newTodoForm: FormGroup;
  @Output() newTask = new EventEmitter<any>();

  constructor() {
    this.newTodoForm = new FormGroup({
      'task': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.newTask.emit(this.newTodoForm.value.task);
    console.log(this.newTodoForm.value);
    this.newTodoForm.reset('');
  }
}
