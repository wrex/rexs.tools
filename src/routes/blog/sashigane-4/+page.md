---
title: 'Sashigane (4)'
date: 2022-12-10
description: 'Hyoume and Urame'
image:
  url: './sashigane-graduations.jpeg'
  alt: 'Sashigane graduations'
tags: ['wood', 'daiku']
---

<script>
   import Kanji from "$lib/components/Kanji.svelte";
   import Figure from "$lib/components/Figure.svelte";

  import sashiGrads from "./sashigane-graduations.jpeg";
</script>

This is part four (and possibly the most important!) in a series of posts:

- [Sashigane 1: Introduction](/posts/sashigane-1)
- [Sashigane 2: Traditional Units](/posts/sashigane-2)
- [Sashigane 3: Physical design](/posts/sashigane-3)
- Sashigane 4: _Hyoume_ and _Urame_ (this post)
- [Sashigane 5: _Kou,_ _ko,_ _gen_](/posts/sashigane-5)
- [Sashigane 6: Simple usage](/posts/sashigane-6)
- [Sashigane 7: Right triangle magic](/posts/sashigane-7)

## _Hyoume_ and _Urame_

Here's where the magic happens.

The top side and the bottom side of the _sashigane_ have different scales.

The "top" (<Kanji client:load furigana="おもて" romaji="omote">表</Kanji>) of the
_sashigane_ faces up when you hold the long arm in your left hand, with the short arm on
the right and pointing downward.

The "bottom" (<Kanji client:load furigana="うら" romaji="ura">裏</Kanji>) is
the opposite side (flipping either the long or short arm to point in the other
direction exposes the bottom side).

As shown in the diagram below, the top graduations are called the _hyoume_
(<Kanji client:load furigana="ひょうめ" romaji="hyoume">表目</Kanji>) and are
standard length _shaku_ and _sun_ graduations.

The bottom side graduations or _urame_ (<Kanji client:load furigana="うらめ"
romaji="urame">裏目</Kanji>), however, are 1.414 times longer (the top side
units multiplied by the square root of two).

[Terminology isn't consistent
even in Japan. Some carpenters call these bottom-side units _kakume_ (<Kanji
client:load furigana="かくめ" romaji="kakume">角目</Kanji>) instead of _urame_
(or "angle units" instead of "bottom units").]

<Figure src={sashiGrads} caption="Sashigane graduations" />

You probably remember the Pythagorean theorem for right triangles from high
school:

> a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

Where c is the hypotenuse.

Well, if a and b are the same length, then this simplifies to

> a<sup>2</sup> + a<sup>2</sup> = c<sup>2</sup>

or

> 2 &times; a<sup>2</sup> = c<sup>2</sup>

Take the square root of both sides, and you end up with:

> c = &radic;2 &times; a

What this means in practice is that one function of a _sashigane_ is to
automatically find 90° **and 45° angles**:

## Measuring 45° angles and squares

Say you have a board with parallel edges. If you wanted to cut the end off at
90°, it would be trivial: you'd just hold the long arm of the _sashigane_ along one edge
and strike a line along the short arm. Then cut along that line.

But if you wanted to strike a line at 45° it would be almost as easy:

1. Use the top side of the _sashigane_ to measure the width of the board. Let's
   say it measures ５寸.

2. Turn the _sashigane_ over, and angle it until exactly there are exactly 5
   _urame_ divisions between the two edges of the board.

3. Strike your line (which is guaranteed to be at exactly 45°).

<p>
  <mark>TODO: Make video showing how to mark a 45° line.</mark>
</p>

This also allows you to check if something is truly square or to make it square.

The straightforward way would be to measure one side to ensure it's the desired
length, then measure both diagonals to ensure they are the same (just comparing
for identical lengths, ignoring the actual reading).

But that's three measurements. Japanese carpenters do it in two: measure one side
using _hyoume_ (normal 寸) to ensure they it's the desired length. Then measure a
diagonal using _urame_ to ensure you get the same reading.

Note that this is also useful when gluing up square frames. It's easy to create
a parallelogram instead of a square if you aren't careful -- merely making all
four sides the same length doesn't suffice. While gluing, just squeeze the long
diagonal until the _urame_ reading is the same as the _hyoume_ reading for a
side.

The _sashigane_ makes laying out squares and 45° angles trivial.

The next part of this series will discuss right triangles and the magic of
_kou,_ _ko,_ and _gen._