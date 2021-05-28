export interface userDTO {
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

export interface userCreationDto {
    name: string;
    secondName: string;
    age: number;
    phone: string;
    email: string;
}