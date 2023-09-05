import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer';

export const selectorCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
    fromCustomer.customerFeatureKey
)

export const selectCustomers = createSelector(
    selectorCustomerState,
    (state:fromCustomer.CustomerState)=>state.customers
);