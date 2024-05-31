import React from 'react';

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('it-IT', options);
};

const TransactionList = ({ transactions }) => {
  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();

  return (
    <div className="TransactionList">
      <h2>Movimenti</h2>
      <ul>
        {sortedTransactions.map((transaction, index) => (
          <li key={index}>
            <span>{formatDate(transaction.date)}  {transaction.label}</span>
            <span>
              {transaction.type === 'expense' ? '-' : ''}
              {transaction.type === 'income' ? `${transaction.amount.toFixed(2)}€` : `${transaction.amount.toFixed(2)}€`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
