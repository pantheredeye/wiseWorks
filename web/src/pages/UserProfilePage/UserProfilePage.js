import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, FieldError, Label, TextField, SelectField, FileField } from '@redwoodjs/forms'

const Specialties = [
  { value: 'electrical', label: 'Electrical' },
  { value: 'plumbing', label: 'Plumbing' },
  { value: 'structural', label: 'Structural' },
]

const UserProfilePage = () => {

  const onSubmit = data => {
    // submit form data
  }


  return (
    <>
      <MetaTags title="UserProfile" description="UserProfile page" />


      <header className="bg-primary text-white p-4">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </header>

      <Form onSubmit={onSubmit} className="p-4 bg-white">
        <div className="mb-4">
          <Label name="resume" className="block font-bold mb-2">
            Upload Resume
          </Label>
          <FileField
            name="resume"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <Label name="licenseDocs" className="block font-bold mb-2">
            License Documents
          </Label>
          <FileField
            name="licenseDocs"
            className="w-full p-2 border border-gray-300 rounded"
            multiple
          />
        </div>

        <div className="mb-4">
          <Label name="name" className="block font-bold mb-2">Name</Label>
          <TextField name="name" className="w-full p-2 border border-gray-300 rounded" validation={{ required: true }} />
        </div>

        <div className="mb-4">
          <Label name="email" className="block font-bold mb-2">Email</Label>
          <TextField name="email" className="w-full p-2 border border-gray-300 rounded" validation={{ required: true }} />
        </div>

        <div className="mb-4">
          <Label name="phone" className="block font-bold mb-2">Phone</Label>
          <TextField name="phone" className="w-full p-2 border border-gray-300 rounded" validation={{ required: true }} />
        </div>

        <div className="mb-4">
          <Label name="location" className="block font-bold mb-2">Location</Label>
          <TextField name="location" className="w-full p-2 border border-gray-300 rounded" validation={{ required: true }} />
        </div>

        <div className="mb-4">
          <Label name="licenses" className="block font-bold mb-2">Licenses & Certifications</Label>
          <TextField name="licenses" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="skills" className="block font-bold mb-2">Skills & Expertise</Label>
          <TextField name="skills" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="workHistory" className="block font-bold mb-2">Work History</Label>
          <TextField name="workHistory" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="projects" className="block font-bold mb-2">Projects & Achievements</Label>
          <TextField name="projects" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="degrees" className="block font-bold mb-2">Degrees & Certificates</Label>
          <TextField name="degrees" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="institutions" className="block font-bold mb-2">Institutions</Label>
          <TextField name="institutions" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="workSamples" className="block font-bold mb-2">Work Samples</Label>
          <TextField name="workSamples" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="testimonials" className="block font-bold mb-2">Testimonials</Label>
          <TextField name="testimonials" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <Label name="specialties" className="block font-bold mb-2">Areas of Specialty</Label>
          <SelectField name="specialties" className="w-full p-2 border border-gray-300 rounded" options={Specialties} />
        </div>

        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
          Register
        </button>

      </Form>

    </>
  )
}

export default UserProfilePage
