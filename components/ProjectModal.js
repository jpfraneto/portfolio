import React from 'react';
import styles from './ProjectModal.module.css';
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

const ProjectModal = ({ setIsModalOpen, projectInformationForModal }) => {
  console.log(projectInformationForModal);
  return (
    <div className={styles.modalContainer}>
      <span
        onClick={() => {
          setIsModalOpen(false);
        }}
        className={styles.closeBtn}
      >
        Close!
      </span>
      <div className={styles.projectInformation}>
        <h2>{projectInformationForModal.name}</h2>
        <div className={styles.imageContainer}>
          <Image src={projectInformationForModal.image} />
        </div>
        <div className={styles.projectDescription}>
          {projectInformationForModal.description
            .split('\n')
            .map((x, index) => {
              return <p key={index}>{x}</p>;
            })}
        </div>

        <div className={styles.projectLinks}>
          <Button
            text='Live Version'
            redirectTo={projectInformationForModal.prodUrl}
          />
          <Button
            text='Source Code'
            redirectTo={projectInformationForModal.sourceCodeUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
