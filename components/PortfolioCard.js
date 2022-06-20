import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PortfolioCard.module.css';

const PortfolioCard = ({ image, prodUrl, url, description }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={styles.cardContainer}>
      <a
        className={styles.urlLink}
        href={prodUrl}
        rel='noreferrer'
        target='_blank'
      >
        {url}
      </a>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={styles.imageContainerShadow}
      >
        <Image
          src={image}
          className={styles.imageContainer}
          alt='Wena compare!'
        />
        {hovered && (
          <button
            className={styles.projectInfoBtn}
            onClick={() => alert(description)}
          >
            Project Information
          </button>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
