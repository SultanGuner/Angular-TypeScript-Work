export class EmployeeModel {
    firstName: string;
    lastName: string;
    isFullTime: boolean;
    paymentType: string;
    language: string;
    birthDate: Date;
    rate: number;
    email: string;
    constructor(FirstName: string, LastName: string, IsFullTime: boolean, PaymentType: string, Language: string, BirthDate: Date, Rate: number, Email: string = "") {
        this.firstName = FirstName;
        this.lastName = LastName;
        this.isFullTime = IsFullTime;
        this.paymentType = PaymentType;
        this.language = Language;
        this.birthDate = BirthDate;
        this.rate = Rate;
        this.email = Email;
    }
}