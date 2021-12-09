import {Component, EventEmitter, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  text = '';
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter();
  textChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.textChanged.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(text => this.searchTextChange.emit(text));
  }

  onInput(text: string) {
    this.textChanged.next(text);
  }
}
