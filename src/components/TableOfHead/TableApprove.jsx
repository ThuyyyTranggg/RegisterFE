import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getTokenFromUrlAndSaveToStorage } from '../tokenutils';
import './styleTable.scss'

function TableApprove() {
    const [topics, setTopics] = useState([]);
    const userToken = getTokenFromUrlAndSaveToStorage();

    useEffect(() => {
        console.log("Token: " + userToken);
        if (userToken) {
            const tokenSt = sessionStorage.getItem(userToken);
            if (!tokenSt) {
                axios.get('http://localhost:5000/api/head/subject', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    },
                })
                    .then(response => {
                        console.log("Topic: ", response.data);
                        setTopics(response.data.listSubject);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }, [userToken]);

    return (
        <div>
            <div className='home-table'>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên đề tài</th>
                            <th scope="col">Giảng viên hướng dẫn</th>
                            <th scope="col">Sinh viên 1</th>
                            <th scope="col">Sinh viên 2</th>
                            <th scope="col">Yêu cầu</th>
                            <th scope="col">Acttion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">1</th>
                                <td>{item.subjectName}</td>
                                <td>{item.instructorId.person.firstName + ' ' + item.instructorId.person.lastName}</td>
                                <td>{item.student1 === null ? 'Trống':''}</td>
                                <td>{item.student2 === null ? 'Trống':''}</td>
                                <td>{item.requirement}</td>
                                <td style={{ display: 'flex' }}>
                                    <button style={{ marginRight: '20px' }} className='button-res'><p className='text'>Duyệt</p></button>
                                    <button className='button-res'><p className='text'>Xóa</p></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableApprove