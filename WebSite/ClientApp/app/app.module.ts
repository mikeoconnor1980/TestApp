import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent, HomeComponent, ContentComponent, FetchDataComponent, CounterComponent, ContentEventFormComponent} from  './calendar/index';
import { DTTableDataService, NavBarItemService, DTTableColumnDefinitionService, ContentDataService, ContentDataDefinitionService } from  './calendar/index';
import { DTTableComponent, DTFormComponent, NavMenuComponent, NavBarComponent, NavBarItemListComponent} from  './core/index';
import { OrderBy, Format } from  './core/index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    bootstrap: [ AppComponent ],
        providers: [
        NavBarItemService, DTTableColumnDefinitionService, DTTableDataService, ContentDataService, ContentDataDefinitionService
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        NavBarComponent,
        NavBarItemListComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent, ContentComponent, ContentEventFormComponent,
        DTTableComponent,
        DTFormComponent, OrderBy, Format
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'content', component: ContentComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
