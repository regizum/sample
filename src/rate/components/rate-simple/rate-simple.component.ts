import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RateOption } from '../../rate.interface';

@Component({
  selector: 'pe-rate-simple',
  templateUrl: 'rate-simple.component.html'
})
export class RateSimpleComponent {
  @Input() title: string;
  @Input() rateOptions: RateOption[];
  @Output() selected: EventEmitter<void> = new EventEmitter<void>();

  onSelect(): void {
    this.selected.emit();
  }
}
