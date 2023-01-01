---
title: 'Repairing a cupholder'
date: 2022-12-09
description: 'Replacing a car cupholder part.'
---

<script>
  import Image from "$lib/components/Image.svelte";
  import Assembly from "./cupholder-assembly.jpeg";
</script>

My wife came to me a few days ago asking if I could repair the cupholder in her
car.

The cupholder is a two piece assembly. The top piece is spring loaded and hinges
on two little nubs on the sides. Here's a view of the assembly with the original
parts:

<figure>
  <Image
    src={Assembly}
    alt="Cupholder assembly"
  />
  <figcaption>Original cupholder assembly (precariously perched)</figcaption>
</figure>

The nub on one end was broken. Here's a view of
the original injection-molded part:

<!-- <figure>
  <img
    widths={[400, 800, 1200]}
    src="broken"
    alt="Original cupholder"
  />
  <figcaption>Original cupholder part (broken nub on left)</figcaption>
</figure>

<figure>
  <img
    widths={[400, 800, 1200]}
    src="broken"
    alt="View of broken end"
  />
  <figcaption>View of broken end</figcaption>
</figure> -->

A normal person would have just drilled a hole in the end and inserted a little
pin to act as a hinge.

Instead, I designed [a whole new part in fusion 360](https://a360.co/3VNdqAe).
That link should take you to a viewer for the 3D model, but here's a static
image:

<!-- <figure>
  <img src="/assets/cupholder.png" alt="cupholder model" />
  <figcaption>3D model of replacement part</figcaption>
</figure> -->

Notes:

- The nubs create "overhangs" where the 3D printer would need to print over
  empty air (causing droops and ugliness). To work around the problem I added
  some integral supports. After printing, I just broke off those supports with
  my fingers and cleaned it up a bit with a file.

- The spring is held in place between two little nubs between the center ribs.
  Rather than dealing with supports, I just printed a complete cylinder that
  goes all the way from one rib to the other. After printing, I just took a pair
  of nippers and cut out most of the center portion so I could put the spring in
  place.

Here's a short video of the final results:

<div class="yt-container">
  <iframe
    class="yt-embedded"
    src="https://www.youtube.com/embed/rH7g6PRv0-0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
