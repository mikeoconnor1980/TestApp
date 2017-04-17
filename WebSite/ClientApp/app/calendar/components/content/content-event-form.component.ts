import { Component } from '@angular/core';
import { ContentEvent }    from '../../models/content-event';

@Component({
  selector: 'content-event-form',
  templateUrl: './content-event-form.component.html',
  styleUrls: ['./content-event-form.component.css']
})
export class ContentEventFormComponent {

  rulepacks = ['eukc', 'ebec', 'dtwf', 'efrc'];

  model = new ContentEvent('eukc_file', 'CT Filing', this.rulepacks[0], new Date('12/31/2016'));
  
  submitted = false;

  onSubmit() { this.submitted = true; }

  newContentEvent() {
    this.model = new ContentEvent('','', '');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}