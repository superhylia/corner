---
title: JavaScript
---

This starter has **no real JS dependency**. If JavaScript is not available, components that rely on it -- like the theme switcher -- will be hidden. If you opted in for the drawer menu, pills will be shown instead.

There are two kinds of bundles for JavaScript in this starter, see `src/_includes/head/js-inline.njk` and `src/_includes/head/js-defer.njk`.
You can include more scripts like so:

{% raw %}

```jinja2
{% js "inline" %}
 {% include "scripts/your-inline-script.js" %}
{% endjs %}
```

{% endraw %}

Same goes for scripts that should be defered:

{% raw %}

```jinja2
{% js "defer" %}
 {% include "scripts/your-defered-script.js" %}
{% endjs %}
```

{% endraw %}

Source layout:

- `src/assets/scripts/inline/` is treated as a esbuild IIFE and sent to `_includes/scripts/` (classic inline bundle)
- `src/assets/scripts/defer/` is treated as a esbuild ESM and sent to `_includes/scripts/` (deferred `type="module"` bundle)
- `src/assets/scripts/components/` is sent directly to the output folder for on-demand module scripts

Some components are enhanced with JavaScript.
