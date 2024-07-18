import React, { useState, useEffect } from 'react';
import API_BASE_URL from '../config';

function useaccounts() {
  const [cropcyles, setAccounts] = useState([]);

  useEffect(() => {
    const fetchaccounts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/accounts`);
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchaccounts();
  }, []);

  return cropcyles;
}

function account() {
  const accounts = useaccounts();

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Password</th>
            <th>District id</th>
            <th>Province id</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((accounts, index) => (
            <tr key={accounts.id}>
              <td>{index + 1}</td>
              <td>{accounts.first_name}</td>
              <td>{accounts.last_name}</td>
              <td>{accounts.email}</td>
              <td>{accounts.password}</td>
              <td>{accounts.district_id}</td>
              <td>{accounts.province_id}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default account;
