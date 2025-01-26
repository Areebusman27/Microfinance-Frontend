"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function UserPage() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    loanAmount: "",
    initialDeposit: "",
  });

  const [guarantors, setGuarantors] = useState([
    { name: "", cnic: "", location: "", phone: "" },
    { name: "", cnic: "", location: "", phone: "" },
  ]);

  const [tokenNumber, setTokenNumber] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleGuarantorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGuarantors = [...guarantors];
    updatedGuarantors[index][name] = value;
    setGuarantors(updatedGuarantors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a token number
    const token = Math.floor(100000 + Math.random() * 900000);
    setTokenNumber(token);

    // Combine all details for the QR code content
    const qrContent = {
      user: userDetails,
      guarantors: guarantors,
      token: token,
    };

    // Generate QR code
    const qrUrl = await QRCode.toDataURL(JSON.stringify(qrContent));
    setQrCodeUrl(qrUrl);

    // Mark report as generated
    setReportGenerated(true);

    // Reset the forms
    setUserDetails({
      name: "",
      city: "",
      phone: "",
      email: "",
      loanAmount: "",
      initialDeposit: "",
    });
    setGuarantors([
      { name: "", cnic: "", location: "", phone: "" },
      { name: "", cnic: "", location: "", phone: "" },
    ]);
  };

  return (
    <div className="container">
      <header>
        <h1>Loan Application Form</h1>
      </header>

      {!reportGenerated ? (
        <form onSubmit={handleSubmit}>
          <h2>User Details</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleUserChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={userDetails.city}
              onChange={handleUserChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleUserChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleUserChange}
              required
            />
          </label>
          <label>
            Loan Amount:
            <input
              type="number"
              name="loanAmount"
              value={userDetails.loanAmount}
              onChange={handleUserChange}
              required
            />
          </label>
          <label>
            Initial Deposit:
            <input
              type="number"
              name="initialDeposit"
              value={userDetails.initialDeposit}
              onChange={handleUserChange}
              required
            />
          </label>

          {guarantors.map((guarantor, index) => (
            <div key={index}>
              <h2>Guarantor {index + 1} Details</h2>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={guarantor.name}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  required
                />
              </label>
              <label>
                CNIC:
                <input
                  type="text"
                  name="cnic"
                  value={guarantor.cnic}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  required
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={guarantor.location}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  required
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  value={guarantor.phone}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  required
                />
              </label>
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="report">
          <h2>Application Report</h2>
          <p><strong>Token Number:</strong> {tokenNumber}</p>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>City:</strong> {userDetails.city}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Loan Amount:</strong> {userDetails.loanAmount}</p>
          <p><strong>Initial Deposit:</strong> {userDetails.initialDeposit}</p>
          <h3>Guarantors:</h3>
          {guarantors.map((guarantor, index) => (
            <div key={index}>
              <p><strong>Guarantor {index + 1} Name:</strong> {guarantor.name}</p>
              <p><strong>CNIC:</strong> {guarantor.cnic}</p>
              <p><strong>Location:</strong> {guarantor.location}</p>
              <p><strong>Phone:</strong> {guarantor.phone}</p>
            </div>
          ))}
          <img src={qrCodeUrl} alt="QR Code" style={{ width: "200px", marginTop: "10px" }} />
          <button onClick={() => setReportGenerated(false)}>Go Back</button>
        </div>
      )}
    </div>
  );
}
