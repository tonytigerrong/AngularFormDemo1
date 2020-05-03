import { Address } from './address';

export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public topic: string,
        public timePreference: string,
        public promto: boolean,
        public address: Address
    ){}
}
