<script>
  import Kanji from "$lib/components/Kanji.svelte";
  import {siteDescription, siteImage} from '$lib/config';
</script>

<svelte:head>
	<title>About</title>
  <meta data-key="description" name="description" content={siteDescription}>
  <meta property="og:image" content={siteImage}>
</svelte:head>


<section class="flow">
  <h1>About</h1>

  <p>Hello! My name is Rex. I like making things ... and writing about what I make.</p>

  <p>
    When people ask me <em>what</em> I like to make, I usually answer "sawdust"
    or "chips" depending on what tool I'm using at the time. Other valid answers
    include:
  </p>

  <ul>
    <li>Tools</li>
    <li>Machines</li>
    <li>Parts for tools or machines</li>
    <li>
      Jigs and fixtures to <em>hold</em> tools and parts for tools ...
    </li>
  </ul>
  <p>It's a very <em>meta</em> hobby.</p>

  <h2>Background</h2>
  <p>
    I started with woodworking shortly after getting married. My wife is
    Japanese and we lived in the Osaka area for a while, so I grew interested
    in Japanese wordworking tools <Kanji
      furigana="だいくどうぐ"
      romaji="daikudougu"
      >(大工道具)
    </Kanji>. Embarassingly, it took me a few decades to actually learn how to <em
      >use</em
    > the the Japanese tools I'd acquired.
  </p>
  <p>
    At some point I also started to dabble in instrument making (though I've
    only actually <em>finished</em> a couple of ukuleles, I'm still hopeful that
    I'll eventually finish a matched pair of Weissborn lap guitars before I die.)
  </p>
  <p>
    At some point, I started making a few tools to assist with making
    instruments. This led to my interest in metalworking: machine tools,
    metrology, and machine rebuilding in particular (I've participated in a few
    of the classes that Richard King holds periodically).
  </p>
  <p>
    This in turn introduced me to a bunch of like-minded metalworking hobbyists in the
    Sacramento Valley Hobby Machinists group. Those reprobates led me further
    down the rabbit hole.
  </p>
  <p>
    In addition to a bunch of woodworking machines (tablesaw, bandsaw, 6"
    jointer, and tabletop thickness planer) I've somehow managed to acquire
    a 1947 Montgomery Wards (Logan) Lathe, an offshore benchtop vertical mill,
    and a sixties era Gorton P1-2 pantograph engraver. That last has become my
    favorite machine of all.
  </p>
  <p>
    More recently, a friend finally taught me how to tune up my Japanese
    handplanes (<Kanji furigana="かんな" romaji="kanna">鉋</Kanji
    >). This rekindled my interest in Japanese woodworking tools and
    especially measurement/layout techniques (called <Kanji
      furigana="きくじゅつ"
      romaji="kikujutsu">規矩術</Kanji
    > or the art of measurement).
  </p>
  <h2>About the site</h2>
  <p>
    This site was built using <a href="https://svelte.dev">svelte</a> and <a
    href="https://kit.svelte.dev">SvelteKit</a>. I created it originally with 
    <a href="https://astro.build">Astro</a> but decided to rewrite it entirely
    in SvelteKit once 1.0 was released.
  </p>
  <p>
    I stole some ideas from a template by
    <a href="https://www.twitter.com/Charca">Maxi Ferreira</a> and the <a
    href="https://picocss.com">Pico CSS Framework</a>, though I've recently
    switched entirely to <a href="https://open-props.style" >Open Props</a >.
    I'm likely to convert the site to <a href="https://kit.svelte.dev"
    >SvelteKit</a > at some point since version 1.0 was recently released
    (nothing wrong with Astro, I just like tinkering).
  </p>
  <p>
    The source code for this site is available in <a
    href="https://github.com/wrex/rexs.tools">this github repository</a> for
    anyone that might like to poke around. I wrote a bit about the site in my <a
    href="/blog/inaugural">inagural blog post</a>.
  </p>
  
  <h2>Contact info</h2>
  <p> I'm not much
    for social media, but I can be reached at <a
    href="mailto:rw@pobox.com">rw@pobox.com</a >.
  </p>
</section>