import {Component,ViewChild} from '@angular/core';
import {DTTableComponent} from '../../../core/components/dt-table/dt-table.component';
import { DTTableColumnDefinition } from '../../../core/models/dt-table-column-definition';
import { DTTableColumnDefinitionService } from '../../services/dt-table-column-definition.service';
import { DTTableDataService } from '../../services/dt-table-data.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    columns: DTTableColumnDefinition[] = [];
    data: any = [];
    sort: any = {
        column: 'paramName', //to match the variable of one of the columns
        descending: false
    };

   constructor(private columnService : DTTableColumnDefinitionService, 
    private dataService : DTTableDataService){ }

//Through this we can access the child component through _AutoGrid
@ViewChild(DTTableComponent)  private _DTTableComponent:DTTableComponent;

//Load the data into the child component
//Cannot be done inside constructor as you don't have access to ViewChild in constructor

ngOnInit(){
    this.columns = this.columnService.getAll();
    this.data = this.dataService.getAll();    
  }
}
