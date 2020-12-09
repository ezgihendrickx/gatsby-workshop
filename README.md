<h2 align="center"><b>:nail_care: Building a CV with Gatsby</b></h2>

<p align="center">
  <a href="https://reactjs.org/" target="_blank">
    <img alt="Badge ReactJS" src="https://img.shields.io/badge/REACT-yellow?style=flat&logo=react" />
  </a>
  <a href="https://www.gatsbyjs.com/" target="_blank">
    <img alt="Badge Gatsby" src="https://img.shields.io/badge/GATSBY-purple?style=flat&logo=gatsby" />
  </a>

</p>

<h2 align="center">
  <a href="https://ezgihendrickx.dev/" target="_blank">🌐 Live</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  
</h2>
<br/>

#### Helloooo everybody! I’m Ezgi from GNT-Yu. Today I will talk about Gatsby and we will build a basic CV with Gatsby. I hope you would like and enjoy it. Oke, let’s dig in!


<hr/>

## :honeybee: Intro

First we need to set up our development environment.

![Gif about starting](https://media.giphy.com/media/YAnpMSHcurJVS/giphy.gif)

<hr/>

## :seedling: Globally Installation

1. Install the `Homebrew`. (To install Gatsby and Node.js on a Mac, it is recommended to use Homebrew.)
2. If you don't have install the `Node.js, npm`. (Node.js is an environment that can run JavaScript code outside of a web browser.)
3. Install Git: be able to work with starter templates.
4. Install Gatsby globally on your machine ```install -g gatsby-cli```
5. Create a new site from [Starters](https://www.gatsbyjs.com/starters/?v=2) 
 - Choose the one you like or start with a default gatsby starter which is [hello world](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)

 ###### TL;DR :bookmark: If you’re not sure what you installed before then just check from your Commond Line: e.g ``` node --version``` to learn your version. 


## :octocat: Github & Terminal & VS Code

1. Create a repository named `gatsby-intro`
2. Don't forget to initialize your README file.
3. Clone it to your machine. 
4. Change Directory (This says ‘I want to change directories (cd) to the “hello-world” subfolder’. .)
5. If you are stuck or lost type on your terminal `gatsby --help` and see the options it gives you. 
6. Start the development mode.. `gatsby develop` This command starts a development server. You will be able to see and interact with your new site in a development environment — local (on your computer, not published to the internet)
7. View your site locally: Open up a new tab in your browser and navigate to http://localhost:8000/

![HomePage](https://www.gatsbyjs.com/static/057f454229859b1752c44dba1580984e/a8c87/04-home-page.png)

8. Your `hello world` **_index.js_** file should be like this:

```
import React from "react"

export default function Home() {
  return <div>Hello world!</div>
}

{/* you need to always export and this is a  React rule. */}.

```
9. Create components in your `src`folder.
- components
  - Footer.js
  - Header.js
  - Main.js
    - About.js
    - Contact.js
    - Skills.js
    - Projects.js

<img src="mockup.png" alt="components-mockup">

:warning: Don't forget to create `styles.scss`files.

<hr/>

## :dizzy: Installing Plugins

- In your `gatsby-config.js`file you need to create plugins to work on.. 

#### gatsby-plugin-sass

> Provides drop-in support for Sass/SCSS stylesheets
 - ```npm install node-sass gatsby-plugin-sass``` [How to use](https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/?=scss#install)

 ##### extra: If you have a problem with installing sass plugin then follow these instructions from [stackoverflow](https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0)

## :art: Give a shape 

1. CSS: We need to work on that but if you feel confident with CSS frameworks then you can implement a framework to your gatsby project. [Tailwind](https://www.gatsbyjs.com/docs/tailwind-css/) or [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

<hr/>

## 🚀 Deploy your work 

- `npm gatsby build` you need this command to build your project.
- Always push your work on github (at least 3 times in an hour)
- Drag and Drop your `static` file to [Netlify](https://app.netlify.com/drop), so we can see your CV online!

<hr/>

## Well done! Nice job :clap:

![Gif about starting](https://media.giphy.com/media/YRuFixSNWFVcXaxpmX/giphy.gif)

## :fishing_pole_and_fish: Tools 

- [Visual Studio Code](https://code.visualstudio.com/)
- [Markdown](https://www.markdownguide.org/)
- [Gatsby Framework](https://www.gatsbyjs.com/)
- [Starter Libraries](https://www.gatsbyjs.com/starters/?v=2)
- [npm](https://www.npmjs.com/)
- [Netlify](https://www.netlify.com/)

<hr/>

### :closed_lock_with_key: License

This project is [MIT](https://github.com/ezgihendrickx/gatsby-workshop) licensed <br/>
© 2020 [Ezgi](https://github.com/ezgihendrickx)