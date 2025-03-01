---
layout: page
title: Graphics from 2024
description: 'All my graphics'
permalink: 'graphics/2024/index.html'
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
  - image: ./src/assets/projects/graphic_design/2024/soda.png
    alt: 'The text renzolodeon appears above a collage of cartoon characters.'
    caption: 'A banner for content creator Renzolodeon.'
  - image: ./src/assets/projects/graphic_design/2024/jazzy/jazzy.png
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'One of many graphics for State Theater Showdown, a Smash Ultimate tournament.'
redirectFrom: ['/projects/graphics/2024/index.html', '/graphics-2024/index.html']
---

* Graphics for content creator [Soda64](https://www.youtube.com/@Soda_64)
* Graphics for content creator [Renzolodeon](https://www.youtube.com/@Renzolodeon)

### State Theater Showdown
Graphics for Ohio Super Smash Bros. Ultimate tournament and live jazz show [State Theater Showdown](https://start.gg/statetheater).
![](/assets/projects/graphic_design/2024/jazzy/jazzy.png 'The main header.')
![](/assets/projects/graphic_design/2024/jazzy/jazzy%20stagelist.png 'Stagelist.')
![](/assets/projects/graphic_design/2024/jazzy/sgg%20icon.png 'The start.gg icon and tournament logo.')
![](/assets/projects/graphic_design/2024/jazzy/sgg%20homepage.png 'start.gg homepage graphics.')

{% include "partials/gallery.njk" %}

### Loop through images without additional interactivity:

<ul class="gallery" role="list" style="padding: 0;">
  {%- for item in gallery -%}
    <li>{% image item.image, item.alt, item.caption %}</li>
  {%- endfor -%}
</ul>
