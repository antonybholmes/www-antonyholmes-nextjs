---
title: "Experiments with NextJS"
description: "I have redesigned my web site again using NextJS."
author: "Antony Holmes"
readtime: "1 min"
section: "Blog"
tags: "Website"
related: ""
hero: ""

---

If you're a developer and you are interested in how the work is done, here are some details. The site is not open source but please feel free to get in touch at [hello@antonyholmes.dev](mailto:hello@antonyholmes.dev) if you would like to view the code base.

<!-- end -->

The site is was originally developed using Gatsby, a framework for building websites in React. Gatsby is component based and takes care of the tiresome routing, transpiling, and hot-reloading that can make React annoying.

Eventually I became annoyed that Gatsby loads itself as large JS blob even to render simple pages; I still think web pages should be as simple as possible, with a little JS sprinkled in for good measure so it loads quickly. You should be able to right click and view a page source and still see something resembling HTML that you can inspect without developer tools.

With that in mind, I looked around for other static site tools and eventually settled on Astro since it allows me to continue to use React based developement, but strips almost all of the JS out of the final build so the site is a pure static site.

Most of the site that you see is static, rendered at build time and served as plain HTML for speed, SEO and accessibility. I used Tailwind to style components with purgecss to remove unused css and reduce loading times.

The site is hosted on AWS using S3 and Cloudfront. I use GitHub Actions to continuously build and deploy the site. I found Netlify too restrictive in its free tier
and too expensive in its paid tiers, plus with GitHub I can deploy onto other platforms such as S3. This gives me the advantage of continuous deployment, but with
the low cost of S3+Cloudfront for serving content.

You can find the source code for the site [here](https://github.com/antonybholmes/www-antonyholmes-astro).