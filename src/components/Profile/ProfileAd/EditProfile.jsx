import { useState, useEffect } from 'react'
import React from 'react'
import './EditProfile.scss'
import axios from 'axios';
import { getTokenFromUrlAndSaveToStorage } from '../../tokenutils';


function EditProfile() {
    const [admin, setAdmin] = useState([]);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const userToken = getTokenFromUrlAndSaveToStorage();
        console.log("Token: " + userToken);
        if (userToken) {
            // Lấy token từ storage
            const tokenSt = sessionStorage.getItem(userToken);

            if (!tokenSt) {
                axios.get('http://localhost:5000/api/admin/home', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    },
                })
                    .then(response => {
                        // Xử lý response từ backend (nếu cần)
                        console.log("User: ", response.data);
                        setAdmin(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }, []);

    function formatDateStringForInput(dateString) {
        if (!dateString) {
            return "";  // or handle accordingly based on your requirements
        }

        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');

        return `${day}/${month}/${year}}`;
    }
    console.log("Formatted Date: ", formatDateStringForInput(admin.birthDay));

    const handleUpdateButton = () => {
        setEditMode(true);
    }

    return (
        <div className='profile'>
            <div class="container rounded bg-white mt-2 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">{admin.firstName + ' ' + admin.lastName}</span><span class="text-black-50">{admin.username}</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">TRANG CÁ NHÂN</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Tên</label><input type="text" class="form-control" value={admin.firstName} readOnly={!editMode}/></div>
                                <div class="col-md-6"><label class="labels">Họ</label><input type="text" class="form-control" value={admin.lastName} /></div>
                            </div>
                            <div class="row mt-3">

                                <div class="col-md-6"><label class="labels">Ngày sinh</label><input type="date" class="form-control" value={formatDateStringForInput(admin.birthDay)} /></div>
                                <div class="col-md-6"><label class="labels">Giới tính</label><input type="text" class="form-control" value={admin.gender == false ? 'Nam' : 'Nữ'} /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Số điện thoại</label><input type="text" class="form-control" value={admin.phone} /></div>
                                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" class="form-control" placeholder="nhập địa chỉ" value="" /></div>
                                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="nhập email" value={admin.username} /></div>
                                <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value="" /></div>
                                <div class="col-md-12"><label class="labels">Ghi chú</label><input type="text" class="form-control" placeholder="nhập ghi chú" value="" /></div>
                            </div>
                            <div class="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button" onClick={handleUpdateButton}>
                                    {editMode ? 'Lưu thông tin' : 'Cập nhật'}
                                </button>                           
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile