import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PortfolioCard.module.css';
import javascript from '../public/images/technologies/javascript.png';
import html from '../public/images/technologies/html.png';
import css from '../public/images/technologies/css.png';
import mongodb from '../public/images/technologies/mongodb.png';
import heroku from '../public/images/technologies/heroku.png';
import react from '../public/images/technologies/react.png';
import nextjs from '../public/images/technologies/nextjs.png';
import redux from '../public/images/technologies/redux.png';
import nodejs from '../public/images/technologies/nodejs.png';
import git from '../public/images/technologies/git.png';
import vercel from '../public/images/technologies/vercel.png';
import gatsbyjs from '../public/images/technologies/gatsbyjs.png';
import graphql from '../public/images/technologies/graphql.png';
import amazonS3 from '../public/images/technologies/amazonS3.png';
import {
  AiOutlineLink,
  AiOutlineGithub,
  AiOutlineYoutube,
} from 'react-icons/ai';

const technologiesImages = {
  javascript,
  html,
  css,
  mongodb,
  heroku,
  react,
  nextjs,
  redux,
  nodejs,
  git,
  vercel,
  graphql,
  gatsbyjs,
  amazonS3,
};

const PortfolioCard = ({ projectInfo }) => {
  const openNewTab = url => {
    const checking = confirm('Are you OK with opening a new tab?');
    if (checking) window.open(url, '_newtab');
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainerShadow}>
        <Image
          src={projectInfo.image}
          className={styles.imageContainer}
          alt='Wena compare!'
        />
      </div>
      <div className={styles.projectDescription}>
        <h3 className={styles.projectName}>{projectInfo.name}</h3>
        <p>{projectInfo.shortDescription}</p>
        <div className={styles.cardFooterContainer}>
          <div className={styles.buttonsContainer}>
            <button
              title='I want to check it out'
              onClick={() => openNewTab(projectInfo.prodUrl)}
            >
              <AiOutlineLink size={30} />
            </button>
            <button
              title='Contribute to this project'
              onClick={() => openNewTab(projectInfo.sourceCodeUrl)}
            >
              <AiOutlineGithub size={30} />
            </button>
            <button
              title='Video presentation'
              onClick={() => openNewTab(projectInfo.videoUrl)}
            >
              <AiOutlineYoutube size={30} />
            </button>
          </div>
          <div className={styles.technologiesContainer}>
            {projectInfo.technologies.map((x, index) => {
              return (
                <div key={index} className={styles.technologyImageContainer}>
                  <Image
                    alt='technology image'
                    width={40}
                    title={x}
                    height={40}
                    src={technologiesImages[x]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
