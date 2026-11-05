import { FAQ } from "@/data/vital";

import { useState } from "react";


export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="wrap" style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>
          Preguntas frecuentes
        </h3>
        
        <div className="faq-list" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? "open" : ""}`}
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  backgroundColor: "var(--bg-card, #fff)"
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontWeight: "600",
                    fontSize: "1.05rem",
                    color: "black",
                  }}
                >
                  <span style={{color: "inherit"}}>{item.q}</span>
                  <span style={{ fontSize: "1.2rem", transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                
                {isOpen && (
                  <div 
                    style={{
                      padding: "0 20px 20px 20px",
                      color: "var(--text-muted, #555)",
                      lineHeight: "1.5",
                      fontSize: "0.95rem"
                    }}
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}