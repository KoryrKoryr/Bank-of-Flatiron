// Import the necessary modules
import React, { Component } from "react";
// Import the TransactionTable, TransactionForm, and SearchBar components
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
// Import the App.css file
import "./App.css";

// Define the App component
class App extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      searchTerm: "",
    };
  }

  // Fetch data when the component mounts
  componentDidMount() {
    fetch("https://miniature-system.vercel.app/transactions")
      .then((response) => response.json())
      .then((data) => this.setState({ transactions: data }));
  }

  // Handle adding a new transaction
  addTransaction = (newTransaction) => {
    this.setState((prevState) => ({
      transactions: [...prevState.transactions, newTransaction],
    }));
  };

  // Handle search term changes
  setSearchTerm = (term) => {
    this.setState({ searchTerm: term });
  };

  // Handle sorting by category
  sortByCategory = () => {
    const sortedTransactions = [...this.state.transactions].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    this.setState({ transactions: sortedTransactions });
  };

  // Handle sorting by description
  sortByDescription = () => {
    const sortedTransactions = [...this.state.transactions].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    this.setState({ transactions: sortedTransactions });
  };

  // Handle deleting a transaction
  handleDelete = (id) => {
    const updatedTransactions = this.state.transactions.filter(
      (transaction) => transaction.id !== id
    );
    this.setState({ transactions: updatedTransactions });
  };

  // Render the component
  render() {
    const { transactions, searchTerm } = this.state;

    // Filter transactions based on search term
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <h1>Bank Transactions</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={this.setSearchTerm} />
        <TransactionTable
          transactions={filteredTransactions}
          sortByCategory={this.sortByCategory}
          sortByDescription={this.sortByDescription}
          handleDelete={this.handleDelete}
        />
        <TransactionForm addTransaction={this.addTransaction} />
      </div>
    );
  }
}

// Export the App component
export default App;
