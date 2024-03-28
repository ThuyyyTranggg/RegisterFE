import React from 'react'
import { NavLink } from 'react-router-dom';
import './footer.scss'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined';

function Footer() {
    return (
        <div className='footer border-top'>
            <div className='item-footer menu-contact' style={{margin:'20px'}}>
                <div className='logo-footer'>
                    <a> <img src='/assets/logo-lv2-1.png' alt="HCMUTE" width="150" height="180" ></img></a>
                </div>
                <div className='contact-info'>
                        <ul className='contact-column'>
                            <li className='contact-item'>
                                <h3 style={{color:'white'}}>THÔNG TIN LIÊN HỆ</h3>
                            </li>
                            <li className='contact-item' style={{color:'white'}}>
                                <BusinessOutlinedIcon className='icon'></BusinessOutlinedIcon> <span>Địa chỉ</span>
                                <p>Số 1 Võ Văn Ngân, phường Linh Chiểu, TP.Thủ Đức, TP. Hồ Chí Minh</p>
                            </li>
                            <li className='contact-item' style={{color:'white'}}>
                                <EmailOutlinedIcon className='icon'/>
                                <span>Email tư vấn viên</span>
                                <p>saudaihoc@hcmute.edu.vn</p>
                            </li>
                            <li className='contact-item' style={{color:'white'}}>
                                <PhonelinkRingOutlinedIcon className='icon'/>
                                <span>Điện thoại</span>
                                <p>(+84.28) 37225766 hoặc 37221223 (số nội bộ 8125)</p>
                            </li>
                        </ul>
                    </div>
                    <div className='link-contact'>
                        <ul className='contact-column'>
                            <li className='link-item'>
                                <h3 style={{color:'white'}}>QUICK LINK</h3>
                            </li>
                            <li className='link-item' style={{color:'white'}}>
                                <NavLink className='link' to="/">Trang chủ</NavLink>
                            </li>
                            <li className='link-item' style={{color:'white'}}>
                                <NavLink className='link' to="/info-teacher">Giảng viên</NavLink>
                            </li>
                            <li className='link-item'style={{color:'white'}}>
                                <NavLink className='link' to="/contact">Liên hệ</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Footer