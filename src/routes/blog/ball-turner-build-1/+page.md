---
title: 'Ball Turner Build: 1'
date: '2023-08-01'
description: 'Intro and milling the tee slot base'
image:
  url: '/images/turner-in-action.avif'
  alt: '3D model of ball turner'
tags:
  - 'metal'
  - 'machining'
---

<script>
  import Figure from "$lib/components/Figure.svelte";

  import TeeBase from "./milling-base.jpeg";
  import TurningBoss from "./turning-boss.jpeg";
  import CarriageStop from "./carriage-stop.jpeg";
  import PinForLength from "./pin-for-length.jpeg";
  import FacingBoss from "./facing-boss.jpeg";
  import LengthWidth from "./length-width.png";
  import Holes from "./hole-locations.png";
  import Completed from "./completed-parts.jpeg";
</script>

This is a companion article to [the original post](/blog/ball-turner) detailing
the construction process.

As I wrote previously, I've made a [3D model](https://a360.co/458gdYQ) available for viewing and
download as well as a [set of dimensioned drawings for my lathe](/files/ball-turner-final-dwg-v13.pdf).

For anyone using modeling software other than Fusion360, here are [the step files](/files/ball-turner-final-v10.step) for the design.

The dimensions are for my lathe specifically, but the model is fully
parametric (if you use Fusion360). You can just enter the dimensions
for your lathe, etc., and the model should update automatically
(Modify -> Change Parameters). Just let me know if I've screwed
something up.

My blog very intentionally doesn't support comments or questions, but if you'd
like to discuss this further, please see [this thread on the Hobby Machinist
forum](https://www.hobby-machinist.com/threads/jims-truly-simple-ball-turning-tool.107341/).

## Introduction

What follows is a long, absurdly detailed description of how I went about
making the parts. There are lots of ways to do things, but these were what
worked best (and came to mind first) for me.

Note that this is a very simple and incredibly tolerant design. There is
absolutely no need to try to hit every dimension to 0.0001". It's absolutely
possible to make this with nothing much more than a lathe (but I have a lot of
tools, so I use them).

I describe things at this level of detail to help beginners. I'm not much more
than a beginner myself, but I've picked up things over the years that I wish I'd
understood better when I was starting.

This is an outstanding beginner project: it's easy and forgiving, but
demonstrates many aspects of machining. Best of all, you end up with a useful tool.

## The base

Start by milling the tee slot base. This is a pretty straightforward part to
make: just milling, drilling, reaming, and tapping. None of the dimensions are
critical except for the diameter of the reamed hole in the end for the puck.

The dimensions in the drawings are for _my_ lathe, though --- it's quite likely that
your lathe will differ.

<Figure src="{TeeBase}" caption="Tee slot base" />

## Tools I used

- Horizontal bandsaw (a hacksaw works fine but is harder work!)
- Vertical mill with DRO (dials and indicators also work)
- 3/4" roughing end mill (any end mill will work)
- Mill vise
- Parallels to raise up the work
- Jacobs chuck
- Edge finder
- Dial indicator and mag base (to tram and orient the vise)
- Pin gauges (for checking bore dimensions)
- 142 deg "spotting" drill (the _tip_ of a center drill also works)
- #3 drill (tap size for 1/4-28 @80% thread engagement). A 7/32" or 5.5mm
  drill also works.
- 1/4-28 taper tap
- Letter U drill or 23/64 drill (pre-drill for the reamed hole)
- 0.3760" chucking reamer
- Single flute chamfering tool
- Scotchbrite wheel on a 6" buffer to deburr all edges (a file works, too)

You don't _need_ all of these tools to make such a simple part, but these are
what I used.

## Process

Ensure the mill head is trammed and the fixed jaw of the vise is indicated
parallel to the X axis.

First, I cut a length of 1/2" thick cold rolled steel to rough size (slightly
oversize in length and width) on the bandsaw.

### Milling the bar to width and length

I then stood the part up on edge in the vise and milled the top side until it
was flat, then flipped the part over and milled the other side until the part was
exactly 1.415" wide.

Note that I didn't bother milling the wide faces, because
those faces don't bear against anything, there is no point in machining them.

Next, I put the part on parallels in the vise as shown in the photo (tapping it
down with a hammer until the parallels don't move ensures it's fully seated).
This left enough of the part exposed to mill both ends and the ledge feature
all the way around.

First I moved the cutter to the right edge,
lowered the cutter, and cut along the entire right edge enough to clean up the
entire face (moving the table right each pass until the face is fully cleaned
up).

Don't touch the cranks at this point and zero the X axis on the DRO. Now move
the table left by half the diameter of the cutter (0.375" in my case). Re-zero
the X axis on the DRO (the spindle is now directly over the right edge).

Making your zero reference where the spindle is exactly over either end of the
bar will keep you sane in the long run.

Since I want the part to be exactly 4.635" long, I now move the table to the
right until the DRO reads -4.6350 on the X axis (with the center of the spindle
over the left end of the part). I now switch the DRO to "incremental" mode and
re-zero X (this leave the absolute mode "0" point over the other end of the
bar).

Move the table right half the cutter diameter again (.375) and re-zero yet again. Now the right edge of the
cutter is exactly over where the bar should end and the DRO (incremental mode)
reads "X=0".

Move the cutter further left until it's off the bar. Now mill away material on
the the rough cut left end of the bar by moving the table left until the cutter
touches and then moving it in Y to make a pass. Normal milling rules apply:
since the cutter is rotating clockwise and the cutter is on the left edge of the
part, feeding in is conventional cutting (best for heavy cuts) and retracting is follow cutting (good
for finishing passes).

Looking from above, the part now looks like a perfect 1.415" x 4.635" rectangle:

<Figure src={LengthWidth} caption="Top view of part after this step (dark areas to be removed)" />

Deburr all the edges and test the fit in your compound, making adjustments if necessary

Note that unlike a normal toolpost, the screws don't compress the "ledge" of the
compound. This base is _not_ a tee nut. The screws force the top of the base
into the ledge of the compound.

In theory, this means that if you really gorilla the screws, you could damage
the ledge on your compound. **Don't do that**. There is absolutely no need to
really gronk down on this base in the compound. All the cutting forces are
purely tangential, toward the floor.

If this aspect of the design bothers you, you can make the base a nut and make
another clamp part with through holes for bolts that goes on top (just ensure
that the height of the base is _less_ than the height of the slot and that the
swivel handle clears the clamping parts).

The tee slot on your compound is intended to
handle fairly significant forces (say from an extended boring bar) though --
personally, I feel this is a theoretical rather than a practical concern.

### Locating the middle

I then found the middle of the bar with the edge finder:

Move the edge finder to
the front and retract the table until it jumps.

Go back to absolute mode and zero the Y axis on the DRO.

Reposition the edge finder to the back, then feed in the table until it jumps
again. Use the 1/2 function on the DRO (or just feed in in Y until it reads half
the displayed value).

You should end up with the spindle exactly centered over the bar when the DRO
reads Y=0.0000 in absolute mode (and X=0.0000 is still the right edge of the
part).

### Milling the ledges and platform

I milled the front ledge first. I fed in in Y until the DRO read 0.7500 (the
diameter of my cutter). Now the edge of the cutter is over the center.

Back to incremental mode, and zero Y.

Now feed in until the DRO reads Y=0.4745. Lock the table and mill away the front
edge to a depth of 0.194".

Now unlock the table and retract until the DRO reads Y=-0.4745. Lock the table
again and mill away the back edge.

Finally, mill away the "platform" on the left.

Go back to absolute mode momentarily. X=0 has the cutter directly over the right
edge. We want the right edge of the cutter 3.0000" to the left of that zero
reference, so move the table right until it reads -3.3750" (3" plus half the
cutter diameter). Back to incremental, and zero X. Now mill away the raised
section the left of that point.

### Drilling and tapping the holes

All holes are through holes. Replace the roughing end mill with a Jacobs chuck
to hold drills and taps.

Locating the holes is easy with a DRO. The process is exactly the same as
before.

<Figure src={Holes} caption="Hole locations in the base" />

First, I drilled and tapped the four 1/4-28 holes.

Back to absolute mode. Position the table to the left front hole: X=2.250
Y=0.237. Use the spotting drill to create a little divot exactly on location.
The divot ensures the longer and flimsier twist drill will drill the hole in the
right location (without a spot, it can, and will, skate away slightly and drill out of
position and off angle).

You want the angle of the spot to be at least as wide or wider than the tip of
your drill (most are 135°). This ensures the tip of the drill skates down to the
bottom of the spot. If you use a center drill, ensure you just barely peck the
angled tip into the work --- you've drilled too far if you get to the
cylindrical portion.

It's fastest if you minimize the number of tool changes, so spot all four
locations: next X=2.250/Y=-0.237, then X=0.750/Y=-0.237, then finally
X=0.750/Y=0.237.

Now change to the #3 drill and drill all the way through at all four locations.
You can avoid long stringy chips by "pecking" or pulsing the pressure on the
quill handle. You don't actually need to lift the drill, just remove the
downward pressure periodically to break the chip.

Next, use the chamfering tool to create small chamfer around the top of all four
holes. This looks nicer and removes any burr pulled up by the drill bit.

Lastly, power tap 1/4-28 at all four locations. I only tap under power when it's a through
hole bigger than, say, #6 screw size (blind holes are just too dangerous).

I put the tap in the Jacobs chuck, apply some tapping fluid, set the spindle to
a slow speed, position my left forefinger over the STOP button, the lower the
quill until the tap engages the hole and starts to pull itself in. I hit STOP
well before it reaches the end of the tap (it will coast for a bit after you hit
it). Finally, I'll hit the reverse power button to back out of the hole.

One subtlety with backing out: you want to apply slight downward pressure on the
quill with your right hand as it's backing out. Otherwise, it tends to pull up
the top thread when it snaps out of the hole, and screws can be hard to start.

The large hole on the left is similar, but it references from the left edge of
the part.

In absolute mode, move to X=-4.635 (the left edge), Y=0. Got to incremental
mode, zero X, then move the table left 0.813". That's a lot easier and less
error prone than adding 0.813 to -4.635!

Spot and drill again at this location. Use a drill just a few thou smaller than
the reamer size. Since I used a 0.376" reamer, I drilled with a letter U drill
(0.368" diameter).

**Be sure to create a generous chamfer at the top of the hole for the puck.**
Otherwise the puck won't seat well because of the fillet at the base of the
boss from the lathe tool nose radius.

Finally, ream the hole with the reamer. Use plenty of cutting fluid and slow
down the spindle speed to about 1/3 of the normal cutting speed for a drill.

It's best to _ream_ the hole for the puck 0.0005" to 0.001" larger than the turned
diameter of the boss on your pucks. If you don't have a set of under/over
reamers for nominal dimensions, be sure to turn the diameter of your puck bosses
about 0.001" _less_ than the size of whatever reamer you have available.

Honestly, a good sharp 3/8" drill probably suffices without reaming. Typically, drills cut
slightly oversized and not entirely round holes, but you can adjust the size of
the boss on the puck until it just fits without any slop.

### Conclusion

At this point, all the features are complete. You can remove the part from the
vise, deburr all the edges (all corners and especially the holes on the bottom where the drill
broke through).

You should end up with a tee base that slides easily in _your_ compound and
looks something very similar to the top part here:

<Figure src={Completed} caption="Completed parts" />

---

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
