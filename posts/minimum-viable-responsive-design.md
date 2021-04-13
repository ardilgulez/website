---
title: "Minimum Viable Responsive Design for a Good Mobile User Experience: The One CSS Trick that Gave my Website Mobile Usability"
subtitle: "Doing this small adjustment allowed me to create a good mobile user experience across all pages in my website."
date: "2021-04-13"
heroimage: "/f2p-website-stack-what-im-using-here/hero-image.jpg"
preview: "I was thrilled to see my website after the first time I deployed it to my own domain. It was fast, it had a good design, it was everything I hoped for... until I told my mom about it. Overwhelmed with curiosity, the first thing she did was to put me on the speaker (we were speaking on the phone) so that she can hear me and check out my website at the same time. Yes, with a cell phone. Her first impression was declaring her certainty that I would fix it. Mom was talking about the mobile usability, or lack thereof."
---

I was thrilled to see my website after the first time I deployed it to my own domain. It was fast, it had a good design, it was everything I hoped for... until I told my mom about it. Overwhelmed with curiosity, the first thing she did was to put me on the speaker (we were speaking on the phone) so that she can hear me and check out my website at the same time. Yes, with a cell phone. Her first impression was declaring her certainty that I would fix it. Mom was talking about the mobile usability, or lack thereof.

I just never had the idea of someone checking out the mobile usability of my website. Not that I didn't my facts straight long before I spoke to mom about my website, it's just, I never tested the website with a phone, let alone optimize its mobile user experience. I knew that the mobile user experience was going to be very (, very, very) bad the moment mom spoke about testing my website. Stupid, I know, but it's actually very normal that you don't get the idea until you deploy the website. I was developing my website over a computer , which is pretty normal, and I was testing my website using the same computer, which is again pretty normal. Even though [mobile traffic consists of more than half of the total website traffic](https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/) and [Google has been working on mobile first indexing since 2016 and it's operational now](https://techcrunch.com/2020/03/05/google-search-will-make-mobile-first-indexing-the-default-by-september/), it's still easy to omit mobile usability while developing the website and leave the mobile user experience out of the first version.

What happened to me then is the usual process: I was looking for a quick and easy fix for the mobile user experience that can still find a place in a [Minimum Viable Personal Website](https://ardilgulez.me/posts/f2p-website-stack-what-im-using-here). Good thing is, it exists. Better yet, it's just three lines of CSS:

```css
max-width: 1260px;
margin: x auto;
padding: 0 90px;
```

What this means is the following: The component cannot take up more than 1260px of width in any device. Do whatever needs to be done to center the content.

Margin `auto` gets computed to zero if the screen size is *somehow* less than 1261px. Ergo, you'll have zero side margin on a mobile device. This is where the padding comes in. On a mobile device, where you have zero side margin, the content gets indented by 90px each side (i.e. left and right). On a computer, where the screen size is most likely bigger than 1260px, what will happen is that `auto` is going to be computed to half of the remaining screen size in each side. In other words, the HTML element is going to be placed in the center of the screen, taking up 1260px of width. Within this 1260 px of width, there will be a 90px padding on each side, which leaves 1080px of width for the content.

This is actually great. Not only this means that the website is going to look great on different screen sizes, but it means you can do SEO for your website once and have it work across all possible devices.

## Summary

Years ago, people leaving your website within seconds was the fate of the websites with bad mobile user experience. Today, it's a lot better than the best a website can hope for without having a great mobile user experience first. Fortunately, the difference that is needed to get your website to have a great mobile user experience is no more than 3 lines of well thought out CSS. There were no real reasons not to have a great mobile user experience in your website. Now, there are no excuses either. Improve the mobile user experience of your website today.