const projects = [
  {
    title: "Rate My Site",
    description:
      "A website for sharing and getting feedback on personal websites.",
    techUsed: [
      "ReactJS",
      "NodeJs",
      "MySQL",
      "AWS Lambda",
      "AWS RDS",
      "AWS Api Gateway",
    ],
    drawer: {
      images: [
        "ratemysite/ratemysite-1.png",
        "ratemysite/ratemysite-2.png",
        "ratemysite/ratemysite-3.png",
        "ratemysite/ratemysite-4.png",
        "ratemysite/ratemysite-5.png",
      ],
      bullets: [
        {
          text: "When starting to build my personal website, I searched for sources of inspiration on the internet",
        },
        {
          text: "Built a website for developers to share their personal websites and receive feedback on their work",
          key: "1",
        },
        {
          text: "Learned how to use a variety of AWS services and troubleshot issues, in order to deploy a serverless backend with AWS Lambda",
          key: "2",
        },
      ],
      url: "https://ratemysite.xyz",
    },
  },
  {
    title: "Best Ball Majors",
    description:
      "A fantasy golf website with weekly competitions to compete against friends.",
    techUsed: ["ReactJS", "NodeJs", "MySQL", "AWS EC2"],
    drawer: {
      images: [
        "bestball/bestball-1.png",
        "bestball/bestball-2.png",
        "bestball/bestball-3.png",
        "bestball/bestball-4.png",
      ],
      bullets: [
        {
          text: "Created a fantasy golf website that allows over 30 users to view live scores, join leagues with friends, and create weekly rosters",
          key: "1",
        },
        {
          text: "Designed frontend UI mockups, implemented a ReactJS frontend, and created a REST API using NodeJS and Express",
          key: "2",
        },
        {
          text: "Deployed entire stack on an EC2, set up Nginx server and SSL certificate, and created CloudWatch alarms to monitor reachability",
          key: "3",
        },
      ],
      url: "https://bestballmajors.natekirschner.com",
    },
  },
  {
    title: "PseudoNote",
    description: "A note taking app for computer science students.",
    techUsed: ["ReactJS"],
    drawer: {
      images: ["pseudonote/pseudonote-1.png"],
      bullets: [
        {
          text: "I competed in HackBeanpot 2022 Hackathon and created a a note-taking website which allows switching between text and code formatting",
          key: "1",
        },
        {
          text: "We utilized ReactJs for the frontend. Instead of a backend, we built in functionality to download notes to keep their formatting and reupload previously created documents",
          key: "2",
        },
        {
          text: "I worked with a partner to build the entire app in 48 hours",
          key: "3",
        },
      ],
      url: "https://devpost.com/software/pseudonote-q56bih",
    },
  },
  {
    title: "The Other Half's News",
    description:
      "My first React website: A news aggregator which sorts articles by political bias.",
    techUsed: ["ReactJS"],
    drawer: {
      images: ["tohnews/tohnews-1.png"],
      bullets: [
        {
          text: "I used this site to teach myself ReactJs.",
          key: "1",
        },
        {
          text: "The site gets news articles from an api and displays them according to their political bias based on the source of the article. It's supposed to expose the user to articles they might not normally see in their news feed.",
          key: "2",
        },
        {
          text: "I made a lot of mistakes when building this: only using class components, storng the api key in the frontend, long and unweildy components, but it was a great learning experience.",
          key: "3",
        },
        {
          text: "And I still look at it from time to time to get my news.",
          key: "4",
        },
      ],
      url: "https://tohnews.natekirschner.com",
    },
  },
];

export default projects;
