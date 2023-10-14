import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore } from 'redux';
import taskReducer from './task';
import employeesReducer from './employees';

const store = configureStore({
  reducer: {
    task: taskReducer,
    employees: employeesReducer,
  },
});

export default store;
