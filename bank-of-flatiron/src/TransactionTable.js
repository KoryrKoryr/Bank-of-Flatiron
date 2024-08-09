// Import necessary dependencies
import React from "react";

// Define the TransactionTable component
function TransactionTable({
  transactions,
  sortByCategory,
  sortByDescription,
  handleDelete,
}) {
  // Render the TransactionTable component
  return (
    <div>
      {/* Add buttons to sort transactions by category and description */}
      <button onClick={sortByCategory}>Sort by Category</button>
      <button onClick={sortByDescription}>Sort by Description</button>
      {/* Render a table with the transactions data */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the transactions array and render each transaction as a table row */}
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                {/* Add a button to delete the transaction */}
                <button onClick={() => handleDelete(transaction.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export the TransactionTable component
export default TransactionTable;
