"use client";

import { useId, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import {
  calculateRepayment,
  formatCurrency,
  formatCurrencyCents,
  FREQUENCY_LABEL,
  type Frequency,
} from "@/lib/finance";
import styles from "./RepaymentCalculator.module.css";

const AMOUNT = { min: 5000, max: 150000, step: 500 };
const TERM = { min: 1, max: 7, step: 1 };
const RATE = { min: 7.95, max: 24.95, step: 0.1 };

const FREQUENCIES: Frequency[] = ["weekly", "fortnightly", "monthly"];

interface RepaymentCalculatorProps {
  /** "card" floats as a hero panel; "page" is the roomier standalone layout. */
  variant?: "card" | "page";
}

function percent(value: number, min: number, max: number): string {
  return `${((value - min) / (max - min)) * 100}%`;
}

export function RepaymentCalculator({ variant = "card" }: RepaymentCalculatorProps) {
  const [amount, setAmount] = useState(25000);
  const [termYears, setTermYears] = useState(5);
  const [rate, setRate] = useState(11.95);
  const [frequency, setFrequency] = useState<Frequency>("weekly");

  const baseId = useId();
  const amountId = `${baseId}-amount`;
  const termId = `${baseId}-term`;
  const rateId = `${baseId}-rate`;

  const result = useMemo(
    () =>
      calculateRepayment({
        amount,
        termYears,
        annualRatePercent: rate,
        frequency,
      }),
    [amount, termYears, rate, frequency],
  );

  return (
    <div className={`${styles.calc} ${styles[variant]}`}>
      <div className={styles.controls}>
        {/* Amount */}
        <div className={styles.field}>
          <div className={styles.fieldHead}>
            <label htmlFor={amountId}>Loan amount</label>
            <output className={`${styles.value} tabular`} htmlFor={amountId}>
              {formatCurrency(amount)}
            </output>
          </div>
          <input
            id={amountId}
            type="range"
            min={AMOUNT.min}
            max={AMOUNT.max}
            step={AMOUNT.step}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className={styles.slider}
            style={{ "--pct": percent(amount, AMOUNT.min, AMOUNT.max) } as React.CSSProperties}
          />
          <div className={styles.scale}>
            <span>{formatCurrency(AMOUNT.min)}</span>
            <span>{formatCurrency(AMOUNT.max)}</span>
          </div>
        </div>

        {/* Term */}
        <div className={styles.field}>
          <div className={styles.fieldHead}>
            <label htmlFor={termId}>Loan term</label>
            <output className={`${styles.value} tabular`} htmlFor={termId}>
              {termYears} {termYears === 1 ? "year" : "years"}
            </output>
          </div>
          <input
            id={termId}
            type="range"
            min={TERM.min}
            max={TERM.max}
            step={TERM.step}
            value={termYears}
            onChange={(e) => setTermYears(Number(e.target.value))}
            className={styles.slider}
            style={{ "--pct": percent(termYears, TERM.min, TERM.max) } as React.CSSProperties}
          />
          <div className={styles.scale}>
            <span>1 year</span>
            <span>7 years</span>
          </div>
        </div>

        {/* Rate */}
        <div className={styles.field}>
          <div className={styles.fieldHead}>
            <label htmlFor={rateId}>Indicative rate</label>
            <output className={`${styles.value} tabular`} htmlFor={rateId}>
              {rate.toFixed(2)}% p.a.
            </output>
          </div>
          <input
            id={rateId}
            type="range"
            min={RATE.min}
            max={RATE.max}
            step={RATE.step}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className={styles.slider}
            style={{ "--pct": percent(rate, RATE.min, RATE.max) } as React.CSSProperties}
          />
          <div className={styles.scale}>
            <span>{RATE.min}%</span>
            <span>{RATE.max}%</span>
          </div>
        </div>

        {/* Frequency */}
        <div className={styles.field}>
          <span className={styles.fieldLabel} id={`${baseId}-freq`}>
            Repayment frequency
          </span>
          <div
            className={styles.segmented}
            role="radiogroup"
            aria-labelledby={`${baseId}-freq`}
          >
            {FREQUENCIES.map((f) => (
              <button
                key={f}
                type="button"
                role="radio"
                aria-checked={frequency === f}
                className={`${styles.segment} ${frequency === f ? styles.segmentActive : ""}`}
                onClick={() => setFrequency(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className={styles.result} aria-live="polite">
        <p className={styles.resultLabel}>Estimated repayment</p>
        <p className={styles.resultAmount}>
          <span className="tabular">{formatCurrencyCents(result.perPeriod)}</span>
          <span className={styles.per}>/ {FREQUENCY_LABEL[frequency]}</span>
        </p>
        <p className={styles.resultSub}>
          Over {termYears} {termYears === 1 ? "year" : "years"} at {rate.toFixed(2)}% p.a.
        </p>

        <dl className={styles.breakdown}>
          <div>
            <dt>Total interest</dt>
            <dd className="tabular">{formatCurrency(result.totalInterest)}</dd>
          </div>
          <div>
            <dt>Total to repay</dt>
            <dd className="tabular">{formatCurrency(result.totalRepaid)}</dd>
          </div>
        </dl>

        <Button href="/contact" size="lg" className={styles.cta}>
          Talk to us about this
        </Button>
        <p className={styles.note}>
          Indicative only. Your actual rate depends on a credit assessment.
        </p>
      </div>
    </div>
  );
}
