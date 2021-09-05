---
title: "F2P Personal Website Stack: What I'm Using Here"
subtitle: "You won't need to pay for it until a sizeable traffic comes your way."
date: "2021-04-05"
heroimage: "/f2p-website-stack-what-im-using-here/hero-image.jpg"
preview: "Personal websites make you pretty cool in your circles as a non-professional. As a professional, it's the next step to take in your distinguished career. As a developer, it's a must-have and it's the first thing to get, if being considered seriously as a developer sounds like a good thing. Me? I'm not the best example. I've been going around as a developer with no personal website for 7+ years, until I opened my website. The aim of this post is to give you a direction towards getting your own personal website up and running without swiping your credit card at every step (virtually of course) other than buying the domain."
---

Personal websites make you pretty cool in your circles as a non-professional. As a professional, it's the next step to take in your distinguished career. As a developer, it's a must-have and it's the first thing to get, if being considered seriously as a developer sounds like a good thing. Me? I'm not the best example. I've been going around as a developer with no personal website for 7+ years, until I opened [my website](https://ardilgulez.me). The aim of this post is to give you a direction towards getting your own personal website up and running without swiping your credit card at every step (virtually of course) other than buying the domain.

First off, here is what you need to create a Minimum Viable Personal Website:

## 1- Static Site Generator: Next.js

[![Next.js Logo](/f2p-website-stack-what-im-using-here/nextjs.jpg)](https://nextjs.org)

_Image from [Next.js](https://nextjs.org)_

Using a static site generator is the best way to go forward with creating your own website. Granted, it's not the fastest way to get started. However, static site generators have better free customization options (there are many Gatsby starters to pick from, if you opt into using Gatsby) and most importantly (for the scope of this blog post), it doesn't come packaged in with a hook to a provider that charges you a monthly fee.

Out of possible options for static site generators, I picked Next.js over Jekyll and Gatsby due to its recent popularity and how easy it can be learned and deployed.

[Here](https://nextjs.org/docs/getting-started) is where I learned Next.js from.

## 2- Hosting Provider: Vercel

[![Vercel Logo](/f2p-website-stack-what-im-using-here/vercel.png)](https://vercel.com)

_Image from [Vercel](https://vercel.com)_

If you're going to host a Next.js website, Vercel is the best option to go with. It comes with a free Hobby tier. Deployment is easy: your site gets deployed to production if you push into the main branch and if you push into any other branch, a preview deployment is executed from that branch. In addition, free tier of Vercel integrates with your domain and automatically creates an SSL certificate for your domain. Best of all, this is the company that created Next.js.

If you want to try it out yourself, feel free to [check it out](https://vercel.com/).

## 3- Email Provider: Zoho Mail

[![Zoho Logo](/f2p-website-stack-what-im-using-here/zoho-logo.png)](https://zoho.com)

_Image from [Zoho](https://zoho.com)_

Most probably, reading just the subtitle made you think to yourself "What do I even need an email provider for?". Or "I got my own gmail address with my first and last name (probably the last two digits of your birth year too)". You need to treat yourself like a professional. A brand. Would you prefer to have "firstname.lastname@gmail.com" written on your business card? I wouldn't.

You need an email address with your domain name. Mine is hello@ardilgulez.me. You can drop me an email at hello@ardilgulez.me to hire me or to simply say "hello". That's what I would put on my business card. It's professional, it's friendly and it reflects my personality.

The choice of Zoho over competitors like Google or Hey was rather a simple one. It's the only provider I could find that offers a free email address with my domain name. It is easy to use, has a good interface, free for life (with a limited feature set). If you decide to turn pro, the price tag is around 10 dollars a year. A WHOLE YEAR!

If you want to try it yourself, feel free to [check it out](https://www.zoho.com/mail)

## 4- Contact Form Handler: AWS Lambda and SES

[![AWS Logo](/f2p-website-stack-what-im-using-here/amazon-web-services.png)](https://aws.amazon.com)

_Image from [TechCrunch](https://techcrunch.com/2012/04/22/amazon-web-services-mistakes/)_

Go to the contact form in my website, type your first name, last name, email address and message, then press the Send button. Then what happens? Well, what happens is I get an email (yes, at hello@ardilgulez.me). How? That part is taken care of by AWS. Specifically Lambda and SES.

I know, I know, AWS isn't exactly free. However, if you have 400 people, each one using the contact form 5 times, you're bound to pay a grand sum of zero dollars. This is why I chose AWS as my contact form backend.

If you would like to check it out yourself, [here](https://aws.amazon.com/) is the link.

If you would like to create a Minimum Viable Personal Website, a stack from top to this point should be enough.

# What's next?

Under the assumption that this question was not about next.js, but rather about what else can be added to this stack, here are a couple of options:

## Content Backend

Right now, I have no backend for my blog. Things that I consider are:

### 1- Storyblok / Competitor

Storyblok has a free for life plan, seamlessly integrates with Next.js and unlike Firebase, you probably won't get a surprise bill if you do something wrong with the setup.

### 2- Firebase / Competitor

Firebase is one of the best known backend as a service providers. It's not just a content backend, but rather a backend. Its pricing structure is similar to AWS. You can start free, but if you get mad traffic, you have to pay. Also, it's pretty easy to do things wrong and pay a lot more than you'd like to, making Firebase do a lot more work than necessary to achieve the same outcome.

What can Firebase provide, that a CMS like Storyblok can't, in the context of a personal website? You can develop or integrate desired tools (i.e. your own CMS) to make it suit your needs.

## Email List Provider

I don't have an email list yet, although I very much would like to get your email address to spam you a couple of times every week (just kidding). If I opt to create one in the future, my choice probably would be [Sender](https://www.sender.net/). Unlike its famous competitors (like HubSpot and MailChimp) it has a full feature free for life plan up to a certain number of subscribers, which means I get away with paying nothing if my website or email list turns out to be not cool enough to accommodate at least 2501 people.

If you would like to try out Sender yourself, [here](https://www.sender.net/) it is.

## Chatbot Provider

This is something that I saw in one of my friends' personal website. Instead of having a contact form, he has... a chatbot! I gotta say, I fell in love with the idea at the first sight. One good provider to easily get start with (the provider that my friend uses for his own website) is [Continually]([https://continual.ly/](https://continual.ly/)). I have never used it myself and thus cannot give feedback on how easy it is to use or set up. However, based on my impression from my friend's website, having a chatbot drastically improves your website's user experience.

If you would like to try out Continually yourself, [Continually]([https://continual.ly/](https://continual.ly/)) is the link.

# Summary

This is more or less what you need to first get your Minimum Viable Personal Website up and running and then to make it better overall.

In order to get your Minimum Viable Personal Website up and running, you first need to somehow create that website and then you need to somehow put it online (in other words: Hosting). In this article, I compared different static site generator, hosting provider and mail provide options and explained why I picked Next.js, Vercel and Zoho Mail over competition.

In the next section, I listed possible ways to make it better by adding more functionality, such as an email list, a chatbot and/or a CMS and product options that have a free tier for each one.

This will be it for this blog post. In the future, I'll be posting in my blog about tech, my side projects (including but not limited to this website) and software engineering career tips. Until then, stay tuned.