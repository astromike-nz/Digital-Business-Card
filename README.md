# Why?
This is part of my "Learn React" journey with Scrimba, which I am thoroughly enjoying! To join Scrimba, please visit https://scrimba.com/?via=u01bchu

# React + Vite

A customizable React + Vite digital business card application. All content (name, title, bio, links, etc.) is controlled through a single `config.json` file, making it easy for others to fork and customize.

## Setup

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration 

1. Copy the example config to create your personal config:
   ```bash
   cp public/config.example.json public/config.json
   ```

2. Edit `public/config.json` with your personal information:
   - **profile**: Your name, job title, profile image path, email, and LinkedIn URL
   - **about**: Your bio or about section heading and content
   - **interests**: Your interests heading, description, and any related links
   - **socialLinks**: Your social media profile URLs (Twitter, Facebook, Instagram, GitHub)

3. Replace the profile image:
   - Replace `public/print-137.png` with your own profile picture (or update the image path in `public/config.json`)

### Development

Run the development server:
```bash
npm run dev
```

The app will load your configuration from `public/config.json` at startup and display an error if the config is invalid or missing.

### Building

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Configuration File Format

The `public/config.json` file controls all customizable content. See `public/config.example.json` for the complete structure and required fields.

### Important: Git

**Do not commit `public/config.json` to version control** — it contains your personal information. The file is already in `.gitignore` to prevent accidental commits. Only `public/config.example.json` is tracked in Git.

## Customization

To customize beyond the config file, modify the component files in the `components/` directory or update the CSS in `index.css` and `src/App.css`.
