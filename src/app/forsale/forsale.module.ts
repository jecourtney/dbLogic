import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { ForSaleComponent }       from './forsale.component';
import { ForSaleRoutingModule }   from './forsale-routing.module';

@NgModule({
    imports: [
        ForSaleRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ForSaleComponent 
    ]
})
export class ForSaleModule { }
