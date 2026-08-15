import React from "react";
import { Bot } from "lucide-react";

export default function AIInsights({
  setActivePage
}) {

  return (
    <section className="ai-insights">

      <div className="ai-icon">
        <Bot size={35} />
      </div>

      <div className="ai-message">

        <strong>AI INSIGHTS</strong>

        <p>
          High solar potential detected in Kutch,
          Gujarat with <b>92% suitability.</b>
          <br />
          Consider hybrid projects in Rajasthan
          for optimal ROI.
        </p>

      </div>

      <button
        onClick={() =>
          setActivePage("AI Recommendations")
        }
      >
        View AI Recommendations →
      </button>

    </section>
  );
}