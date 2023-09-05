import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { selectCustomers } from 'src/app/customer/store/selector/customer.selectors';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {
   customers$!:Observable<Customer[]>;
   constructor(private store:Store)
   {
    this.customers$=this.store.pipe(select(selectCustomers))
   }
}
