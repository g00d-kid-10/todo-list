import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mytodo } from 'src/app/Todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title!: string
  desc!: string
  @Output() Add_event = new EventEmitter<Mytodo>()

  OnSubmit(iteminfo:NgForm) {
    const todo_item = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    
    console.log(todo_item)
    this.Add_event.emit(todo_item)
    iteminfo.reset()
  }
}