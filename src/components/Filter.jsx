import React from 'react';
import styles from './Filter.module.css';
const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className={styles.form}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
