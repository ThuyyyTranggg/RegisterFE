import React from 'react'
import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import ModalAddStudent from '../ModelAdd/ModalAddStudent';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Datatable() {
    const [student, setStudents] = useState([]);
    const [listClass, setClass] = useState([]);
    const [year, setYear] = useState([]);
    const [major, setMajor] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [showDeletedList, setShowDeletedList] = useState(false);

    const handleDelete = (row) => {
        setSelectedRow(row);
        setShowConfirmation(true);
    };

    const confirmDelete = () => {
        axios.post(`http://localhost:5000/api/admin/student/delete/${selectedRow.id}`, {}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    // Xóa thành công
                    setStudents(prevState => prevState.filter(a => a.person.personId !== selectedRow.id));
                    setShowConfirmation(false);
                    setDeleteSuccess(false);
                    window.location.reload(); // Tải lại trang web
                    console.log('Xóa thành công');
                } else if (response.status === 404) {
                    console.log('Lecturer not found.');
                } else if (response.status === 403) {
                    console.log('Access forbidden.');
                }
            })
            .catch(error => {
                console.error("Error deleting lecturer:", error);
            });
    };

    useEffect(() => {
        const tokenSt = sessionStorage.getItem('userToken');
        console.log("Token SV2: " + tokenSt);
        if (tokenSt) {
            console.log("Test: " + tokenSt);
            axios.get('http://localhost:5000/api/admin/student', {
                headers: {
                    'Authorization': `Bearer ${tokenSt}`,
                },
            })
                .then(response => {
                    console.log("DataTable: ", response.data);
                    const studentsArray = response.data.students || [];
                    setStudents(studentsArray);


                    const ClassesArray = response.data.listClass || [];
                    setClass(ClassesArray);

                    const yearArray = response.data.listYear || [];
                    setYear(yearArray);

                    const majorArray = response.data.major || [];
                    setMajor(majorArray);
                })
                .catch(error => {
                    console.error("error: ", error);
                });
        } else {
            console.log("Lỗi !!")
        }

    }, []);


    const columns = [
        { field: 'id', headerName: 'MSSV', width: 100 },
        { field: 'firstName', headerName: 'Họ', width: 150 },
        { field: 'lastName', headerName: 'Tên', width: 100 },
        { field: 'gender', headerName: 'Giới tính', width: 100 },
        { field: 'phone', headerName: 'Số điện thoại', width: 150 },
        { field: 'mail', headerName: 'Email', width: 300 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    <button className='btnView' onClick={() => handleView(params.row)}>View</button>
                    {!showDeletedList && <button className='btnDelete' onClick={() => handleDelete(params.row)}>Delete</button>}
                </div>
            ),
            headerClassName: 'customHeader',
        },
    ];

    const cancelDelete = () => {
        setShowConfirmation(false);
    };

    const handleView = (row) => {
        // Implement view action here
        console.log('View clicked for row:', row);
    };

    const rows = student.filter(a => a.person.status === true)
        .map(a => ({
            id: a.person.personId,
            firstName: a.person.firstName,
            lastName: a.person.lastName,
            gender: a.person.gender ? 'Nữ' : 'Nam',
            phone: a.person.phone,
            mail: a.person.username,
        }));

    const deletedRows = student.filter(a => a.person.status === false)
        .map(a => ({
            id: a.person.personId,
            firstName: a.person.firstName,
            lastName: a.person.lastName,
            gender: a.person.gender ? 'Nữ' : 'Nam',
            phone: a.person.phone,
            mail: a.person.username,
        }));

    return (
        <div className='homeData'>
            {(showConfirmation || deleteSuccess) && <div className="overlay"></div>}

            <div className='titleList'>
                <div className='tableTitle'>
                    <h3 className='title'>QUẢN LÝ GIẢNG VIÊN</h3>
                </div>
                <div className='tableTitleList'>
                    <button onClick={() => setShowDeletedList(!showDeletedList)}>
                        {showDeletedList ? 'Danh sách sinh viên' : 'Danh sách sinh viên bị xóa'}
                    </button>
                </div>
            </div>
            <DataGrid
                rows={showDeletedList ? deletedRows : rows}
                columns={columns}
                pagination
                rowCount={showDeletedList ? deletedRows.length : rows.length}
                paginationMode="server"
            />

            {showConfirmation && (
                <div className="confirmation">
                    <p>Bạn có chắc chắn muốn xóa giảng viên {selectedRow?.firstName} {selectedRow?.lastName} không?</p>
                    <button className='btnSuccess' onClick={confirmDelete}>Xác nhận</button>
                    <button className='btnCancel' onClick={cancelDelete}>Hủy</button>
                </div>
            )}
            {deleteSuccess && (
                <div className="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <img src="..." className="rounded me-2" alt="..." />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>Now</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Xóa thành công!
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Datatable