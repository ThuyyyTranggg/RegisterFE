import React, { useState, useEffect } from 'react';
import './RegisTopicTable.scss';
import axios from 'axios';
import { getTokenFromUrlAndSaveToStorage } from '../tokenutils';

function RegisTopicTable() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const userToken = getTokenFromUrlAndSaveToStorage();
        if (userToken) {
            const tokenSt = sessionStorage.getItem(userToken);

            if (!tokenSt) {
                axios.get('http://localhost:5000/api/student/subject', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    },
                })
                .then(response => {
                    setTopics(response.data.subjectList);
                })
                .catch(error => {
                    console.error(error);
                });
            }
        }
    }, []);

    const dangKyDeTai = (subjectId) => {
        const userToken = getTokenFromUrlAndSaveToStorage();
        axios.post(`http://localhost:5000/api/registerTopic/${subjectId}`, null, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
        })
        .then(response => {
            if (response.status === 200) {
                alert("Đăng ký thành công!");
                // Tải lại danh sách đề tài từ API
                axios.get('http://localhost:5000/api/student/subject', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    },
                })
                .then(response => {
                    setTopics(response.data.subjectList);
                })
                .catch(error => {
                    console.error(error);
                });
            } else {
                alert("Đăng ký thất bại! Vui lòng thử lại sau.");
            }
        })
        .catch(error => {
            console.error("Đăng ký thất bại", error);
            alert("Đăng ký thất bại! Vui lòng thử lại sau.");
        });
    };
    

    return (
        <div className='home-table'>
            <h4 className='title-table'>Danh sách đề tài</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên đề tài</th>
                        <th scope="col">Giảng viên hướng dẫn</th>
                        <th scope="col">Đăng ký</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.filter(topic => topic.instructorId.person.status === true)
                    .map((topic, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{topic.subjectName}</td>
                            <td>{topic.instructorId.person.firstName} {topic.instructorId.person.lastName}</td>
                            <td>
                                <button className='button-res' onClick={() => dangKyDeTai(topic.subjectId)}>
                                    <p className='text'>Đăng ký</p>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RegisTopicTable;
