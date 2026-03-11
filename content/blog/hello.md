+++
title = "First Post / Why does this blog exist?"
date = "2026-02-19"
updated = "2026-03-09"
slug = "first-post"

template = "blog_post.html"

[taxonomies]
tags = ["hello-world"]
+++

# First Post or why does this blog exist?

**Update 2026-03-09**: Added Mastodon comments. Explained Cloudflare hosting. Fixed lots of typos and mistakes.

As the title says, this is my first post, so _ugh_... Hello, how are you?... In addition, this is also the post that explains the reason this blog even exists. The answer to this question is pretty simple: I've always wanted a personal website. First, because I was inspired by the concept of an indie, decentralized and communal web[^1], thus I created a digital garden of my own, where I can centralize everything about me and share on other platforms. The second reason is that I often read and write about things, and I thought a blog could help me direct this productivity energy toward something useful for society (or maybe just entertain one or two people).

<!-- more -->

## Why the Kanagawa Wave in the navbar?

I wanted a logo to represent myself and once one of my friends got me a collar picturing the Wave&mdash;I love it&mdash;so I adopted it as my own, at least for now. If you don't know what I'm talking about, see the picture below and the [article](https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa) about it.

{{ img(id="/images/Tsunami_by_hokusai_19th_century.jpg", caption="Tsunami by hokusai, 19th century.") }}

Also the image you see on the navbar is from [jakeLoris](https://pixabay.com/users/jakeloris-21997059/).

## How this website was built?

I decided to use [Zola](https://www.getzola.org/) in combination with [Pico CSS](https://picocss.com/), because I like how Pico's defaults look (and hate CSS). To be more specific, I manually downloaded the library and adapted it to Zola, because Zola uses the [grass](https://github.com/connorskees/grass) crate, and it doesn't support the CSS updates of Pico's 2.1.0 version (Yes, it's a rabbit hole). As a hosting option, I chose Cloudflare, first because of the built-in support for Zola and the free 'Green Hosting Badge' (lol).

### Mastodon Comments 

If you go to the end of this post, you can see a section and a button that allows comments to be loaded from Mastodon and the Fediverse. The code and part of the style were taken from [Veronica Olsen](https://berglyd.net/blog/2023/03/mastodon-comments/) and [Carl Schwan](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/)'s implementations. If you have a Mastodon or any Fediverse account, leave a comment to show support.

## My inspirations

To say I thought about all the features in this website would be a lie (and a very bad one). I took inspiration mainly from a friend from university, [Gabriel Souza](https://gabrielsouza.top/) and a German blogger, [Marcus Obst](https://marcus-obst.de/). I tried to give my own face to this blog and I think it still needs improvements, but it's doing okay.

## What to Expect if You Subscribe

To be honest, I don't expect to post very often, my ideal goal would be a post every month, but with college and other obligations, I don't know if it's going to work. Anyway, I'll try to be consistent.

About subjects, I'll write about what I like. This includes software development, anime, games, philosophy, who knows... I also plan to post about projects and presentations. You can also send me suggestions by [email](mailto:me@caiobernardo.top).

## Conclusion

Feel welcome, read some posts, subscribe through the [feed](/atom.xml), and thank you for taking the time to read something from me :smile:.

[^1]: [https://indieweb.org/](https://indieweb.org/)
