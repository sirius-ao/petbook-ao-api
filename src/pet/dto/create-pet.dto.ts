import { CreateAppointmentDto } from "src/appointment/dto/create-appointment.dto";
import { CreateMedicalRecordDto } from "src/medical-record/dto/create-medical-record.dto";

export class CreatePetDto {
id:number;
name:string;
species:string;
breed: string;
birthDate?: Date;
clienteId: string;
appointments: CreateAppointmentDto[];
records: CreateMedicalRecordDto[];
}
