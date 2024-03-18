import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getTokenFromUrlAndSaveToStorage } from '../tokenutils';

function TbaleAssign() {
  const [topics, setTopics] = useState([]);
  const [lec, setLec] = useState([])
  const userToken = getTokenFromUrlAndSaveToStorage();

  useEffect(() => {
    console.log("Token: " + userToken);
    if (userToken) {
      const tokenSt = sessionStorage.getItem(userToken);
      if (!tokenSt) {
        axios.get('http://localhost:5000/api/head/subject/listAdd', {
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

  const handleAssignGVPB = (subjectId) => {
    // Gửi yêu cầu để lấy danh sách giảng viên phản biện
    axios.get(`http://localhost:5000/api/head/subject/listLecturer/${subjectId}`, {
      headers: {
        'Authorization': `Bearer ${userToken}`,
      },
    })
      .then(response => {
        // Hiển thị danh sách giảng viên phản biện và cho phép người dùng chọn
        console.log("List of lecturers for counter argument: ", response.data.listLecturer);
        setLec(response.data.listLecturer);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSelectChange = (event) => {
    setLec(event.target.value);
  };
  
  return (
    <div className='home-table'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên đề tài</th>
            <th scope="col">Sinh viên 1</th>
            <th scope="col">Sinh viên 2</th>
            <th scope="col">Giảng viên hướng dẫn</th>
            <th scope="col">Phân GVPB</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((item, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{item.subjectName}</td>
              <td>{item.student1}</td>
              <td>{item.student2}</td>
              <td>{item.instructorId.person.firstName + ' ' + item.instructorId.person.lastName}</td>
              <td>
                <select className='optionLecs' value={lec} onChange={handleSelectChange} onClick={() => handleAssignGVPB(item.subjectId)}>
                    <option className='option' value="" >Chọn giảng viên phản biện</option>
                    {lec.map((lecturer, index) => (
                      <option key={index} value={lecturer.id}>{lecturer.person.firstName} {lecturer.person.lastName}</option>
                    ))}
                  </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TbaleAssign;
