import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ForSaleComponent }   from './forsale.component';

const routes: Routes = [
    {
        path: '',
        component: ForSaleComponent,
        data: {
            title: 'ForSale'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForSaleRoutingModule {}
