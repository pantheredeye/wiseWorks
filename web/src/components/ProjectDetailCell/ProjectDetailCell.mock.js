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
    title: 'Sample Project',
    description: 'This is a sample project description.',
    budget: 10000,
    documents: ['document1.pdf', 'document2.pdf'],
    expertise: 'Engineering',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2023-12-31'),
    owner: {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    status: 'Open',
  },
})