import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Todo } from 'src/app/custom-class/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  template: `
    Todo: {{todo}}
   `
})
export class TodoItemComponent implements OnInit {

  @Input() 
  todo:Todo = {
                  desc   : '',
                  complete : false
                };
  @Output() 
  todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() 
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  public onClick(todo:Todo) {
    console.log('deleting this component');
    console.log(todo);
    this.todoDelete.emit(todo);
  }

  public onChangeChecked(e:any,todo:Todo){
    // console.log('checkbox is clicked and status is ');
    // console.log(e.target.checked);
    // console.log(todo);
    todo.complete = e.target.checked;
    this.toggleComplete.emit(todo);
  }

  ngOnInit(): void {
  }

}
