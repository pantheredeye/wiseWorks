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
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <li
          key={project.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <h3 className="truncate text-sm font-medium text-gray-900">
                {project.title}
              </h3>
              <p className="mt-1 truncate text-sm text-gray-500">
                {project.description}
              </p>
            </div>

            <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={project.imageUrl}
              alt=""
            />
          </div>

          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href="/details"
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                Details
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href="/apply"
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                Apply
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
