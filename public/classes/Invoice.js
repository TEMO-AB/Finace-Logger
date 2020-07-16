//Classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return '${this.clint} owes €${this.amount} for {this.details}';
    }
}
