import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactModal from 'react-modal';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import jpgroup from '../public/images/jpgroup.jpeg';
import technologies from '../public/images/technologies.jpg';

import { SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si';
import PortfolioCard from '../components/PortfolioCard';
import ProjectModal from '../components/ProjectModal';
import Technologies from '../components/Technologies';
import { projects } from '../data/projects';

export default function Home(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [technologyText, setTechnologyText] = useState('');
  const [modalInformation, setModalInformation] = useState(null);
  const heroSection = useRef(null);
  const aboutMeSection = useRef(null);
  const skillsSection = useRef(null);
  const portfolioSection = useRef(null);

  const handleKeydown = e => {
    console.log('key down!', e.key);
    if (e.key === 'Escape') {
      console.log('IN HERE!');
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const links = [
    { reference: () => heroSection.current.scrollIntoView(), text: 'Home' },
    {
      reference: () => aboutMeSection.current.scrollIntoView(),
      text: 'About Me',
    },
    {
      reference: () => skillsSection.current.scrollIntoView(),
      text: 'Technologies',
    },
    {
      reference: () => portfolioSection.current.scrollIntoView(),
      text: 'Portfolio',
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText('jpfraneto@gmail.com')
      .then(() => {
        alert(
          'My email was copied into your clipboard. Thanks for getting in touch.'
        );
        return 'jpfraneto@gmail.com';
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <Head>
        <title>Jorge Pablo Franetovic Stocker</title>
      </Head>
      <>
        <nav className={styles.navbar}>
          <div className={styles.jpname}>jp</div>
          <div>
            <ul className={styles.links}>
              {links.map((link, index) => (
                <li onClick={link.reference} key={index}>
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.letsChatBtnContainer}>
            <button onClick={handleCopyEmail}>Let&apos;s Chat</button>
          </div>
        </nav>
        <div ref={heroSection} className={styles.mainContainer}>
          <section className={`${styles.heroContainer} ${styles.container}`}>
            <div className={styles.textContainer}>
              <h2>Hello! I&apos;m JP.</h2>
              <h2>Full Stack Developer</h2>
              <h2>Do you need help?</h2>
              <div className={styles.iconsContainer}>
                <a
                  className={styles.twitterIcon}
                  rel='noreferrer'
                  href='https://www.twitter.com/jpfraneto'
                  target='_blank'
                >
                  <SiTwitter size={44} />
                </a>
                <a
                  href='https://www.linkedin.com/in/jpfraneto/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.linkedinIcon}
                >
                  <SiLinkedin size={44} />
                </a>
                <a
                  href='https://github.com/jpfraneto'
                  rel='noreferrer'
                  target='_blank'
                  className={styles.githubIcon}
                >
                  <SiGithub size={44} />
                </a>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                alt='JP Presentation Image'
                layout='fill'
                objectFit='contain'
                src={jpgroup}
              />
            </div>
          </section>
          <section
            ref={aboutMeSection}
            className={`${styles.aboutMeSection} ${styles.container}`}
          >
            <div className={styles.aboutmeTextContainer}>
              {' '}
              <h3>About Me</h3>
              <p>
                I&apos;m an industrial and mechanical engineer, kundalini yoga
                instructor, father of a beautiful little girl and avid explorer
                of all the possibilities of this amazing experience called life.
                I call myself a generalist, always willing to learn new things,
                trying to widen my scope of action.
              </p>
              <p>
                Before Covid I was creating the best ice cream store of the
                world, but I had to shut down that project because we
                couldn&apos;t gather people together, and that was everything
                that we wanted. After that I had an idea for how to share our
                products online, but had to build it because I did not know how
                to explain it. Because of that I started to teach myself how to
                code.
              </p>
              <p>
                I was completely hooked with the art of programming, its endless
                possibilities, and because of that I created The Open Source
                Factory, which was the guiding frame that I created for myself
                to build different original projects so that I could become a
                better programmer. I just want to learn more, and get better at
                this craft.
              </p>
            </div>
          </section>
          <section
            ref={skillsSection}
            className={`${styles.skillsSection} ${styles.container}`}
          >
            <div className={styles.skillsContainer}>
              {' '}
              <h3>Skills & Experience</h3>
              <p>
                I&apos;m very good at bringing myself into places that I
                don&apos;t know. I feel comfortable there, as it is the place
                where growth lies.
              </p>
              <p>These are the technologies that I have used in my projects:</p>
              <Technologies setTechnologyText={setTechnologyText} />
              {technologyText && (
                <p className={styles.techText}>{technologyText}</p>
              )}
            </div>
          </section>
          <section
            ref={portfolioSection}
            className={`${styles.portfolioContainer} ${styles.container}`}
          >
            <div className={styles.portfolioTextContainer}>
              <h3>Portfolio</h3>
              <p>
                These are the original projects that I have built, making my way
                through the iteration process of coming up with a brand new
                idea, and pushing the boundaries of my creativity as I created
                the means to code them into a reality.
              </p>
            </div>
            <ReactModal
              onRequestClose={() => setIsModalOpen(false)}
              className={styles.modalStyles}
              isOpen={isModalOpen}
            >
              <ProjectModal
                setIsModalOpen={setIsModalOpen}
                projectInformationForModal={modalInformation}
              />
            </ReactModal>
            <div className={styles.portfolioElementsContainer}>
              {projects.map((project, index) => {
                return (
                  <PortfolioCard
                    key={index}
                    projectInfo={project}
                    setIsModalOpen={setIsModalOpen}
                    setModalInformation={setModalInformation}
                  />
                );
              })}
            </div>
          </section>
          <footer className={`${styles.footerContainer}`}>
            <div className={styles.footerTextContainer}>
              <p>
                I built this place as an effort to get my first job as a
                programmer. I want to become as good as I can in this arena,
                because I have ideas for applications that can make the world a
                better place. But for that, I need to become more comfortable
                with everything that is possible. I have so much to learn, and
                I&apos;m abundant in willingness to do whatever is needed from
                me so that I can achieve my goals. If you trust in me, I will
                give my best every day to be in service of the mission of your
                company. I have a lot to give.
              </p>
              <div className={styles.letsChatBtnContainer}>
                <button onClick={handleCopyEmail}>Let&apos;s Chat</button>
              </div>
            </div>
          </footer>
        </div>
      </>
    </>
  );
}
