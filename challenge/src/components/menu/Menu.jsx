import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";
import edit from "../../assets/images/edit.svg";
import del from "../../assets/images/delete.svg";
import { deleteProject } from "../../store/actions/actions";
import { useDispatch } from "react-redux";

const Menu = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit/${id}`);
  };
  
  const handleDelete = () => {
    dispatch(deleteProject(id));
  };

  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <img src={edit} />
        <h1 onClick={() => handleClick()} className={styles.h1Menu}>
          Edit
        </h1>
      </div>
      <hr />
      <div className={styles.container}>
        <img src={del} />
        <h1 onClick={() => handleDelete()} className={styles.h1Menu}>
          Delete
        </h1>
      </div>
    </div>
  );
};

export default Menu;
