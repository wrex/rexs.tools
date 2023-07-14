---
title: 'A Lathe for my grandson (part 1)'
date: '2023-07-13'
description: 'Making a 1/12 scale model lathe'
image:
  url: '/images/model-lathe.avif'
  alt: 'Sashigane'
tags:
  - 'metal'
  - 'machining'
---

<script>
  import Figure from "$lib/components/Figure.svelte";

  import Kit from './kit.jpg';
  import Toolpost from './toolpost.jpg';
  import ToolpostScale from './toolpost-scale.jpg';
  import ToolpostAssy from './toolpost-assembly.jpg';
  import Broach from './broach.jpg';
  import CompoundHandle from './compound-handle.jpg';
  import WheelHandles from './wheel-handles.jpg';
</script>

Of my three kids, only daughter #1 seems to have acquired my passion for
woodworking, and none have yet expressed an interest in machining. I've decided
to start indoctrinating grandson #1 into the mystical arts of machine tools.
_Somebody_ needs to inherit all my metalworking equipment!

Though I hardly believe it, my grandson is already three years old. Some might
think that a three year old is unlikely to appreciate a model lathe that he
probably won't be allowed to touch, but my plan is to build a machine tool every
year until I've made him an entire 1/12 scale machine shop. By that point, he'll
probably be almost a teenager and will hopefully enjoy playing with them.

I bought the castings (actually a full kit including raw stock) from [PM research](https://www.pmmodelengines.com):

[![PM Research Engine Lathe](/images/model-lathe.avif)](https://www.pmmodelengines.com/shop/machine-tools/machine-models/engine-lathe-kit/)

It's a very nice kit, with cast aluminum parts and everything you need to build
the lathe (sans a working lathe, vertical mill, and assorted tooling):

<Figure src={Kit} caption="PM Research Engine Lathe Kit" />

This will hopefully be a fairly straightforward build, a I'm pretty much
following [Joe Pieczynski's](https://www.youtube.com/@joepie221) [_outstanding_
build
series](https://www.youtube.com/playlist?list=PL4wikbEbcE3IEC_AHLgbe3Jg3pmfTQ9hS)
exactly. Any deviations are most likely due to my misunderstanding or
differences in available tooling.

In particular, I decided to follow Joe's excellent suggestion to start with the
smallest stuff to build confidence. When I finally get to some of the larger (!)
castings and full assemblies it will be like desert.

Here's the first part I completed, the old-fashioned rocker style toolpost:

<Figure src={Toolpost} caption="Toolpost" />

It's hard to express just how _tiny_ some of these parts really are:

<Figure src={ToolpostScale} caption="Toolpost with pencil for scale" />

Here's the completed toolpost assembly. Note that this is a _working_ model! I
should be able to grind a cutting tool and actually turn parts in this thing
when I'm done. I was pretty proud of myself for boring the countersink hole
precisely in the tee-slot base such that the toolpost itself is recessed
slightly. There is a slight mismatch in the radius of the rocker and the dish,
but this was some fiddly work!

<Figure src={ToolpostAssy} caption="Toolpost assembly" />

Next up were the handles and handwheels for the compound, cross-slide, and
tailstock.

I made the square hole in the compound handle with needle files before realizing
I needed to make two more square holes exactly 0.100" X 0.100". That was fiddly
enough work that I went ahead and made a dedicated broach:

<Figure src={Broach} caption="Broach for making square holes" />

I made it from O1 tool steel, coated it in boric acid to prevent oxidation,
heated it to cherry red, then quenched it in oil to harden it. I then tempered
it with a torch to a light straw color. Hardening it was probably unnecessary
since the parts are aluminum, but I might use it again someday on something
harder.

Once the broach was made, the handles were pretty straightforward (if fiddly):

<Figure src={CompoundHandle} caption="Compound Handle" />

<Figure src={WheelHandles} caption="Cross-slide and tailstock handles" />

That's as far as I've gotten so far. I'll post more updates as I progress.
