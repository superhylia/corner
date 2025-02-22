---
layout: page
title: Graphics from 2022
description: 'All my graphics from 2022.'
permalink: 'graphics/2022/index.html'
gallery:
  - image: ./src/assets/projects/graphic_design/2022/izanagi.png
    alt: 'Two female characters, Min Min and Pyra, stand fiercely while the text Izanagi displays next to them.'
    caption: 'A banner for user Izanagi.'
  - image: ./src/assets/projects/graphic_design/2022/jswish.png
    alt: 'The text jswish opposes Joker and Chiaki.'
    caption: 'A banner for user jswish.'
  - image: ./src/assets/projects/graphic_design/2022/tati.png
    alt: 'Boxer Little Mac has many afterimages and comic book onomatopoeia while the text Tati displays on the right.'
    caption: 'A banner for user Tati.'
  - image: ./src/assets/projects/graphic_design/2022/terry.png
    alt: 'The text Mr. Terry Bogard opposes Terry Bogard on top of a red background.'
    caption: 'A banner for user Mr. Terry Bogard.'
  - image: ./src/assets/projects/graphic_design/2022/thistle.png
    alt: 'The text Thistle and Japanese writing oppose Ike atop a baby blue background and Byleth atop a city.'
    caption: 'A banner for user Thistle.'
---

This post has a gallery set in its front matter as a list of objects, each with an `image`, `alt`, and `caption` property.

When you import the gallery component, the images are listed in a grid as buttons, each linked to the respective image in a `<dialog>` HTML element. A close button within each dialog allows the image to be hidden again. Includes `gallery.css` for styling the modal dialogs and backdrop, `gallery.js` manages modal dialog interactions.

{% include "partials/gallery.njk" %}

### Loop through images without additional interactivity:

<ul class="gallery" role="list" style="padding: 0;">
  {%- for item in gallery -%}
    <li>{% image item.image, item.alt, item.caption %}</li>
  {%- endfor -%}
</ul>
