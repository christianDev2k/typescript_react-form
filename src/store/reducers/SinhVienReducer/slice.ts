import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Form, Student } from 'types';

interface PayloadType extends Form {}

interface EditPayload {
    id: number;
    student: Form;
}

interface State {
    listStudents: Student[];
    editStudent: EditPayload | undefined;
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
        editStudent: (state, action: PayloadAction<number | undefined>) => {
            if (!action.payload) {
                state.editStudent = undefined;
                return;
            }

            const index = state.listStudents.findIndex(student => student.id === action.payload);
            const { name, phoneNumber, email } = state.listStudents[index];
            state.editStudent = { id: action.payload, student: { name, phoneNumber, email } };
        },
        updateStudent: (state, action: PayloadAction<Form>) => {
            state.listStudents = state.listStudents.map(student => {
                if (student.id === state.editStudent?.id) return { ...action.payload, id: state.editStudent?.id };
                return student;
            });
            state.editStudent = undefined;
        },
    },
});

export const { reducer: StudentsReducer, actions: StudentsActions } = ListStudentsSlice;
