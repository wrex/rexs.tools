---
title: 'Collet drawbar'
date: 2023-01-08
description: 'Making a "ghetto" drawbar. Part 2 of a series.'
image:
  url: '/images/ghetto-drawbar.jpg'
  alt: 'Ghetto drawbar'
tags:
  - 'metal'
  - 'machining'
---

<script>
  import Figure from "$lib/components/Figure.svelte";

  import JimsCam from "../collet-closer/collet-closer-alt.jpeg";
  import DrawbarInside from "./IMG_0771.jpg";
  import DrawbarOutside from "./IMG_0770.jpg";
  import WithMT3 from "./IMG_0768.jpg";
  import WithID from "./IMG_0767.jpg";
</script>

This is the 2nd in a series on collets and collet closers:

- [An idea for a lever-actuated closer](/blog/collet-closer)
- A "ghetto" drawbar (this post)

I love collets when working with the lathe. They allow very accurate, repeatable
work.

Unlike scroll chucks, you don't need to worry overmuch about removing
and re-inserting a part (with a scroll chuck, it's very difficult to get a part
to run true again once it's removed). They also allow you to hold the part as
close to the spindle as possible, which makes things more rigid and provides better
accuracy.

Anyway, I've been wanting a lever-actuated closer for my lathe for quite a
while.

## Jim's Cam-actuated lever idea

As I wrote in the last post, my friend Jim's idea was about as simple as it
gets:

<Figure src={JimsCam} caption="Cam-actuated idea" />

The whole assembly is just a cam-actuated lever that spins with the spindle.

After playing with it a bit, though, I've decided to go back to a simple
drawbar.

A real lever-actuated collet closer allows for extremely short cycle times for
production runs of parts. You can actually remove one part and insert another
while the spindle is still rotating. This is because the lever doesn't rotate,
it just latches a bearing arrangement of some sort that pulls the collet in,
with a spring that releases the collet.

Jims idea was just a cam actuator that turns with the spindle. This works, but
isn't as nice for three reasons:

- The rotating lever mechanism is a little frightening because of all the hard
  edges that might catch on something. I also worry that the arm might open up
  from vibration during use. This can probably be addressed with a latch
  mechanism of some sort (probably the easiest thing is just a piece of PVC pipe
  to cover the latch in use) but I'm not sure it's worth the effort to come up
  with something.

- Because the cam-lever rotate with the part, you must wait until the spindle
  stops before you can actuate the lever.

- Because there is no spring, you must bang on the outside end to release the
  collet. This is particularly annoying with MT3 collets because they are
  really made for tool-holding, not work-holding. They have a much slighter
  taper, which means you really need to bang on them to get them to release.
  Work-holding collets release _much_ more easily.

The latter two issues eliminate the main benefits of a lever-actuated collet
closer, so I decided to go back to a simple drawbar.

## An even simpler drawbar

Jim had another brilliant idea, though: using a cheap lawnmower wheel and a
piece of 3/8-16 all-thread as a drawbar. It ain't beautiful, but it works.

I bought a lawn mower wheel from Harbor Freight for $5. Since the hub was just
plastic, I made a bushing out of 1" diameter 12L14 for each side:

<Figure src={DrawbarOutside} caption="Outside view of drawbar wheel" />

<Figure src={DrawbarInside} caption="Inside view of drawbar wheel" />

As you can see, the inside bushing is the more complicated part:

- It's bored on one end to fit over the inside hub of the wheel, and I milled 6
  slots around the periphery to engage with the ribs on the wheel. This was
  quick work once I found my hex 5C collet block!

- It has a tapped hole in the side for a grub screw. I milled a corresponding
  flat on the 3/8-16 all thread for it to engage with (to prevent rotation but
  still allow the thing to be disassembled).

- The other end has a reduced diameter to register inside the spindle (to
  ensure the all-thread remain centered and everything spins concentrically).

The bushing that goes on the outside of the wheel just has a 3/8" hole through
the center, and a reduced OD to fit into the hole in the wheel.

Unfortunately, I made the inside bushing a little too short. The wheel rubbed
against the door covering the change gears when I tightened up the collets.

If you look closely, you can see I had to machine an additional adapter to
lengthen the inside bushing a bit. We'll call this a prototype! (Of course, this
"prototype" will probably remain in use until either the lathe or I stop working).

## Initial results

I tried it with both #3 Morse taper collets, and ID collets.

### MT3 Collets

I first tried using it with a MT3 collet:

<Figure src={WithMT3} caption="Drawbar with a #3 Morse-taper collet" />

(I just grabbed whatever was handy to hold onto, a "wiggler" edge finder for the
mill, held in a 3/8" collet. As you can see, the collet only protrudes from the
spindle about 1/4". Can't get much better than that!)

Unsurprisingly, this worked perfectly. The collet has a 3/8-16 hole for the
drawbar that the all-thread engaged with just fine. The 6" wheel was about the
perfect size, and the tread provided a nice grip in use!

As mentioned above, the only real issue was releasing the collet. Because MT3 is
for tool-holding, it won't release without significant persuasion (about the
same amount as with R8 collets on the mill). After unscrewing the drawbar a bit,
I had to bang on it pretty good with my larger lead-hammer (my little one didn't
provide enough oomph).

I have to hit it hard enough that I worry about buggering up the threads at the
nd of the drawbar. For now, I'll just use a length of stock or black-pipe to
hammer out the collet, but I've got the glimmer of an idea for using 1/2" black
pipe as a jack-screw.

The only other issue is that because the collets aren't hollow, I can't run
longer stock through the spindle. I think my 3C setup is the only way to handle
longer stock (up to 1/2" diameter).

### ID collets

I also tried it with ID (expanding) collets.

<Figure src={WithID} caption="Drawbar with a expanding ID collet" />

I plan to write another post discussing ID collets at length, but for now please
refer to an old post that I wrote [on the Hobby Machinist
site](https://www.hobby-machinist.com/threads/grabbing-on-the-inside.87729/). Be
sure to see Jim's comment and photo about using a threaded nose-piece instead of
the MT3 adapter that I used.

I made the base I'm currently using from a machinable MT3 tooling blank (I think
I bought mine
[here](https://littlemachineshop.com/products/product_view.php?ProductID=2393)).
To activate the expansion, I just use a hex-key to screw a SHCS into a tapped
hole in the base.

Because that base has the same 3/8-16 hole and used a MT3 taper, exactly the
same length drawbar works with both sets of collets.

Currently, the drawbar draws the MT3 base into the spindle.

It would be better if the drawbar actuated the SHCS itself (then I could use it
for blind holes). This would be easiest with a spindle nose adapter instead of
the MT3 base as Jim suggested (then I can just screw it onto the nose instead of
drawing something into the tapered portion of the spindle).

More soon!
