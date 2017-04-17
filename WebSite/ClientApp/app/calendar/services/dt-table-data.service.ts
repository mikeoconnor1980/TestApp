export class DTTableDataService {
  getAll(): any {
    return [{ Key: '1', paramName: 'Dummy', readType: 'Post', regEx: 'd+', mapValue: '31', priority: 2 },
    { Key: '2', paramName: 'Something', readType: 'GET', regEx: '&^', mapValue: '44', priority: 1 },
    { Key: '3', paramName: 'Hello', readType: 'JSON', regEx: 'w+', mapValue: '333', priority: 4 },
    { Key: '4', paramName: 'Goo', readType: 'XML', regEx: 'OSOSOS', mapValue: '555', priority: 6 }];
  }
}