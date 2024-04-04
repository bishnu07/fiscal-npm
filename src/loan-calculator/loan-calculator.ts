import { Payment } from "../models/payment";

/**
 * Represents a loan calculator.
 */
export class LoanCalculator {
    private loanAmount: number; // The initial amount of the loan

    private interestRate: number; // The interest rate of the loan

    private loanTermMonths: number; // The term of the loan in months

    /**
     * Creates an instance of LoanCalculator.
     * @param loanAmount The initial amount of the loan.
     * @param interestRate The interest rate of the loan.
     * @param loanTermYears The term of the loan in years.
     */
    constructor(loanAmount: number, interestRate: number, loanTermYears: number) {
        this.loanAmount = loanAmount;
        this.interestRate = interestRate;
        this.loanTermMonths = loanTermYears * 12; // Convert years to months
    }

    /**
     * Calculates the monthly payment using the formula for fixed-rate loans.
     * @returns The monthly payment amount.
     */
    calculateMonthlyPayment(): number {
        const monthlyInterestRate = this.interestRate / 100 / 12; // Convert annual interest rate to monthly
        const numerator = this.loanAmount * monthlyInterestRate;
        const denominator = 1 - Math.pow(1 + monthlyInterestRate, -this.loanTermMonths);
        const monthlyPayment = numerator / denominator;
        return monthlyPayment;
    }

    /**
     * Calculates the breakdown of payments for each month.
     * @returns An array of objects representing the breakdown of payments with principal, interest, and balance.
     */
    calculatePaymentBreakdown(): Payment[] {
        const monthlyPayment = this.calculateMonthlyPayment();
        const monthlyInterestRate = this.interestRate / 100 / 12; // Convert annual interest rate to monthly
        let remainingBalance = this.loanAmount;
        const paymentBreakdown: Payment[] = [];

        for (let month = 1; month <= this.loanTermMonths; month++) {
            const interest = remainingBalance * monthlyInterestRate;
            const principal = monthlyPayment - interest;
            remainingBalance -= principal;
            paymentBreakdown.push({ principal, interest, balance: remainingBalance });
        }

        return paymentBreakdown;
    }
}
