---
title: '<em>Kou</em>, <em>ko</em>, <em>gen</em>'
date: '2022-12-11'
description: '<em>Slopes,</em> and the mysteries of the right triangle. Part 5 in a series.'
image:
  url: '/images/koukogen.avif'
  alt: 'Kou, ko, gen triangle'
tags:
  - 'wood'
  - 'daiku'
---

<script>
  import Kanji from "$lib/components/Kanji.svelte";
  import Figure from "$lib/components/Figure.svelte";

  import kouKoGen from "./koukogen.jpeg";
  import HiraKaeshi from "./hira-kaeshi.png";
</script>

This is part five in a series of posts:

- [Sashigane 1: Introduction](/blog/sashigane-1)
- [Sashigane 2: Traditional Units](/blog/sashigane-2)
- [Sashigane 3: Physical design](/blog/sashigane-3)
- [Sashigane 4: _Hyoume_ and _Urame_](/blog/sashigane-4)
- Sashigane 5: _Kou,_ _ko,_ _gen_ (this post)
- [Sashigane 6: Simple usage](/blog/sashigane-6)
- [Sashigane 7: Right triangle magic](/blog/sashigane-7)

## Slopes, not angles

It turns out that Japanese carpenters almost never use angles or talk about
"degrees". All angles are considered as _slopes_ (a rise over a run)
called _koubai_ <Kanji client:load furigana="こうばい" 
romaji="koubai">(勾配)</Kanji>.

<Figure src={kouKoGen} caption="Right triangle parts" />

- A run is called _ko_ (<Kanji client:load furigana="こ" romaji="ko">殳</Kanji>).

- A rise is called _kou_ (<Kanji client:load furigana="こう" romaji="kou">
  勾</Kanji>).

  It's unfortunate that these two words sound so similar to western ears, but
  to Japanese natives, _kou_ sounds completely different.

  Enunciating slowly and distinctly, _kou_ sounds like "ko ooh," with
  two distinct beats, but run together (like a half-note instead of two quarter
  notes in music!). _Kou_ when spoken makes a long "o" sound (kind of like the
  word "boat" but expressly drawn out for two beats: "bo-oat") while _ko_ sounds for
  just one beat (a quarter-note) and is clipped short.

- A line connecting the start of the run to the top of the rise is called the
  _gen_ (<Kanji client:load furigana="げん" romaji="gen">玄</Kanji>).

By convention, slopes are named assuming a fixed _ko_ (run) of 10 _sun_. The _kou_
(rise) is then used to express the slope. So a 4/10 slope would be referred to
as 4 _sun koubai._

## _Kanekoubai_

A 45° slope is a special case: the rise is the same as the run. A 45° angle could be
described as a slope of "10 _koubai_" or "10 _sun_ _koubai_." This special case
is more commonly referred to as _kanekoubai_ (<Kanji client:load furigana="かねこうばい" romaji="kanekoubai">
矩勾配</Kanji>), however.

## _Hirakoubai_ and _kaeshikoubai_

By convention, slopes with a rise less than the run (angles less than 45°) are
considered the common or ordinary case. This is called _hirakoubai_ <Kanji
client:load furigana="ひらこうばい" romaji="hirakoubai">(平購買)</Kanji>.

Slopes with a greater rise than run (greater than 45° angles) are called
_kaeshikoubai_ <Kanji client:load furigana="かえしこうばい" 
romaji="kaeshikoubai">(返し購買)</Kanji> or sometimes _koubai no korobi_ <Kanji client:load
furigana="こうばいのころび" romaji="koubainokorobi">(勾配の転び)</Kanji>, which
means "upside down _koubai._"

Note that _hirakouba_ and _kaeshikoubai_ slopes come in _pairs._

For example, a slope of 5 _sun koubai_ has a related _kaeshikoubai_ slope of
10/5.

These are the two corners in a right triangle that aren't 90°:

<Figure src={HiraKaeshi} caption="Hirakoubai and kaeshikoubai pairs" />

The slope labeled `a` is _hirakoubai_ (a rise of 5 over a run of 10) and `b` is
the corresponding _kaeshikoubai_ (with a "rise" of 10 over a "run" of 5).

Things get confusing soon, so it pays to ensure you fully understand the
following five points:

1. The _ko_ (run) is always the _adjacent_ side, and the _kou_ (rise) is always
   the _opposite_ side.

2. By convention, slopes are normalized to a _ko_ (run) of length 10. If you had a
   right triangle with sides that were, say, 3 _sun_ and 6 _sun_ long, you'd
   refer to the normal/conventional slope (or _hirakoubai_) as "5 _sun koubai_"
   (keeping the 3/6 ratio but scaling it to 5/10).

3. Further, the shallower slope (smaller angle) is the common or ordinary slope
   (_hirakoubai_) and is normally what gets called out.

4. A steeper slope (greater than 45° angle) is called _kaeshikoubai_ and the
   _kou_ now becomes a divisor rather than a dividend -- you divide the _ko_ (run)
   by the _kou_ (rise) to get a _kaeshikoubai_ slope (it's the upside down slope).

5. Normally, one doesn't refer to slopes (_koubai_) greater than 10.

   If, for some reason, you wanted to work with a slope of, say, 25/10, you
   should instead think of it as the _kaeshikoubai_ for a slope of 4 _sun koubai_.

   That's because the _kaeshikoubai_ for a common slope (_hirakoubai_) of 10/25,
   which is equivalent to 40/100, which is the same as a slope of 4/10 or 4 _sun
   koubai._)

Next, we'll give all this theory and naming stuff a rest, and finally [get to
some practical applications for the _sashigane_](/blog/sashigane-6).
