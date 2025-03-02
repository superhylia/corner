---
layout: page
title: Graphics from 2023
description: 'All my graphics from 2023.'
permalink: 'graphics/2023/index.html'
gallery:
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
  - image: ./src/assets/projects/graphic_design/2023/tstt/tstt stagelist.png
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'Jasmine nightshades blooming in July'
  - image: ./src/assets/projects/graphic_design/2023/tstt/tstt icon gallery.png
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'Jasmine nightshades blooming in July'
---

### Tri-State Tourney Tuesdays
Graphics for former tournament series [Tri-State Tourney Tuesdays](https://start.gg/tstt).
![](/assets/projects/graphic_design/2023/tstt/tstt%20startgg%20header%20with%20strip.png 'The main header.')
![](/assets/projects/graphic_design/2023/tstt/tstt%20icon%20gallery.png 'A collection of icons for TSTT.')
![](/assets/projects/graphic_design/2023/tstt/tstt%20stagelist.png 'Stagelist.')

### Loop through images without additional interactivity:

<ul class="gallery" role="list" style="padding: 0;">
  {%- for item in gallery -%}
    <li>{% image item.image, item.alt, item.caption %}</li>
  {%- endfor -%}
</ul>

