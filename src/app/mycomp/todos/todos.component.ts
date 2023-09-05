import { Component } from '@angular/core'
import { Mytodo } from '../../Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  local_item!: string | null
  todos!: Mytodo[]
  
  OnDelete(todos_item: Mytodo) {
    console.log(todos_item)
    const index = this.todos.indexOf(todos_item)
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  OnAdd(todos_add_item: Mytodo) {
    console.log(todos_add_item)
    this.todos.push(todos_add_item)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  onCheck(todos_item:Mytodo) {
    const index = this.todos.indexOf(todos_item)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  constructor() {
    this.local_item = localStorage.getItem('todos')
    if(this.local_item == null) {
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.local_item)
    }
  }
}