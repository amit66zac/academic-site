---
layout: page
title: Publications
permalink: /publications/
---

{% include search-form.html %}

<div class="publications-toolbar">
  <div class="pub-filters">
    <label for="filter-year">Year</label>
    <select id="filter-year" data-filter-year aria-label="Filter by year">
      <option value="">All years</option>
      {% assign years = site.data.publications | map: "year" | uniq | sort | reverse %}
      {% for y in years %}
      <option value="{{ y }}">{{ y }}</option>
      {% endfor %}
    </select>
    <label for="filter-type">Type</label>
    <select id="filter-type" data-filter-type aria-label="Filter by type">
      <option value="">All types</option>
      <option value="journal">Journal</option>
      <option value="conference">Conference</option>
      <option value="chapter">Chapter</option>
      <option value="other">Other</option>
    </select>
  </div>
</div>

<ul class="pub-list">
  {% assign sorted = site.data.publications | sort: "year" | reverse %}
  {% for pub in sorted %}
  {% include publication-card.html publication=pub %}
  {% endfor %}
</ul>
