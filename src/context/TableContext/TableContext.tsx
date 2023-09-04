import { ReactNode, createContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
// ~
import { useAppDispatch, useAppSelector } from 'store';
import { StudentsActions } from 'store/reducers/SinhVienReducer/slice';
import { Student } from 'types';

interface TableContextProps {
    children: ReactNode;
}

interface TableContextValues {
    handleDeleteStudent: (id: number) => () => void;
    handleEditStudent: (id: number) => () => void;
    onSubmit: SubmitHandler<{ searchByName: string }>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSearchResult: any;
    searchResult: Student[];
}

const TableContext = createContext<TableContextValues>({} as TableContextValues);

const TableProvider: React.FC<TableContextProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { listStudents } = useAppSelector(state => state.StudentsReducer);

    const [searchResult, setSearchResult] = useState<Student[] | []>([]);

    // Handle delete students
    const handleDeleteStudent = (id: number) => () => {
        dispatch(StudentsActions.deleteStudent(id));
    };

    // Handle edit student
    const handleEditStudent = (id: number) => () => {
        dispatch(StudentsActions.editStudent(id));
    };

    // Handle search
    const handleSearch = (value: string) => {
        return listStudents.filter(student => student.name.toLowerCase().includes(value.trim().toLowerCase()));
    };

    const onSubmit: SubmitHandler<{ searchByName: string }> = value => {
        const searchResult = handleSearch(value.searchByName);
        setSearchResult(searchResult);
    };

    // Value context
    const value: TableContextValues = {
        handleDeleteStudent,
        handleEditStudent,
        onSubmit,
        setSearchResult,
        searchResult,
    };
    return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};

export { TableContext, TableProvider };
