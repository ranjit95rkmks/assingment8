import { useState } from 'react';

const IncomeComponent = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle income submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Income</h2>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeComponent;
