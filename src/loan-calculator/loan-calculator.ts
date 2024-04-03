export class LoanCalculator {
    private loanAmount: number;
    private interestRate: number;
    private loanTermMonths: number;
  
     constructor(loanAmount: number, interestRate: number, loanTermYears: number) {
      this.loanAmount = loanAmount;
          this.interestRate = interestRate;
          this.loanTermMonths = loanTermYears * 12; // Convert years to months
      }
  
      // Method to calculate the monthly payment using the formula for fixed-rate loans
      calculateMonthlyPayment(): number {
          const monthlyInterestRate = this.interestRate / 100 / 12; // Convert annual interest rate to monthly
          const numerator = this.loanAmount * monthlyInterestRate;
          const denominator = 1 - Math.pow(1 + monthlyInterestRate, -this.loanTermMonths);
          const monthlyPayment = numerator / denominator;
          return monthlyPayment;
      }
  
      // Method to calculate the breakdown of payments for each month
      calculatePaymentBreakdown(): { principal: number, interest: number, balance: number }[] {
          const monthlyPayment = this.calculateMonthlyPayment();
          const monthlyInterestRate = this.interestRate / 100 / 12; // Convert annual interest rate to monthly
          let remainingBalance = this.loanAmount;
          const paymentBreakdown: { principal: number, interest: number, balance: number }[] = [];
  
          for (let month = 1; month <= this.loanTermMonths; month++) {
              const interest = remainingBalance * monthlyInterestRate;
              const principal = monthlyPayment - interest;
              remainingBalance -= principal;
              paymentBreakdown.push({ principal, interest, balance: remainingBalance });
          }
  
          return paymentBreakdown;
      }
  }
  
