import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { ...formData, id: Date.now() };
    addTransaction(newTransaction);
    setFormData({ date: "", description: "", category: "", amount: "" });
  };

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
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
