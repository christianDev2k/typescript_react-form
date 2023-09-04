import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'types';

interface State {
    listStudents: Student[];
    editStudent: Student | undefined;
}

interface PayloadType {
    name: string;
    phoneNumber: string;
    email: string;
}

interface EditPayload {
    id: number;
    student: Student;
}

const initialState: State = {
    listStudents: [],
    editStudent: undefined,
};

const ListStudentsSlice = createSlice({
    name: 'StudentsSlice',
    initialState,
    reducers: {
        addStudent: (state, action: PayloadAction<PayloadType>) => {
            state.listStudents.push({ ...action.payload, id: state.listStudents.length + 1 });
        },
        deleteStudent: (state, action: PayloadAction<number>) => {
            state.listStudents = state.listStudents.filter(student => {
                if (student.id !== action.payload) return student;
            });
        },
        editStudent: (state, action: PayloadAction<Student>) => {
            state.editStudent = action.payload;
        },
        updateStudent: (state, action: PayloadAction<EditPayload>) => {
            state.listStudents = state.listStudents.map(student => {
                if (student.id === action.payload.id) return action.payload.student;
                return student;
            });
        },
    },
});

export const { reducer: StudentsReducer, actions: StudentsActions } = ListStudentsSlice;
