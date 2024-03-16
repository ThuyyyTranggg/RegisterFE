import { Home, Menu} from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import ListLec from '../actions/Home/ListLec'

function Infor_Teacher() {
    return (
        <div class="hero" style={{display:'column'}}>
            <div class="card text-bg-white">
                <img src="/assets/Teacher.jpg" height='400px' class="card-img" alt="..." />
            </div>

            <div style={{margin:'20px'}}>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb" style={{fontSize: '15px'}}>
                        <li class="breadcrumb-item" style={{alignItems:'center'}}><Link style={{textDecoration:'none', color:'black'}} to="/"><Home/><span>Trang chủ</span></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Danh sách giảng viên</li>
                        <li class="breadcrumb-item active" aria-current="page">Tên giảng viên</li>
                    </ol>
                </nav>
            </div>

            <div className='list'>
                <ListLec/>
            </div>
        </div>
    )
}

export default Infor_Teacher