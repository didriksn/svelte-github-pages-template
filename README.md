# Svelte Template with GitHub Pages Compatibility
This Svelte template provides a starting point for building web applications using the Svelte framework. It is designed with built-in compatibility for deploying your application to GitHub Pages.

## Features
* **Svelte**: Utilizes the Svelte framework for building efficient and reactive web applications.
* **GitHub Pages Compatibility**: Designed to seamlessly work with GitHub Pages for easy deployment.
* **Optimized Build**: Configured to generate optimized and production-ready builds.
* **Routing**: Includes client-side routing for creating multi-page applications.
* **CSS Preprocessor**: Supports CSS preprocessor, allowing you to use languages like SCSS or Less.
* **Static Assets**: Easily manage and reference static assets such as images or fonts.
* **Development Server**: Includes a development server for rapid local development and testing.
* **Hot Module Replacement**: Supports Hot Module Replacement for instant feedback during development.


## Prerequisites
Make sure you have the following installed on your system:

* Node.js (v12 or higher)
* npm (Node Package Manager)


# Getting Started
To use this template, follow these steps:

1. Clone or download the repository to your local machine.
2. Set the remote URL to your own repository like this:
```
git remote set-url origin <your-repository-url>
```
3. Open a terminal and navigate to the project directory.
4. Install the project dependencies by running the following command:
```
npm install
```

4. Start the development server with the following command:
```
npm run dev
```

5. Begin developing your Svelte application by modifying the files in the `src` directory.


## Building for production, and deploying to GitHub Pages
To build your application for production, and deploy it to GitHub Pages, follow these steps:
1. Run the following command to create an optimized build of your application in the `dist` directory, and create (or update) a "gh-pages" branch containing all the `dist` files. This will also automatically enable GitHub Pages for your site, and set the location to the "gh-pages" branch so you don't have to worry about that.
```
npm run deploy
```
2. You will have a **vite.config.js** file that looks something like this:
```javascript
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-github-pages-template/", // name of your github site
  plugins: [svelte()]
})
```
It is very important that you switch out "svelte-github-pages-template", with ***YOUR*** repository name (do not delete the "//", it has to be there)

# Customization
Feel free to modify this template to suit your specific needs. You can add additional packages, configure routing, customize the build process, or extend the functionality as required.

# Resources
* [Svelte Documentation](https://svelte.dev/docs/introduction)
* [GitHub Pages Documentation](https://docs.github.com/en/pages)

# Important Notes
This is **NOT** SvelteKit, and the original project was made by running `npm init vite` and selecting the `svelte` option.

# License
This template is open source and available under the [MIT License](https://opensource.org/license/mit/). Feel free to use, modify, and distribute it as needed.
