export const QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      title
      description
      owner
      expertise
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Owner: {project.owner}</p>
            <p>Expertise: {project.expertise}</p>
          </li>
        )
      })}
    </ul>
  )
}