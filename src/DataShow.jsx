import React from 'react';
import DataTable from 'react-data-table-component';
import './DataShow.css'; 
import { useNavigate } from 'react-router-dom';
function DataShow() {

    const navigate = useNavigate(); 
    const columns = [
        { 
        name: 'Name',
        selector: row => row.name,
        sortable: true
        },
        {
        name: 'Email',
        selector: row => row.email,
        sortable: true
        },
        {
        name: 'Phone',
        selector: row => row.phone,
        sortable: true
        },
        {
          name: 'Actions',
          cell: row => (
              <div>
                  <button 
                      onClick={() => handleUpdate(row.id)} 
                      className="update-btn">
                      Upd
                  </button>
                  <button 
                      onClick={() => handleDelete(row.id)} 
                      className="delete-btn">
                      Del
                  </button>
              </div>
          ),
          ignoreRowClick: true, // Prevent row click event from triggering on this column
          button: true
        }
    ];

    const data = [
        {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 2,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 3,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
         {
        id: 4,
        name: 'Jane Smith3',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 5,
        name: 'Jane Smith4',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 6,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 7,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 8,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 9,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 10,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 11,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 12,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 13,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 14,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
         {
        id: 15,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 16,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 17,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
         {
        id: 18,
        name: 'Jane Smith3',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 19,
        name: 'Jane Smith4',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 20,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 21,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 22,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 23,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 24,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 25,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 26,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890'
        },
        {
        id: 27,
        name: 'Jane Smith1',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
        {
        id: 28,
        name: 'Jane Smith2',
        email: 'jain @gmail.com',
        phone: '987-654-3210'
        },
      
        
    ]

    const handleRowClick = (row) => {
      navigate(`/CaseInfo`, { state: { userData: row } }); // Pass user data as state
    };
    

    const handleUpdate = (id) => {
      const selectedUser = data.find(user => user.id === id);
      if (selectedUser) {
          navigate(`/CaseInfo`, { state: { userData: selectedUser } });
      }
  };
  

  const handleDelete = (id) => {
      console.log(`Deleting row with id: ${id}`);
  };



  return (
    <div className="data-table-container">
      <DataTable 
        columns={columns} 
        data={data} 
        fixedHeader
        onRowClicked={handleRowClick}
        highlightOnHover // Makes it look clickable
        pointerOnHover // Changes cursor to pointer

      />
    </div>  
  );
}

export default DataShow;