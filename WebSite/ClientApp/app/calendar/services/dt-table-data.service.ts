export class DTTableDataService {
  getAll(): any {
    return [{ id: '1', paramName: 'Dummy', readType: 'Post', regEx: 'd+', mapValue: '31', priority: 2 },
    { id: '2', paramName: 'Something', readType: 'GET', regEx: '&^', mapValue: '44', priority: 1 },
    { id: '3', paramName: 'Hello', readType: 'JSON', regEx: 'w+', mapValue: '333', priority: 4 },
    { id: '4', paramName: 'Goo', readType: 'XML', regEx: 'OSOSOS', mapValue: '555', priority: 6 }];
  }
}