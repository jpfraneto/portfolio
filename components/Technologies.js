import React from 'react';
import styles from './Technologies.module.css';
import Image from 'next/image';
import javascript from '../public/images/technologies/javascript.png';
import html from '../public/images/technologies/html.png';
import css from '../public/images/technologies/css.png';
import mongodb from '../public/images/technologies/mongodb.png';
import postgresql from '../public/images/technologies/postgresql.png';
import heroku from '../public/images/technologies/heroku.png';
import react from '../public/images/technologies/react.png';
import nextjs from '../public/images/technologies/nextjs.png';
import redux from '../public/images/technologies/redux.png';
import nodejs from '../public/images/technologies/nodejs.png';
import git from '../public/images/technologies/git.png';
import vercel from '../public/images/technologies/vercel.png';

const Technologies = () => {
  return (
    <div className={styles.technologiesContainer}>
      <div className={styles.imageWrapper}>
        <Image src={javascript} width={80} height={80} />
      </div>{' '}
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={html} width={80} height={80} />
      </div>{' '}
      <div className={styles.imageWrapper}>
        <Image src={css} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={mongodb} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        <Image src={postgresql} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={heroku} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={react} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={nextjs} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={redux} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={nodejs} width={80} height={80} />
      </div>{' '}
      <div className={styles.imageWrapper}>
        <Image src={git} width={80} height={80} />
      </div>
      <div className={styles.imageWrapper}>
        {' '}
        <Image src={vercel} width={80} height={80} />
      </div>
    </div>
  );
};

export default Technologies;
