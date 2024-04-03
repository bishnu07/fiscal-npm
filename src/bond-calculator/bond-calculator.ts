export class BondCalculator {
    private bondAmount: number;
    private interestRate: number;
    private bondTermMonths: number;
    
       constructor(bondAmount: number, interestRate: number, bondTermYears: number) {
            this.bondAmount = bondAmount;
            this.interestRate = interestRate;
            this.bondTermMonths = bondTermYears * 12; // Convert years to months
        }
    
        // Method to calculate the breakdown of payments for each month (interest only)
        calculatePaymentBreakdown(): { interest: number }[] {
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