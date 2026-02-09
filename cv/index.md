---
layout: page
title: CV
permalink: /cv/
---

<div class="cv-download">
  <a href="{{ site.cv_pdf | relative_url }}" class="button" download>Download CV (PDF)</a>
</div>

{% assign person = site.data.cv.person %}

<section class="cv-section" aria-labelledby="cv-education">
  <h2 id="cv-education">Education</h2>
  {% for item in site.data.cv.education %}
  <div class="cv-item">
    <h3>{{ item.degree }}, {{ item.institution }}{% if item.location %} ({{ item.location }}){% endif %}</h3>
    <p class="meta">{{ item.period }}{% if item.thesis %} — {{ item.thesis }}{% endif %}{% if item.note %} — {{ item.note }}{% endif %}</p>
  </div>
  {% endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-appointments">
  <h2 id="cv-appointments">Academic Appointments</h2>
  {% for item in site.data.cv.appointments %}
  <div class="cv-item">
    <h3>{{ item.role }}, {{ item.institution }}{% if item.location %} ({{ item.location }}){% endif %}</h3>
    <p class="meta">{{ item.period }}{% if item.advisor %} — Advisor: {{ item.advisor }}{% endif %}</p>
  </div>
  {% endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-professional">
  <h2 id="cv-professional">Professional Experience</h2>
  {% for item in site.data.cv.professional %}
  <div class="cv-item">
    <h3>{{ item.role }}, {{ item.organization }}{% if item.location %} ({{ item.location }}){% endif %}</h3>
    <p class="meta">{{ item.period }}{% if item.note %} — {{ item.note }}{% endif %}</p>
  </div>
  {% endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-grants">
  <h2 id="cv-grants">Research Grants</h2>
  {% for item in site.data.cv.grants %}
  <div class="cv-item">
    <h3>{{ item.title }}</h3>
    <p class="meta">{{ item.funder }}, {{ item.institution }}{% if item.role %} ({{ item.role }}){% endif %}</p>
  </div>
  {% endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-teaching">
  <h2 id="cv-teaching">Teaching</h2>
  {% for item in site.data.cv.teaching %}
  <div class="cv-item">
    <h3>{{ item.course }}, {{ item.institution }}</h3>
    <p class="meta">{{ item.period }}</p>
  </div>
  {% endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-awards">
  <h2 id="cv-awards">Prizes and Awards</h2>
  {% for item in site.data.cv.awards %}
  <div class="cv-item">
    <h3>{{ item.name }}</h3>
    <p class="meta">{{ item.period }}</p>
  </div>
  {% endfor %}
</section>

<section class="cv-section" aria-labelledby="cv-service">
  <h2 id="cv-service">Academic Service</h2>
  <h3>Reviewing</h3>
  <ul>
    {% for item in site.data.cv.service.reviewing %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
  <h3>Committees and Boards</h3>
  <ul>
    {% for item in site.data.cv.service.committees %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
  <h3>Scientific Affiliations</h3>
  <ul>
    {% for item in site.data.cv.service.affiliations %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</section>

<section class="cv-section" aria-labelledby="cv-skills">
  <h2 id="cv-skills">Skills</h2>
  <p><strong>Languages:</strong> {{ site.data.cv.skills.languages }}</p>
  <p><strong>Tools:</strong> {{ site.data.cv.skills.tools }}</p>
</section>
