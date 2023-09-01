import { combineReducers } from '@reduxjs/toolkit';
import { StudentsReducer } from './SinhVienReducer/slice';

export const rootReducer = combineReducers({
    StudentsReducer,
});
