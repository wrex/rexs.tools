---
title: 'Sashigane (part 5)'
dae: 2022-12-11
description: 'Mysteries of the right triangle'
image:
  url: '/blog-images/sashigane-nobg-300.png'
  alt: 'sashigane'
tags: ['wood', 'daiku']
---

<script>
  import Kanji from "$lib/components/Kanji.svelte";
  import Figure from "$lib/components/Figure.svelte";

  import kouKoGen from "./koukogen.jpeg";
</script>

This is part five in a series of posts:

- [Sashigane 1: Introduction](/posts/sashigane-1)
- [Sashigane 2: Traditional Units](/posts/sashigane-2)
- [Sashigane 3: Physical design](/posts/sashigane-3)
- [Sashigane 4: _Hyoume_ and _Urame_](/posts/sashigane-4)
- Sashigane 5: _Kou,_ _ko,_ _gen_ (this post)
- [Sashigane 6: Simple usage](/posts/sashigane-6)
- [Sashigane 7: Right triangle magic](/posts/sashigane-7)

## Slopes, not angles

It turns out that Japanse carpenters almost never use angles or talk about
"degrees". All angles are considered as _slopes_ (rise over run)
called _koubai_ (<Kanji client:load furigana="こうばい" romaji="koubai">勾配</Kanji>).

By convention, the run is usually considered to be 10 _sun_, and the rise expresses
the slope. Since a 45° slope has the same rise as the run, a 45° slope could be
described as "10 _koubai_" or "10 _sun_ _koubai_."

[The slope of a 45° angle with rise and run of the same length is more commonly referred to
as _kanekoubai_ (<Kanji client:load furigana="かねこうばい" romaji="kanekoubai">
矩勾配</Kanji>), however.]

The three sides of a right triangle are named as follows:

- The run is called the _ko_ (<Kanji client:load furigana="こ" romaji="ko">殳</Kanji>).

- The rise is called the _kou_ (<Kanji client:load furigana="こう" romaji="kou">
  勾</Kanji>).

  It's unfortunate that these two words sound so similar to western ears, but
  _kou_ sounds completely different from _ko_ to Japanese natives.

  Enunciating slowly and distinctly, _kou_ would be prounounced "ko ooh," with
  two distinct beats. _Kou_ when spoken makes a long "o" sound (kind of like the
  word "boat" but expressly drawn out for two beats: "bo-oat") while _ko_ sounds for
  just one beat and is clipped short.

- The hypotenuse is called the _gen_ (<Kanji client:load furigana="げん"
  romaji="gen">玄</Kanji>).

<Figure src={kouKoGen} caption="Right triangle parts" />

A carpenter might say that the slope of a particular roof was "4 _sun_
_koubai_", for example, or a slope of 4/10 (equivalent to 21.8°).
