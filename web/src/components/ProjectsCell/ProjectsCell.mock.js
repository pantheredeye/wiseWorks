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
// }

export const standard = (/* vars, { ctx, req } */) => ({
  projects: [
    {
      id: 42,
      title: 'Project 1',
      description: 'This is the description for Project 1.',
      owner: 'John Doe',
      expertise: 'Engineering',
    },
    {
      id: 43,
      title: 'Project 2',
      description: 'This is the description for Project 2.',
      owner: 'Jane Smith',
      expertise: 'Design',
    },
    {
      id: 44,
      title: 'Project 3',
      description: 'This is the description for Project 3.',
      owner: 'Alex Johnson',
      expertise: 'Marketing',
    },
  ],
})
