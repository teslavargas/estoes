import React, { useState } from "react";
import styles from "./Card.module.css";
import avatar from "../../assets/images/avatar.png";
import menu from "../../assets/images/menu.svg";
import Menu from "../menu/Menu";

const Card = ({ title, date, manager, assignedTo, status, id }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.mobile}>
          <div className={styles.menu}>
            <button onClick={() => handleShow()} className={styles.btnMenu}>
              <img className={styles.menuImg} src={menu} />
            </button>
            {show === true ? <Menu id={id} /> : null}
          </div>
          <div className={styles.info}>
            <div className={styles.titleDate}>
              <span className={styles.title}>{title}</span>
              <span className={styles.date}>Creation date: {date}</span>
            </div>
            <div>
              <img className={styles.avatar} src={avatar} />
              <span className={styles.name}>{manager}</span>
            </div>
            <div className={styles.desktop}>
              <span>{assignedTo}</span>
              <span>{status}</span>
            </div>
          </div>
        </div>
      </div>
     
    </React.Fragment>
  );
};

export default Card;
