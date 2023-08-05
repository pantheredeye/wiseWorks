const ProjectDetail = ({ projectDetail }) => {
  return (
    <div>

      <p>Owner: {projectDetail.owner.name}</p>
      <p>Email: {projectDetail.owner.email}</p>
      <p>Expertise: {projectDetail.expertise}</p>


      <div className="project-details-container">
      <h1>{projectDetail.title}</h1>    
      <p>{projectDetail.description}</p>
      <p>Project Description</p>

      <div className="project-documents">
        <h2>Project Documents</h2>
        {/* Display relevant documents */}
      </div>

      <div className="project-info">
        <h2>Project Information</h2>
        <p>Budget: $1000</p>
        <p>Expertise Required: Mechanical Engineering</p>
        <p>Project Timeline: Start Date - End Date</p>
      </div>
    </div>
  )
}

export default ProjectDetail