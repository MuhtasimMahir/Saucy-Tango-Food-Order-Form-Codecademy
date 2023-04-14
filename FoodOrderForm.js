import React, { useState } from "react";
import styles from "./FoodOrderForm.css";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello ${name} your order Successful! Your order was ${order} and delivery location to ${address}. Please show your confirmation number for pickup.`
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} >
      <label htmlFor="name" className={styles.label} >Name:</label>
      <input 
        onChange={(e) => setName(e.target.value)}
        id="name"
        name="name"
        type="text"
        value={name}
        className={styles.input} />
      <label htmlFor="phone">Phone:</label>
      <input
        onChange={(e) => setPhone(e.target.value)}
        id="phone"
        name="phone"
        type="text"
        pattern="^\+8801\d{9}$"
        value={phone}
        className={styles.input}
      />
      <label htmlFor="address">Address:</label>
      <input 
        onChange={(e) => setAddress(e.target.value)}
        id="address" 
        name="address"
        type="text"
        value={address}
        className={styles.input} />
      <label htmlFor="order">Order:</label>
      <input 
        onChange={(e) => setOrder(e.target.value)}
        id="order" 
        name="order"
        type="text"
        value={order}
        className={styles.input} />
      <button type="submit" className={styles.button} >Submit</button>
    </form>
  );
}

export default FoodOrderForm;


