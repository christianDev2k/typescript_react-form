import { ReactNode, createContext } from 'react';

interface TableContextProps {
    children: ReactNode;
}

interface TableContextValues {}

const TableContext = createContext<TableContextValues | null>(null);

const TableProvider: React.FC<TableContextProps> = ({ children }) => {
    const value: TableContextValues = {};
    return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};

export { TableContext, TableProvider };
