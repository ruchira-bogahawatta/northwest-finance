/**
 * Loan repayment maths — standard amortising loan.
 *
 * These are estimates for illustration only; actual rates and repayments
 * depend on a full credit assessment. Pure functions, no side effects, so
 * they're easy to test and reuse on both server and client.
 */

export type Frequency = "weekly" | "fortnightly" | "monthly";

export const PERIODS_PER_YEAR: Record<Frequency, number> = {
  weekly: 52,
  fortnightly: 26,
  monthly: 12,
};

export const FREQUENCY_LABEL: Record<Frequency, string> = {
  weekly: "week",
  fortnightly: "fortnight",
  monthly: "month",
};

export interface RepaymentInput {
  /** Amount financed, in NZD. */
  amount: number;
  /** Loan term in years. */
  termYears: number;
  /** Annual interest rate as a percentage, e.g. 11.95. */
  annualRatePercent: number;
  frequency: Frequency;
}

export interface RepaymentResult {
  perPeriod: number;
  totalRepaid: number;
  totalInterest: number;
  numberOfPayments: number;
}

/**
 * Calculate the repayment per period for an amortising loan.
 * Uses the standard annuity formula; falls back to straight-line when the
 * rate is zero.
 */
export function calculateRepayment({
  amount,
  termYears,
  annualRatePercent,
  frequency,
}: RepaymentInput): RepaymentResult {
  const n = PERIODS_PER_YEAR[frequency];
  const numberOfPayments = Math.round(termYears * n);

  if (amount <= 0 || numberOfPayments <= 0) {
    return { perPeriod: 0, totalRepaid: 0, totalInterest: 0, numberOfPayments: 0 };
  }

  const periodicRate = annualRatePercent / 100 / n;

  let perPeriod: number;
  if (periodicRate === 0) {
    perPeriod = amount / numberOfPayments;
  } else {
    const factor = Math.pow(1 + periodicRate, numberOfPayments);
    perPeriod = (amount * periodicRate * factor) / (factor - 1);
  }

  const totalRepaid = perPeriod * numberOfPayments;
  const totalInterest = totalRepaid - amount;

  return { perPeriod, totalRepaid, totalInterest, numberOfPayments };
}

const nzCurrency = new Intl.NumberFormat("en-NZ", {
  style: "currency",
  currency: "NZD",
  maximumFractionDigits: 0,
});

const nzCurrencyCents = new Intl.NumberFormat("en-NZ", {
  style: "currency",
  currency: "NZD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Format whole-dollar amounts, e.g. $25,000. */
export function formatCurrency(value: number): string {
  return nzCurrency.format(Math.round(value));
}

/** Format amounts with cents, e.g. $142.58 — used for per-period repayments. */
export function formatCurrencyCents(value: number): string {
  return nzCurrencyCents.format(value);
}
