import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NewReceiptComponent } from './new-receipt/new-receipt/new-receipt.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'new-receipt', component: NewReceiptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
