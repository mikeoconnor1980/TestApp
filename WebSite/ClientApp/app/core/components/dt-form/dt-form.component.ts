import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavBarItem } from '../../models/navbar-item';

@Component({
    selector: 'dt-form',
    templateUrl: './dt-form.component.html'
})
export class DTFormComponent implements OnInit  {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        // the short way
        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        });

        // subscribe to form changes  
        this.subcribeToFormChanges();
    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: NavBarItem, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }

}
