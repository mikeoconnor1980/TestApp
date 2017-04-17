export class ContentEvent {
  constructor(
    public id: string,
    public displayname: string,
    public rulepack: string,
    public duedate?: Date
  ) {  }
}