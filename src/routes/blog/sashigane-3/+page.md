---
title: 'Sashigane (3)'
date: 2022-12-09
description: 'Physical design of the sashigane'
image:
  url: './sashigane-holding.png'
  alt: 'Hand holding a sashigane'
tags: ['wood', 'daiku']
---

<script>
   import Kanji from "$lib/components/Kanji.svelte";
   import Figure from "$lib/components/Figure.svelte";

   import sashiHold from "./sashigane-holding.png";
   import sashiCross from "./sashigane-cross-section.jpeg";
</script>

This is part three in a series of posts:

- [Sashigane 1: Introduction](/posts/sashigane-1)
- [Sashigane 2: Traditional Units](/posts/sashigane-2)
- Sashigane 3: Physical design (this post)
- [Sashigane 4: _Hyoume_ and _Urame_](/posts/sashigane-4)
- [Sashigane 5: _Kou,_ _ko,_ _gen_](/posts/sashigane-5)
- [Sashigane 6: Simple usage](/posts/sashigane-6)
- [Sashigane 7: Right triangle magic](/posts/sashigane-7)

## Physical design

A sashigane is constructed as a single piece of forged metal, but measurements
are made with five different parts:

1. The long arm or _nagate_ (<Kanji client:load furigana="ながて"
   romaji="nagate">長手</Kanji>). The _nagate_ is typically around １尺５寸
   (454.5mm or about 1 1/2 feet long).

2. The short arm or _tsumate_ (<Kanji client:load furigana="つまて"
   romaji="tsumate">妻手</Kanji>, which means "wife's hand"). The _tsumate_ is typically
   ７寸 long (212.1mm or a little more than 8").

3. The _kanete_ (<Kanji client:load furigana="かねて" romaji="kanete">矩手</Kanji>),
   the actual right-angle in the corner to check for square.

4. The _men_ or faces (<Kanji client:load furigana="めん" romaji="men">面</Kanji>)
   with the ruled graduations. Note that the top and bottom faces are marked
   differently (and sometimes the inside and outside edges are also marked with
   different units).

5. The _sawa_ or width of an arm (<Kanji client:load furigana="さわ"
   romaji="sawa">沢</Kanji>). The width of an arm is also used for
   measuring and spacing. Each arm is exactly 5 分 wide. The kanji character
   means "valley" or "mountain stream" and refers to the hollow on each side
   (see diagram below).

The _sashigane_ has several design characteristics that aren't immediately
obvious.

First is that it's _intentionally flexible_. It's normally held with the long
arm held in the left hand, far from the short arm:

<Figure src={sashiHold} caption="Holding the sashigane" />

Bending the long arm this way makes it easy to register along the edge of a
board you are marking. Note that you want to grab the end of the long arm to
give as much registration surface as possible for accuracy (and to make the
bending easy).

Each arm is exactly ５分 or very nearly 15mm wide (a little more than 1/2"). The
cross section is intentionally designed to raise the edges above the surface
of the material being measured. This gap above the surface prevents the ink from
smearing when striking a line:

<Figure src={sashiCross} caption="Sashigane cross-section" />

Even the little hollow (marked 「えぐり」 in the diagram) is cleverly
designed: in addition to providing a comfortable spot for your thumb and fingers
to grasp the tool, you can feel when the two edges along the sides of the
arc register flat on the surface (line contact provides better tactile feedback than area
contact would).