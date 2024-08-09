// Import necessary dependencies
import React, { useState } from "react";

// Define the TransactionForm component
function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  // Define the handleChange and handleSubmit functions
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Define the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new transaction object
    const newTransaction = { ...formData, id: Date.now() };
    // Add the new transaction to the list of transactions
    addTransaction(newTransaction);
    // Reset the form data
    setFormData({ date: "", description: "", category: "", amount: "" });
  };
  // Render the TransactionForm component
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      {/* Add a button to submit the form */}
      <button type="submit">Add Transaction</button>
    </form>
  );
}
// Export the TransactionForm component
export default TransactionForm;
