import React, { useState } from "react";
import styles from "./CreateProject.module.css";
import { useDispatch } from "react-redux";
import { addToMyProjects } from "../../store/actions/actions";
import uniqid from "uniqid";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate(); 

  const id = uniqid();
  const [project, setProject] = useState({
    projectName: "",
    description: "",
    projectManager: "",
    assignedTo: "",
    status: "",
    date: "",
    id: id,
  });

  const [error, setError] = useState({
    message: "",
  });

  const [notification, setNotification] = useState({
    message: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      project.projectName === "" ||
      project.description === "" ||
      project.projectManager === "" ||
      project.assignedTo === "" ||
      project.status === ""
    ) {
      setError({
        message: "All fields must be filled in",
      });
    } else {
      dispatch(
        addToMyProjects({ ...project, date: new Date().toLocaleString() })
      );
      setError({
        message: "",
      });
      setNotification({
        message: "Project successfully created",
      });
      setTimeout(() => {
        navigate('home'); 
      }, 1500)
      
    }
  };

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <div className={styles.title}>
            <h3>Project name</h3>
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="projectName"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.title}>
            <h3>Description</h3>
          </div>
          <input
            onChange={handleChange}
            name="description"
            required
            type="text"
          />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.title}>
            <h3>Project manager</h3>
          </div>
          <select required name="projectManager" onChange={handleChange}>
            <option selected disabled hidden>
              Select a person
            </option>
            <option>Ignacio Truffa</option>
            <option>Joel Vargas</option>
          </select>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.title}>
            <h3>Assigned to</h3>
          </div>
          <select
            required
            name="select"
            onChange={handleChange}
            name="assignedTo"
          >
            <option selected disabled hidden>
              Select a person
            </option>
            <option>Ignacio Truffa</option>
            <option>Joel Vargas</option>
          </select>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.title}>
          <h3>Status</h3>
          </div>
          <select required name="status" onChange={handleChange}>
            <option selected disabled hidden>
              Select a status
            </option>
            <option>Disabled</option>
            <option>Enabled</option>
          </select>
        </div>

        <button onClick={handleSubmit} className={styles.btn}>
          Create project
        </button>
      </form>
      {notification ? (
        <h1 className={styles.notification}>{notification.message}</h1>
      ) : null}
      {error ? <h1 className={styles.error}>{error.message}</h1> : null}
    </div>
  );
};

export default Create;
