import { createAction,  props } from '@ngrx/store';
import { Customer } from 'src/app/model/customer';

export const addCustomers = createAction(
   
    '[customer] Add Customers',
    (customer:Customer)=>({customer})
    
  
);
