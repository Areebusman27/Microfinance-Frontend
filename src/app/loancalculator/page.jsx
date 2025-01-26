"use client";
import { useState } from "react";
import Link from "next/link";
import { sendEmail } from "../resendemail/page";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [loanReport, setLoanReport] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false); // Track calculation status

  const handleCalculate = () => {
    const remainingAmount = loanAmount - initialDeposit;
    if (remainingAmount <= 0) {
      alert("The initial deposit cannot be greater than or equal to the loan amount.");
      return;
    }
    if (!timePeriod) {
      alert("Please select a time period.");
      return;
    }
    const monthlyPayment = remainingAmount / timePeriod;
    setMonthlyPayment(monthlyPayment);

    // Generate loan report
    const report = {
      loanAmount,
      initialDeposit,
      monthlyPayment,
      timePeriod,
    };
    setLoanReport(report);
    setIsCalculated(true); // Set isCalculated to true after calculation
  };

  const handleContinue = () => {
    setShowPopup(true); // Show the popup form when Continue is clicked
  };

  return (
    <div className="loan-container">
      <header className="loan-header">
        <h1>Loan Calculator</h1>
      </header>

      <main className="loan-main">
        {/* Loan Form */}
        <form className="loan-form">
          <label className="loan-label">
            Loan Amount:
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
              className="loan-input"
            />
          </label>

          <label className="loan-label">
            Initial Deposit:
            <input
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(e.target.value)}
              required
              className="loan-input"
            />
          </label>

          <label className="loan-label">
            Time Period (months):
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              required
              className="loan-input"
            >
              <option value="" disabled>
                Select a time period
              </option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
            </select>
          </label>

          <button type="button" className="loan-button" onClick={handleCalculate}>
            Calculate
          </button>
          <button
            type="button"
            className="loan-button"
            onClick={handleContinue}
            disabled={!isCalculated} // Disable until calculation is done
          >
            Continue
          </button>
        </form>

        {/* Show Loan Report */}
        {loanReport && (
          <div className="loan-report">
            <h2>Loan Report</h2>
            <p>
              <strong>Loan Amount:</strong> {loanReport.loanAmount}
            </p>
            <p>
              <strong>Initial Deposit:</strong> {loanReport.initialDeposit}
            </p>
            <p>
              <strong>Monthly Payment:</strong> {loanReport.monthlyPayment.toFixed(2)}
            </p>
            <p>
              <strong>Time Period:</strong> {loanReport.timePeriod} months
            </p>

            <h3>Monthly Payment Breakdown:</h3>
            <ul>
              {Array.from({ length: loanReport.timePeriod }).map((_, index) => (
                <li key={index}>
                  Month {index + 1}: {loanReport.monthlyPayment.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* User Details Popup */}
        {showPopup && (
          <div className="loan-popup">
            <h2>Enter Your Details</h2>
            <label className="loan-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="loan-input"
              />
            </label>

            <label className="loan-label">
              CNIC:
              <input
                type="text"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                required
                className="loan-input"
              />
            </label>

            <label className="loan-label">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="loan-input"
              />
            </label>
            <button type="button" className="loan-button" onClick={sendEmail}>
                Submit
              </button>
            <Link href="/login" passHref>
              <button type="button" className="loan-button">
                 Continue to Login
              </button>
            </Link>
           
          </div>
        )}
      </main>

      <footer className="loan-footer">
        <p>© 2025 Saylani Microfinance. All rights reserved.</p>
      </footer>
    </div>
  );
}
