import React, { useState } from 'react';
import './styleTable.scss';

function TbaleAssign() {
  const [rows, setRows] = useState([
    { id: 1, name: 'Mark', specialization: 'Otto', quantity: '@mdo', saved: false },
    { id: 2, name: 'Jacob', specialization: 'Thornton', quantity: '@fat', saved: false },
    { id: 3, name: 'Larry the Bird', specialization: '', quantity: '@twitter', saved: false },
  ]);

  const handleDropdownChange = (id, saved) => {
    setRows((prevRows) => prevRows.map((row) => (row.id === id ? { ...row, saved } : row)));
  };

  const handleSaveClick = (id) => {
    // Xử lý lưu dữ liệu, có thể gửi dữ liệu lên server ở đây
    console.log(`Saved data for row with ID ${id}`);
    handleDropdownChange(id, true);
  };

  const handleEditClick = (id) => {
    handleDropdownChange(id, false);
  };

  return (
    <div className='home-table'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên đề tài</th>
            <th scope="col">Chuyên ngành</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Phân GVPB</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th scope="row">{row.id}</th>
              <td>{row.name}</td>
              <td>{row.specialization}</td>
              <td>{row.quantity}</td>
              <td>
                <select className='selectDr'disabled={row.saved} onChange={(e) => handleDropdownChange(row.id, false)}>
                  <option value="dangKy">Danh sách giảng viên</option>
                  <option value="somethingElse">Một tùy chọn khác</option>
                </select>
                
                {!row.saved ? (
                  <button className='button-save' onClick={() => handleSaveClick(row.id)}>Save</button>
                ) : (
                  <button className='button-edit' onClick={() => handleEditClick(row.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TbaleAssign;
