import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import ReactModal from 'react-modal';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import jpgroup from '../public/images/jpgroup.jpg';
import technologies from '../public/images/technologies.jpg';
import dripWork from '../public/images/portfolio/dripWork.png';
import holamila from '../public/images/portfolio/holamila.png';
import humanMusic from '../public/images/portfolio/humanMusic.png';
import jpfraneto from '../public/images/portfolio/jpfraneto.png';
import mamiferas from '../public/images/portfolio/mamiferas.png';
import rudraKY from '../public/images/portfolio/rudraKY.png';
import theInfiniteJest from '../public/images/portfolio/theInfiniteJest.png';
import theOpenSourceFactory from '../public/images/portfolio/theOpenSourceFactory.png';
import worldsOfSound from '../public/images/portfolio/worldsOfSound.png';
import timelessIntegration from '../public/images/portfolio/timelessIntegration.png';
import { SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si';
import PortfolioCard from '../components/PortfolioCard';
import ProjectModal from '../components/ProjectModal';
import Technologies from '../components/Technologies';

const projects = [
  {
    name: 'Human Music',
    sourceCodeUrl: 'https://github.com/jpfraneto/human-music',
    url: 'www.human-music.com',
    prodUrl: 'https://www.human-music.com',
    image: humanMusic,
    description:
      'This is the project that got me started into the programming world. I had an idea, and I had to learn how to code in order to build it into a reality. This idea was creating a space where people could share music recommendations and I created an algorythm that picks one of those recommendations randomly and brings it into a state that I call the present, on which there is always a recommendation being played. When the system runs out of recommendations it starts again, so it is an eternal loop of music that is intended to be a repository of good music that people will share because of something special that that piece has meant in their lives.',
  },
  {
    name: 'Drip Work',
    sourceCodeUrl: 'https://github.com/jpfraneto/drip-work',
    url: 'www.drip-work.app',
    prodUrl: 'https://ancient-spire-82753.herokuapp.com/',
    image: dripWork,
    description:
      'When I think about what to write in this place, as a presentation of this project that I created for you, I come up to the realization that the best that I can do is share with you the intentions that I had as I was building it. This one, Drip Work, was one of the first projects that I created in the frame of The Open Source Factory. It is a foundational one, in the sense that its purpose was to build for myself a scaffolding that I could use in every session on which I came to my computer to do my work. I find it very important to be able to focus deeply, and then relax as much as I can, so that I can get the best out of my capacities. It is in this realm that I found out about Cal Newports concept of Deep Work, and Drip Work is my interpretation of it. \n It is the means by which I put myself on service to do the important work that I can do. \n For that, I need to be focused. I need to put my whole being into the task at hand. I need something to hold me in that process, and that comes with structure. With the structure of knowing what are the missions for that session. With the structure of knowing for how much time Ill work. I need to be able to tell my surroundings which is going to be my necessity of time for that session, so that they can count on me aftewards. As my responsibilities grow, I have a bigger necessity for providing my best in every area of my life, and this projects intention is that. To give me the space to move in that direction. There is a profile on which all my deep work sessions are stored, there is a timer that starts every time that I want to start a new session, and there is the opportunity to add all these sessions into every project on which Im working. It represents what I care about in my life, which is building structures that enable me to express my best.',
  },
  {
    name: 'Hola Mila',
    sourceCodeUrl: 'https://github.com/jpfraneto/milasuniverse',
    url: 'www.holamila.com',
    prodUrl: 'https://www.holamila.com',
    image: holamila,
    description:
      'This is a website that I created for sharing bedtime stories that then could be read to little children (or grown ups) when they go to bed (or at any time really). Halfway through I realized that that was not what I wanted to build and I realized that the project was a place where I would share the first 40 days of life of my little daughter. It was an amazing journey to go through the coding of this project and pivot in the middle.',
  },
  {
    name: 'Second Brain',
    sourceCodeUrl: 'https://github.com/jpfraneto/jpfraneto',
    url: 'jp.jpfraneto.com',
    prodUrl: 'https://jp.jpfraneto.com',
    image: jpfraneto,
    description:
      'Finally I created the new version of my personal website, that will be something like a creational blog for what I think, what I believe, and it is the canvas on which I will explore my future. This is the place where I will come to integrate content, to share my podcast, to share my art, to share my programming projects. There is a lot of things that I do, and I think that this project will be the means by which I make sense of all that and build a consistent basis for what comes next.',
  },
  {
    name: 'Mamiferas',
    sourceCodeUrl: 'https://github.com/jpfraneto/mamiferas',
    url: 'www.mamiferas.org',
    prodUrl: 'https://www.mamiferas.org',
    image: mamiferas,
    description:
      'This is a project that was created with the hope of building a community around the process of bringing a new human being into this world. Im going through that process right now, and with the help and support of other people that are willing to share their experience (as they go through or have been through this process) and empower others because of that, there is so much that can be done. One of the biggest takeaways of this project is the importance of early feedback for the development of the platform. I was throughout the month getting constant help from my partner, and building the platform with that advice in mind (thinking about what could be useful for her), but three days before publishing I sent a chain of emails to 20 persons that are going through the pregnancy now and 2 of them answered me, and gave me really useful advice that would have been interesting to have in the beginning so that I could build the platform with them in mind. The challenge there is how to communicate my idea so that they can understand the project without it existing yet. And because Im doing this whole OSF thing just to train my skills, and not necessarily to build something useful to someone specific, that may be a challenge. I have to better understand this game of wanting to express my full creativity and wanting to build something useful, because there is a intersection there that I can leverage if Im intelligent enough. Thats the great aspect of this being only the third project of the whole system, because there is so much to be done in the future. Who knows what will end up happening.',
  },
  {
    name: 'rudraKY',
    sourceCodeUrl: 'https://github.com/jpfraneto/rudraky',
    url: 'www.rudraKY.com',
    prodUrl: 'https://www.rudraKY.com',
    image: rudraKY,
    description:
      'This project is all about the teaching of Kundalini Yoga, and it is intended for teachers that want to use it as a tool for creating their classes (and going through them). It has the feature of adding a class which other people can edit afterwards, and you can go through that class exercize after exercize with a timer so that you can check the time that every exercize is being done. There is also a recordings page on which people that have made their classes can share the recording for further exploration from other teachers, so that we can all build a network of knowledge based on what it has been for others to give their classes. We are all in this learning together, and the fact that I do a class with a person that has been teaching for a long time, and then with a classmate that is just learning as I do, teaches me a lot about what are the key aspects that I need to have in mind if I want to get better at what Im doing. That is why I added this recording part, so that we can together build this knowledge. There was a whole part of it related to building a community that was created with Discourse, but I realized it was not useful in this moment so I decided to erase it. But probably it will come back in the future, with more strength. I stopped putting my energy in it because I thought I was alone, and then realized that there was people that were finding value on it. It is important for me to trust in the things that I build and how other people can find value in them, so I will build it again and point to it in comunidad.rudraky.com. Overall this was a project where I learned a lot, and that helped me to come out of tutorial hell and build real stuff. I feel commited, motivated and focused.',
  },
  {
    name: 'The Infinite Jest',
    sourceCodeUrl: 'https://github.com/jpfraneto/the-infinite-jest-v2',
    url: 'www.theinfinitejest.com',
    prodUrl: 'https://www.theinfinitejest.com',
    image: theInfiniteJest,
    description:
      'The Infinite Jest is the movie that David Foster Wallace imagined as being the most fun thing on the earth. This project is my interpretation of that idea, where I created an eternal thread of content that is build by the sharing of people from all over the world. Each person can have his/her profile on which she can share media that is important for her, and as soon as that media is added, it will be a potential media that will be played in the eternal thread. The whole system is based in randomness, and that is my take on life. Opening to the unknown, and realizing the value that it has.',
  },
  {
    name: 'Worlds Of Sound',
    sourceCodeUrl: 'https://github.com/jpfraneto/worlds-of-sound',
    url: 'www.worldsofsound.org',
    prodUrl: 'https://www.worldsofsound.org',
    image: worldsOfSound,
    description:
      'I will merge the APIs from the three services that I use to listen to music: Youtube, Spotify and Soundcloud. The idea was to create a board similar of the one that a DJ has and be able to play and mix music in it from these different platform.',
  },
  {
    name: 'The Open Source Factory',
    sourceCodeUrl: 'https://github.com/jpfraneto/the-open-source-factory',
    url: 'www.theopensourcefactory.com',
    prodUrl: 'https://www.theopensourcefactory.com',
    image: theOpenSourceFactory,
    description:
      'Establishing the foundations from which I will build 13 open source projects throughout the following year. I will develop self-mastery and a strong capacity of commitment and believing on my own talent by this, and also be able to spend important and quality time with myself and my famlily. It is really important for me to limit the amount of time that I work every day and develop a strong capacity of focus on the time that I sit down to work, and I will be training myself on that realm.',
  },
  {
    name: 'Timeless Integration Podcast',
    sourceCodeUrl: 'https://github.com/jpfraneto/human-music-podcast',
    url: 'podcast.human-music.com',
    prodUrl: 'https://human-music-podcast.herokuapp.com/',
    image: timelessIntegration,
    description:
      'In this project I don&apos;t feel that I was able to work in a consistent way, and the end result is an expression of that. It works well, it does what I wanted it to do, but I think that I could have done better if I had been able to organize the work in a different way. If I had established since the beginning what I wanted to do so that I could focus better the work, and through that process be able to educate myself in the different concepts of the framework that I used (React). I spent a big part of the development process doing stuff almost automatically, and without reading too much documentation. This comes from a domain of action that is limited, and that I need to broaden if I want to achieve better results in this education process. But the most important aspect of all of this is to do the work, it is to ship the project no matter what, and that&apos;s what I&apos;m doing now. Facing the sensations that come into my being because of not having done it ‘properly&apos; is what brings up the long term gains, which is what I&apos;m striving for. Overall, I feel complete. It has been a huge challenge to trust myself and the podcast project is something that makes me feel really anxious, but I&apos;m sure that one day all this effort will pay off.',
  },
];

export default function Home(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInformation, setModalInformation] = useState(null);
  const heroSection = useRef(null);
  const aboutMeSection = useRef(null);
  const skillsSection = useRef(null);
  const portfolioSection = useRef(null);

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
              <Technologies />
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
            <ReactModal className={styles.modalStyles} isOpen={isModalOpen}>
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
