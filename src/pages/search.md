---
title: Search
description: Search Page
layout: page
hideTagsList: false
permalink: /search/index.html
---

Enter text below to begin your search or search by tags.

<input type="text" id="search" autocomplete="on" placeholder="Search..." />
<ul id="results"></ul>
<script src="/assets/scripts/search.js" async defer></script>

<div class="taglist | mt-s-m cluster">
  {% for tag in collections.tagList %}
    <a href="/tags/{{ tag }}" class="button"> {{ tag }} </a>
  {% endfor %}
</div>
