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

const Technologies = ({ setTechnologyText }) => {
  return (
    <div className={styles.technologiesContainer}>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() =>
          setTechnologyText('Javascript: The verb of the web')
        }
        onMouseLeave={() => setTechnologyText('')}
      >
        <Image src={javascript} width={80} height={80} />
      </div>{' '}
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setTechnologyText('HTML: The bones of the web')}
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={html} width={80} height={80} />
      </div>{' '}
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setTechnologyText('CSS: The styles of the web')}
        onMouseLeave={() => setTechnologyText('')}
      >
        <Image src={css} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() =>
          setTechnologyText('MongoDB: Non Relational Database')
        }
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={mongodb} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setTechnologyText('PostreSQL: Relational Database')}
        onMouseLeave={() => setTechnologyText('')}
      >
        <Image src={postgresql} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() =>
          setTechnologyText('Heroku: Hosting for my projects')
        }
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={heroku} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() =>
          setTechnologyText('React: Components as my grown up lego blocks')
        }
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={react} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() =>
          setTechnologyText('NextJS: Building it up smoothly')
        }
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={nextjs} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setTechnologyText('Redux: State management')}
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={redux} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() =>
          setTechnologyText('NodeJS: Creating my own servers brings freedom')
        }
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={nodejs} width={80} height={80} />
      </div>{' '}
      <div
        className={styles.imageWrapper}
        onMouseEnter={() => setTechnologyText('Git: Collaboration is the key')}
        onMouseLeave={() => setTechnologyText('')}
      >
        <Image src={git} width={80} height={80} />
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={() =>
          setTechnologyText('Vercel: State of the art shipping')
        }
        onMouseLeave={() => setTechnologyText('')}
      >
        {' '}
        <Image src={vercel} width={80} height={80} />
      </div>
    </div>
  );
};

export default Technologies;
