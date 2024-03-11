import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './SidebarAdmin.scss'
import { useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getAdminUser } from '../../actions/Admin/ActionOf Admin';
import { data } from 'jquery';

function SidebarAdmin() {
  const [isSidebarToggled, setSidebarToggled] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(false);
  const [person, setPerson] = useState({});

  const handleSidebarToggle = () => {
      setSidebarToggled(!isSidebarToggled);
  };

  const handleMenuItemClick = (menuItem) => {
      setSelectedMenuItem(menuItem);
  };

  // Gọi API khi component được tải
  useEffect(() => {
      const fetchData = async () => {
          try {
              const adminUserData = await getAdminUser();
              setPerson(adminUserData);
              console.log('Dữ liệu từ API:', adminUserData);
          } catch (error) {
              console.error('Lỗi khi gọi API:', error);
          }
      };

      fetchData();
  }, []);

  return (
    <div className={`page-wrapper chiller-theme ${isSidebarToggled ? 'toggled' : ''}`}>
      <a id="show-sidebar" className="btn btn-sm btn-dark" href="#" onClick={handleSidebarToggle}>
        <i><MenuOutlinedIcon /></i>
      </a>

      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a style={{ fontSize: '12px' }} href="#">KHOA CÔNG NGHỆ THÔNG TIN</a>
            <div id="close-sidebar" onClick={handleSidebarToggle}>
              <i><CloseRoundedIcon /></i>
            </div>
          </div>

          <div className="sidebar-header">
            <div className="user-pic" style={{ color: '#fff' }}>
              <i className="fa fa-user-circle fa-4x" aria-hidden="true"></i>
            </div>
            <div className="user-info">
              <span className="user-name"> <strong>{}</strong></span>
              <span className="user-role">Administrator</span>
              <span className="user-status"><i className="fa fa-circle"></i> <span>Online</span></span>
            </div>
          </div>

          <div className="sidebar-menu">
            <ul>
              <li className="header-menu"><span>Trang chủ</span></li>
              <li><NavLink  to="/homeAdmin" onClick={() => handleMenuItemClick('trangCuaBan')} activeClassName={selectedMenuItem === 'trangCuaBan' ? 'active' : ''}><i className="fa fa-home"></i><span>Trang của bạn</span></NavLink></li>
              <li className={selectedMenuItem === 'thongTinCaNhan' ? 'active' : ''}><Link to="/profileAdmin" onClick={() => handleMenuItemClick('thongTinCaNhan')}><i className="fa fa-user"></i><span>Thông tin cá nhân</span></Link></li>
              <li className={selectedMenuItem === 'quanLySV' ? 'active' : ''}><Link to="/managermentStudent" href="#" onClick={() => handleMenuItemClick('quanLySV')}><i className="fa fa-book"></i><span>Quản lý sinh viên</span></Link></li>
              <li className={selectedMenuItem === 'quanLyGV' ? 'active' : ''}><a href="#" onClick={() => handleMenuItemClick('quanLyGV')}><i className="fa fa-folder"></i><span>Quản lý giảng viên</span></a></li>
              <li className={selectedMenuItem === 'quanlydetai' ? 'active' : ''}><a href="#" onClick={() => handleMenuItemClick('quanlydetai')}><i className="fa fa-folder"></i><span>Quản lý đề tài</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SidebarAdmin

