import React from 'react'
import './styleRegis.scss'

function TableRegis() {
    return (
        <div className='homeRegis'>
            <div className='title'>
                <h3>ĐĂNG KÝ ĐỀ TÀI</h3>
            </div>
            <div className='menuItems'>
                <div className='name'>
                    <label className='lable' htmlFor="">Tên đề tài: </label>
                    <input className='form-control'></input>
                </div>
                <div className='requiment'>
                    <label className='lable' htmlFor="">Yêu cầu: </label>
                    <input className='form-control'></input>
                </div>
                <div className='result'>
                    <label className='lable' htmlFor="">Kết quả mong muốn: </label>
                    <input className='form-control'></input>
                </div>
                <div className='groupStudent'>
                    <label className='groups'>Nhóm sinh viên thực hiện: </label>
                    <div className='student1'>
                        <label className='lable' htmlFor="">Sinh viên 1: </label>
                        <input className='form-control'></input>
                    </div>
                    <div className='student2'>
                        <label className='lable' htmlFor="">Sinh viên 2: </label>
                        <input className='form-control'></input>
                    </div>
                </div>
            </div>
            <div className='footerForm'>
                <div>
                    <button>Đăng ký</button>
                </div>
            </div>
        </div>
    )
}

export default TableRegis