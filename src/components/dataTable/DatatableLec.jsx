import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import './DatatableLec.scss';

function DatatableLec() {
    const [lec, setLec] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [showDeletedList, setShowDeletedList] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [showViewForm, setShowViewForm] = useState(false);
    const [editFormValues, setEditFormValues] = useState({});
    const [formData, setFormData] = useState({
        personId: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        birthDay: '',
        phone: '',
        major: '',
        author: ''
    });
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/admin/lecturer/create', formData)
            .then(response => {
                console.log('Lecturer created successfully:', response.data);
                setShowForm(false);
                fetchLecturers(); // Reload data after creating new lecturer
            })
            .catch(error => {
                console.error('Error creating lecturer:', error);
            });
    };

    const handleAddClick = () => {
        setShowForm(true);
    };

    const handleView = (row) => {
        setSelectedRow(row);
        setEditFormValues(row);
        setShowViewForm(true);
    };

    const handleDelete = (row) => {
        setSelectedRow(row);
        setShowConfirmation(true);
    };

    const confirmDelete = () => {
        axios.post(`http://localhost:5000/api/admin/lecturer/delete/${selectedRow.id}`, {}, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setLec(prevState => prevState.filter(lecturer => lecturer.person.personId !== selectedRow.id));
                    setShowConfirmation(false);
                    setDeleteSuccess(false);
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

    const cancelDelete = () => {
        setShowConfirmation(false);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitEdit = () => {
        axios.post(`http://localhost:5000/api/admin/lecturer/edit/${selectedRow.id}`, editFormValues, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setLec(prevState => prevState.map(lecturer => {
                        if (lecturer.person.personId === selectedRow.id) {
                            return { ...lecturer, person: { ...lecturer.person, ...editFormValues } };
                        }
                        return lecturer;
                    }));
                    setShowViewForm(false);
                    console.log('Chỉnh sửa thành công');
                } else if (response.status === 404) {
                    console.log('Lecturer not found.');
                } else if (response.status === 403) {
                    console.log('Access forbidden.');
                }
            })
            .catch(error => {
                console.error("Error editing lecturer:", error);
            });
    };

    const fetchLecturers = () => {
        const tokenSt = sessionStorage.getItem('userToken');
        if (tokenSt) {
            axios.get('http://localhost:5000/api/admin/lecturer', {
                headers: {
                    'Authorization': `Bearer ${tokenSt}`,
                },
            })
                .then(response => {
                    const LecturerArray = response.data.listLecturer || [];
                    setLec(LecturerArray);
                })
                .catch(error => {
                    console.error("Error fetching lecturers:", error);
                });
        } else {
            console.log("Lỗi !!");
        }
    };

    useEffect(() => {
        fetchLecturers();
    }, []);

    const columns = [
        { field: 'id', headerName: 'Mã GV', width: 100 },
        { field: 'firstName', headerName: 'Họ', width: 150 },
        { field: 'lastName', headerName: 'Tên', width: 100 },
        { field: 'gender', headerName: 'Giới tính', width: 100 },
        { field: 'phone', headerName: 'Số điện thoại', width: 150 },
        { field: 'mail', headerName: 'Email', width: 300 },
        { field: 'status', headerName: 'Trạng thái', width: 100 },
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

    const rows = lec
        .filter(lecturer => lecturer.person.status === true)
        .map(lecturer => ({
            id: lecturer.person.personId,
            firstName: lecturer.person.firstName,
            lastName: lecturer.person.lastName,
            gender: lecturer.person.gender ? 'Nữ' : 'Nam',
            phone: lecturer.person.phone,
            mail: lecturer.person.username,
            status: lecturer.person.status,
        }));

    const deletedRows = lec
        .filter(lecturer => lecturer.person.status === false)
        .map(lecturer => ({
            id: lecturer.person.personId,
            firstName: lecturer.person.firstName,
            lastName: lecturer.person.lastName,
            gender: lecturer.person.gender ? 'Nữ' : 'Nam',
            phone: lecturer.person.phone,
            mail: lecturer.person.username,
            status: lecturer.person.status,
        }));

    return (
        <div className='homeData'>
            {(showConfirmation || deleteSuccess || showViewForm) && <div className="overlay"></div>}

            <div className='titleList'>
                <div className='tableTitle'>
                    <h3 className='title'>QUẢN LÝ GIẢNG VIÊN</h3>
                </div>
                <div className='tableTitleList'>
                    <button onClick={() => setShowDeletedList(!showDeletedList)}>
                        {showDeletedList ? 'Danh sách giảng viên' : 'Danh sách giảng viên bị xóa'}
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

            <button onClick={handleAddClick}>Add</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="personId" value={formData.personId} onChange={handleChange} placeholder="Person ID" />
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />
                    <input type="text" name="birthDay" value={formData.birthDay} onChange={handleChange} placeholder="Birth Day" />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                    <input type="text" name="major" value={formData.major} onChange={handleChange} placeholder="Major" />
                    <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" />
                    <button type="submit">Save</button>
                </form>
            )}

            {showConfirmation && (
                <div className="confirmation">
                    <p>Bạn có chắc chắn muốn xóa giảng viên {selectedRow?.firstName} {selectedRow?.lastName} không?</p>
                    <button className='btnSuccess' onClick={confirmDelete}>Xác nhận</button>
                    <button className='btnCancel' onClick={cancelDelete}>Hủy</button>
                </div>
            )}

            {showViewForm && (
                <div className="confirmation view-form">
                    <h3>Thông tin giảng viên</h3>
                    <p>Mã GV: {selectedRow?.id}</p>
                    <p>Họ và tên: {selectedRow?.firstName} {selectedRow?.lastName}</p>
                    <p>Giới tính: {selectedRow?.gender}</p>
                    <p>Số điện thoại: {selectedRow?.phone}</p>
                    <p>Email: {selectedRow?.mail}</p>
                    <div className="edit-form">
                        <input type="text" name="firstName" value={editFormValues.firstName || ''} onChange={handleEditChange} />
                        <input type="text" name="lastName" value={editFormValues.lastName || ''} onChange={handleEditChange} />
                        <input type="text" name="gender" value={editFormValues.gender || ''} onChange={handleEditChange} />
                        <input type="text" name="phone" value={editFormValues.phone || ''} onChange={handleEditChange} />
                        <input type="text" name="mail" value={editFormValues.mail || ''} onChange={handleEditChange} />

                        <button className="btnSave" onClick={handleSubmitEdit}>Lưu</button>
                        <button className='btnCancel' onClick={() => setShowViewForm(false)}>Đóng</button>
                    </div>
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
    );
}

export default DatatableLec;
