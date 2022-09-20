import Academia, { AcademiaEntry } from "./Academia"

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

const PortfolioContent = () => {
  return (
    <div>
      <h3>Current skills</h3>
      <h3>Notable projects</h3>
      <Academia {...qut}/>
    </div>
  )
}

export default PortfolioContent
