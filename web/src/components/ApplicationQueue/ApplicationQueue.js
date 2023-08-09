// In this example, the ApplicationQueue component receives a list of applicants as a prop. It maintains the state of selectedReviewers using the useState hook.
// The handleSelectReviewer function is called when a checkbox is clicked, updating the selected reviewers accordingly. The handleSelectReviewersClick function
// is triggered when the "Select Reviewers" button is clicked, and it calls the onSelectReviewers prop function with the selected reviewers.
// You can integrate this ApplicationQueue component into your project layout or page, depending on your application's structure and routing.

import { useState } from 'react'

const ApplicationQueue = ({ applicants, onSelectReviewers }) => {
  const [selectedReviewers, setSelectedReviewers] = useState([])

  const handleSelectReviewer = (applicantId) => {
    setSelectedReviewers((prevSelectedReviewers) => {
      if (prevSelectedReviewers.includes(applicantId)) {
        return prevSelectedReviewers.filter((id) => id !== applicantId)
      } else {
        return [...prevSelectedReviewers, applicantId]
      }
    })
  }

  const handleSelectReviewersClick = () => {
    onSelectReviewers(selectedReviewers)
  }

  return (
    <div className="bg-white p-4">
      <h2 className="mb-4 text-2xl font-bold">Applicant Queue</h2>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
              Name
            </th>
            <th className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Qualifications
            </th>
            <th className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Select
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {applicants.map((applicant) => (
            <tr
              key={applicant.id}
              className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900"
            >
              <td>{applicant.name}</td>
              <td>{applicant.qualifications}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedReviewers.includes(applicant.id)}
                  onChange={() => handleSelectReviewer(applicant.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="mt-4 rounded bg-green-600 py-2 px-4 text-white"
        onClick={handleSelectReviewersClick}
      >
        Select Reviewers
      </button>
    </div>
  )
}

export default ApplicationQueue
