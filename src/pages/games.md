---
layout: page
title: Game Design and Development
description: 'My work in game design, level design, and overall game development.'
permalink: 'games/index.html'
skiptrace:
    - image: ./src/assets/projects/games/skiptrace/opening.png
    - image: ./src/assets/projects/games/skiptrace/map.png
    - image: ./src/assets/projects/games/skiptrace/bombing.png
shatteredReflections:
    - image: '/assets/projects/games/shattered-reflections/mainmenu.png'
    - image: '/assets/projects/games/shattered-reflections/buttonprompt.png'
    - image: '/assets/projects/games/shattered-reflections/gdd.png'
---

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

I also wrote a set of devlogs for the game while I established the games concept.

<custom-masonry layout="50-50">
    {% set itemList = collections['all-eyes-on-me'] %}
            {% asyncEach item in itemList.slice(0, 2) %}
    {% set headingLevel = "h3" %}
                {% include "partials/card-blog.njk" %}
            {% endeach %}
</custom-masonry>

The game can be played on [itch.io via web browser](https://superhylia.itch.io/skiptrace-vgdo-game-jam-spring-2025-ver).