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
      images: [],
      bullets: [
        {
          text: "Competed in the HackBeanpot Hackathon to make a note-taking website which allows switching between text and code formatting",
          key: "1",
        },
        {
          text: "Utilized React functional components with hooks such as useState, useEffect, and useRef",
          key: "2",
        },
        {
          text: "Built ReactJS app in 48 hours with a partner",
          key: "3",
        },
      ],
      url: "https://nate-kirschner.github.io/PseudoNote/",
    },
  },
  {
    title: "The Other Half's News",
    description: "A news aggregator which sorts articles by political bias.",
    techUsed: ["ReactJS"],
    // drawer: {
    //   images: [],
    //   bullets: [],
    //   url: "https://tohnews.natekirschner.com",
    // },
  },
];

export default projects;
