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
      "Implemented redesign of company website, working closely with UX and product to ensure pixel-perfect quality. Also developed a new, React Native mobile app, working specifically on features related to push notifications and drivers license verification.",
    drawer: { bullets: [] },
  },
  {
    company: "PowerAdvocate (now WoodMackenzie)",
    positions: [
      {
        key: "PA",
        title: "Software Development Co-op",
        date: "Jan. 2022 - June 2022",
      },
    ],
    description:
      "Developed full-stack features ranging from data pipelines to new UI screens and modals to allow clients an easier experience viewing their data. Worked closely with engineers in an agile team to quickly release features to production and meet requirements of product owners.",
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
          text: "Developed a pipeline to generate a new dataset that allows clients to analyze the risk associated with their suppliers and created a data panel and map to display new data",
          key: "2",
        },
        {
          text: "Pair programmed with full-time engineers to plan, implement, and deliver new features and bug fixes using ReactJS and NodeJS",
          key: "3",
        },
        {
          text: "Utilized AWS tools such as Lambdas, Step Functions, CloudWatch, and EC2, and completed 8-hour AWS Udemy course",
          key: "4",
        },
        {
          text: "Communicated frequently with product owners about design decisions while place on two agile teams",
          key: "5",
        },
        {
          text: "Wrote several PostgreSQL and MySQL scripts to update permissions and change development and production databases",
          key: "6",
        },
        {
          text: "Led three separate release processes, bringing in subject matter experts from development, DevOps, and product as needed to solve production issues/bugs",
          key: "7",
        },
        {
          text: "Conducted interviews for future coops, reviewed resumes, and planned web development workshops and lectures for onboarding",
          key: "8",
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
      "Building a website for This Star Won't Go Out, an organization which provides financial grants to families of children with cancer. Our contributions will help streamline their processes, previously done through email, to help reach more families faster. As the Tech Lead for this project, I have the responsibilities of leading weekly team meetings, delegating work to developers, communicating progess with the club e-board, reviewing code quality, and making design decisions.",
    drawer: { bullets: [] },
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
