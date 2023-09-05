import { createReducer, on } from '@ngrx/store';
import * as  CustomerActions  from 'src/app/customer/store/action/customer.actions';
import { Customer } from 'src/app/model/customer';
export const customerFeatureKey = 'customer';

export interface CustomerState {
   customers:Customer[];
}

export const initialState: CustomerState = {
   customers:[]
};

export const CustomerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomers,(state:CustomerState,{customer})=>(
    {
       ...state,
       customers:[...state.customers,customer]
    }
  ))
);

