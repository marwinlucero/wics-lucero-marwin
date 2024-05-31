import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TransactionForm = ({ addTransaction }) => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const type = parseFloat(amount) < 0 ? 'expense' : 'income';
    addTransaction({ label, type, amount: Math.abs(parseFloat(amount)), date });
    setLabel('');
    setAmount('');
    setDate('');
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Aggiungi Transazione</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <label>
            Etichetta:
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              required
            />
          </label>
          <label>
            Importo:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <label>
            Data:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <button type="submit">Aggiungi</button>
        </form>
        <button onClick={() => setModalIsOpen(false)}>Chiudi</button>
      </Modal>
    </div>
  );
};

export default TransactionForm;
