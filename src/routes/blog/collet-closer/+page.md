---
title: 'Collet closer pt. 1'
date: 2022-12-04
description: 'Making a lever-actuated collet closer'
image:
  url: '/images/collet-closer-removebg.avif'
  alt: 'Collet closer'
tags: ['metal', 'machining']
---

<script>
  import Figure from "$lib/components/Figure.svelte";

  import assyImage from "./3c-collet-assy.jpeg";
  import drawbarImage from "./drawbar.jpeg";
  import inSitu from "./3c-in-situ.jpeg";
  import colletChuck from "./5c-chuck.jpeg";
  import erChuck from "./ER-collet-chuck.jpeg";
  import closerImage from "./collet-closer-alt.jpeg";
</script>

I've got a 10" 1947 Montgomery Wards (Logan) metal lathe. Like many, I enjoy
the convenience and precision of collets. A four-jaw chuck is much more tedious to align,
and none of my scroll chucks are provide as much precision.

Until recently, I regularly used three different collet systems: 3C, 5C, and ER-32.

The lathe spindle has a 3MT morse-taper at the nose. For years I've used 3C collets
with an adapter and drawbar. I've acquired a full set of 3C collets from 1/16"
to 1/2" in 1/64" increments.

<Figure src={assyImage} caption="3C collet assembly" />
<Figure src={inSitu} caption="3C collet in situ (forgive the filthy lathe)" />
<Figure src={drawbarImage} caption="Drawbar inserted" />

The main drawback of the 3C collets is the maximum diameter of 1/2", but the
drawbar is also a little slow and tedious to use.

A few years ago I acquired a screw-on 5C collet chuck. This lets me hold onto
larger diameter stock, and lets me use the same collets for milling (in collet
blocks and indexers, etc.). Unfortunately, there are a couple disadvantages:

- The collet chuck sticks out too far for a relatively light-weight lathe. I get
  quite a bit of chatter with parting operations, etc.
- The scroll takes about a million turns of the chuck key to tighten down on
  parts.

<Figure src={colletChuck} caption="5C collet chuck" />

I've also started using ER-32 collets with an adapter. This lets me hold onto
"between" size stock, which is nice, but it also has a few problems:

- I've not made a drawbar, so I just bang the 3MT adapter into the end of the
  spindle and depend on friction to hold it in place (this works fine in
  practice).
- While not as bad as the 5C chuck, the work still sticks out far enough to
  cause problems with chatter.

<Figure src={erChuck} caption="ER-32 collet chuck" />

## A lever-actuator for 3MT collets

One problem in common with all of the above is that they either depend on screw-in
drawbars or scroll chucks to tighten the collet. This is admittedly just a minor
inconvenience for a hobbyist like myself, but I always wanted a lever-actuated
collet closer like you find on a big-boy lathe for production work.

My friend Jim S. had an idea for a "ghetto" version of a lever-actuated drawbar:

<Figure src={closerImage} caption="Jim's 'ghetto' collet-closer" />

The idea is to use a length of all thread as a drawbar, with a cam-actuated
assembly that revolves with the spindle at the far left of the lathe. This isn't
quite as nice as a "real" lever-actuated collet closer where the lever doesn't
spin, but it's a lot easier to make.

I just received some cheap 3MT collets that I'd ordered. I plan to experiment with
this for a few days. If it works well, I'll draw it up in CAD and send out to someplace like
[SendCutSend](https://sendcutsend.com) for a short run of parts. I figure
anyone with a similar 10" or 11" Logan or South Bend lathe might also be
interested in a kit to make one.

You obviously need to wait for the spindle to stop before acuating the cam, but
it's still more convenient than screwing down a drawbar for repetitive work.

Where the cam rubs should really be hardened. I'm thinking of using hardened
washers to make the manufacturing as simple as possible.

The 3MT collets have a 3/8"-16TPI drawbar thread, so I'll need to make an
adapter that goes between the 1/2" all-thread and the collet. I also need to
make some spacers that fits somewhat snuggly in the spindle to keep the
all-thread centered.

Lastly, I think I'll probably use this most with _ID_ collets. But that will be
another post.

I'll post updates as I make progress.
