import React from "react";
import { Link } from "react-router-dom";
import styles from "./AddProject.module.css";

const AddProject = ({title, btn}) => {
  return (
    <div className={styles.add}>
      <h1 className={styles.title}>{title}</h1>
      <Link to="/create">
      <button className={styles.btnAdd}>{btn}</button>
      </Link>
    </div>
  );
};

export default AddProject;
