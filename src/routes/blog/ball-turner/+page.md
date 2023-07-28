---
title: 'Jim S. Ball Turner'
date: '2023-07-26'
description: 'A simple tangential cutter ball turner design'
image:
  url: '/images/ball-turner.avif'
  alt: '3D model of ball turner'
tags:
  - 'metal'
  - 'machining'
---

<script>
  import Figure from "$lib/components/Figure.svelte";

  import SphereCube from "./jims-spheres-in-cube.jpeg";
  import CaptiveRing from "./jims-captive-ring.png";
  import Positioning from "./positioning.jpg";
  import Drawings from "./drawings.pdf";
</script>

![Ball turner model](/images/ball-turner.avif)

I've been meaning to make a ball turner forever, and every time I've seen the
topic come up on [hobby machinist](https://hobby-machinist.com) or any of the various
mailing lists I'm on, my friend Jim S. inevitably pipes up with his design that
he swears is the simplest possible. Yet everyone always seems to end up making
something much more complicated!

Jim is an old pro and has done some amazing work. For fun he's turned a 3/8"
solid sphere inside a 5/8" sphere, inside a 7/8" sphere, inside a 1" cube. Each
hole is 1/16" smaller than the object it contains. All of the captive parts are
free to rattle around inside the next larger part.

<Figure src={SphereCube} caption="Jim's spheres in a cube" />

Try to figure out how to turn **that**!

He's also made a rod with a doughnut shaped ring, but captured on the rod by
turned balls that are larger than the ID of the ring. He's even done two rings.

<Figure src={CaptiveRing} caption="Jim's captive ring" />

He used his ball turner idea (and other home built tools) to make at least the
latter, as well as all sorts of other parts.

Anyway, I finally got around to making one of his ball turners for myself, and I
see why he's so enamored of the design. It works fantastically well!

## The design

The key characteristic of the design is that it uses a tangential cutter with
zero rake and zero relief. Many people will swear up and down that such a tool
won't cut, but I'm here to tell you it works fantastically well.

Zero back rake is no big deal. It's pretty common when cutting harder materials
(Jim is pretty sure the design will work just fine with a carbide cutter even on
super hard alloys like inconel).

The cutter is a precisely ground cylindrical rod with a flat face (the remains of an old end
mill, center drill, or whatever work just fine). The curve at the edge of the top face means
you initially have point contact, but you've effectively got a super large nose
radius, which leads to an outstanding surface finish.

Zero relief is what breaks people's brains. It seems like it wouldn't cut at
all, but for _turning_ (vs. facing), rod-shaped cylindrical work _already_ provides
plenty of relief. With the cutter at center height, the work already curves away
below the cutting edge --- additional relief really doesn't have _any_ advantage
(clearance is clearance, Clarence).

Best of all, it's a _tangential_ cutter: all the cutting forces are 100% in line
with the long dimension. It could _not_ be a more rigid setup. There is
virtually no chance of chatter, and you can make surprisingly aggressive cuts
without any problem.

About the only limitation of zero relieve is that you **CANNOT** face the stock
or feed directly into a faced end of stock, you **must** feed into the _side_ of
the stock on every pass.

Here's an example of the tool in action:

<iframe width="420" height="236" src="https://www.youtube.com/embed/_Sd5ujFa4aU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Some notes about the video and the tool shown:

- This was my very first attempt at using the tool. Out of an abundance of
  caution, I had the spindle speed extremely slow (like I was forming rather
  than _cutting_). It was simply much too slow!

- I also was fumbling a bit, handholding my phone to record the action. Much of
  the jerkiness is because of these first two points. Still, I'm taking a reasonably
  aggressive cut.

- It's not obvious, but I could have continued swinging the handle left as far
  as I want to go (until the ball drops off the end). There is no need to cut
  the "neck" first, you can plunge the cutter right into the work.

- This was an early attempt at Jim's design, and on my little 10" lathe, I
  couldn't cut any ball diameters larger than about 3/4". I've since milled down
  the outboard portion of the platform, letting me cut balls all the way up to
  a little more than 1" diameter with ease.

- This is _not_ an adjustable tool, it only cuts fixed radii. But it's quite
  easy to make additional pucks with the cutter positioned for whatever radius
  you desire (up to the distance between the top of the puck and the top of the
  cutter).
- Not shown (yet) is that the tool can also cut _concave_ radii into the side of
  the stock. It's not possible (without modification) to cut bowls into the
  _end_ of a part, but that's a less common need anyway.

- In addition to cutting balls, you can also create quite accurate inside and
  outside fillets on cylindrical features.

## 3D model and drawings

I've made both a [3D model](https://a360.co/3qgbLsa) available for viewing and
download as well as a <a href={Drawings}>set of dimensioned drawings for my
lathe</a>.

The dimensions are for my lathe specifically, but I made the model fully
parametric if you use Fusion360 for modeling.

## About the cutter

The cutter can be any cylindrical piece of high speed steel or carbide. Old,
broken, or worn out end mills, center drills, or whatever are perfect. The
diameter of the cutter isn't terribly important, but it probably makes sense to
keep it between 1/8" diameter and 5/16" diameter. Too small, and you risk it
snapping due to accidents. Too large, and you limit the maximum sized ball you
can turn.

You can also by pre-hardened HSS blanks, drill rod, or whatever, and just cut it
into the lengths you need.

The easiest way to cut hardened stuff is by scoring the OD with a cut-off wheel
in a Dremel tool or angle grinder, holding it vertically in a vise near the
score, covering the top with a rag to hold the part, then whacking it with a
hammer. It will snap right at the weakest point.

To grind the cutting edge, you just need to hold it perpendicularly to a grinder
(belt sander, bench grinder, slow-speed grinder, whatever). You must continue
grinding until you have a perfectly flat face and smooth circular edge all the
way around (with no trace of the earlier scoring).

I used my Quorn T&C grinder to grind the face, but I'm sure it's fine to just
point it at the center of even a 6" bench grinder wheel and grind away on the
periphery of the wheel. The slight hollow produced actually provides a bit of
top rake! Just be sure to position the high part of the grind away from the
center of the puck when you adjust the cutter height.

The cutter is must be exactly at center height to cut a precise radius. For a
convex ball, you drill and ream a hole about 0.001" larger in diameter than the
cutter into the top of the puck. If the desired cutting radius is _R_ and the
cutter radius is _c_, you position the hole _R_+_c_ away from the center of the
puck for a convex radius (that cuts on the _inside_ of the cutter, with the
pivot point under the work) or _R+-\_c_ for concave radii with the pivot point
between the operator and the work.

If the cutter is slightly below center it's no big deal (the diameter of the
sphere will just be a little off). but if it's above center even a tiny bit, the
tool will just rub and won't cut.

There are many ways to position on center, but probably the easiest is to just put
either a split-point single-lip cutter in a collet in the spindle, or just put a
sharp center in the spindle.

You then adjust the cutter up and down until it touches the flat oriented
horizontal in the spindle, or until it just meets the sharp point of the center
(you can just cut a taper with a sharp point into a piece of scrap held in the
chuck if you don't have collets or a center). Then tighten down the set screw in
the side.

If you _really_ want to be precise, you can put a gauge pin in a collet and
use a height gauge to mark center height. Position the height at the top of the
pin. Say it's a 1/2" gauge pin. Now lower the arm by exactly 0.250 and you've
got a reference for center height. Adjust the cutter until it just touches the
arm of the height gauge (you can also use a depth micrometer registering on top
of the gauge pin).

## Set screws

You really want _flat_ set screws, not the common ones with a cup point. Cup
points will mar up the bottom of your compound. They are unlikely to damage the
much harder cutters, but it's still a good idea to face off the cup points if
that's all you have on hand.

The diameter an thread pitch of the set screws really aren't all that important,
but in general, fine thread pitches will let you lock things more securely. It's
a good idea to use UNF pitches (10-32, 1/4-28, etc.) for holding tasks.

You can, of course, use simple cap screws instead of set screws as long as they
don't interfered with anything (like the swinging handle).

## Cutting a ball on the end of a rod

The thing couldn't be simpler to use.

I prefer holding the work with collets rather than in a chuck for two reasons:

1. No fear of getting my knuckles close to the spinning jaws of death as I pivot
   the handle to the left.

2. Collets let you hold the work much closer to the end of the spindle,
   increasing rigidity.

You don't even need to face the stock before beginning.

Just put a rod into a collet, swing the handle to position the cutter toward the
tailstock, feed in the cross-slide until the center of the
puck is roughly under the bar, then move the carriage until the cutter just
bumps the end of the stock.

<Figure src={Positioning} caption="Positioning the carriage axially" />

Now retract the cross-slide, move the carriage a smidge more to the left (enough
to clean up the end of the stock), and then start swinging the handle left and
right as you slowly start feeding in the cross-slide.

Note that you can plunge right into the side of the stock to form the "neck"
behind the ball. You don't need to pre-cut the "neck" as shown in the photo.

Note that because the tool has such a wide "nose" radius and the depth of cut is
controlled by feel, it's pretty great at "blending" into another feature that
you might have cut with other tools (or just creating generous fillets at an
inside shoulder). Just remember that you can't face! Always feed into the OD of
the stock or traverse the carriage along it, never feed into a face.

## Comments and questions

My blog very consciously doesn't support comments or questions, but if you'd
like to discuss this further, please see [this thread on the Hobby Machinist
forum](https://www.hobby-machinist.com/threads/jims-truly-simple-ball-turning-tool.107341/).

I expect I'll be updating this post in the future as I make more pucks and
experiment with different use cases.
