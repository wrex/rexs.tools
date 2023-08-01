---
title: '<em>Hyoume</em> and <em>urame</em>'
date: '2022-12-10'
description: 'About the different scales on the top and bottom of a <em>sashigane</em>. Part 4 in a series.'
image:
  url: '/images/sashigane-graduations.avif'
  alt: 'Sashigane graduations'
tags:
  - 'wood'
  - 'daiku'
---

<script>
   import Kanji from "$lib/components/Kanji.svelte";
   import Figure from "$lib/components/Figure.svelte";

  import sashiGrads from "./sashigane-graduations.jpeg";
  import strikingFortyFive from "./striking-fortyfive.jpeg";
</script>

This is part four (and possibly the most important!) in a series of posts:

- [Sashigane 1: Introduction](/blog/sashigane-1)
- [Sashigane 2: Traditional Units](/blog/sashigane-2)
- [Sashigane 3: Physical design](/blog/sashigane-3)
- Sashigane 4: _Hyoume_ and _Urame_ (this post)
- [Sashigane 5: _Kou,_ _ko,_ _gen_](/blog/sashigane-5)
- [Sashigane 6: Simple usage](/blog/sashigane-6)
- [Sashigane 7: Right triangle magic](/blog/sashigane-7)

## Japanese names/labels

Unfortunately, we will need to learn and memorize several Japanese names for
things.

It would be pointless to create a consistent set of English names for
the same concepts, because in many cases the English terms would remain just as opaque.
Ultimately, they are just _names:_ it doesn't matter which language you name
things in since you have to memorize the names regardless.

When an equivalent English name _is_ meaningful (the words "rise" and "run," for
example) I'll try to provide both.

## _Hyoume_ and _Urame_

The top side and the bottom side of the _sashigane_ have **different** scales.
The length of equivalently marked divisions on the bottom side are _longer_ than
those on top (1.414 times longer to be precise)!

<Figure src={sashiGrads} caption="Sashigane graduations" />

This confuses many people. To the point that manufacturers now also make them
available with identical scales on both sides. This is a crying shame _because
the two bottom secondary scale allows an amazing number of complex layout tasks to be
performed with ease._ Seriously, this is where the magic happens!

By convention, the "top" (<Kanji client:load furigana="おもて"
romaji="omote">表</Kanji>) of the _sashigane_ faces up when you hold the long arm
in your left hand, with the short arm on the right and pointing downward.

The "bottom" (<Kanji client:load furigana="うら" romaji="ura">裏</Kanji>) is
the opposite side (flipping either the long or short arm to point in the other
direction exposes the bottom side). (Yes, I realize that kanji character looks
similar, _very_ similar, to the character for top. _Believe me,_ I know!)

As shown in the diagram below, the top (normally sized) graduations are called
_hyoume_ <Kanji client:load furigana="ひょうめ" romaji="hyoume">(表目)</Kanji>.

The bottom side graduations, or _urame_ <Kanji client:load furigana="うらめ"
romaji="urame">(裏目)</Kanji>, however, are &radic;2 times longer (the top side
lengths multiplied by 1.414).

[Terminology isn't consistent
even in Japan. Some carpenters call these bottom-side units _kakume_ (<Kanji
client:load furigana="かくめ" romaji="kakume">角目</Kanji>) instead of _urame_
(or "angle units" instead of "bottom units"). I'll always use _kakume_ in
this series.]

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

## Measuring 45° angles

Say you have a board with straight, parallel edges. If you wanted to cut the end
off at 90°, it would be trivial: you'd just hold the long arm of the _sashigane_
against one edge and strike a line along the perpendicular short arm. Then you'd
cut along that marked line.

But if you wanted to cut the end at 45° it would be almost as easy:

1. Using the top side of the _sashigane,_ align it along one edge such that the
   same number aligns with edge on both arms. You can use whatever number is
   convenient, just use the same number on the _nagate_ as on the _tsumate._

2. Strike your line (which is guaranteed to be at exactly 45°).

Here's an example of marking the end of a board at 45° using a 2 寸 measurement
for convenience (using the 2 mark on both legs):

<Figure src={strikingFortyFive} caption="Striking a 45° line at the end of a board" />

## Checking for square

This also allows provides another way to check if something is truly square or
to make it square.

Let's say you're trying to build a square box, with all four sides exactly the
same length and perpendicular to each other.

Merely checking for 90° angles in each corner doesn't suffice: you might have a
rectangle rather than a square.

One way would be to measure one side to ensure it's the desired length, then
measure both diagonals to ensure they are both the same length (just comparing
for identical lengths, ignoring the actual reading).

Japanese carpenters, however, would be more likely just measure both diagonals
using _urame_ units. If both measurements are the same, then they know it's
square, and the measurement itself is the true length of any side (in normal,
_hyoume_ measurements). Two measurements instead of three!

Note that this is also useful when gluing up. It's easy to create a
parallelogram instead of a square if you aren't careful -- even if all four
sides are the same length. To prevent this, just squeeze the longer diagonal
during glue-up until the _urame_ reading is the same as the desired _hyoume_
reading for a side.

The _sashigane_ makes laying out squares and 45° angles trivial!

[The next part of this series](/blog/sashigane-5/) will discuss laying out other
angles using the magic of _slopes_ versus degrees or radians.
