---
title: 'Sashigane (6)'
date: 2022-12-12
description: 'Basic uses for a sashigane'
image:
  url: '/images/timber-from-log.avif'
  alt: 'Laying out a square timber from a log'
tags: ['wood', 'daiku']
---

<script>
  import Kanji from "$lib/components/Kanji.svelte";
  import Figure from "$lib/components/Figure.svelte";

  import timberLog from "./timber-from-log.jpeg";
  import Octagon from "./octagon-layout.jpeg";
  import Marume from "./marume.jpeg";
  import Sill from "./sill-plate.jpeg";
  import Tray from "./splayed-tray.jpeg";
  import Stool from "./splayed-stool.jpeg";
</script>

This is part six in a series of posts:

- [Sashigane 1: Introduction](/blog/sashigane-1)
- [Sashigane 2: Traditional Units](/blog/sashigane-2)
- [Sashigane 3: Physical design](/blog/sashigane-3)
- [Sashigane 4: _Hyoume_ and _Urame_](/blog/sashigane-4)
- [Sashigane 5: _Kou,_ _ko,_ _gen_](/blog/sashigane-5)
- Sashigane 6: Simple usage (this post)
- [Sashigane 7: Right triangle magic](/blog/sashigane-7)

## Common uses

There are countless uses for a _sashigane_, but this post lists a few of the
more common ones.

### 1. Timbers from logs

One of the simplest uses of a _sashigane_ is to determine the largest square sided
timber you can extract from a round log. Simply use the _urame_ graduations to
measure the diameter of the log. That measurement is the "real" _sun_ measurement
(_hyoume_) of each side:

<Figure src={timberLog} caption="Timber from log" />

### 2. Octagons from square Timbers

Another common usage is going the other way: turning a square timber into a
somewhat round octagon shape. It's easy to draw a perfect octagon on the end of
the log.

First measure the width of one side (using the top graduations
or _hyoume_). Call this measurement `A`.

Now turn over the _sashigane_, and make a mark `A/2` in from each side using the bottom
graduations (_urame_):

<Figure src={Octagon} caption="Octagon layout" />

(Why this works is left as an exercise for the reader!)

### 3. Measuring circumferences

The inside edge of the _tsumate_ on the underside is often marked with _marume_
(<Kanji client:load furigana="まるめ" romaji="marume">丸目</Kanji>) graduations.
Each graduation is 1/&pi; &times; the length of the _hyoume_ graduations:

<Figure src={Marume} caption="Marume graduations" />

Since the circumference of a circle is just &pi; times the diameter, measuring
the diameter using _marume_ graduations gives you the circumference directly (it's
much easier to measure the diameter of a circle with a ruler than it is to
measure the circumference!).

### 4. Sill-plate or threshold layout

Another illustrative use for the _sashigane_ is to layout a sill-plate to fit
precisely between two oddly shaped columns or pillars. The diagram below illustrates the
process for a made up example.

The diagram illustrates a plan perspective (a top view, looking at the ends of
the columns from above). It shows the raw stock for the sill butted
agains the vertical pillars at the top. At the bottom is the completed sill-plate after
cutting. The middle section shows the markup stock before cutting.

<Figure src={Sill} caption="Laying out a sill plate" />

First, butt the raw stock for the sill against the two columns. This is shown at
the top of the diagram.

1. Determine the most interior point on the right edge. This is marked 1 on
   the right side of the top diagram. For illustration, the _sashigane_ is
   shown in miniature form. In practice, the long arm of the _sashigane_ should be
   long enough for one arm to butt against the point on the right column. Strike
   a line all the way across the stock.

2. Place the _sashigane_ against the angled face, and strike two lines, one along each
   arm of the _sashigane_.

3. Plase the _sashigane_ agains the remaining angle on the right pillar, and
   strike two more orthogonal lines.

4. Now, repeat the process for the left pillar. First identify and mark the most interior
   point. In this case, the face is already orthogonal to the sill stock so only
   one line needs to be struck.

5. Place the _sashigane_ against the lower angle of the left pillar, and strike
   two orthogonal lines on the raw stock.

6. Similarly, transfer the remaining angle to the raw stock.

These six steps are shown in the top part of the diagram. Notice that there are
two orthogonal lines created for every angle that was transferred. For
measurements 1 and 4, we used the side of the stock as one of the lines since
those measurements were square to the stock. We drew them explicitly for the
non-orthogonal angles.

Note that we can strike lines parallel to any of these marks simply by sliding the
_sashigane_ along the orthogonal line.

We use this to layout the cuts as shown in the middle part of the diagram:

- First slide the _sashigane_ along the line marked 2 in the top diagram until the
  other arm intersects line 1. The point where they intersect marks the
  most interior point. Strike a line from that point all the way to the bottom
  of the stock.

- Next, slide the _sashigane_ along the baseline marked 3 in the top diagram until
  the other arm again intersects the most interior point. Strike a line to mark
  the bit that needs to poke outward.

- Repeat for the left side. First, strike a line at 4 to mark the interior face.

- Next, slide the _sashigane_ along the baseline of 5 until the other arm
  intersects line 4 near the bottom of the stock. Strike a line to mark the
  portion that protrudes.

- Finally, slide the _sashigane_ along the baseline of 6 to mark out the
  protruding point at the top left.

After cutting along the layout lines, you'll be left with the shape shown at the
bottom of the diagram, with the correct shape and length to fit precisely
between the two pillars.

The process is much easier to do than it is to describe. It just takes a bit of
practice to learn to visualize the shape you are trying to create. Just remember
that you create parallel lines by sliding the _sashigane_ along one of the
existing orthogonal lines until you reach the desired point for the parallel line.

In tight quarters, it's often easier to tape a piece of paper down and do your
layout on that (later transfering those marks to the raw stock somewhere else).

This is a very handy technique for many different situations, and will be
familiar to many different tradesmen (not just carpenters, but tile layers,
stone masons, etc.).

<p>
  <mark>TODO: Make a video showing this layout process</mark>
</p>

## Traditional vs ツウバイ ("two by") construction

In the old days, raw material was "cheap" if you valued the time and effort to
obtain it at zero. Oddly shaped trees and logs were everywhere, and "only" (!!) cost you
the time and effort to cut and transport them.

Work and experienced, skilled workers were also cheap (or at least omnipresent,
so they weren't of particular concern).

On the other hand, high quality, flat, straight, and stable material was almost
impossibly expensive to obtain (and making your own required far more effort
than merely cutting down and hauling).

Modern 2&times;4 construction has somewhat turned this on its head. Relatively
straight, kiln dried, surfaced-four-sides lumber can be acquired and even
dropped off on your doorstep at shockingly low cost (relatively speaking).
Knowledgeable and competent carpenters and other tradesmen, on the other hand,
are increasingly scarce and expensive.

Because the workers are so expensive, we think nothing of spending huge sums of
money on tools and machines that let them work more quickly. The ancients had to
make do with much more modest tooling (but accomplished high-quality work
amazingly quickly nonetheless).

Modern construction practices take advantage of the "flat and straight" nature
of our materials. It's common practice to preserve the "factory edge" of a piece
of plywood, for example, to ensure things remain square and true as they are
constructed.

Ancient craftsman, though, had to depend on their tools to keep things straight
and true. They depended on physical and mathematical principles to ensure their
creations were true and square, even if their materials weren't.

They knew for certain that a silk cord stretched between two points created a
straight line. They also knew that water seeks it's own level, that a weight
hung from a cord creates a true vertical, and that a triangle with sides 3
units, 4 units, and 5 units long creates a right triangle.

The most important layout tools in their arsenal were the three mentioned at the
beginning of this post: the _sashigane_, the _sumitsubo_ (inkpot and line), and the
_mizuito_ (water line).

The most complex of these -- by far -- was the _sashigane_. This was doubtless a
highly prized posession, and it became the reference for virtually everythihg
they built. They learned techniques to verify and, if necessary, adjust the
squareness of this reference (a subject for another blog post).

Traditional Japanese layout generally depends on idealized horizontal and
vertical lines. They knew their material was rarely constant width or straight,
so they would strike an ink line down the "center" of each face on their
material.

That inked line would represent the ideal (if imaginary) line corresponding to
a line on their drawing.

In other words, traditional Japanese layout mostly looks like stick figures. The
widths of boards are mostly ignored (as are arcs and bows). A board might be so
crooked that the ink like down the "center" might only make a mark for a short
distance at each end, missing the middle of the board entirely!

For hobbyists like myself, the traditional techniques are particularly
valuable. My time isn't costly: I _enjoy_ doing this work. Traditional
techniques allow me to use material that a pro wouldn't begin to consider.

What was old is new again.

## Going further

We've only just scratched the surface of what a _sashigane_ can do. As mentioned
in the beginning, even the astonishingly complex joints and compound angles
required to make a temple or castle can be drawn using nothing more than the
humble sashigane.

If you can draw it, and you can cut to a line, you can make the joint.

This study of layout and measurement is called _kikujutsu_ (<Kanji client:load
furigana="きくじゅつ" romaji="kikujutsu">規矩術</Kanji>) in Japanese. I'll be
devoting much of this blog to the subject as I continue my own studies.

I've two specfic projects in mind to document the process in forthcoming
sections.

The first is a sort of scoop or tray with four splayed sides. Believe it or not,
all of the compound angles required can be easily drawn using nothing more than
a _sashigane_:

<Figure src={Tray} caption="Splay-sided, or battered tray" />

Next I plan to construct a simple splay-legged stool:

<Figure src={Stool} caption="Splay-legged stool" />

Stay tuned!
