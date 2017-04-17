import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContentEvent }    from '../../models/content-event';

@Component({
  selector: 'content-event-form',
  templateUrl: './content-event-form.component.html',
  styleUrls: ['./content-event-form.component.css']
})
export class ContentEventFormComponent {

  rulepacks = ['eukc', 'ebec', 'dtwf', 'efrc'];
  
  submitted = false;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Input() item: ContentEvent;

  onSubmit() 
  { 
    this.submitted = true; 
    this.submit.emit(this);
  }

  newContentEvent() {
    this.item = new ContentEvent('','', '');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.item); }
}