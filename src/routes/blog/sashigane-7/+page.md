---
title: '<em>Hirakoubai</em> and <em>kaeshikoubai</em>'
date: 2022-12-28
description: 'Right triangle magic: how to layout common slopes. Part 7 in a series.'
image:
  url: '/images/chuukou-parts.avif'
  alt: 'Parts of the chuukou'
tags:
  - 'wood'
  - 'daiku'
  - 'kikujutsu'
---

<script>
  import Kanji from "$lib/components/Kanji.svelte";
  import Figure from "$lib/components/Figure.svelte";

  import Model from "./model.jpeg";
  import Koukogen from "./koukogen.jpg";
  import Gosun from "./gosunkoubai.png";
  import ThreeSix from "./three-six.png";
  import FiveTen from "./five-ten.png";
  import Chuukou from "./chuukou.png";
  import ChuukouParts from "./chuukou-parts.png";
  import Kaeshi from "./kaeshi.png";
</script>

This is part seven in a series of posts:

- [Sashigane 1: Introduction](/blog/sashigane-1)
- [Sashigane 2: Traditional Units](/blog/sashigane-2)
- [Sashigane 3: Physical design](/blog/sashigane-3)
- [Sashigane 4: _Hyoume_ and _Urame_](/blog/sashigane-4)
- [Sashigane 5: _Kou,_ _ko,_ _gen_](/blog/sashigane-5)
- [Sashigane 6: Simple usage](/blog/sashigane-6)
- Sashigane 7: Right triangle magic (this post)

## Why bother?

Before going full-nerd and explaining all this dry geometry stuff, let's give a
preview of where we are heading.

Here's the kind of model mentioned in the last post that I'd like to construct.
It models the corner of a "simple" temple roof:

<Figure src={Model} caption="Where we are headed: a 'simple' joinery model" />

Take a closer look at those images on the left: every one of those rafters seat
in a mortice that holds the part at _exactly_ the correct angle to hold the roof
in a flat plane. Every part joins perfectly, and all the compound-angle cuts fit
precisely, even in the corners with those compound angles.

I hope to be able to produce that kind of joinery before I die. Part of it, of
course, is skill with chisels, saws, and planes, but it all starts with
_layout_.

Believe it or not, the layout for that entire model can be achieved with a
single _sashigane_ and the geometry tricks explained in this series.

## Fundamentals

To review: We've already discussed that Japanese carpenters (<Kanji client:load
furigana="だいく" romaji="daiku">大工</Kanji>) always use _slopes_ <Kanji
client:load furigana="こうばい" romaji="koubai">(勾配)</Kanji> to describe
angles, not degrees or radians. A slope is a rise over a run, and it's helpful
to know the names of the parts:

<Figure src={Koukogen} caption="Koukogen: basic right triangle" />

I've labeled the _gen_ as "slope," but "hypotenuse" is probably more correct.
Somewhat amusingly, the kanji character actually means "mysterious, occultness,
black, deep, profound". It's also a component of the character <Kanji
client:load furigana="げん" romaji="genn">弦</Kanji> which means "chord" or
"bowstring" and is also pronounced _gen._

In other words, and more practically, the _gen_ is a taught line between the
start of the run and the top of the rise!

I may be a little old to still be a padawan early in my journey, but the
foreshadowing from all of that gives me shivers!

### Laying out <del>angles</del> <ins>slopes</ins> with a _sashigane_

Let's say someone asked you to draw a line with a slope of ５寸 _koubai_ or a
slope of 5/10.

The most direct way would be to draw a horizontal line of some fixed, but convenient length,
say １０寸. Then draw a vertical line from the right end that's exactly half that
length (５寸). Then draw a "taught line" between the
"start of the run and the top of the rise" to create the sloped line.

<Figure src={Gosun} caption="Rise of 5, run of 10" />

But that's way too much work.

The more practical method that any <Kanji client:load furigana="だいくさん"
romaji="daikusan">大工さん</Kanji> (carpenter) worth his salt would use is to hold
is _sashigane_ up to a straight line of _any_ length. He'd tilt the tool to
align the mark on one arm to read exactly half of what was on the other arm (say
6 and 3 rather than 10 and 5). Then he'd strike his line (along the long arm of
the _sashigane_, sliding and extending as necessary):

<Figure src={ThreeSix} caption="5 sun koubai using 3 and 6" />

Of course, this works for any two numbers in the same proportion. It's just as
true with the original lengths of 5 and 10: the length of the struck line will be
different, but the _slope_ (and angle) will be identical:

<Figure src={FiveTen} caption="5 sun koubai using 5 and 10" />

**This is important!**

This is not as obvious as it seems. It seems easy if you simply read and look
at the diagrams. But doing it in practice requires, well, _practice._

Notice that in the original diagram, the run, or _ko_, was 10. But
we used the _ko_ dimension on the long arm to strike the angle. Also, the _kou_ is **no
longer a _vertical_ line**, it's now the same length, but tilted off vertical.

This is inevitably confusing at first. Just remember that the slopes remain the
same, but the lengths differ. Also remember that the _sashigane_ will always
describe _two_ slopes, the _hirakoubai_ that's less than 45° and the
_kaeshikoubai_ that's greater.

### The _chuukou_

If you slide the _sashigane_ along the hypotenuse of the triangle, it should be
obvious that there is a point where the short arm will intersect the bottom
right corner of the triangle:

<Figure src={Chuukou} caption="The chuukou" />

This line is called the _chuukou_ (<Kanji client:load furigana="ちゅうこう"
romaji="chuukou">中勾</Kanji>, pronounced "chew koh"). It divides the larger
triangle into smaller parts.

More importantly, it describes the _kaeshikoubai_ slope (relative to the horizontal).

Because the sum of the angles in any triangle always adds up to 180°, and both
the overall triangle and smaller triangles contain 90° corners, the
angle in the lower right of the smaller triangle formed by the _chuukou_ is
exactly the same as the original in the lower left. Similarly, the larger angles
are also the same:

<Figure src={ChuukouParts} caption="The triangles formed by the chuukou" />

The angles labeled `a` are both the same, as are the angles labeled `b`.
Further, `a + b = 90`.

The _gen_ is also broken into two parts, called the "long _gen_" or _chougen_ (<Kanji
client:load furigana="ちょうげん" romaji="chougen">長玄</Kanji>) and the "short
_gen_" or _tangen_ (<Kanji client:load furigana="たんげん" 
romaji="tangen">短玄</Kanji>).

Further, once you've struck a line that describes the slope of that _gen_ (using
3/6, 5/10, 4.134/8.268, or _whatever_ in that same ratio) you can now slide the
_sashigane_ anywhere along the that line without changing the slopes: angle `a`
and `b` will always remain the same.

If, for example, you slid the _sashigane_ until the corner reached the top of
the _kou_ (rise), you'd end up describing four total triangles (fractal
triangles!):

<Figure src={Kaeshi} caption="Lot's of triangles, just two slopes" />

The short arm (_tsumate_) of the _sashigane_ still describes the same slope as
the _chuukou_.

There are four triangles shown: the large yellow triangle (outlined by the
_sashigane_), the purple triangle, and the two smaller yellow triangles.

**All four** of these triangles have exactly the same shape. All of them contain
the same two _hirakoubai_ and _kaeshikoubai_ slopes (`a` and `b`) but in
different orientations.

The lengths of the sides differ, but the _slopes_ are the same.

We will need at one more post to discuss one more critical slope before we can get to
how all this is applied. There is some pretty neat mathematical magic coming up.

But we've already covered enough to layout some simple constructions. The next
post will describe one such application.

Stay tuned!
