import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/custom-class/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output()
  addTodo:EventEmitter <Todo> = new EventEmitter();

  desc:string='';

  constructor() { }

  ngOnInit(): void {
  }

  public onClickAddTodo(){
    
    // check if input field is not empty
    if( this.desc.length <= 0){
      return alert('Please enter some text.');
    }
    const todo = {
      desc : this.desc,
      complete : false,
    }

    this.addTodo.emit(todo);
    console.log(todo);
    console.log('Clicked');
    this.desc = '';
  }
}
