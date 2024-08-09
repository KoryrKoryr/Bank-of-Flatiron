# Bank of Flatiron

Bank of Flatiron is a React application that allows users to manage their bank transactions. It provides a simple interface to view, add, delete, and sort transactions.

## Features

- **View Transactions:** Display all transactions in a table format.
- **Add Transactions:** Users can fill out a form to add a new transaction to the list.
- **Search Transactions:** Filter transactions by typing into the search bar.
- **Sort Transactions:** Sort transactions alphabetically by category or description.
- **Delete Transactions:** Remove a transaction from the list.

## Technologies Used

- React: Front-end JavaScript library for building user interfaces.
- JSON Server: A full fake REST API for testing and prototyping.
- CSS: Styling

## Installation Instructions

To get started with Bank-of-Flatiron, follow these steps:

1. **Clone the repository:**

   - git clone https://github.com/KoryrKoryr/Bank-of-Flatiron
   - cd Bank-of-Flatiron

2. **Install dependencies:**

   - Navigate to project root directory and run:
     - npm install

3. **Set up the JSON server:**

   - Install JSON server:

     - npm install -g json-server

   - Run the JSON server to serve the transaction data:
     - npm run start-server
     - This will start the server at http://localhost:8000/transactions.

4. **Run the app:**
   - Start React App:
     - npm start
   - Open http://localhost:3000 to view it in your browser.

## Usage

**Viewing Transactions:** All transactions are listed in a table.
**Adding a Transaction:** Fill out the form and click "Add Transaction" to add a new entry.
**Searching Transactions:** Type into the search bar to filter transactions by description.
**Sorting Transactions:** Click on "Sort by Category" or "Sort by Description" to sort the list.
**Deleting a Transaction:** Click the "Delete" button next to a transaction to remove it.
