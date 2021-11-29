import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../store/actions/actions";
import styles from "../create/CreateProject.module.css";
import Header from "../header/Header";
import arrow from "../../assets/images/arrow.svg";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const state = useSelector((state) => state.projects);

  const [project, setProject] = useState({
    projectName: "",
    description: "",
    projectManager: "",
    assignedTo: "",
    status: "",
  });

  useEffect(() => {
    setProject(state.find((project) => project.id == id));
  }, []);

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
      dispatch(updateProject({ ...project }));
      setError({
        message: "",
      });
      setNotification({
        message: "Project successfully updated",
      });
      setTimeout(() => {
        navigate("home");
      }, 1500);
    }
  };

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header />
      <div className={styles.create}>
        <div className={styles.arrowBack}>
          <Link to="/home">
            <img src={arrow} />
          </Link>
          <h3 className={styles.back}>Back</h3>
        </div>
        <div>
          <h1 className={styles.title}>Edit project</h1>
        </div>
      </div>
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
              value={project.projectName}
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
              value={project.description}
            />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.title}>
              <h3>Project manager</h3>
            </div>
            <select
              value={project.projectManager}
              required
              name="projectManager"
              onChange={handleChange}
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
              <h3>Assigned to</h3>
            </div>
            <select
              required
              name="select"
              onChange={handleChange}
              name="assignedTo"
              value={project.assignedTo}
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
            <select
              required
              name="status"
              onChange={handleChange}
              value={project.status}
            >
              <option selected disabled hidden>
                Select a status
              </option>
              <option>Disabled</option>
              <option>Enabled</option>
            </select>
          </div>

          <button onClick={handleSubmit} className={styles.btn}>
            Save changes
          </button>
        </form>
        {notification ? (
          <h1 className={styles.notification}>{notification.message}</h1>
        ) : null}
        {error ? <h1 className={styles.error}>{error.message}</h1> : null}
      </div>
    </div>
  );
};

export default Edit;
