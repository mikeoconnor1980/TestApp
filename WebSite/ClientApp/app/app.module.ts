import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent, HomeComponent, FetchDataComponent, CounterComponent} from  './calendar/index';
import { DTTableDataService, NavBarItemService, DTTableColumnDefinitionService} from  './calendar/index';
import { DTTableComponent, DTFormComponent, NavMenuComponent, NavBarComponent, NavBarItemListComponent} from  './core/index';
import { OrderBy, Format } from  './core/index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    bootstrap: [ AppComponent ],
        providers: [
        NavBarItemService, DTTableColumnDefinitionService, DTTableDataService
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        NavBarComponent,
        NavBarItemListComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        DTTableComponent,
        DTFormComponent, OrderBy, Format
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
