{% if post.data.category == "noteice" %}

<li id="{{ post.data.title | slugify }}" class="card flow overflow-hidden note">
  <span> Note-ice</span>
  {% set definedDate = post.date %} {% include "partials/date.njk" %}

  {{ post.content | safe }}
</li>

{% else %}

<li id="{{ post.data.title | slugify }}" class="card flow clickable-card overflow-hidden">
  <image "{{ post.data.image | url }}", "{{ post.data.alt }}"
  <h2>
    <a href="{{ post.url | url }}">{{ post.data.title }}</a>
  </h2>

  {% set definedDate = post.date %} {% include "partials/date.njk" %}
  <p>{{ post.data.description }}</p>
</li>

{% endif %}
