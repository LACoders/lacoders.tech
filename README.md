
LACoders.tech is a `Gatsby` (<a href="https://www.gatsbyjs.org/" target="_blank">Gatsbyjs.org</a>) web application hosted on Github Pages for free. The mission of this website is to provide an introduction about the Meetup group and have a blog where we can have tutorials, educational material, and anything else that would current members to teach, learn and help more developers join the community. You can find the Meetup group here: <a href="https://www.meetup.com/lacoders/" target="_blank">https://www.meetup.com/lacoders/</a>.

`Gatsby` is a static site generator that uses `React`, a modern Javascript library for building user interfaces. `Gatsby` projects use the `Markdown` files in the filesystem to generate static HTML files. This makes `Gatsby` really fast and mobile friendly. `Gatsby` is based on the `JAM` stack: `Javascript`, `API`, `Markdown`. Gatsby projects use `GraphQL` to pull data from various APIs, databases, CMS platforms, and SaaS services.

LACoders.tech is an open-source project, which means that anyone can see the code and contribute. You can find the code here <a href="https://github.com/LACoders/lacoders.tech" target="_blank">https://github.com/LACoders/lacoders.tech<a/>. Each blog post has a Markdown `.md` file in `src/blog/*` drirectory. The name of the file is the URL path (`slug`) of that blog post. For example, if you create a file called '2018-05-24-how-to-contribute-to-the-blog.md', the post will be available at `lacoders.tech/2018-05-24-how-to-contribute-to-the-blog/`. By the way, the structure of the file name should be `YYYY-MM-DD-POST-TITLE.md` to avoid conflicts between file names.

`Markdown` is really cool, you find out more about it here: <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet</a>.

## In order to add a blog post or run the website on your local machine..

1. Fork the main repository
2. Clone your fork, install dependencies, and start the web server
```bash
$ git clone YOUR_FORK
$ git cd YOUR_FORK
$ npm install
$ gatsby develop
```
4. Open `loclahost:8000` in a browser and you will the website running on your machine
5. Go to `src/blog` and create your `Markdown` file in it.
6. Add this section with the post title, current date, and your name
```markdown
---
title: How to contribute to the Blog
date: "2018-05-24"
author: "Argi Avetisyan"
---
```
7. Use Markdown and some HTML to write your post under that section :)
8. Once you are done editing, create a `pull request` and we will merge your commit.

Thanks for reading this post. Feel free to join our <a href="https://www.meetup.com/lacoders/" target="_blank">Meetup group</a> and <a href="https://github.com/LACoders" target="_blank">Github Organization</a>.
