import { Injectable } from '@angular/core';
import { DTTableColumnDefinition } from '../../core/models/dt-table-column-definition';

@Injectable()
export class ContentDataDefinitionService {
  getAll(): DTTableColumnDefinition[] {
    return [
      { colName: "id", dataType: "string", sortable: true },
      { colName: "displayname",  dataType: "string", sortable: true },
      { colName: "rulepack",  dataType: "string", sortable: false },
      { colName: "duedate",  dataType: "date", sortable: true }];
  }
}

