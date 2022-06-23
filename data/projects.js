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

export const projects = [
  {
    name: 'Human Music',
    lessonsLearned:
      'Learning how to code is hard. Not knowing how to progress is hard. So what I did with this project was to commit to do the work. Sit down and push myself to learn more. I had as a challenge to sit down every day and do at least 3 pomodoros working on this project, and that was a huge helper for what I did. The best generator of long term results is learning to do the work when you don’t feel like doing it. One of the things that made me more proud was to work on the project during 100 days in a row, which was supported by my participation in the creatives workshop, by Akimbo. That helped me a lot to establish this consistency, and realize that programming is a craft, which needs me to put in the hours to achieve results. The long term is what matters, and to get there every day counts.',
    sourceCodeUrl: 'https://github.com/jpfraneto/human-music',
    url: 'www.human-music.com',
    prodUrl: 'https://www.human-music.com',
    image: humanMusic,
    technicalDescription:
      'The front end was built using plain HTML, CSS and Javascript, without any framework. The back end was built with NodeJS, so that I could practice more and more Javascript programming. For this project I had to learn a lot about the asynchronous nature of this language, since there is a lot of playing around with the timing because of how the recommendations status changes within time. The database that it is built on is MongoDB.',
    description:
      'This is the project that brought me into the programming world. I had an idea, and in order to realize what this idea was I had to build it into a reality. Thats when I decided that I needed to learn how to code, and I started with Colt Steele’s course in Udemy learning about Web Development.  \n The project was distilled into a radio, that accepts music recommendations (in the form of youtube videos) from people from all over the world. Every time that a piece is added to the system, it enters a giant soup that I call the future. I created an algorithm that brings one by one recommendations from that future into the present, and when its time is over it goes to the past. This generates an eternal thread of music, because when the soup runs off recommendations a function that I called Big Bang is called, and all the recommendations that were in the past go back to the future, starting the system all over again. \n It has been up and running smoothly for 2 years now, with me and my partner as the main users. Our young daughter loves the music that is being played here.',
  },
  {
    name: 'The Infinite Jest',
    lessonsLearned:
      'This was the last project of The Open Source Factory, and what it brought into me was the importance of designing the system before starting to build it. I did not do this, so I just came and code what felt more important in that particular day. Because of this I had to pivot the structure of the whole project, because at the beginning I started building the front end with react and the back end with node in the same repository, similar as what I did with Mamiferas. Later I realized that it was better to build an API in the back end so that I could practice this also, and that is what I ended up doing. ',
    sourceCodeUrl: 'https://github.com/jpfraneto/the-infinite-jest-v2',
    url: 'www.theinfinitejest.tv',
    prodUrl: 'https://www.theinfinitejest.tv',
    image: theInfiniteJest,
    technicalDescription:
      'The front end was built with NextJS, connected to a back end that is running with Node. Why didnt I use the custom back end that NextJS provides? Because I had a need for running timeout functions and keep the thread running, and I couldnt find out how to do this with Nextjs. I have the system connected to two different databases. When a user adds a recommendation it gets added to her profile in the front end, and also to the back ends pool of videos so that it can be brought up in the thread that is constantly running in the landing page. ',
    description:
      'The Infinite Jest is the movie that David Foster Wallace imagined as being the most fun thing on the earth. This project is my interpretation of that idea, where I created an eternal thread of content that is build by the sharing of people from all over the world. Similar from Human Music, but the idea here is to share content. Videos that you can watch and be amazed. \n Each person can has his/her profile on which she can share media that is important for her, and as soon as that media is added, it will be a potential media that will be played in the eternal thread. The whole system is based in randomness, and that is my take on life. Opening to the unknown, and realizing the value that it has. I use it a lot as a place where to bookmark videos that I want to see later. I see an interesting video in youtube, I copy the link and then I add it to my Infinite Jest profile. It is a great place for that. ',
  },
  {
    name: 'Drip Work',
    lessonsLearned: '',
    sourceCodeUrl: 'https://github.com/jpfraneto/drip-work',
    url: 'www.drip-work.app',
    prodUrl: 'https://ancient-spire-82753.herokuapp.com/',
    image: dripWork,
    technicalDescription:
      'Also built with the basic stack of HTML, CSS and Vanilla Javascript, using NodeJS in the backend and MongoDB as the database, this one adds the functionality of time into the equation. Every session has its timing, and in this sense I worked a lot with timestamps and understanding the relationship within each moment that a button related to the time was clicked. If the user stopped the timer that had to be accounted for, and if the session was over also.',

    description:
      'This was one of the first projects that I created in the frame of The Open Source Factory. It is a foundational one, in the sense that its purpose was to build for myself a scaffolding that I could use in every session on which I came to my computer to do my work. I find it very important to be able to focus deeply, and then relax as much as I can, so that I can get the best out of my capacities. It is in this realm that I found out about Cal Newports concept of Deep Work, and Drip Work is my interpretation of it.\nIt is the means by which I put myself on service to do the important work that I can do. \n For that, I need to be focused. I need to put my whole being into the task at hand. I need something to hold me in that process, and that comes with structure. With the structure of knowing what are the missions for that session. With the structure of knowing for how much time Ill work. I need to be able to tell my surroundings which is going to be my necessity of time for that session, so that they can count on me aftewards. As my responsibilities grow, I have a bigger necessity for providing my best in every area of my life, and this projects intention is that. To give me the space to move in that direction. There is a profile on which all my deep work sessions are stored, there is a timer that starts that I setup every time that I want to start a new session, and there is the opportunity to add all these sessions into every project on which Im working. It represents what I care about in my life, which is building structures that enable me to give my best.',
  },
  {
    name: 'Hola Mila',
    lessonsLearned: '',
    sourceCodeUrl: 'https://github.com/jpfraneto/milasuniverse',
    url: 'www.holamila.com',
    prodUrl: 'https://www.holamila.com',
    image: holamila,
    technicalDescription:
      'For this one, I experimented with Gatsby as a framework to build upon React. It was a very interesting choice, since it has a lot of functionalities that I have not used before, as it uses graphql queries to fetch the information from the different database providers. I created static markdown files with the content for each day, and learning how to work with these technologies was something that taught me a lot.',

    description:
      'The initial intention of this project was to build a place where people could share bedtime stories that I could afterwards read to my daughter as she went to sleep. Halfway through I realized that I wanted to create something different, and what ended up being generated was a place where to share the first 40 days of life of my little Mila. All my family member, friends, used this place as a landmark on which they could learn more about how we were doing. It was a very important place for us as parents, because we gave each other time every day to write down how we were feeling, and what was coming up in this amazing journey of parenthood. \n It is one of my projects that has had more traction, and a lot of people shared love to us because of this being up in the internet. ',
  },
  {
    name: 'The Open Source Factory',
    lessonsLearned: '',
    sourceCodeUrl: 'https://github.com/jpfraneto/the-open-source-factory',
    url: 'www.theopensourcefactory.com',
    prodUrl: 'https://cryptic-hollows-96549.herokuapp.com/',
    image: theOpenSourceFactory,
    technicalDescription: '',

    description:
      'The Open Source Factory is the mothership that I created to support my journey building projects that could enable me to become a better systems creator. I decided to build (and ship) one project every month, with the launching date being the day of the full moon. This brought into my actions a lot of FOCUS, which enabled me to sit down and do the work every day. The fact that I knew the shipping date before hand was very important, and this frame of reference helped me a lot in my path. \n I developed a strong capacity of self-mastery, of overcoming my personal obstacles, and being commited to show up. ',
  },
  {
    name: 'Mamiferas',
    lessonsLearned:
      'One of the biggest takeaways of this project is the importance of early feedback for the development of the platform. I was throughout the month getting constant help from my partner, and building the platform with that advice in mind (thinking about what could be useful for her), but three days before publishing I sent a chain of emails to 20 persons that were going through the pregnancy process and 2 of them answered me, and gave me really useful feedback that would have been interesting to have in the beginning so that I could build the platform with them in mind. \nThe challenge that I can spot is how to communicate my idea so that they can understand the project without it existing yet. This is the role of a business analyst. And because I was this whole Open Source Factory thing just to train my skills, and not necessarily to build something useful to someone specific, that could be a challenge. I have to better understand this game of wanting to express my full creativity and wanting to build something useful, because there is a intersection there that I can leverage if Im intelligent enough. And asking people what they think about it is important. That was a great aspect of this being only the third project of the whole system, because there was so much to be done in the future.',
    sourceCodeUrl: 'https://github.com/jpfraneto/mamiferas',
    url: 'www.mamiferas.org',
    prodUrl: 'https://mamiferas.herokuapp.com/',
    image: mamiferas,
    technicalDescription: '',

    description:
      'This is a project that was created with the hope of building a community around the process of bringing a new human being into this world. \n As I was building it I was going through that process, with my partner pregnant, and with the help and support of other people that are willing to share their experience (as they go through or have been through this process) and empower others because of that, there is so much that can be done. ',
  },
  {
    name: 'Second Brain',
    lessonsLearned: '',
    sourceCodeUrl: 'https://github.com/jpfraneto/jpfraneto',
    url: 'jp.jpfraneto.com',
    prodUrl: 'https://jp.jpfraneto.com',
    image: jpfraneto,
    technicalDescription: '',

    description:
      'I use this website as the place on which I store my personal information so that I can access it from everywhere. I have in here yoga classes, thoughts on content, pieces of art that I have created, challenges that I have posed myself to pursue and also the lessons that I have learned from different educational content that I have used to become better at what I care.\n It used to be my portfolio, but I realized that I was conveying too much information, which didnt make any sense to anyone that was not me. Thats why I decided to simplify it, and the website that you are looking at right now is the consequence of that.',
  },

  // {
  //   name: 'rudraKY',
  //   lessonsLearned: '',
  //   sourceCodeUrl: 'https://github.com/jpfraneto/rudraky',
  //   url: 'www.rudraKY.com',
  //   prodUrl: 'https://www.rudraKY.com',
  //   image: rudraKY,
  //   technicalDescription: '',

  //   description:
  //     'This project is all about the teaching of Kundalini Yoga, and it is intended for teachers that want to use it as a tool for creating their classes (and going through them).\n It has the feature of adding a class which other people can edit afterwards, and you can go through that class exercize after exercize with a timer so that you can check the time that every exercize is being done.\n There is also a recordings page on which people that have made their classes can share the recording for further exploration from other teachers, so that we can all build a network of knowledge based on what it has been for others to give their classes. \n We are all in this learning together, and the fact that I do a class with a person that has been teaching for a long time, and then with a classmate that is just learning as I do, tells me a lot about what are the key aspects that I need to have in mind if I want to get better at what Im doing. That is why I added this recording part, so that we can together discuss and build this knowledge. \n There was a whole part of it related to building a community that was created with Discourse, but I realized it was not useful in this moment so I decided to erase it. But probably it will come back in the future, with more strength. I stopped putting my energy in it because I thought I was alone, and then realized that there was people that were finding value on it. It is important for me to trust in the things that I build and how other people can find value in them, so I will build it again and point to it in comunidad.rudraky.com. Overall this was a project where I learned a lot, and that helped me to come out of tutorial hell and build real stuff. I feel commited, motivated and focused.',
  // },

  {
    name: 'Worlds Of Sound',
    lessonsLearned: '',
    sourceCodeUrl: 'https://github.com/jpfraneto/worlds-of-sound',
    url: 'www.worldsofsound.org',
    prodUrl: 'https://www.worldsofsound.org',
    image: worldsOfSound,
    technicalDescription: '',

    description:
      'The goal of this project was to merge the three systems that I use for listening to music in one. It was not possible in the way that I had dreamt of. The Soundcloud API is horrible. I was not able to get the track information from the raw url, which makes the functionality of the website hard to build. My idea was to create a schema with the information of each piece, such as the name, the duration, etc. I was not able to get this information from the soundcloud API, so it was frustrating. \nThe spotify API is cool but limited (I cant believe why I dont have the option to retrieve someones liked albums list). I wanted to build a page for each user on which to show all of their liked albums, something like a record collection for them to share, but it was also not possible. \n The Youtube API is the best one, but I already built human music from there. \n I dont feel comfortable with how this project ended, but I dont really care. It was a good try!',
  },

  {
    name: 'Timeless Integration Podcast',
    lessonsLearned: '',
    sourceCodeUrl: 'https://github.com/jpfraneto/human-music-podcast',
    url: 'podcast.human-music.com',
    prodUrl: 'https://human-music-podcast.herokuapp.com/',
    image: timelessIntegration,
    technicalDescription: '',

    description:
      'If you died tomorrow, what album would you take to the other side? \n That is the premise for this podcast. To ask that question to the guest beforehand, listen to the album the day of the conversation, and the talk about whatever came up. \n In this project I was not able to code in a consistent way, and the end result is an expression of that. It works well, it does what I wanted it to do, but I think that I could have done better if I had been able to organize the work in a different way. If I had established since the beginning what I wanted to do so that I could focus better the work, and through that process be able to educate myself in the different concepts of the framework that I used (React). \n I spent a big part of the development process doing stuff almost automatically, and without reading too much documentation. This comes from a domain of action that is limited, and that I need to broaden if I want to achieve better results in this education process. But the most important aspect of all of this is to do the work, it is to ship the project no matter what, and that is what I did. I shipped it, and faced the sensations that came into my being because of not having done it properly. \n Overall, it was a step in the direction of progress. The podcast and sharing my voice has been a big challenge for me, and creating this space made me realize a little bit more the potential behind it. ',
  },
];
