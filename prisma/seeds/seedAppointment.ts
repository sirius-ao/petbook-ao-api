import { PrismaClient, AppointmentStatus } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedAppointment() {
  console.log('🌱 Criando Appointment...')

  // 🔎 pega o primeiro Business existente
  const business = await prisma.business.findFirst()
  if (!business) throw new Error('❌ Nenhum Business encontrado! Rode o seed de Business primeiro.')

  // 🔎 pega um Pet existente
  const pet = await prisma.pet.findFirst()
  if (!pet) throw new Error('❌ Nenhum Pet encontrado! Rode o seed de Client/Pet primeiro.')

  // 🔎 pega um Service existente (se tiver)
  const service = await prisma.service.findFirst({ where: { businessId: business.id } })
  if (!service) {
    console.warn('⚠️ Nenhum Service encontrado. O appointment será criado sem serviceId.')
  }

  // ✅ cria alguns appointments
  const appointments = await prisma.appointment.createMany({
    data: [
      {
        date: new Date(), // agora
        status: AppointmentStatus.SCHEDULED,
        petId: pet.id,
        businessId: business.id,
        serviceId: service ? service.id : null,
        notes: 'Consulta geral para o pet',
      },
      {
        date: new Date(Date.now() + 1000 * 60 * 60 * 24), // amanhã
        status: AppointmentStatus.SCHEDULED,
        petId: pet.id,
        businessId: business.id,
        serviceId: service ? service.id : null,
        notes: 'Revisão de vacinação',
      },
    ],
  })

  console.log('✅ Appointments criados com sucesso!', appointments)
}
