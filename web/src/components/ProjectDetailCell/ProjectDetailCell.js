export const QUERY = gql`
  query FindProjectDetailQuery($id: Int!) {
    projectDetail(id: $id) {
      id
      title
      description
      owner {
        id
        name
        email
      }
      expertise
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ projectDetail }) => {
  const { owner, title, description, expertise } = projectDetail

  return (
    <div className="project-details-container">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="project-documents">
        <h2>Project Documents</h2>
        {/* Display relevant documents */}
      </div>

      <div className="project-info">
        <h2>Project Information</h2>
        <p>Owner: {owner.name}</p>
        <p>Email: {owner.email}</p>
        <p>Expertise: {expertise}</p>
      </div>
    </div>
  )
}