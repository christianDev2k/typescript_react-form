export interface Form {
    name: string;
    email: string;
    phoneNumber: string;
}

export interface Student extends Form {
    id: number;
}
