// Import necessary dependencies from React
import React, { useState, useEffect } from "react";
// Import custom components
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
// Import CSS styles for the App component
import "./App.css";
// Define the App component
function App() {
  // Initialize state variables to store transactions and search term
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // Use the useEffect hook to fetch transactions data when the component mounts
  useEffect(() => {
    // Make a GET request to the /transactions endpoint to fetch transactions data

    fetch("http://localhost:8000/transactions")
      .then((response) => response.json()) // Parse the response data as JSON
      .then((data) => setTransactions(data)); // Update the transactions state with the fetched data
  }, []);
  //Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Add a new transaction to transactions state
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  //Sorts the transactions state by category in ascending order.
  const sortByCategory = () => {
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setTransactions(sortedTransactions);
  };

  //Sorts the transactions state by description in ascending order.
  const sortByDescription = () => {
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setTransactions(sortedTransactions);
  };

  //Delete a transaction from transactions state
  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  // Render the App component
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

// Export the App component
export default App;
