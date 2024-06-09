const experience = [
  {
    company: "Flexcar",
    positions: [
      {
        key: "flexcar",
        title: "Frontend Development Co-op",
        date: "Jan. 2023 - June 2023",
      },
    ],
    description:
      "Worked on both the React Native mobile app and the React website. Implemented a complete redesign of the company homepage and delivered critical features related to push notifications and user identity verification.",
    drawer: {
      techUsed: ["ReactJs", "React Native", "Typescript", "GraphQL"],
      bullets: [
        {
          text: "Owned development of features in React Native app to allow users to perform critical functions such as user referrals, identity verification, and push notification settings",
          key: "1",
        },
        {
          text: "Built sections of redesigned company homepage to demonstrate benefits of new pricing changes to customers",
          key: "2",
        },
        {
          text: "Converted complex Figma designs to ReactJS with high attention to detail while ensuring on time delivery for aggressive deadlines",
          key: "3",
        },
        {
          text: "Developed new user flows with ReactJS and GraphQL",
          key: "4",
        },
        {
          text: "Engaged in standups, refinements, and retrospectives to ensure a smooth agile process, offering and receiving frequent feedback",
          key: "5",
        },
      ],
    },
  },
  {
    company: "WoodMackenzie",
    positions: [
      {
        key: "PA",
        title: "Full-Stack Software Development Co-op",
        date: "Jan. 2022 - June 2022",
      },
    ],
    description:
      "Developed full-stack features ranging from data pipelines to new UI screens and modals to allow clients an easier experience viewing their data.",
    drawer: {
      techUsed: [
        "ReactJs",
        "NodeJs",
        "Javascript",
        "AWS Lambda",
        "AWS Step Function",
        "AWS CloudWatch",
        "SQL",
      ],
      bullets: [
        {
          text: "Implemented new workflow features across the company’s web application to streamline client experiences",
          key: "1",
        },
        {
          text: "Developed a pipeline to generate a new dataset that allows clients to analyze the risk associated with their suppliers and created a data panel and map to display new dataset",
          key: "2",
        },
        {
          text: "Coordinated three separate release processes, bringing in subject matter experts from development, DevOps, and product as needed to solve production issues/bugs",
          key: "3",
        },
        {
          text: "Pair programmed with full-time engineers to plan, implement, and deliver new features and bug fixes using ReactJS and NodeJS",
          key: "4",
        },
        {
          text: "Utilized AWS tools such as Lambdas, Step Functions, CloudWatch, and EC2, and completed 8-hour AWS Udemy course",
          key: "5",
        },
        {
          text: "Wrote several PostgreSQL and MySQL scripts to update permissions and change development and production databases",
          key: "6",
        },
        {
          text: "Conducted interviews for future coops, reviewed resumes, and planned web development workshops and lectures for onboarding",
          key: "7",
        },
      ],
    },
  },
  {
    company: "Code 4 Community Club",
    positions: [
      { title: "Tech Lead", date: "Sept. 2023 - Present", key: "lead" },
      {
        title: "Developer",
        date: "Sept. 2022 - Aug. 2023",
        key: "developer",
      },
    ],
    description:
      "Built a website for This Star Won't Go Out, an organization which provides financial grants to families of children with cancer.",
    drawer: {
      techUsed: ["ReactJs", "NodeJs", "Typescript", "AWS SAM", "AWS QLDB"],
      bullets: [
        {
          text: "We created a web application to help This Star Won't Go Out connect with social workers to give grants to families of children with cancer",
          key: "1",
        },
        {
          text: "As tech lead, I led a team of student developers and designers in weekly standups, created tickets and delegated work, reviewed code, and mentored and assisted team members in completing project goals",
          key: "2",
        },
        {
          text: "We are creating a website to help the organization streamline their processes, which were previously done entirely through email",
          key: "3",
        },
        {
          text: "I set up production and development environments for the web application using AWS SAM and QLDB for the serverless backend and AWS Amplify for the ReactJS frontend",
          key: "4",
        },
      ],
    },
  },
  {
    company: "Northeastern University",
    positions: [
      {
        title: "Teaching Assistant",
        key: "TA",
      },
    ],
    subPositions: [
      {
        title: "Object Oriented Design",
        date: "Sept. 2021 - Dec. 2021",
        key: "OOD",
      },
      {
        title: "Logic and Computation",
        date: "Sept. 2022 - Dec. 2022",
        key: "Logic",
      },
    ],
    description:
      "Assisted teaching staff in grading assignments and proctoring exams. Led weekly offices hours and labs to help students learn course material and answer questions.",
  },
];

export default experience;
