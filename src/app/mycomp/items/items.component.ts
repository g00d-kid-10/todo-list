import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mytodo } from '../../Todo';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() todos_item!: Mytodo
  @Input() i!: number
  @Output() delete_event = new EventEmitter<Mytodo>()
  @Output() checkToggleEvent = new EventEmitter<Mytodo>()
  
  OnClick(todos_item: Mytodo) {
    this.delete_event.emit(todos_item)
    // console.log("Remove has been triggered")
  }

  toggleDone(todos_item: Mytodo) {
    this.checkToggleEvent.emit(todos_item)
  }
}