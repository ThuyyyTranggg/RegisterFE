import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './DataTableTopics.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getTokenFromUrlAndSaveToStorage } from '../tokenutils';

function DataTableTopics() {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        const tokenSt = sessionStorage.getItem('userToken');
        console.log("Token SV2: " + tokenSt);
        if (tokenSt) {
            console.log("Test: " + tokenSt);
            axios.get('http://localhost:5000/api/admin/getSubjext', {
                headers: {
                    'Authorization': `Bearer ${tokenSt}`,
                },
            })
                .then(response => {
                    console.log("DataTableSubject: ", response.data);
                    const topicArray = response.data || [];
                    setTopics(topicArray);
                })
                .catch(error => {
                    console.error("error: ", error);
                });
        } else {
            console.log("Lỗi !!")
        }

    }, []);

    const handleImportFile = () => {
        const userToken = getTokenFromUrlAndSaveToStorage();
    
        axios.post('http://localhost:5000/api/admin/importSubject', {
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
        })
        .then(response => {
            console.log("Import thành công!")          
        })
        .catch(error => {
            console.error(error);
            console.log("Lỗi");
        });
    };

    return (
        <div>
            <div className='header-tableTopic'>
                <div className='button-add'>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddTopic">
                        Add
                    </button>

                    <div class="modal fade" id="AddTopic" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm đề tài</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='btn-importFile'>
                    <button><AddOutlinedIcon /> Import</button>
                </div>
            </div>
            <div className='body-table'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên đề tài</th>
                        <th scope='col'>Giảng viên hướng dẫn</th>
                        <th scope='col'>Giảng viên Phản biện</th>
                        <th scope='col'>Loại đề tài</th>
                        <th scope='col'>Sinh viên 1</th>
                        <th scope='col'>Sinh viên 2</th>
                        <th scope='col'>Yêu cầu</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

            </div>
        </div>
    )
}

export default DataTableTopics