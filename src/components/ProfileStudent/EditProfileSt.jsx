import React from 'react'
import './EditProfileSt.scss'

function EditProfileSt() {
  return (
    <div>
        <div className='profile'>
            <div class="container rounded bg-white mt-2 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Nguyễn Thị Thùy Trang</span><span class="text-black-50">admin@mail.com.my</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">TRANG CÁ NHÂN</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Tên</label><input type="text" class="form-control" placeholder="Nhập tên" value=""/></div>
                                <div class="col-md-6"><label class="labels">Họ</label><input type="text" class="form-control" value="" placeholder="Nhập họ"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><label class="labels">Ngày sinh</label><input type="date" class="form-control" placeholder="ngày sinh" value=""/></div>
                                <div class="col-md-6"><label class="labels">Giới tính</label><input type="text" class="form-control" value="" placeholder="Giới tính"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Số điện thoại</label><input type="text" class="form-control" placeholder="nhập số điện thoại" value=""/></div>
                                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" class="form-control" placeholder="nhập địa chỉ" value=""/></div>
                                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="nhập email" value=""/></div>
                                <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""/></div>
                                <div class="col-md-12"><label class="labels">Ghi chú</label><input type="text" class="form-control" placeholder="nhập ghi chú" value=""/></div>
                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfileSt