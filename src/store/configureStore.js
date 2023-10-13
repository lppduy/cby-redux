import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore } from 'redux';
import reducer from './task';

const store = configureStore({ reducer });
export default store;
