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

export const Empty = () => <div>There are no projects...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)


export const Success = ({ projects }) => {

  return (
    <div className="bg-gray-100 p-4">

      <section className="p-4">
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => {
            return (
              <li key={project.id} className="py-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-gray-500">Owner: {project.owner}</p>
                <p className="text-gray-500">Expertise: {project.expertise}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}