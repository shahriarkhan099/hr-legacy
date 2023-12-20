import Applicant from "./applicant.model";

// export async function findAllApplicant() {
//   try {
//     const applicant = await Applicant.findAll({});
//     return applicant;
//   } catch (error) {
//     throw new Error('Error finding applicant.');
//   }
// }

export async function createApplicant(data: {
    name: string, 
    email: string,
    experience: string,
    phoneNumber: number,
    address: string,
    skillTags: string,
    hourlyRate: number
}) {
    try {
        const newApplicant = await Applicant.create(data);
        return newApplicant;
    } catch (error) {

        throw new Error('Error creating new applicant.')
    }
}


// export async function addApplicantToEmployee (applicantId: number, restaurantId: number, data: { 
//     name: string, 
//     email: string,
//     experience: string,
//     phoneNumber: number,
//     address: string,
//     skillTags: string,
//     hourlyRate: number,
//  }) {
//   try {
//     let applicant = await Applicant.findOne({
//       where: {
//         applicantId: applicantId
//       }
//     })
//     if (!applicant) {
//       throw new Error('Applicant not found.');
//     }
//     const newEmployee = await Applicant.create({ ...data, restaurantId, applicantId });
//     return newEmployee;
//   } catch (error) {
//     throw new Error('Error adding employee to restaurant.');
//   }
// }

// export async function findApplicantById(id: number) {
//   try {
//     const employee = await Applicant.findAll({
//       where: {
//         applicantId: id
//       }
//     });
//     return employee;
//   } catch (error) {
//     throw new Error('Error finding applicant.')
//   }
// }
