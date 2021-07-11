import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/custom-class/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title:string;
  todos:Todo[];
  constructor() { 
    this.title="Todo";
    this.todos=[];
    // this.todos=[
    //   { 
    //     desc:"Need to do my laundary",
    //     complete:false
    //   },
    //   { 
    //     desc:"Have to buy some groceries",
    //     complete:false
    //   },
    //   { 
    //     desc:"santosh",
    //     complete:false
    //   },
    //   { 
    //     desc:"Today i have to do my work urgently",
    //     complete:true
    //   },
    // ];
  }

  // Delete todos
  public deleteTodo(data:Todo){
    
    this.todos = this.todos.filter((elm)=>{
        return elm != data;
    });
  }

  // Mark todo's complete
  public toggleComplete(todo:Todo){
    
  //  console.log('toggle complete todo');
  //  console.log(todo);
   this.todos.forEach((e,i)=>{
      if(e==todo){
          e.complete=todo.complete;
      }
   });

  //  console.log(this.todos);
  }

  // Add new todo's
  public addTodo(todo:Todo){
    console.log('inside todo parent component');
    this.todos.push(todo);
  }

  ngOnInit(): void {
  }

}
