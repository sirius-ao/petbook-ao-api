import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedClient(business?: { id: string }) {
  console.log('🌱 Criando clientes...')

  // se não vier um business como argumento, pega o primeiro do banco
  let businessId = business?.id
  if (!businessId) {
    const existingBusiness = await prisma.business.findFirst()
    if (!existingBusiness) {
      throw new Error('❌ Nenhum Business encontrado! Rode o seed de Business primeiro.')
    }
    businessId = existingBusiness.id
  }

  // cria alguns clientes vinculados ao businessId
  const clients = await prisma.client.createMany({
    data: [
      {
        name: 'Carlos da Silva',
        email: 'carlos@email.com',
        phone: '+244930000001',
        businessId,
      },
      {
        name: 'Maria Lopes',
        email: 'maria@email.com',
        phone: '+244930000002',
        businessId,
      },
      {
        name: 'João Pereira',
        email: 'joao@email.com',
        phone: '+244930000003',
        businessId,
      },
    ],
    skipDuplicates: true, // não dá erro se rodar de novo
  })

  console.log(`✅ ${clients.count} clientes criados para o negócio ${businessId}`)
  return prisma.client.findMany({ where: { businessId } })
}
