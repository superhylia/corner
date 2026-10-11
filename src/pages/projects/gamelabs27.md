---
layout: page
title: Levi Ireri - Portfolio Selection for UTD Game Production Lab (Spring 2027)
description: 'For UTD Game Production Lab (Spring 2027). My primary areas of interest are leading in game/systems design, programming, and level design. I also have published work for graphic design, UI/UX design, and writing as well.'
permalink: 'portfolio/gamelabs27/index.html'
redirectFrom: ['/gamelabs27/']
skiptrace:
    - image: ./src/assets/projects/games/skiptrace/opening.png
    - image: ./src/assets/projects/games/skiptrace/map.png
    - image: ./src/assets/projects/games/skiptrace/bombing.png
shatteredReflections:
    - image: '/assets/projects/games/shattered-reflections/mainmenu.png'
    - image: '/assets/projects/games/shattered-reflections/buttonprompt.png'
    - image: '/assets/projects/games/shattered-reflections/gdd.png'
graphicDesign:
  - image: ./src/assets/projects/graphic_design/2025/mgs_delta.png
    alt: 'Naked Snake, as depicted in Metal Gear Solid Delta: Snake Eater, appears in the middle of the frame with a green tint and comic book-style dots holding a knife. The logo for the game is featured at the bottom. Green shrubbery, a red pixelated butterfly, and white petals surround snake. The outline of Eva appears within the shadows of black trees in the upper right corner. Next to snake, an outline of The Boss appears as well cutting through the background.'
    caption: 'A poster to celebrate Metal Gear Solid Delta: Snake Eater''s release using the Famitsu cover as a base and assets from Subsistence''s box art.'
  - image: ./src/assets/projects/graphic_design/2023/riders.png
    alt: 'A picturesque valley showcasing majestic mountains and lush forests, creating a serene and captivating landscape'
    caption: 'Inside the Somiedo Natural Park, Asturias'
  - image: ./src/assets/projects/graphic_design/2024/apollo.png
    alt: 'The text Apollo lays atop art of Shinjiro Aragaki surrounded by circular waves filled in with other characters (Dante, Jill, Miller, Ocelot, and Flynn). Next One and Truth text appear on the top and bottom background, respectively.'
    caption: 'A banner for my friend Apollo.'
  - image: ./src/assets/projects/graphic_design/2024/dihgra.png
    alt: 'Kazuya Mishima punches above Jin Kazama on top of a rainy background with the text no limit for us and the struggle made me strong handwritten over him. To the right, the text dihgra is overlaid Clive Rosfield on top of a subtly textured off-white background.'
    caption: 'A banner for my friend Dihgra.'
  - image: ./src/assets/projects/graphic_design/2024/jazzy/jazzy.png
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'One of many graphics for State Theater Showdown, a Smash Ultimate tournament.'
  - image: ./src/assets/projects/graphic_design/2025/arvand.png
    alt: 'Terry Bogard as featured in Super Smash Bros. Ultimate is overlaid on a red background in a graphic for daily streamer Arvand with a quote in ithe corner: HEY, COME ON COME ON. The right side features incentives to help the player go to Ohio Ultimate Summit. 10 VOTES - Reimburse first ten voters! 20 VOTES - Terry counterplay doc. 50 VOTES - Cornball dumps a water barell on me. 75 VOTES - Change my social media for a year. 100 VOTES - Change my tag for a year. BUZZCUT AT SUMMIT - IF WE GET IN WITH 150+ VOTES.'
    caption: 'A banner for Arvand to help them head to Ohio Ultimate Summit.'
  - image: '/posts/2026/ngp-famicom/fami-intro/intro.png' 
    alt: 'An illustrated diagram of the Family Computer is behind text introducing essay series New Gaze+: The Weight of Age by superhylia.dev.'
  - image: '/posts/2026/ngp-famicom/dk/dk.png' 
    alt: 'Text introducing essay series New Gaze+: The Weight of Age is displayed on top. The art for Donkey Kong (1981) is displayed over a flat Famicom cartridge diagram with the essay title Take the Game Home as Chapter 1-1 in section Playing with Power.'
backboard:
  - image: '/assets/projects/uiux/backboard/android.jpg'
  - image: '/assets/projects/uiux/backboard/laptop.jpg'
  - image: '/assets/projects/uiux/backboard/activity.jpg'
  - image: '/assets/projects/uiux/backboard/iphone.jpg'
  - image: '/assets/projects/uiux/backboard/explore.png'
  - image: '/assets/projects/uiux/backboard/create.png'
---

Hello, my name is Levi Ireri, a UT Dallas junior student pursuing a B.S in Computer Science. Empathetic, active listener with tuned skills in graphic design and creative writing. Demonstrating a passion for game development through several projects and classes. 

My primary areas of interest are leading in game/systems design, programming, and level design. I also have published work for graphic design, UI/UX design, and writing as well.

{% include "partials/toc.njk" %}

## Game Jams

### (UI/UX, Game Design, Graphic Design) Shattered Reflections - SGDA Fall '26 Jam Team Submission

{% set galleryItems = shatteredReflections %}
{% include "partials/gallery.njk" %}

> Shattered Reflections is a hand-drawn 2D puzzle-platformer breaking the boundaries of the labryinthian Prototype. The Hero will need momentum and problem-solving to cast Mirrors throughout the strange land of the Prototype, all in hopes of finding their way back home to their own game. 

I worked on this game as part of a team of 5. My contributions were: 

* UI/UX as the sole UI/UX designer entirely utilizing Godot's interface functions
  * Implemented button prompts using the ["Button Prompts for Godot"](https://store.godotengine.org/asset/clive-dev/button-prompts-for-godot/) library
  * Used Containers and Control nodes for the persistent portal counter and timer
* Graphic design as the designer of the game's logo 
* Game design, defining the game's core design pillars and controls
* Level designer during development
* Primary maintainer of the game design document 

The game can be played on [itch.io via Windows/Linux downloadable](https://rubyboat1207.itch.io/shattered-reflections).

### (Game Design, Programming) Skiptrace - VGDO Spring Jam 2025 Solo Submission 

{% set galleryItems = skiptrace %}
{% include "partials/gallery.njk" %}

> Skiptrace is a 2D shmup Metroidvania/search-action game following heroine Rei of rebel planet IRIS-372, the last to fall to surveillance by the dystopian RETINA Corporation. With evolving twitch action, ritzy retro style, a probing world to delve deeper into, and all hopes and eyes on our pilot, will she overcome and perfect? 

I developed this game as a sole developer for my first public game jam. My contributions were:

* Designer on all aspects of gameplay, including level design and notable mechanics
  * A variety of 4 swappable abilities to navigate the world: standard bullets, a bomb, a beam laser, and a speed booster
  * A map that displays all areas of the game
  * Color-coded blocks in sync with the abilities across multiple biomes
* Programming using Lua in the PICO-8 game engine
* Sound designer on ability and interaction effects
* Pixel artist on enemy, player, and environment sprites

I also wrote a set of devlogs for the game demonstrating my process while I established the games concept and wrote a game design document.

<custom-masonry layout="50-50">
    {% set itemList = collections['all-eyes-on-me'] %}
            {% asyncEach item in itemList.slice(0, 2) %}
    {% set headingLevel = "h3" %}
                {% include "partials/card-blog.njk" %}
            {% endeach %}
</custom-masonry>

The game can be played on [itch.io via web browser](https://superhylia.itch.io/skiptrace-vgdo-game-jam-spring-2025-ver).

## Experience
### (UI/UX, Programming, Project Leadership) Mentee at Blacks at Microsoft Summer Mentorship Program, Dallas

{% set galleryItems = backboard %}
{% include "partials/gallery.njk" %}

* Spearheaded the winning Hackathon team to pitch “Backboard”, a basketball training app in a competitive 20-student class with UI + UX design prototype built in Figma
  * Adaptable design between mobile (iOS and Android) and laptop (macOS)
  * Light and dark mode functionality
  * Interactivity with scrollable carosels and a create button
* Attended 20+ full-day lectures by tenured Microsoft mentors and 5+ workshops at partner tech companies like Verizon, Cisco, and Toyota
* Enhanced my Python skills with 20+ Replit lessons and projects

### Graphic Design

For on and off commission as well as for my own endeavors, I have 5+ years of graphic design experience using GIMP and Inkscape. A selection of my best work is below.

{% set galleryItems = graphicDesign %}
{% include "partials/gallery.njk" %}

### (Programming) Relevant Coursework

Relevant courses and skills developed include:
* UTD: Computer Science II in C++
* UTD: Animation and Game Fundamentals in Unreal Engine, Maya
* UTA: Object-Oriented Programming in Git, Java
* UTA: Intermediate Programming in C

This semester, I am also currently apart of Dr. Monica Evans' "Designing Mystery and Detective Games (Fall 2026)" Student Working Group from September-November 2026. 
> "Students will assist with the development of a research paper and game prototype on mystery and detective digital games. We will examine multiple digital games in the genre, create a research plan for examining how and why mystery games work, and explore mechanics and systems that best allow players to “feel like a detective” during play. We will also develop and test a prototype for an original mystery game. Students will develop skills in research analysis, game design, and narrative design."

## (Game Studies/Analysis) Blog Writing

4 of my most recent pieces of writing, which also happen to be the best demonstrations of my work. I write in-depth games criticism and analysis as a personal hobby, examining games as an art form through their design, history, and development. My work is published on [Warp Point](https://www.warppoint.games/about), "a curated directory of video game websites", and has been quoted in [Critical Distance](https://www.critical-distance.com/2026/09/27/september-27th-4/), a weekly newsletter and "compendium of the most incisive, thought-provoking, and remarkable discussion in and around games".

<custom-masonry layout="50-50">
  {% set itemList = collections.allPosts %}
  {% asyncEach item in itemList.slice(0, 4) %}
    {% set headingLevel = "h3" %}
    {% include "partials/card-blog.njk" %}
  {% endeach %}
</custom-masonry>