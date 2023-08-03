---
title: 'Ball Turner Build: 2'
date: '2023-08-02'
description: 'Making the swivel pucks'
image:
  url: '/images/turner-and-pucks.avif'
  alt: 'Assembled ball turner and extra pucks'
tags:
  - 'metal'
  - 'machining'
---

<script>
  import Figure from "$lib/components/Figure.svelte";

  import TurningBoss from "./turning-boss.jpeg";
  import CarriageStop from "./carriage-stop.jpeg";
  import PinForLength from "./pin-for-length.jpeg";
  import FacingBoss from "./facing-boss.jpeg";
</script>

This is a companion article to [the original post](/blog/ball-turner) detailing
the construction process.

1. [Introducing Jim's ball turner](/blog/ball-turner)
2. The build, part 1: [making the tee slot base](/blog/ball-turner-build-1).
3. The build, part 2: making the swivel puck assembly [this post]
4. The build, part 3: [making the cutters](/blog/ball-turner-build-3)

## 3D model and CAD drawings

As I wrote previously, I've made a [3D model](https://a360.co/458gdYQ) available for viewing and
download as well as a [set of dimensioned drawings for my lathe](/files/ball-turner-final-dwg-v16.pdf).

For anyone using modeling software other than Fusion360, here are [the step files](/files/ball-turner-final-v16.step) for the design.

The dimensions are for my lathe specifically, but the model is fully
parametric (if you use Fusion360). You can just enter the dimensions
for your lathe, etc., and the model should update automatically
(Modify -> Change Parameters). Just let me know if I've screwed
something up.

My blog very intentionally doesn't support comments or questions, but if you'd
like to discuss this further, please see [this thread on the Hobby Machinist
forum](https://www.hobby-machinist.com/threads/jims-truly-simple-ball-turning-tool.107341/).

## Making puck blanks

I originally thought I'd make two holes in the top of the puck: one for cutting
convex radii (balls) and another for concavities of the same radius. Because the
cutter has a non-zero width, keeping the radius the same requires repositioning
the cutter.

After playing with a prototype, though, I've decided to stick with just one hole
and one cutter (at a fixed radius) per puck. There are several reasons for this:

1. Simpler is almost always better.

2. For cutting balls, the cutter needs to be _behind_ the axis of rotation. You
   can't have a cutter in the other hole or it will interfere with the work. An
   empty hole is just a place for swarf to collect. Further, adjusting a cutter
   to center height isn't all _that_ difficult, but it's mighty convenient if each puck
   already has a dedicated cutter pre-positioned on center.

3. Since there is a hole for the handle on both sides, you can still cut
   concavities just by relocating the handle. The concave radius will be larger
   than the convex one (by the diameter of the cutter) but if you have multiple
   pucks, this may not be that big a concern (and you can always make another
   puck or drill another hole if it is).

If, like me, you aren't entirely sure what radii you might need, I recommend
making pucks for at least a couple nominal sizes (3/4" and 1/2" balls, say) and
also make a blank or two without a hole for the cutter.

Start by turning the puck blanks. Specifically, start by turning the boss on the
bottom (you want to turn it to be slightly longer than the thickness of the
"platform" on the base --- more on this later).

In general, I prefer using collets whenever possible. Unfortunately, my lathe
has a pretty small spindle, so I can't use collets for larger diameter stock. So
I chucked up a piece of stock as large as the puck diameter in a three-jaw
chuck, then turned down the boss at the end.

<Figure src="{TurningBoss}" caption="Turning the boss on the puck" />

(If anyone wonders why I like turning "leadloy" aka 12L14 so much, just look at
those chips!)

Note the "steps" in the face from turning to a stop after feeding ~0.100" each
time. These are due to the side relief on the cutter, so that the nose contacts
the work first. Once the boss is at final diameter, I make a final facing cut a
few thou deeper to remove all the steps and leave a perfectly smooth face.

(Apologies if all the minutia seems overwhelming, but these are all things I've
picked up over time and seem worth sharing.)

Whenever I have to turn a feature with a fixed length like this, I like turning
to a stop. Many years ago, I made a stop [using this
design](https://tomstechniques.com/micrometer-carriage-stop/):

<Figure src="{CarriageStop}" caption="My micrometer carriage stop" />

When I want to make the feature to a pre-determined length, I first face
the end of the stock and lock the carriage without moving it left or right.

Then I insert a gauge pin of the
desired depth between the stop and the carriage (or a gauge pin in combination
with a 123 block for longer dimensions):

<Figure src="{PinForLength}" caption="Using a pin to set the stop" />

In this case, I only needed to grab the correct pin (0.304" diameter) from the
box. No measuring, no indicating, no fuss.

After turning the boss to the correct diameter, I retract the micrometer stop
by a few thou (a few divisions), move the carriage to the left that much,
than face to remove the steps.

## Completing the boss

Before removing anything from a chuck, it's a very good idea to think about
any other work you can do in the same setup. Once you remove a part from a
chuck, you'll never get it back exactly the same way again without carefully
indicating in the face and side in a four-jaw chuck.

In this case, we obviously still need to drill and tap the hole for the
retaining screw and washer.

Once that work's complete, we can also face the length of the boss for a _very_ precise feel
when the retaining washer is clamped down. Ideally, we want the length of the
boss to be only a few tenths longer than the thickness of the platform on the
base. This will prevent the puck from wiggling at all, while still allowing it
to rotate freely.

To accomplish this, first hang the base off of the boss, registering on the just
faced shoulder. Then bring the nose of the cutter _lightly_ in contact with the
bottom of the base (the boss should be slightly proud). Leave the power **OFF**,
for this step, of course!

<Figure src="{FacingBoss}" caption="Facing the boss to perfect length" />

Now, **before turning on the lathe**, retract the cross-slide and remove the base. Then face the boss to
length without moving the carriage.

Turn off the lathe again, and try the fit, actually inserting the retaining
screw and washer and tightening it fully to gauge the fit. There should be
**no** detectable wobble at all as you lightly push, pull, and twist the base,
but it should still spin freely.

If there is still a bit of wobble, remove the base and face off the tiniest bit
of metal again, no more than 0.0005" at a time. Repeat until the fit feels
perfect.

It's best if you get it spot on, of course, but it's not the end of the world if
you go too far (it just means you can't tighten the screw fully).

## Turning and facing the remainder of the puck blank

Now you can finally remove the puck from the chuck.

Turn it around and hold the boss in a collet, then face the top side of the
puck (continue until it's the desired thickness).

Finally, turn the outside of the puck to ensure it's concentric with the boss.

## Remaining mill work for the puck

TO DO
