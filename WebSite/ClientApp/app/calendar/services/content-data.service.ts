export class ContentDataService {
  getAll(): any {
    return [{ id: 'eukc_file', displayname: 'CT Filing', rulepack: 'eukc', duedate: '12/31/2016' },
    { id: 'eukc_pay_1', displayname: 'CT Payment 1', rulepack: 'eukc', duedate: '03/31/2016' },
    { id: 'eukc_pay_2', displayname: 'CT Payment 2', rulepack: 'eukc', duedate: '06/30/2016' },
    { id: 'eukc_pay_3', displayname: 'CT Payment 3', rulepack: 'eukc', duedate: '09/30/2016' },
    { id: 'eukc_pay_4', displayname: 'CT Payment 4', rulepack: 'eukc', duedate: '12/31/2016' }];
  }
}