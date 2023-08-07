// model Project {
//   id        Int      @id @default(autoincrement())
//   title     String
//   description String
//   budget    Float
//   documents  String[]
//   expertise  String
//   startDate  DateTime
//   endDate    DateTime
//   owner     User     @relation(fields: [ownerId], references: [id])
//   ownerId   Int
//   status    String
//   reviewApplicants
// }

export const standard = (/* vars, { ctx, req } */) => ({
  projects: [
    {
      id: 1,
      title: 'Drainage Review for a New Housing Development',
      description: 'This project involves reviewing the drainage plans for a new housing development to ensure proper water management and prevent flooding.',
      owner: 'John Doe',
      expertise: 'Civil Engineering',
    },
    {
      id: 42,
      title: 'Sidewalk Design Review for a Downtown Business District',
      description: 'This project focuses on reviewing the sidewalk design plans for a downtown business district to ensure accessibility and safety for pedestrians.',
      owner: 'Jane Smith',
      expertise: 'Civil Engineering',
    },
    {
      id: 3,
      title: 'Grading Plan Review for a New Commercial Building',
      description: 'This project entails reviewing the grading plans for a new commercial building to ensure proper site preparation and drainage.',
      owner: 'Alex Johnson',
      expertise: 'Civil Engineering',
    },
    {
      id: 4,
      title: 'Traffic Study for a Proposed Highway Expansion',
      description: 'This project involves conducting a comprehensive traffic study for a proposed highway expansion to assess the impact on traffic flow and congestion.',
      owner: 'John Doe',
      expertise: 'Civil Engineering',
    },
    {
      id: 5,
      title: 'Structural Analysis for a New Bridge Design',
      description: 'This project focuses on performing a detailed structural analysis for a new bridge design to ensure its safety and structural integrity.',
      owner: 'Jane Smith',
      expertise: 'Structural Engineering',
    },
    {
      id: 6,
      title: 'Environmental Impact Assessment for a New Industrial Plant',
      description: 'This project entails conducting an environmental impact assessment for a new industrial plant to evaluate its potential effects on the environment.',
      owner: 'Alex Johnson',
      expertise: 'Environmental Engineering',
    },
    {
      id: 7,
      title: 'Geotechnical Investigation for a New Dam Construction',
      description: 'This project involves conducting a geotechnical investigation for a new dam construction to assess the soil conditions and ensure stability.',
      owner: 'John Doe',
      expertise: 'Geotechnical Engineering',
    },
    {
      id: 8,
      title: 'Electrical System Design for a New Hospital Building',
      description: 'This project focuses on designing the electrical system for a new hospital building, including power distribution, lighting, and emergency systems.',
      owner: 'Jane Smith',
      expertise: 'Electrical Engineering',
    },
    {
      id: 9,
      title: 'Water Treatment Plant Upgrade Project',
      description: 'This project entails upgrading an existing water treatment plant to improve efficiency, capacity, and water quality.',
      owner: 'Alex Johnson',
      expertise: 'Environmental Engineering',
    },
    {
      id: 10,
      title: 'Renewable Energy Feasibility Study for a New Solar Farm',
      description: 'This project involves conducting a feasibility study for a new solar farm to assess its potential for generating renewable energy and its economic viability.',
      owner: 'John Doe',
      expertise: 'Renewable Energy Engineering',
    },
  ],
})