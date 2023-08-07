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
    <div className="bg-gray-100 p-4">

      <header className="bg-primary text-white p-4">
        <h1 className="text-4xl font-bold">{title}</h1>
      </header>

      <div className="p-4">
        <p className="text-lg">{description}</p>

        <div className="project-documents">
          <h2 className="text-2xl font-bold">Project Documents</h2>
          {/* Display relevant documents */}
        </div>

        <div className="project-info">
          <h2 className="text-2xl font-bold">Project Information</h2>
          <p>Owner: {owner.name}</p>
          <p>Email: {owner.email}</p>
          <p>Expertise: {expertise}</p>
        </div>
      </div>


    </div>
  )
}