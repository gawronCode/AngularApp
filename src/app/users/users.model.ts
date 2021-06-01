export interface IuserDTO {
    id: number;
    name: string;
    secondName: string;
    age: number;
    phone: string;
    email: string;
    roleId: number;
    roleName: string;
    roleAssignDate: Date;
}


// export class userDTO implements IuserDTO{

//     id: number;
//     name: string;
//     secondName: string;
//     age: number;
//     phone: string;
//     email: string;
//     roleId: number;
//     roleName: string;
//     roleAssignDate: Date;

//     constructor(userDTO: IuserDTO){
//             this.id = userDTO.id;
//             this.name = userDTO.name;
//             this.secondName = userDTO.secondName;
//             this.age = userDTO.age;
//             this.phone = userDTO.phone;
//             this.email = userDTO.email;
//             this.roleId = userDTO.roleId;
//             this.roleName = userDTO.roleName;
//             this.roleAssignDate = userDTO.roleAssignDate;
//         }

// }

export interface IuserCreationDTO {
    name: string;
    secondName: string;
    age: number;
    phone: string;
    email: string;
    roleId: number;
}

// export class userCreationDTO implements IuserCreationDTO {
//     name: string;
//     secondName: string;
//     age: number;
//     phone: string;
//     email: string;
    
//     constructor(userDTO: IuserDTO){
//         this.name = userDTO.name;
//         this.secondName = userDTO.secondName;
//         this.age = userDTO.age;
//         this.phone = userDTO.phone;
//         this.email = userDTO.email;
//     }
// }