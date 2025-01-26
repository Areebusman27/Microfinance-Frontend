"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [filterCity, setFilterCity] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [loanData, setLoanData] = useState([
    { id: 1, cnic: "12345-6789012-3", name: "Ali Ahmed", city: "Karachi", country: "Pakistan", amount: 50000, status: "Approved" },
    { id: 2, cnic: "12345-6789012-4", name: "Sara Khan", city: "Lahore", country: "Pakistan", amount: 75000, status: "Pending" },
    { id: 3, cnic: "12345-6789012-5", name: "Usman Tariq", city: "Islamabad", country: "Pakistan", amount: 100000, status: "Rejected" },
    { id: 4, cnic: "12345-6789012-6", name: "Ayesha Ali", city: "Multan", country: "Pakistan", amount: 20000, status: "Approved" },
    { id: 5, cnic: "12345-6789012-7", name: "Hamza Butt", city: "Peshawar", country: "Pakistan", amount: 5000, status: "Pending" },
    { id: 6, cnic: "12345-6789012-3", name: "Ali Ahmed", city: "Karachi", country: "Pakistan", amount: 50000, status: "Approved" },
    { id: 7, cnic: "12345-6789012-4", name: "Sara Khan", city: "Lahore", country: "Pakistan", amount: 75000, status: "Pending" },
    { id: 8, cnic: "12345-6789012-5", name: "Usman Tariq", city: "Islamabad", country: "Pakistan", amount: 100000, status: "Rejected" },
    { id: 9, cnic: "12345-6789012-6", name: "Ayesha Ali", city: "Multan", country: "Pakistan", amount: 20000, status: "Approved" },
    { id: 10, cnic: "12345-6789012-7", name: "Hamza Butt", city: "Peshawar", country: "Pakistan", amount: 5000, status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setLoanData((prevData) =>
      prevData.map((loan) =>
        loan.id === id ? { ...loan, status: "Approved" } : loan
      )
    );
  };

  const handleReject = (id) => {
    setLoanData((prevData) =>
      prevData.map((loan) =>
        loan.id === id ? { ...loan, status: "Rejected" } : loan
      )
    );
  };

  const filteredLoans = loanData.filter(
    (loan) =>
      (filterCity ? loan.city.toLowerCase().includes(filterCity.toLowerCase()) : true) &&
      (filterCountry ? loan.country.toLowerCase().includes(filterCountry.toLowerCase()) : true)
  );

  return (
    <div className="container">
      <header className="header">
        <h1>Admin Dashboard</h1>
      </header>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by City"
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          className="filter-input"
        />
        <input
          type="text"
          placeholder="Filter by Country"
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>CNIC</th>
              <th>User Name</th>
              <th>City</th>
              <th>Country</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.length > 0 ? (
              filteredLoans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.cnic}</td>
                  <td>{loan.name}</td>
                  <td>{loan.city}</td>
                  <td>{loan.country}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.status}</td>
                  <td>
                    {loan.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(loan.id)}
                          className="btn-approve"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(loan.id)}
                          className="btn-reject"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No loans found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
