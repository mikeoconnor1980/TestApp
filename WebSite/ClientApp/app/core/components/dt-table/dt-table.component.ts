import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DTTableColumnDefinition } from '../../models/dt-table-column-definition';
import {OrderBy} from "./orderBy"
import {Format} from "./format"

@Component({
    selector: 'dt-table',
    templateUrl: './dt-table.component.html',
    styleUrls: ['./dt-table.component.css']
})

export class DTTableComponent implements OnInit {
    columns: DTTableColumnDefinition[] = [];
    data: any = [];
    selectedRow2: number;
    

    constructor() { }

    @Input() columnDefinitions: DTTableColumnDefinition[];
    @Input() dataMap: any[];
    @Input() sort: any;
    selectedRow: any;

    @Output() notify: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        this.columns = this.columnDefinitions;
        this.data = this.dataMap;
    }

    Sort(columnName): void {
        var sort = this.sort;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        } else {
            sort.column = columnName;
            sort.descending = false;
        }
    }

    convertSorting(): string {
        return this.sort.descending ? '-' + this.sort.column : this.sort.column;
    }

    onSelect(id) : void {
        this.selectedRow2 = id;
    }

    onSelectItem(item) : void {
        this.selectedRow = item;
        this.notify.emit(item);
    }
}