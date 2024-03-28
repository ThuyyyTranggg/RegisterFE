import React from 'react'

function Home() {
    return (
        <div class="hero">
            <div class="card text-bg-white">
                <img src="/assets/Home_logo.jpg" class="card-img" alt="..." />
            </div>
            <hr></hr>
            <div className='homecontainer' style={{ display: 'grid', placeItems: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className='items' style={{ alignItems: 'center', justifyContent: 'space-between', marginLeft: '30px' }}>
                    <div class="card" style={{ width: '18rem', marginLeft: '30px',border:'none' }}>
                        <img src="/assets/TieuLuan.png" class="card-img-top" alt="..."  style={{padding: '20px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Tiểu luận chuyên ngành</h5>
                            <a href="#" class="btn btn-primary">Tham khảo</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: '18rem', marginLeft: '30px', border:'none'}}>
                        <img src="/assets/KhoaLuan.png" class="card-img-top" alt="..." style={{padding: '20px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Khóa luận tốt nghiệp</h5>
                            <a href="#" class="btn btn-primary">Tham khảo</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: '18rem', marginLeft: '30px', border:'none'}}>
                        <img src="/assets/HuongDan.jfif" class="card-img-top" alt="..." style={{padding: '20px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Hướng dẫn</h5>
                            <a href="/intruction" class="btn btn-primary">Xem</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home