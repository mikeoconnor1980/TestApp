import {Component,ViewChild} from '@angular/core';
import {DTTableComponent} from '../../../core/components/dt-table/dt-table.component';
import { DTTableColumnDefinition } from '../../../core/models/dt-table-column-definition';
import { ContentDataDefinitionService } from '../../services/content-data-definition.service';
import { ContentDataService } from '../../services/content-data.service';

/*import { DTTableColumnDefinitionService } from '../../services/dt-table-column-definition.service';
import { DTTableDataService } from '../../services/dt-table-data.service';*/

@Component({
    selector: 'content',
    templateUrl: './content.component.html'
})
export class ContentComponent {
    columns: DTTableColumnDefinition[] = [];
    data: any = [];
    sort: any = {
        column: 'id', //to match the variable of one of the columns
        descending: false
    };

   constructor(private columnService : ContentDataDefinitionService, 
    private dataService : ContentDataService){ }
/*constructor(private columnService : DTTableColumnDefinitionService, 
    private dataService : DTTableDataService){ }*/

//Through this we can access the child component through _AutoGrid
@ViewChild(DTTableComponent)  private _DTTableComponent:DTTableComponent;

//Load the data into the child component
//Cannot be done inside constructor as you don't have access to ViewChild in constructor

ngOnInit(){
    this.columns = this.columnService.getAll();
    this.data = this.dataService.getAll();    
  }
}
