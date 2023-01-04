---
title: 'Sashigane (1)'
date: 2022-12-07
description: 'More than a square: an incredible calculating device.'
image:
  url: '/images/sashigane-removebg.avif'
  alt: 'Sashigane'
tags:
  - 'wood'
  - 'daiku'
---

<script>
  import Kanji from "$lib/components/Kanji.svelte";
  import Figure from "$lib/components/Figure.svelte";
  import YouTube from 'svelte-youtube';

  import Sashigane from "./sashigane-removebg.png";
  import HimejiJou from "./redd-f-wPMvPMD9KBI-unsplash.jpeg";
</script>

This is part one in a series of posts:

- Sashigane 1: Introduction (this post)
- [Sashigane 2: Traditional Units](/blog/sashigane-2)
- [Sashigane 3: Physical design](/blog/sashigane-3)
- [Sashigane 4: _Hyoume_ and _Urame_](/blog/sashigane-4)
- [Sashigane 5: _Kou,_ _ko,_ _gen_](/blog/sashigane-5)
- [Sashigane 6: Simple usage](/blog/sashigane-6)
- [Sashigane 7: Right triangle magic](/blog/sashigane-7)

I've recently learned a bit about a mind-blowing but ancient tool: the humble
Japanese carpenter's square. This amazing device has evolved over centuries to
permit an incredible number of complex measurements.

Unfortunately, it will take more words to describe than really fit in a series of
blog posts. All of the content from this series (and more) will eventually be
moved to the "articles" section of this site.

<Figure src={Sashigane} caption="A typical sashigane" />

For centuries, every joint, rafter, pillar, and beam in Japanese construction has been marked
out primarily with three extremely modest tools:

- A Japanese carpenter's square, called a _sashigane_ <Kanji client:load
  furigana="さしがね" romaji="sashigane">(指矩)</Kanji>. Confusingly, there are actually
  several different ways of writing the word _sashigane_ in kanji characters,
  but I'll stick with 指矩 as it tends to be the most common in books. You may
  also see it written as <Kanji client:load furigana="さしがね"
  romaji="sashigane">指金</Kanji> or <Kanji client:load
  furigana="かねじゃく" romaji="kanejaku">曲尺</Kanji> almost as frequently.
  The latter is most commonly pronounced _kanejaku,_ but it refers to the same
  tool. There are even more ways of writing it than this, but I'll try to
  consistently use _sashigane_ or 指矩 throughout this series.

- An inkpot and silk line called a _sumitsubo_ (<Kanji client:load furigana="すみつぼ"
  romaji="sumitsubo">墨壺</Kanji>). This ink pot is also used with a piece of
  bamboo called a _sumisashi_ (<Kanji client:load furigana="すみさし"
  romaji="sumisashi">墨差し</Kanji>) as a marking pen. Western carpenters use chalk
  lines, but Japanese carpenters use ink! These ink pots were typically
  hand-carved by each artisan and [can be quite
  beautiful](https://www.google.com/search?q=sumitsubo&tbm=isch).

- A length of [_mizuito_](https://suikoushya.com/ja/2020/04/15/mizuito/)
  cord (<Kanji client:load furigana="みずいと" romaji="mizuito">水糸</Kanji>) to mark horizontal and vertical references. These kanji characters,
  by the way, mean "water string".

  A horizontal layout line is called _rokuzumi_ in Japanese
  (<Kanji client:load furigana="ろくずみ" romaji="rokuzumi">陸墨</Kanji>) which means
  "land/shore ink" (basically meaning the horizon line). A vertical line is
  called _tatemizu_ (<Kanji client:load furigana="たてみず" romaji="tatemizu">立
  て水</Kanji>) or "standing/vertical water".

  I don't know for certain, but I strongly suspect that carpenters in ancient
  Japan used water with stretched _mizuito_ cords to mark out true
  horizontal and vertical references at the job site. I wonder if they used
  [water levels](https://en.wikipedia.org/wiki/Water_level_(device)) to find
  horizontal, and perhaps dropped droplets of water or ink to find vertical.
  They could then stretched _mizuito_ cords between two identified points to
  mark true horizontal and vertical lines (laser levels have spoiled me).

These simple tools were used not just for modest homes and simple furniture, but
also for astonishingly beautiful and complex temples and castles.

<Figure src={HimejiJou} caption="Himeji castle" />

Look at this photo of Himeji castle. Consider that the original was built in
the 1300's, long before calculators, laser levels and the like. Just look at
those arches and rafters! Incredibly, the layout was performed almost entirely
with a sashigane (with little or no hand calculation!).

## Overview of basic applications

Subsequent posts will describe more about how such a simple tool can perform so
many layout taks. Here's an outstanding overview of basic uses for the tool. This
isn't my work, someone else made this. The English closed-captioning is quite
good, and it provides an excellent overview of the tool:

<YouTube videoId="6egeYJNHjOQ" />

We will be covering everything discussed in that video in subsequent posts.

Next up: [traditional Japanese units](/blog/sashigane-2).
