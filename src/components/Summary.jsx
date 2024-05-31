import React from 'react';

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  
  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="Summary">
      <h2>Riepilogo</h2>
      <p>Entrate: €{totalIncome.toFixed(2)}</p>
      <p>Uscite: €{totalExpense.toFixed(2)}</p>
      <p>Imponibile: €{(totalIncome - totalExpense).toFixed(2)}</p>
    </div>
  );
};

export default Summary;
