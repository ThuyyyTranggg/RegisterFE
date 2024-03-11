import React, { useState } from 'react'
import SidebarHead from '../../components/Sidebar/SidebarHead'
import Navbar from '../../components/Navbar/Navbar'
import './MannageHead.scss'

function MannageHead() {
  const [selectedTitle, setSelectedTitle] = useState(''); // Trạng thái ban đầu

  const handleDropdownClick = (title) => {
    setSelectedTitle(title); // Cập nhật trạng thái khi click vào dropdown
  };
  return (
    <div className='homeManagement'>
      <SidebarHead />
      <div className='managementContext'>
        <Navbar />
        <hr />
        <div className='context-menu'>
          <div className='contaxt-title'>
            <div className='title-re'>
              <h3>QUẢN LÝ ĐỀ TÀI</h3>
              <hr></hr>
            </div>
          </div>
          <div className='context-nd'>
            <div className='card-nd'>
              <div class="dropdown">
                <div class="dropdown-title">Duyệt đề tài</div>
                <div class="dropdown-content">
                  <a href="#" onClick={() => handleDropdownClick('Duyệt đề tài-Tiểu luận chuyên ngành')}>Tiểu luận chuyên ngành</a>
                  <a href="#" onClick={() => handleDropdownClick('Duyệt đề tài-Khóa luận tốt nghiệp')}>Khóa luận tốt nghiệp</a>
                </div>
              </div>
              <div class="dropdown">
                <div class="dropdown-title">Phân Giảng viên phản biện</div>
                <div class="dropdown-content">
                  <a href="#" onClick={() => handleDropdownClick('Phân giảng viên phản biện - Tiểu luận chuyên ngành')}>Tiểu luận chuyên ngành</a>
                  <a href="#" onClick={() => handleDropdownClick('Duyệt đề tài')}>Khóa luận tốt nghiệp</a>
                </div>
              </div>
              <div class="dropdown">
                <div class="dropdown-title">Đăng ký đề tài</div>
                <div class="dropdown-content">
                  <a href="#" onClick={() => handleDropdownClick('Duyệt đề tài')}>Tiểu luận chuyên ngành</a>
                  <a href="#" onClick={() => handleDropdownClick('Duyệt đề tài')}>Khóa luận tốt nghiệp</a>
                </div>
              </div>
            </div>
          </div>
          <div className='context-nd'>
            <div className="form-title">
              <hr className="line" />
              <span>Đăng ký</span>
              <hr className="line" />
            </div>
            <div className='card-nd'>
              <div className='title-nd'>{selectedTitle}</div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MannageHead