import React, { useEffect, useState } from "react";
import AddProject from "../add-project/AddProject";
import Header from "../header/Header";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import styles from './MyProjects.module.css';

const MyProjects = () => {

  const info = useSelector((state) => state.projects);
  return (
    <React.Fragment>
      <Header />
      <AddProject title="My projects" btn="+ Add project" />
      <div className={styles.labeling}>
        <h1>Project info</h1>
        <h1>Project Manager</h1>
        <h1>Assigned to</h1>
        <h1>Status</h1>
        <h1>Action</h1>
      </div>
      {info?.map((i) => {
        return (
          <Card
            title={i.projectName}
            date={i.date}
            manager={i.projectManager}
            assignedTo={i.assignedTo}
            status={i.status}
            id={i.id}
          />
        );
      })}
    </React.Fragment>
  );
};

export default MyProjects;
