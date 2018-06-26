import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent},
  { path: '',redirectTo:'table',pathMatch:'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
