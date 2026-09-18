import { useState } from 'react'
import './App.css'

function App() {
  const [cost, setCost] = useState('')
  const [markup, setMarkup] = useState('')
  const [result, setResult] = useState(null)

  function calculatePrice() {
    const jobCost = Number(cost)
    const markupPercent = Number(markup)

    if (jobCost <= 0 || markupPercent < 0) {
      setResult(null)
      return
    }

    const sellingPrice = jobCost * (1 + markupPercent / 100)
    const grossProfit = sellingPrice - jobCost
    const grossMargin = (grossProfit / sellingPrice) * 100

    setResult({
      sellingPrice,
      grossProfit,
      grossMargin,
    })
  }

  function formatCurrency(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <main>
      <header className="page-header">
        <div className="brand"><img className="brand-logo" src="/athena-calculators-logo.jpg" alt="ATHENA Calculators" /></div>

        <p className="eyebrow">CONTRACTOR CALCULATOR</p>

        <h1>Contractor Pricing Calculator</h1>

        <p className="subtitle">
          This is a free contractor pricing calculator for contractors and
          small construction businesses that calculates selling price, gross
          profit, and gross margin from job cost and markup.
        </p>
      </header>

      <div className="calculator">
        <label htmlFor="job-cost">
          Job Cost
          <span className="label-help">Your total cost for the job</span>
        </label>

        <div className="input-wrapper">
          <span className="input-prefix">$</span>
          <input
            id="job-cost"
            type="number"
            min="0"
            step="0.01"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="10,000"
          />
        </div>

        <label htmlFor="markup">
          Markup
          <span className="label-help">The percentage added to your cost</span>
        </label>

        <div className="input-wrapper">
          <input
            id="markup"
            type="number"
            min="0"
            step="0.1"
            value={markup}
            onChange={(e) => setMarkup(e.target.value)}
            placeholder="20"
          />
          <span className="input-suffix">%</span>
        </div>

        <button type="button" onClick={calculatePrice}>
          Calculate Price
        </button>
      </div>

      {result && (
        <section className="results">
          <p className="results-label">YOUR SELLING PRICE</p>

          <div className="selling-price">
            {formatCurrency(result.sellingPrice)}
          </div>

          <div className="result-grid">
            <div className="result-item">
              <span>Gross Profit</span>
              <strong>{formatCurrency(result.grossProfit)}</strong>
            </div>

            <div className="result-item">
              <span>Gross Margin</span>
              <strong>{result.grossMargin.toFixed(2)}%</strong>
            </div>
          </div>
        </section>
      )}

      <section className="affiliate-card" aria-label="Recommended contractor supplies">
        <p className="affiliate-label">CONTRACTOR TOOLS &amp; GEAR</p>
        <h2>Ready for the next step?</h2>
        <p>
          Use your pricing numbers, then compare estimating tools and jobsite
          safety gear on Amazon.
        </p>
        <div className="affiliate-links">
          <a
            href="https://www.amazon.com/s?k=laser+measure+contractor+estimating+tools&tag=athena-20"
            target="_blank"
            rel="sponsored noopener"
          >
            Shop contractor estimating & measuring tools <span>(paid link)</span>
          </a>
          <a
            href="https://www.amazon.com/s?k=contractor+jobsite+measuring+tools&tag=athena-20"
            target="_blank"
            rel="sponsored noopener"
          >
            Shop jobsite measuring tools <span>(paid link)</span>
          </a>
        </div>
      </section>

      <section className="explanation">
        <h2>Markup and margin are not the same thing.</h2>

        <p>
          A <strong>20% markup</strong> on a $10,000 job means you charge
          $12,000. That produces a <strong>16.67% gross margin</strong>.
        </p>

        <div className="formula">
          <strong>Selling Price</strong> = Cost × (1 + Markup)
        </div>

        <div className="formula">
          <strong>Gross Profit</strong> = Selling Price − Cost
        </div>

        <div className="formula">
          <strong>Gross Margin</strong> = Gross Profit ÷ Selling Price
        </div>
      </section>

      <nav aria-label="More ATHENA Calculators">
        <p><strong>More ATHENA Calculators:</strong> <a href="https://concrete-calculator-cic.pages.dev/">Concrete Calculator</a> · <a href="https://paint-calculator-5wq.pages.dev/">Paint Calculator</a> · <a href="https://flooring-calculator.pages.dev/">Flooring Calculator</a></p>
      </nav>

      <footer>
        <p>Built for contractors who want the numbers before they price the job.</p>
        <p>As an Amazon Associate I earn from qualifying purchases.</p>
        <a href="/privacy.html">Privacy Policy</a>
      </footer>
    </main>
  )
}

export default App