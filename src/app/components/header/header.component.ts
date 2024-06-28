import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() state?: boolean;
  @Output() toggle = new EventEmitter<boolean>();

  cambiar() {
    this.state = !this.state;
    this.toggle.emit(this.state);
  }
}
