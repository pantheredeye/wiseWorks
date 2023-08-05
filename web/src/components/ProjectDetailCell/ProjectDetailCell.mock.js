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
  projectDetail: {
    id: 42,
    title: 'Sidewalk Design Review for a Downtown Business District',
    description: 'This project focuses on reviewing the sidewalk design plans for a downtown business district to ensure accessibility and safety for pedestrians.',
    budget: 10000,
    documents: ['document1.pdf', 'document2.pdf'],
    expertise: 'Civil Engineering',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2023-12-31'),
    owner: {
      id: 1,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
    },
    status: 'Open',
  },
});