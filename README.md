# Jekyll Tailwind Starter - Renva Clone

This is a starter project for building static websites using Jekyll and Tailwind CSS. It aims to replicate the look and feel of the [Renva](https://renva.netlify.app/) portfolio template.

## Features

- Basic Jekyll setup
- Tailwind CSS v3 integration via PostCSS
- Responsive design based on Renva
- Basic components structure using Jekyll includes
- Simple build process

## Prerequisites

- Ruby and Bundler installed (check Jekyll installation guide: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/))
- Node.js and npm installed

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd jekyll-tailwind-starter
    ```

2.  **Install Ruby dependencies:**
    ```bash
    bundle install
    ```

3.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This command will:
    - Start Jekyll server with live reload (`bundle exec jekyll serve --livereload`)
    - Watch and compile Tailwind CSS changes (`npm run watch:css`)

    Open your browser to `http://localhost:4000` (or the address provided by Jekyll).

## Build for Production

To build the static site for production:

```bash
npm run build
```

This will:
1. Build the Jekyll site into the `_site` directory (`npm run jekyll:build`).
2. Compile and minify Tailwind CSS into `_site/assets/css/style.css` (`npm run build:css`).

The final production-ready files will be in the `_site` directory.

## Project Structure

```
.
├── _config.yml           # Jekyll configuration
├── _data/                # Data files (e.g., features, portfolio items)
├── _includes/            # Reusable HTML snippets (header, footer, sections, icons)
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── sections/
│   └── icons/
├── _layouts/             # Page layouts (e.g., default)
│   └── default.html
├── assets/
│   ├── css/
│   │   └── style.css     # Main CSS file (imports Tailwind)
│   └── js/
│       └── main.js       # Basic JavaScript (menu, header scroll, filtering)
├── Gemfile               # Ruby dependencies
├── index.html            # Homepage
├── package.json          # Node.js dependencies (Tailwind, PostCSS)
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md
```

## Customization

- **Site Configuration:** Edit `_config.yml` for site-wide settings like title, description, etc.
- **Styling:**
    - Modify Tailwind configuration in `tailwind.config.js`.
    - Add custom CSS rules in `assets/css/style.css` (use `@layer components` or `@layer utilities` for Tailwind best practices).
    - Update color variables (HSL) in `:root` within `assets/css/style.css`.
- **Content:**
    - Edit `index.html` to change the page structure or included sections.
    - Modify HTML content within `_includes/sections/*.html`.
    - Update data in the `_data` directory (e.g., `_data/portfolio.yml`).
- **Layout:** Edit `_layouts/default.html` for the base HTML structure.
- **JavaScript:** Add or modify behavior in `assets/js/main.js`.

## Icons

SVG icons from `lucide-react` have been converted to static SVG files placed in `_includes/icons/`. You can add more SVGs there and include them using `{% include icons/your-icon.svg %}`. Remember to add necessary classes (like `h-6 w-6`) to the include tag if the SVG itself doesn't have size attributes.

## Based On

This project is a Jekyll and Tailwind port inspired by the Next.js Renva clone. Original design by [BootstrapMade](https://bootstrapmade.com/).
