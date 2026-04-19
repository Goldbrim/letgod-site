# LetGod Website

Static, GitHub Pages-ready marketing and compliance site for the LetGod mobile app.

## Quick Deploy (GitHub Pages)

1. Push this folder to a GitHub repository.
2. In GitHub: `Settings` -> `Pages`.
3. Under `Build and deployment`, select:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or your default branch)
   - `Folder`: `/ (root)`
4. Save and wait for Pages to publish.

## Local Preview

Open `index.html` directly, or run a static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Included Pages

- Home: `index.html`
- Features: `features.html`
- Privacy Policy: `legal/privacy.html`
- Terms of Service: `legal/terms.html`
- Account & Data Deletion: `legal/account-deletion.html`
- Safety & Community Standards: `legal/safety.html`
- Contact & Compliance: `legal/contact.html`

## Notes

- Update legal contact details and business address placeholders before launch.
- Legal content is a practical baseline, not legal advice.
