import { Component, Input, OnInit } from '@angular/core';
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
    selectedRow: number;

    constructor() { }

    @Input() columnDefinitions: DTTableColumnDefinition[];
    @Input() dataMap: any[];
    @Input() sort: any;

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
        this.selectedRow = id;
    }
}