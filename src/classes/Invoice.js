"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return '${this.clint} owes €${this.amount} for {this.details}';
    };
    return Invoice;
}());
exports.Invoice = Invoice;
