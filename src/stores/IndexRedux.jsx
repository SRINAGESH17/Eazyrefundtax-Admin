
import {configureStore} from '@reduxjs/toolkit';
import { employeeSlice } from './EmployeeRedux';


const store = configureStore({
    reducer : { employee: employeeSlice.reducer}
});


export const employeeActions = employeeSlice.actions;

export default store;