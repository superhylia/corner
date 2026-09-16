---
title: '/test'
description: 'A page I use to test stuff (importantly, in a place I know I can find easily).'
permalink: /test/index.html
layout: page
gallery:
  - image: ./src/assets/projects/graphic_design/2024/penelope.png
    alt: 'Inkling and Princess Peach are overlaid an alternating pink and purple pulsating circular background. The text Penelope appears in between large PEACH and INK text.'
    caption: 'A banner for user Penelope.'
  - image: ./src/assets/projects/graphic_design/2024/LeviIPoster.png
    alt: 'Colorful notes surround Notes from Around the World, the title of a performance presented by the Plano East Orchestra.'
    caption: 'A poster for my high school orchestra program''s Notes from Around the World performance.'
  - image: ./src/assets/projects/graphic_design/2024/apollo.png
    alt: 'The text Apollo lays atop art of Shinjiro Aragaki surrounded by circular waves filled in with other characters (Dante, Jill, Miller, Ocelot, and Flynn). Next One and Truth text appear on the top and bottom background, respectively.'
    caption: 'A banner for my friend Apollo.'
  - image: ./src/assets/projects/graphic_design/2024/dihgra.png
    alt: 'Kazuya Mishima punches above Jin Kazama on top of a rainy background with the text no limit for us and the struggle made me strong handwritten over him. To the right, the text dihgra is overlaid Clive Rosfield on top of a subtly textured off-white background.'
    caption: 'A banner for my friend Dihgra.'
  - image: ./src/assets/projects/graphic_design/2024/soda.png
    alt: 'The text Soda64 appears above Kat and a collage of anime and video game characters.'
    caption: 'A banner for content creator Soda64.'  
  - image: ./src/assets/projects/graphic_design/2024/renzo.png
    alt: 'The text renzolodeon appears above a collage of cartoon characters.'
    caption: 'A banner for content creator Renzolodeon.'
  - image: ./src/assets/projects/graphic_design/2024/jazzy/jazzy.png
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'One of many graphics for State Theater Showdown, a Smash Ultimate tournament.'
gallery2:
  - image: ./src/assets/projects/graphic_design/2023/riders.png
    alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
    caption: 'Inside the Somiedo Natural Park, Asturias'
  - image: ./src/assets/projects/graphic_design/2023/riders jet.png
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'Jasmine nightshades blooming in July'
  - image: ./src/assets/projects/graphic_design/2023/juno.png
    alt: "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains"
    caption: 'Traditional houses in Santullano, Somiedo Natural Park, Asturias'
  - image: ./src/assets/projects/graphic_design/2023/juno alt.png
    alt: 'Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass'
    caption: 'A large blue (Phengaris arion)'
  - image: ./src/assets/projects/graphic_design/2023/tstt/tstt startgg header with strip.png
    alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
    caption: 'Inside the Somiedo Natural Park, Asturias'
---
## Alerts
{% svg "misc/warning" %}
{% svg "misc/caution" %}
{% svg "misc/warning2" %}
{% svg "misc/nuclear" %}
{% svg "misc/remind" %}
{% svg "misc/pin" %}
{% svg "misc/info" %}

> [!NOTE] Hey, listen!
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

{% include "partials/gallery.njk" %}

{% set galleryItems = gallery2 %}
{% include "partials/gallery.njk" %}


https://bsky.app/profile/6bghateaccount.bsky.social/post/3mrc7qdegu22f

https://twitter.com/JonComms/status/1682693007638773761

https://open.spotify.com/track/6GoLARmR2OZl2EldehFrsA

https://www.instagram.com/p/DbrksqTEZXT/?hl=en&img_index=1

https://www.twitch.tv/lifelightcafe

https://www.youtube.com/watch?v=mWCYnRia01w

<div class="wrapper">
  <header class="full | section" style="--spot-color: var(--color-primary)">
    <div class="section__inner flow region">
      <h1 class="text-center" style="color: var(--color-text);">{{ title }}</h1>
    </div>

    {% svg "divider/waves", null, "divider" %}
  </header>

<article class="full | region">
    <div class="wrapper flow prose">
      <p>
        I am <b>Levi Ireri</b>, known online as <b>Hylia</b> (superhylia), a current student at the University of Texas at Dallas to pursue a B.S. in Computer Science. I am a game developer and designer, programmer, graphic designer, and writer, among many other things. 
      </p>
      <p>
        You may know me for hosting a couple of Smash and other fighting game tournaments, probably with Lifelight Cafe, the fighting game community I own and have run as head tournament organizer since 2020.
      </p>
      <p>         
        If you want to know exactly how it all works, <a href="https://piccalil.li/blog/a-css-project-boilerplate/"> read this article on piccalil.li</a>.
      </p>
      <p>
        The aim is to spread the idea and use of this <u>excellent</u> workflow. To work with it efficiently you should be familiar with <a href="https://cube.fyi/"> cube.fyi</a>
      </p>
      <p>
        <ul>
          <li> <a href=https://buildexcellentwebsit.es"> buildexcellentwebsit.es</a></li>
          <li> Remix the original: https://glitch.com/edit/#!/remix/build-excellent-websites</li>
          <li> Study the original CSS boilerplate: https://github.com/Set-Creative-Studio/cube-boilerplate/tree/main</li>
        </ul>
      </p>
      <h2>These are a few of my favorite things...</h2>
    </div>
  </article>

