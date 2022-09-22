import { NextPage } from "next"
import Academia, { AcademiaEntry } from "./Academia"
import Experience, { ExperienceEntry } from "./Experience"

const experiences : ExperienceEntry = {
  experiences: 
  [{
    org: {
      fullname: "iDU Identification",
      shortname: "IDU"
    },
    title: "Junior Software Developer",
    description: "Full-stack development and debugging of features for a suite of real-time ID scanning solutions. AWS lead in provisioning and migrating SaaS from Google's firebase to AWS. Collaborating with key stake-holders in handover process for vertical software."
  },
  {
    org: {
      fullname: "ConsenSys Software Inc",
      shortname: "CSI"
    },
    title: "Graduate Blockchain Protocol Engineer",
    description: "Graduate responsible for maintaining and developing features around blockchain protocol algorithms and cryptographic signing modules. These are used to support ConsenSys' enterprise friendly Ethereum clients Besu and Teku."
  },
  {
    org: {
      fullname: "CSG International",
      shortname: "CSG"
    },
    title: "Intern Developer",
    description: "Developing and supporting the provision of AWS micro-services for the SaaS platform Ascendon, a cloud-native solution for real-time online charging. Previously a winter intern, refactoring scripts for the infrastructure support team to improve performances and provide features for internal software."
  },
  {
    org: {
      fullname: "Queensland University of Technology",
      shortname: "QUT"
    },
    title: "Sessional Academic",
    description: "Academic tutor for software engineering honours course Embedded Systems (EGH456)."
  },
  {
    org: {
      fullname: "Department of Defence",
      shortname: "CASG"
    },
    title: "Undergraduate Engineer",
    description: "Researched and presented strategies to support Navy hydrographic capability to address and mitigate the threats associated with the rapidly evolving landscape of cybersecurity"
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
        minors: ["IT Breadth", "Software Engineering"]
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
        description: "Research project for QUT's industry partner Dorabot. Utilizes OpenAI's spinningup in RL to solve the robotic bin packing problem in warehouse logistics."
    },
    type: "Honours Thesis"
  }]
}

const PortfolioContent : NextPage = (props) => {
  return (
    <>
      <Experience {...experiences}/>
      <Academia {...qut}/>
    </>
  )
}

export default PortfolioContent
