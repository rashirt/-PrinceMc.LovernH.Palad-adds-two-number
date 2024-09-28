import React, { useState } from 'react';

const SumCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = parseFloat(num1) + parseFloat(num2);
    setSum(total);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="number" 
          value={num1} 
          onChange={handleInputChange(setNum1)} 
          placeholder="Enter first number" 
          style={styles.input}
        />
        <input 
          type="number" 
          value={num2} 
          onChange={handleInputChange(setNum2)} 
          placeholder="Enter second number" 
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Calculate Sum</button>
      </form>
      {sum !== null && <h1 style={styles.output}>Sum: {sum}</h1>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    margin: '0 10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
  },
  output: {
    marginTop: '20px',
  },
};

export default SumCalculator;