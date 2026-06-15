/*
  Landing Epilazione Laser - Amati Estetica e Benessere

  DA MODIFICARE:
  1) WHATSAPP_NUMBER: inserisci il numero nel formato internazionale senza +.
     Esempio: 393331234567
  2) CALL_NUMBER: inserisci numero telefonico con prefisso.
  3) Nei testi HTML sostituisci indirizzo, orari, condizioni promo e recensioni reali.
*/

const WHATSAPP_NUMBER = "393000000000"; // <-- SOSTITUISCI
const CALL_NUMBER = "+390000000000"; // <-- SOSTITUISCI

function buildWhatsAppUrl(message) {
  const cleanMessage = message || "Ciao, vorrei informazioni sull'epilazione laser.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cleanMessage)}`;
}

function trackEvent(eventName, params = {}) {
  // Google Ads / GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }

  // Utile per test in console
  console.info("Tracking event:", eventName, params);
}

document.addEventListener("DOMContentLoaded", () => {
  // Link WhatsApp dinamici
  document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    const message = link.dataset.message;
    link.setAttribute("href", buildWhatsAppUrl(message));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

    link.addEventListener("click", () => {
      trackEvent("click_whatsapp", {
        source: "landing_laser",
        message: message || "default"
      });
    });
  });

  // Link telefono dinamico
  document.querySelectorAll(".js-call-link").forEach((link) => {
    link.setAttribute("href", `tel:${CALL_NUMBER}`);
    link.addEventListener("click", () => {
      trackEvent("click_call", {
        source: "landing_laser"
      });
    });
  });

  // Menu mobile
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((navLink) => {
      navLink.addEventListener("click", () => {
        nav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Animazioni leggere allo scroll
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  // Traccia sezioni chiave visualizzate una sola volta
  const trackedSections = ["promo", "contatti"];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackEvent("view_section", {
            section: entry.target.id,
            source: "landing_laser"
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    trackedSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }
});
