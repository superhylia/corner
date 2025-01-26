---
title: Search
description: Search Page
layout: page
hideTagsList: true
permalink: /search/index.html
---

Enter text below to begin your search or search by tags.

<input type="text" id="search" autocomplete="off" placeholder="Search..." />
<ul id="results"></ul>
<script src="/assets/scripts/search.js" async defer></script>

## Tags
<div class="taglist | mt-s-m cluster">
  {% for tag in collections.tagList %}
    <a href="/tags/{{ tag }}" class="button"> {{ tag }} </a>
  {% endfor %}
</div>

<custom-masonry layout="50-50">
  {% set itemlist = collections.posts %}
  {% for item in itemlist %}

		{% include "partials/card-tag.njk" %}
  {% endfor %}
</custom-masonry>
