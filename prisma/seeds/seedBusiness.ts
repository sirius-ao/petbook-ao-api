import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedBusiness() {
  console.log('🌱 Criando negócios (Business)...')

  const businesses = await prisma.business.createMany({
    data: [
      {
        name: 'Clínica Vet Amigo Fiel',
        address: 'Rua dos Animais, 123',
        phone: '+244900000000',
        email: 'contato@amigofiel.com',
      },
      {
        name: 'Petshop Cão & Gato',
        address: 'Av. Principal, 456',
        phone: '+244911111111',
        email: 'contato@caoegato.com',
      },
      {
        name: 'Hospital Veterinário Pata Segura',
        address: 'Rua das Flores, 789',
        phone: '+244922222222',
        email: 'contato@patasegura.com',
      },
    ],
    skipDuplicates: true, // evita erro se rodar mais de uma vez
  })

  console.log(`✅ ${businesses.count} negócios criados ou já existentes`)
}
