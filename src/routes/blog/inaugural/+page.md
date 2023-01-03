---
title: 'The site is live!'
description: 'Inaugural post'
date: 2022-12-02
image:
  url: '/images/burst-kUqqaRjJuw0-unsplash.avif'
  alt: 'Typing on a laptop'
tags: ['meta', 'coding']
---

<script>
  import Kanji from "$lib/components/Kanji.svelte";
</script>

I've been wanting someplace to document my various projects. I've got a _lot_ of
hobbies (guitar, 3D printing, computer stuff, Japanese language stuff,
photography, ad infinitum) but more than anything I tend to tinker in the shop.
A dedicated blog for tools and tool usage seemed warranted.

I tend to make a new website every few years just to explore the latest web
tooling (heh). This time I got to play with [Svelte](https://svelte.dev),
[Astro](https://astro.build), and [Open Props](https://open-props.style). All
are truly amazing. While creating the site, [Svelte Kit
1.0](https://kit.svelte.dev) was released. I launched the site with Astro, but
I've since converted to Svelte Kit.

There's absolutely nothing wrong with Astro and the "island architecture",
but I really like what I've seen so far about SvelteKit (and I started to
confuse myself with Astro component syntax vs. svelte syntax). I was trained by
[hugo](https://gohugo.io/) to keep all my assets (images and stuff) in the same
directory as my content (markdown files). This ended up being pretty tricky to
accomplish, but I figured it out with the help of [this sample
repository](https://github.com/rdela/sveltekit-imagetools).

Web design is definitely not my strong suit, but Open Props prevented me from
making things to horrible and ugly. The logo is my own design but will likely
get some further tweaks after consulting with my artist daughter.

About the only unusual component on the site is the furigana toggle in the upper
right of the header. On a desktop browser, hovering over any kanji
characters (like these: <Kanji client:load furigana="かんじ" romaji="kanji">漢字</Kanji>)
will reveal a tooltip with the reading for those characters. The
toggle in the upper right switches between alphabetic characters ("romaji") and
Japanese phonetic characters (ひらがな) for the readings.

I wasn't sure what to do for mobile browsers, but on an iPhone at least, long
pressing on any kanji to select the characters also reveals the tooltip.
Hopefully this works on Android devices as well.

I eventually plan to publish some longer form articles as well as more temporal
blog posts. I know I'll need a place that I can go back and make edits as my
understanding improves.
