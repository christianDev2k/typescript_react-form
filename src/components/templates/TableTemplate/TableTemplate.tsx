import { useSelector } from 'react-redux';
// ~
import { ButtonStyled } from 'assets';
// import { StudentsReducer } from 'store/reducers/SinhVienReducer/slice';
import './table.module.scss';

const TableTemplate = () => {
    // Dòng này báo lỗi state is of type 'unknown'
    const { listStudents } = useSelector(state => state.StudentsReducer);

    return (
        <div className='max-w-screen-lg mx-auto border mt-4'>
            <div className='p-4'>
                <label htmlFor='search' className='block font-medium leading-6 text-gray-900'>
                    Tìm kiếm:
                </label>
                <div className='flex items-center mt-1'>
                    <input
                        type='text'
                        id='search'
                        placeholder='Nguyễn Văn A'
                        className='block w-1/2 mr-2 rounded-md border border-gray-400 py-1.5 px-2 text-gray-900'
                    />
                    <ButtonStyled $type='success'>Tìm kiếm</ButtonStyled>
                    {/* {searchResults?.length ? (
                        <ButtonStyled type='danger' onClick={handleCancelSearch} className='ml-2'>
                            Hủy bỏ
                        </ButtonStyled>
                    ) : null} */}
                </div>
            </div>

            <table className='w-full'>
                <thead className='bg-slate-900 text-white font-bold'>
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {listStudents.map(student => (
                        <tr key={listStudents.id}>
                            <td>{listStudents.id}</td>
                            <td>{listStudents.name}</td>
                            <td>{listStudents.phoneNumber}</td>
                            <td>{listStudents.email}</td>
                            <td className='text-center'>
                                <ButtonStyled $type='success' className='mr-2'>
                                    Sửa
                                </ButtonStyled>
                                <ButtonStyled $type='danger'>Xóa</ButtonStyled>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default TableTemplate;
