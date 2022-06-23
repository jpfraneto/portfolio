import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PortfolioCard.module.css';

const PortfolioCard = ({
  projectInfo,
  setIsModalOpen,
  setModalInformation,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={styles.cardContainer}>
      <a
        className={styles.urlLink}
        href={projectInfo.prodUrl}
        rel='noreferrer'
        target='_blank'
      >
        {projectInfo.url}
      </a>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={styles.imageContainerShadow}
      >
        <Image
          src={projectInfo.image}
          className={styles.imageContainer}
          alt='Wena compare!'
        />
        {hovered && (
          <button
            className={styles.projectInfoBtn}
            onClick={() => {
              setModalInformation(projectInfo);
              setIsModalOpen(true);
            }}
          >
            Learn more...
          </button>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
