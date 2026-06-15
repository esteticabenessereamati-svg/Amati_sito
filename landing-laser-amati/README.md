# Landing Page Epilazione Laser - Amati Estetica e Benessere

Struttura pronta per GitHub Pages:

```text
landing-laser-amati/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── img/
        ├── logo-placeholder.svg
        ├── hero-laser-placeholder.svg
        ├── centro-placeholder.svg
        └── texture-placeholder.svg
```

## Cose da modificare subito

1. In `js/main.js`
   - sostituisci `WHATSAPP_NUMBER` con il tuo numero in formato internazionale senza `+`.
   - esempio: `393331234567`.

2. In `index.html`
   - sostituisci indirizzo, orari, telefono e condizioni della promo.
   - sostituisci le recensioni finte con recensioni reali.
   - sostituisci immagini placeholder nella cartella `assets/img`.

3. Per sostituire immagini:
   - usa lo stesso nome del file, oppure cambia il percorso nel codice HTML.
   - consigli:
     - `hero-laser-placeholder.svg` -> foto titolare/macchinario
     - `centro-placeholder.svg` -> foto del centro
     - `logo-placeholder.svg` -> logo reale

## Pubblicazione su GitHub Pages

Carica la cartella nel repository e abilita GitHub Pages da:
Settings -> Pages -> Deploy from branch -> main -> root

Se la landing è dentro una sottocartella, il link sarà simile a:
`https://tuoutente.github.io/tuorepo/landing-laser-amati/`

## Tracciamenti pubblicitari

Nel tag `<head>` di `index.html` puoi incollare:
- Google Tag
- Meta Pixel

Nel file `main.js` sono già previsti eventi:
- `click_whatsapp`
- `click_call`
- `view_section`

