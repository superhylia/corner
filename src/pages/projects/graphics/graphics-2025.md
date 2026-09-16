---
layout: page
title: Graphics from 2025
description: 'All my graphics from the year 2025.'
permalink: 'graphics/2025/index.html'
gallery:
  - image: ./src/assets/projects/graphic_design/2025/arvand.png
    alt: 'Terry Bogard as featured in Super Smash Bros. Ultimate is overlaid on a red background in a graphic for daily streamer Arvand with a quote in ithe corner: HEY, COME ON COME ON. The right side features incentives to help the player go to Ohio Ultimate Summit. 10 VOTES - Reimburse first ten voters! 20 VOTES - Terry counterplay doc. 50 VOTES - Cornball dumps a water barell on me. 75 VOTES - Change my social media for a year. 100 VOTES - Change my tag for a year. BUZZCUT AT SUMMIT - IF WE GET IN WITH 150+ VOTES.'
    caption: 'A banner for Arvand to help them head to Ohio Ultimate Summit.'
  - image: ./src/assets/projects/graphic_design/2025/mgs_delta.png
    alt: 'Naked Snake, as depicted in Metal Gear Solid Delta: Snake Eater, appears in the middle of the frame with a green tint and comic book-style dots holding a knife. The logo for the game is featured at the bottom. Green shrubbery, a red pixelated butterfly, and white petals surround snake. The outline of Eva appears within the shadows of black trees in the upper right corner. Next to snake, an outline of The Boss appears as well cutting through the background.'
    caption: 'A poster to celebrate Metal Gear Solid Delta: Snake Eater''s release using the Famitsu cover as a base and assets from Subsistence''s box art.'
  - image: ./src/assets/projects/graphic_design/2025/mindset.png
    alt: 'R.O.B as featured in Super Smash Bros. Ultimate is overlaid on an orange background in a graphic for player AF_Mindset. The right side features incentives to help the R.O.B Squad go to Ohio Ultimate Summit. 10 VOTES - Iron Man vs. Solis/Asianjew. 20 VOTES - A vocal cover of Lifelight. 50 VOTES - Ohio Smash Tag ranking. 70 VOTES - Fully shaved beard + suit @ Summit. 85 VOTES - Arm wrestling vs. the strongest Ohio players. IRL R.O.B. Moveset Demonstration WITH 100+ VOTES.'
    caption: 'A banner for Mindset to help them head to Ohio Ultimate Summit.'
  - image: ./src/assets/projects/graphic_design/2025/wpts_docket_2025.png
    alt: 'WolfPack presents two tournaments for the year. The Hunt hosted for Rivals of Aether on Sundays @ 8PM EST and The Feast hosted for Rivals of Aether II on Fridays @ 7:30PM EST. The bottom encourages viewers to Join the pack! and follow their socials at wolfpackfgc.'
    caption: 'A docket graphic for esports organization WolfPack and their tournaments'
dtsd:
  - image: ./src/assets/projects/graphic_design/2025/dtsd/dtsd_banner.png
    alt: 'Downtown Smashdown hosts several tournaments for Super Smash Bros. Ultimate, Rivals of Aether II, and HewDraw Remix at start.gg/dtsdc. The venue is at 1610 E Crosby Rd, Carrollton, TX, 75006. The events are streamed at twitch.tv/carrolltonesports.'
    caption: 'The homepage banner for tournament series Downtown Smashdown.'
  - image: ./src/assets/projects/graphic_design/2025/dtsd/dtsd_stagelist.png
    alt: 'Downtown Smashdown features the following stagelist for its Super Smash Bros. Ultimate event. The starter stages are Battlefield, Small Battlefield, Smashville, Hollow Bastion, and Town & City. The Counterpicks are Northern Cave, Final Destination, Fountain of Dreams, and Yoshi''s Story. The following settings are used: 3 stocks, 7 minutes, 2 bans, Full DSR, 1-2-1 Strikes, Character First, Hazards ON.'
    caption: 'One variation of the stagelists for tournament series Downtown Smashdown.'
  - image: ./src/assets/projects/graphic_design/2025/dtsd/dtsd_logo.png
    alt: 'The white logo for Downtown Smashdown features a chevron with a box to represent a D on the left side and a blocky S on the other to represent DS. To the right of the icon is Downtown Smashdown.'
    caption: 'The monochromatic wordmark for tournament series Downtown Smashdown.'
  - image: ./src/assets/projects/graphic_design/2025/dtsd/cams.png
    alt: 'A space for a 1578x888 player cam appears on the left, with an identically sized commentator cam appearing below it. To the player cams right is space for gameplay at a 1920x1080 resolution. Below the gameplay is the Downtown Smashdown logo, start.gg shortlink, Twitch link, and the supported games.'
    caption: 'A stream layout for use with multiple cams.'
  - image: ./src/assets/projects/graphic_design/2025/dtsd/playercam.png
    alt: 'A space for a 1000x563 player cam appears on the right, with the player tags, phase/other info, , start.gg shortlink, and Twitch link below it. To the player cams left is space for gameplay at a 2560x1440 resolution. At the top is the Downtown Smashdown logo and the supported games.'
    caption: 'A stream layout for use with a playercam.'        
  - image: ./src/assets/projects/graphic_design/2025/dtsd/overlay.png
    alt: 'A screenshot of Super Smash Bros. Ultimate appears in the background: Ness is fighting Daisy on Battlefield. In the bottom middle is space for a playercam at a 653x358 resolution. At the top left is space for the tournament phase. In the top middle is space for Player One and Player Two''s usernames and game wins, both surrounding the Downtown Smashdown icon.'
    caption: 'A stream overlay for use with a playercam.' 
  - image: ./src/assets/projects/graphic_design/2025/dtsd/setups.png
    alt: 'The text Bring Setups! appears over a grainy black background outlined by a rainbow strip. Intended for use as a homepage topper for the tournament series Downtown Smashdown.'
    caption: 'One of several homepage topper decorations for their start.gg page, this one encouraging to Bring Setups!.' 
redirectFrom: ['/projects/graphics/2025/index.html', '/graphics-2025/index.html']
---

{% include "partials/gallery.njk" %}

# Downtown Smashdown

{% set galleryItems = dtsd %}
{% include "partials/gallery.njk" %}

<ul class="gallery" role="list" style="padding: 0;">
  {%- for item in dtsd -%}
    <li>{% image item.image, item.alt, item.caption %}</li>
  {%- endfor -%}
</ul>

### Loop through images without additional interactivity:

<ul class="gallery" role="list" style="padding: 0;">
  {%- for item in gallery -%}
    <li>{% image item.image, item.alt, item.caption %}</li>
  {%- endfor -%}
</ul>
