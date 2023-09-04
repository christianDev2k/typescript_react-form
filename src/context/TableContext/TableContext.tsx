import { ReactNode, createContext } from 'react';
// ~
import { useAppDispatch } from 'store';
import { StudentsActions } from 'store/reducers/SinhVienReducer/slice';

interface TableContextProps {
    children: ReactNode;
}

interface TableContextValues {
    handleDeleteStudent: (id: number) => () => void;
}

const TableContext = createContext<TableContextValues>({} as TableContextValues);

const TableProvider: React.FC<TableContextProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    // Handle delete students
    const handleDeleteStudent = (id: number) => () => {
        dispatch(StudentsActions.deleteStudent(id));
    };

    const value: TableContextValues = {
        handleDeleteStudent,
    };
    return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};

export { TableContext, TableProvider };
