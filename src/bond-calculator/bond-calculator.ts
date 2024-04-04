import { Payment } from "../models/payment";

/**
 * Represents a bond calculator.
 */
export class BondCalculator {
    private bondAmount: number; // The initial amount of the bond
    private interestRate: number; // The annual interest rate of the bond
    private bondTermMonths: number; // The term of the bond in months

    /**
     * Creates an instance of BondCalculator.
     * @param bondAmount The initial amount of the bond.
     * @param interestRate The annual interest rate of the bond.
     * @param bondTermYears The term of the bond in years.
     */
    constructor(bondAmount: number, interestRate: number, bondTermYears: number) {
        this.bondAmount = bondAmount;
        this.interestRate = interestRate;
        this.bondTermMonths = bondTermYears * 12; // Convert years to months
    }

    /**
     * Calculates the breakdown of payments for each month (interest only).
     * @returns An array of objects representing the breakdown of payments with interest.
     */
    calculatePaymentBreakdown(): Payment[] {
        const monthlyInterestRate = this.interestRate / 100 / 12; // Convert annual interest rate to monthly
        let remainingBalance = this.bondAmount;
        const paymentBreakdown: { interest: number }[] = [];

        for (let month = 1; month <= this.bondTermMonths; month++) {
            const interest = remainingBalance * monthlyInterestRate;
            paymentBreakdown.push({ interest });
        }

        return paymentBreakdown;
    }
}
