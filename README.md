# Nishwanth — Cloud & DevOps Portfolio

A responsive portfolio website for **Bonagiri Sai Nishwanth**, a Cloud & DevOps Engineer with experience across AWS, Azure, Terraform, CI/CD, containers, networking, security, and production observability.

The interface uses a cloud-operations visual style with infrastructure panels, deployment stages, platform status details, technical-service icons, scroll motion, and responsive layouts.

## Features

- Cloud and DevOps-focused hero section
- AWS and Azure-inspired dark color palette
- Infrastructure, delivery, container, and reliability capabilities
- Connected CI/CD delivery-flow visualization
- Selected production work and engineering outcomes
- Professional experience timeline
- Technical stack with platform and service icons
- Engineering principles and education sections
- Resume download and contact form
- Scroll-reveal and hover motion effects
- Responsive desktop, tablet, and mobile layouts
- Reduced-motion accessibility support

## Tech Stack

- React 19
- Next.js 16-compatible application structure
- vinext and Vite
- Cloudflare Workers-compatible build output
- Lucide React and React Icons
- CSS animations and responsive layouts
- ESLint

## Requirements

- Node.js `22.13.0` or newer
- npm

## Run Locally

Clone the repository and enter the project directory:

```bash
git clone <your-repository-url>
cd nishu
```

Install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

```bash
npm run dev    # Start the local development server
npm run lint   # Run ESLint checks
npm run build  # Create a production build
npm run start  # Start the production server
```

## Project Structure

```text
app/
  globals.css             Global theme, layout, motion, and responsive styles
  layout.tsx              Site metadata and application layout
  page.jsx                Portfolio page and interactions
public/
  images/                 Hero and observability artwork
  Bonagiri-Sai-Nishwanth-Resume.pdf
src/
  profile.js              Portfolio content, experience, skills, and links
worker/
  index.ts                Cloudflare Worker entry point
```

## Customize the Portfolio

Most personal information is maintained in [`src/profile.js`](src/profile.js), including:

- Name and role
- Professional summary
- Email and LinkedIn profile
- Capabilities and tools
- Work experience
- Cloud platforms and services

Page structure and visual content are located in [`app/page.jsx`](app/page.jsx). Theme colors, responsive layouts, system panels, and animations are located in [`app/globals.css`](app/globals.css).

Replace the resume at `public/Bonagiri-Sai-Nishwanth-Resume.pdf` while keeping the same filename, or update its references in the page.

## Validation

Before publishing changes, run:

```bash
npm run lint
npm run build
```

## Contact

- Email: [bonagirinishwanth@gmail.com](mailto:bonagirinishwanth@gmail.com)
- LinkedIn: [linkedin.com/in/nishwanthbonagiri](https://www.linkedin.com/in/nishwanthbonagiri/)
