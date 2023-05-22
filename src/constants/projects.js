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
        // {
        //   text: "I built a website for developers to share their personal websites and receive feedback on their work.",
        //   key: "1",
        // },
        // {
        //   text: "In doing this, I learned how to use a variety of AWS services and troubleshot issues, in order to deploy a serverless backend with AWS Lambda.",
        //   key: "2",
        // },
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
      bullets: [],
      url: "https://bestballmajors.natekirschner.com",
    },
  },
  {
    title: "PseudoNote",
    description: "A note taking app for computer science students.",
    techUsed: ["ReactJS"],
    // drawer: {
    //   images: [],
    //   bullets: [],
    //   url: "https://nate-kirschner.github.io/PseudoNote/",
    // },
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
