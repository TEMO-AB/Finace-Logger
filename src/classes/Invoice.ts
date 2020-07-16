//Classes
export class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return '${this.clint} owes €${this.amount} for {this.details}';
    }
}