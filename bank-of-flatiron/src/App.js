import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const sortByCategory = () => {
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setTransactions(sortedTransactions);
  };

  const sortByDescription = () => {
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setTransactions(sortedTransactions);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable
        transactions={filteredTransactions}
        sortByCategory={sortByCategory}
        sortByDescription={sortByDescription}
        handleDelete={handleDelete}
      />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default App;
