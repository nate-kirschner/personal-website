const projects = [
  {
    title: "Rate My Site",
    description:
      "A website for sharing and getting feedback on personal websites.",
    drawer: {
      images: [
        "ratemysite-1.png",
        "ratemysite-2.png",
        "ratemysite-3.png",
        "ratemysite-4.png",
        "ratemysite-5.png",
      ],
      bullets: [
        {
          text: "I built a website for developers to share their personal websites and receive feedback on their work.",
          key: "1",
        },
        {
          text: "In doing this, I learned how to use a variety of AWS services and troubleshot issues, in order to deploy a serverless backend with AWS Lambda.",
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
    drawer: {
      images: [],
      bullets: [],
      url: "https://bestballmajors.natekirschner.com",
    },
  },
  {
    title: "PseudoNote",
    description: "A note taking app for computer science students.",
    drawer: {
      images: [],
      bullets: [],
      url: "https://nate-kirschner.github.io/PseudoNote/",
    },
  },
  {
    title: "The Other Half's News",
    description: "A news aggregator which sorts articles by political bias.",
    drawer: {
      images: [],
      bullets: [],
      url: "https://tohnews.natekirschner.com",
    },
  },
];

export default projects;
