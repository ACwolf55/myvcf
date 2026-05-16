# MyVCF

Business contact card platform. Local businesses create a profile page with their info and logo, generate a QR code, and customers scan it to download a vCard (`.vcf`) directly to their phone's contacts. Freelance project — I built and shipped the original version and retain the rights to this version.

## What it does

- **Business sign-up / login** — register, log in, manage profile
- **Logo upload** — drag-and-drop image upload via Cloudinary
- **Business profile pages** — public-facing card with logo, address, phone, email, website
- **vCard download** — customer hits the page, downloads `.vcf` file, saves to their phone contacts in one tap
- **Built-in traffic counter** — per-business page view analytics (no third-party tool)
- **Multi-business support** — each business gets a unique URL

## Status

Originally deployed on Heroku. Currently offline pending redeploy. **The QR code generation feature is disabled in this version** — restoring it is the top roadmap item.

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + React Router 6 |
| Backend | Node.js + Express |
| Database | MongoDB |
| Image hosting | Cloudinary (with `multer` for upload pipeline) |
| Auth | bcrypt-hashed passwords |
| File handling | `file-saver` (client-side vCard download) |
| Icons | react-icons |

## Project Structure

```
src/                  # React frontend
├── App.js
├── Home.js
├── SignUp.js / Login.js
├── Form.js            # business profile editor
├── LogoUpload.js      # Cloudinary upload widget
├── Card.js / Cards/   # public-facing business card UI
├── NewCard.js
├── ExistingClients.js
├── Header.js / Footer.js / HomeReturnBar.js
└── index.js

server/
├── index.js           # Express routes (auth, profile, vCard)
├── cloudinary.js      # Cloudinary config
└── seed.json
```

## API Highlights

| Method | Path | What it does |
|---|---|---|
| POST | `/picUpload/:organization` | Uploads logo to Cloudinary, stores URL in MongoDB |
| POST | `/newCard` | Creates a new business with full vCard fields |
| PUT | `/traffic-counter/:app` | Increments per-app traffic counter (analytics) |

## Roadmap

- [ ] **Restore QR code generation** (`qrcode` npm library — ~10 lines)
- [ ] Restore vCard download flow end-to-end
- [ ] Redeploy (Heroku → Render or AWS)
- [ ] Editable business profiles (currently mostly create-only)
- [ ] Admin dashboard for managing all businesses
- [ ] Search / filter directory of businesses
- [ ] Migrate to TypeScript
- [ ] Cleaner UI / CSS styling

## What I Learned

- Working a real freelance project end-to-end with a client
- Image upload pipelines: client → Express (multer) → Cloudinary → store URL in DB
- vCard format and generating downloadable files on the client side
- MongoDB document modeling for business data
- bcrypt password hashing
- Built-in analytics without a third-party tool
- The reality of supporting a deployed product (and the cost when the platform changes — RIP Heroku free tier)
