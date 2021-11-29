import React from "react";
import styles from "./CreateProject.module.css";
import arrow from "../../assets/images/arrow.svg";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import Create from "./Create";

const CreateProject = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.create}>
        <div className={styles.arrowBack}>
          <Link to="/home">
            <img src={arrow} />
          </Link>
          <h3 className={styles.back}>Back</h3>
        </div>
        <div>
          <h1 className={styles.title}>Add project</h1>
        </div>
      </div>
      <Create />
    </React.Fragment>
  );
};

export default CreateProject;
