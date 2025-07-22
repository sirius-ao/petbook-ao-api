import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedPet() {
  console.log('🌱 Criando pets...')

  // 🔎 Busca um Client existente
  const client = await prisma.client.findFirst()
  if (!client) throw new Error('❌ Nenhum Client encontrado! Rode o seed de Client primeiro.')

  // ✅ Cria alguns Pets vinculados a esse Client
  const pets = await prisma.pet.createMany({
    data: [
      {
        name: 'Rex',
        species: 'Cachorro',
        breed: 'Labrador',
        birthDate: new Date('2020-01-15'),
        clienteId: client.id,
      },
      {
        name: 'Mimi',
        species: 'Gato',
        breed: 'Siamês',
        birthDate: new Date('2021-06-20'),
        clienteId: client.id,
      },
      {
        name: 'Bob',
        species: 'Cachorro',
        breed: 'Poodle',
        birthDate: new Date('2019-08-05'),
        clienteId: client.id,
      },
    ],
    skipDuplicates: true, // evita duplicação se rodar várias vezes
  })

  console.log(`✅ ${pets.count} pets criados para o client ${client.name}`)
}
