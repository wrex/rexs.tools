---
title: 'Sashigane (part 7)'
date: 2022-12-28
description: 'Right triangle magic'
image:
  url: '/blog-images/sashigane-nobg-300.png'
  alt: 'sashigane'
tags: ['wood', 'daiku', 'kikujutsu']
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
</script>

This is part seven in a series of posts:

- [Sashigane 1: Introduction](/posts/sashigane-1)
- [Sashigane 2: Traditional Units](/posts/sashigane-2)
- [Sashigane 3: Physical design](/posts/sashigane-3)
- [Sashigane 4: _Hyoume_ and _Urame_](/posts/sashigane-4)
- [Sashigane 5: _Kou,_ _ko,_ _gen_](/posts/sashigane-5)
- [Sashigane 6: Simple usage](/posts/sashigane-6)
- Sashigane 7: Right triangle magic (this post)

## Why bother?

Before going full-nerd and explaining all this dry geometry stuff, let's give a
preview of where we are heading.

Here's a model of the corner of a "simple" temple roof:

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

We've already discussed that Japanese carpenters (<Kanji client:load
furigana="だいく" romaji="daiku">大工</Kanji>) always use _slopes_ (<Kanji
client:load furigana="こうばい" romaji="koubai">勾配</Kanji>) to describe
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

I may be a little old for a padawan, but all of that gives me shivers!

### Laying out <del>angles</del> <ins>slopes</ins> with a _sashigane_

Let's say someone asked you to draw a line with a slope of ５寸 _koubai_. To
review, the convention is with a rise, or _ko,_ of １０寸 which is equivalent to １尺.

The most direct way would be to draw a horizontal line of some fixed, but convenient length,
say １０寸. Then draw a vertical line from the right end that's exactly half that
length (５寸). Then draw a "taught line" between the
"start of the run and the top of the rise" to create the sloped line.

<Figure src={Gosun} caption="Rise of 5, run of 10" />

But that's way too much work.

The more practical method that any <Kanji client:load furigana="だいくさん"
romaji="daikusan">大工さん</Kanji> (carpenter) worth his salt would use is to draw a horizontal
line of _any_ length, then line up his _sashigane_ so the mark on one arm
read exactly half of what was on the other arm (say 6 and 3 rather than 10 and
5), then strike his line:

<Figure src={ThreeSix} caption="5 sun koubai using 3 and 6" />

Of course, this works for any two numbers in the same proportion. It's just as
true with the original lengths of 5 and 10: the length of the struck line will be
different, but the _slope_ (and angle) will be identical:

<Figure src={FiveTen} caption="5 sun koubai using 5 and 10" />

**This is important!**

It's not as obvious as it seems, either. Notice that in the original diagram,
the run, or _ko_, was 10. But in the last diagram, we use the _ko_ dimension to
strike the hypotenuse, and the _kou_ is no longer a vertical rise. This can seem
confusing at first, but just remember the slopes remain the same, but the
lengths differ.

### The _chuukou_

If you slide the _sashigane_ along the hypotenuse of the triangle, it should be
obvious that there is a point where the short arm will intersect the bottom
right corner of the triangle:

<Figure src={Chuukou} caption="The chuukou" />

This line is called the _chuukou_ (<Kanji client:load furigana="ちゅうこう"
romaji="chuukou">中勾</Kanji>, pronounced "chew koh"). It divides the larger
triangle into smaller parts.

Because the sum of the angles in any triangle always adds up to 180°, and both
the overall triangle and smaller triangles contain 90° corners, the
angle in the lower right of the smaller triangle formed by the _chuukou_ is
exactly the same as the original in the lower left. Similarly, the larger angles
are also the same:

<Figure src={ChuukouParts} caption="The triangles formed by the chuukou" />

The angles labled "a" are both the same, as are the angles labled "b".

The _gen_ is also broken into two parts, called the "long _gen_" or _chougen_ (<Kanji
client:load furigana="ちょうげん" romaji="chougen">長玄</Kanji>) and the "short
_gen_" or _tangen_ (<Kanji client:load furigana="たんげん" 
romaji="tangen">短玄</Kanji>).

Each of these smaller triangles can also be broken into two smaller triangles in
the same way (fractal triangles!). There are a few more names for the next
smaller triangle parts, but, thankfully, the fractal deconstruction and naming
only continues for one more level (and we don't need to name everything yet).

We will need at least one more post to name all the parts before we can get to
how all this is applied. There is some pretty neat mathematical magic coming up.

Stay tuned!
