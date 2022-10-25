import { NextPage } from "next"
import Link from "next/link"
import Button from "../elements/Button"
import Academia, { AcademiaEntry } from "./Academia"
import Experience, { ExperienceEntry } from "./Experience"
import ButtonLayout from "../layout/ButtonLayout"
import Skills from "./Skills"
import Projects, { ProjectsEntry } from "./Projects"

const projects : ProjectsEntry = {
  projects:
  [{
    srcTitle: "georgep9 / uav-webvis",
    title: "UAVPayload-Visualization",
    description: "RESTful web interface for visualizing air quality and image processing data.",
    imgProps: {
      src: './uav-webvis.png',
      alt: 'uav-webvis',
      href: 'https://github.com/georgep9/uav-webvis'
    },
    skills: {
      labels: ["Vue", "Python", "Javascript", "Docker", "AWS", "NGINX"]
    }
  }]
}

const experiences : ExperienceEntry = {
  experiences: 
  [{
    org: {
      fullname: "iDU Identification",
      shortname: "IDU"
    },
    title: "Junior Software Engineer",
    period: {
      start: new Date("2022-07"),
      end: new Date("2022-09")
    },
    description: "Full-stack development and debugging of features for a suite of real-time ID scanning solutions. AWS lead in provisioning and migrating SaaS from Google's firebase to AWS. Collaborating with key stake-holders in handover process for vertical software.",
    skills: {
      labels: ["Typescript", "Next.js", "Node.js", "REST API", "AWS"]
    }
  },
  {
    org: {
      fullname: "ConsenSys Software Inc",
      shortname: "CSI"
    },
    title: "Graduate Blockchain Protocol Engineer",
    period: {
      start: new Date("2021-12"),
      end: new Date("2022-06")
    },
    description: "Graduate responsible for maintaining and developing features around blockchain protocol algorithms and cryptographic signing modules. These are used to support ConsenSys' enterprise friendly Ethereum clients Besu and Teku.",
    skills: {
      labels: ["Java", "AWS", "Blockchain", "Protocols"]
    }
  },
  {
    org: {
      fullname: "CSG International",
      shortname: "CSG"
    },
    title: "Intern Developer",
    period: {
      start: new Date("2021-06"),
      end: new Date("2021-11")
    },
    description: "Developing and supporting the provision of AWS micro-services for the SaaS platform Ascendon, a cloud-native solution for real-time online charging. Previously a winter intern, refactoring scripts for the infrastructure support team to improve performances and provide features for internal software.",
    skills: {
      labels: ["C#", ".NET", "Perl", "serverless", "AWS"]
    }
  },
  {
    org: {
      fullname: "Queensland University of Technology",
      shortname: "QUT"
    },
    title: "Sessional Academic",
    period: {
      start: new Date("2021-03"),
      end: new Date("2021-06")
    },
    description: "Academic tutor for software engineering honours course Embedded Systems (EGH456).",
    skills: {
      labels: ["C", "TI-RTOS", "Embedded Systems"]
    }
  },
  {
    org: {
      fullname: "Department of Defence",
      shortname: "CASG"
    },
    title: "Undergraduate Engineer",
    period: {
      start: new Date("2020-12"),
      end: new Date("2021-02")
    },
    description: "Researched and presented strategies to support Navy hydrographic capability to address and mitigate the threats associated with the rapidly evolving landscape of cybersecurity",
    skills: {
      labels: ["Systems Engineering", "Operations", "IT security"]
    }
  }]
}

const qut : AcademiaEntry = {
  education: [{
    institution: {
        fullname: "Queensland University of Technology",
        shortname: "QUT"
    },
    course: {
        fullname: "Bachelor of Engineering",
        level: "Honours IIA",
        major: "Computer and Software Systems",
        minors: ["IT Breadth", "Software Engineering"],
        period: {
          start: new Date("2018-02"),
          end: new Date("2021-12")
        },
    },
    grade: "6.09"
    }],
  research: [{
    institution: {
      fullname: "Queensland University of Technology",
      shortname: "QUT"
    },
    project: {
        title: "Deep Reinforcement Learning for Robotic Bin Packing",
        srcTitle: "OpenAI DRL for bin packing",
        description: "Research project for QUT's industry partner Dorabot. Utilizes OpenAI's spinningup in RL to solve the robotic bin packing problem in warehouse logistics.",
        imgProps: {
          src: "./drl-binpacking.gif",
          alt: "drl-binpacking",
          href: "https://spinningup.openai.com/en/latest/"
        }
    },
    type: "Honours Thesis",
    skills: {
      labels: ["OpenAI", "Python", "Machine Learning", "Deep RL", "Robotics"]
    }
  }]
}

const PortfolioContent : NextPage = () => {

  const projHeader = () => {
    return (<>
      <h4 className="text-center">Side projects 🤖</h4>
    </>)
  }

  const projSkills = () => {
    return (<>
      <Skills skills={projects.projects} />
    </>)
  }

  const projContent = () => {
    return (<>
      <Projects {...projects} />
    </>)
  }

  const expHeader = () => {
    return (<>
      <h4 className="text-center">Industry 💼</h4>
    </>)
  }

  const expSkills = () => {
    return (<>
      <Skills skills={experiences.experiences} />
    </>)
  }

  const expContent = () => {
    return (<>
      <Experience {...experiences}/>
    </>)
  }

  const acedemiaHeader = () => {
    return (<>
      <h4 className="text-center">Academia 🎓</h4>
    </>)
  }

  const acedemiaSkills = () => {
    return (<>
      <Skills skills={qut.research} />
    </>)
  }

  const acedemiaContent = () => {
    return (<>
      <Academia {...qut}/>
    </>)
  }

  return (
    <>
      <ButtonLayout header={projHeader()} content={projContent()} toggleContent={projSkills()}/>
      <ButtonLayout header={acedemiaHeader()} content={acedemiaContent()} toggleContent={acedemiaSkills()}/>
      <ButtonLayout header={expHeader()} content={expContent()} toggleContent={expSkills()}/>
      <Link href="/contact">
        <a><Button label="☕ Reach Me"/></a>
      </Link>
    </>
  )
}

export default PortfolioContent
