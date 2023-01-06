---
title: "New website design!"
description: "I've redesigned my website using React."
authors: ["Antony Holmes"]
readtime: "1 min"
section: "News"
tags: ["Website"]
related: ""
status: "published"
hero: "generic1"
---

I have redesigned my website using React and Gatsby.

<!-- end -->

If you're a developer and you are interested in how the work is done, here are some details. The site is not open source but please feel free to get in touch at antony@antonyholmes.dev if you would like to view the code base.

The site is primarily developed using Gatsby, a framework for building websites in React. Gatsby is component based and takes care of the tiresome routing, transpiling, and hot-reloading that can make React annoying.

Most of the site that you see is static, rendered at build time (another Gatsby feature) and served as plain HTML for speed, SEO and accessibility. I used Tailwind to style components with purgecss to remove unused css and reduce loading times.

The site is hosted on AWS using S3 and Cloudfront. I choose to build the site locally and then push it to an S3 bucket. I've found that continous deployment using Netlify, Cloudflare and AWS Amplify to be unreliable and frequently my site will not build, usually because they will not pull the most recent packages into their build environment, so I prefer to have more control over the build process. The added bonus is that it's cheaper.

Site data is stored in a mixture of Markdown (this post, for example) and JSON and I make extensive use of Gatsby's GraphQL features to translate it into pages. This neatly separates the content from the presentation (JSX, CSS) layer which makes managing the site easier.