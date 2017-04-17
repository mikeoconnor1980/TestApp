import { DTTableColumnDefinition } from '../../core/models/dt-table-column-definition';

export class DTTableColumnDefinitionService {
  getAll(): DTTableColumnDefinition[] {
    return [
      { colName: "Key", dataType: "string", sortable: true },
      { colName: "paramName",  dataType: "string", sortable: true },
      { colName: "readType",  dataType: "string", sortable: false },
      { colName: "regEx",  dataType: "string", sortable: true },
      { colName: "mapValue",  dataType: "string", sortable: true },
      { colName: "priority",  dataType: "number", sortable: true }];
  }
}

