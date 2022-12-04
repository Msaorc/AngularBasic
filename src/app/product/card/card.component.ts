import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() productInput: any = {}
  @Output() cardEmitEvent = new EventEmitter()

  foiClicado(){
    this.cardEmitEvent.emit(`Nome do produto:${this.productInput.title}`)
  }
}
