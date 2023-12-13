import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";


const initialState = {
  employeeDetails:null,
  formSaveLoaderBtn: false,
  userName:null,
  userId:null
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    updateEmployeeDetails(state, action) {
      state.employeeDetails = action.payload.employeeDetails
    },
    updateUserName(state, action) {
      state.userName = action.payload.userName
    },
    updateUserId(state, action) {
      state.userId = action.payload.userId
      
    },
    
 
 
     
  },
});
