import React from 'react'
import './styleTable.scss'

function TableApprove() {
  return (
    <div>
        <div className='home-table'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên đề tài</th>
                        <th scope="col">Giảng viên hướng dẫn</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Acttion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td style={{display:'flex'}}>
                            <button style={{marginRight:'20px'}} className='button-res'><p className='text'>Duyệt</p></button>
                            <button className='button-res'><p className='text'>Xóa</p></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <button style={{marginRight:'20px'}} className='button-res'><p className='text'>Duyệt</p></button>
                            <button className='button-res'><p className='text'>Xóa</p></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <button style={{marginRight:'20px'}} className='button-res'><p className='text'>Duyệt</p></button>
                            <button className='button-res'><p className='text'>Xóa</p></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableApprove