import { PrismaClient } from '@prisma/client'
// import { seedBusiness } from './seeds/seedBusiness'
// import { seedClient } from './seeds/seedClient'
// import { seedPet } from './seeds/seedPet'
import { seedAppointment } from './seeds/seedAppointment'
import { seedBusiness } from './seeds/seedBusiness'
import { seedPet } from './seeds/seedPet'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Rodando seed completo...')

  // const business = await seedBusiness()
  // const client = await seedClient(business)
  // await seedPet(client)
  await seedBusiness()      // 👉 cria negócios
  await seedAppointment() // 👈 chama o seed de appointment depois que pet, business e service já existem
  await seedPet()        // 👈 chama o seedPet aqui
  console.log('✅ Seed completo!')
}

main()
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
