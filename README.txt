# Indrabi Computer & Electrical Store website

Responsive one-page website built with HTML, CSS and JavaScript.

## Files
- `index.html` — content, navigation, product cards and enquiry dialog
- `style.css` — design, responsive layout and illustrated product cards
- `script.js` — mobile navigation, filters, product enquiry buttons and contact form
- `README.txt` — these instructions

## Run it
1. Download and unzip `indrabi_store_website.zip`.
2. Open the `indrabi_store_website` folder.
3. Double-click `index.html` to open it in your browser.
4. To edit the website, open the files in Visual Studio Code, save, and refresh the browser.
5. No framework or build step is required.

## Before publishing: update your details
1. **WhatsApp:** In `index.html`, replace `91XXXXXXXXXX` with your WhatsApp number including country code, digits only. For India, start with `91`; don't include `+`, spaces or dashes. Product enquiry buttons use this same number.
2. **Email form:** In `script.js`, replace `YOUR_EMAIL@example.com` with your real business email. The general contact form opens the visitor's email app; it does not store submissions on a server.
3. **Social media:** In `index.html`, replace Facebook, Instagram and YouTube links with your official profiles.
4. **Contact details:** Update the email placeholder and store hours in `index.html`.
5. **Product cards:** Cards show sample product categories and illustrated placeholders, not live stock. Edit the names/descriptions to match the products you sell. There are no prices because current pricing was not supplied.

## Publish online
Upload the folder to a static host such as GitHub Pages, Netlify or your hosting provider. A live form that stores submissions needs a backend or form service. Never place passwords or private API keys in front-end JavaScript.

## Notes
- Google Fonts requires internet access; fallback fonts are used if unavailable.
- Product enquiry buttons prepare a WhatsApp message and open WhatsApp in a new tab after the number is configured.
