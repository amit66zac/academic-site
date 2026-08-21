---
layout: page
title: Contact
eyebrow: Contact
subtitle: Academic enquiries, collaboration, and institutional profiles
permalink: /contact/
description: "Contact details and academic profiles for Amit Zac."
---

<section class="page-intro-panel contact-intro" aria-labelledby="contact-intro-title">
  <p class="section-kicker">Get in touch</p>
  <h2 id="contact-intro-title">Research, teaching, and collaboration</h2>
  <p>
    The best way to reach me is by institutional email. For questions about the new Lab for
    Computational Legal Studies and its open positions, please use the dedicated lab contact below.
  </p>
</section>

<section class="contact-grid" aria-label="Contact options">
  <article class="contact-card">
    <p class="section-kicker">University of Amsterdam</p>
    <h2>Academic contact</h2>
    <p>Assistant Professor<br>Center for Law and Economics</p>
    <p><a class="contact-link" href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    <p><a href="{{ site.uva_profile }}" target="_blank" rel="noopener">University profile →</a></p>
  </article>

  <article class="contact-card">
    <p class="section-kicker">Research profiles</p>
    <h2>Publications and projects</h2>
    <p>Browse publications, citation records, and the lab's current research programmes.</p>
    <ul class="contact-links">
      <li><a href="{{ site.google_scholar }}" target="_blank" rel="noopener">Google Scholar</a></li>
      <li><a href="{{ '/publications/' | relative_url }}">Publications</a></li>
      <li><a href="{{ '/lab/' | relative_url }}">Lab for Computational Legal Studies</a></li>
    </ul>
  </article>
</section>

<section class="page-cta" aria-labelledby="lab-contact-title">
  <div>
    <p class="section-kicker">Lab enquiries</p>
    <h2 id="lab-contact-title">Positions and project questions</h2>
  </div>
  <div class="page-actions">
    <a class="button" href="mailto:Amit.Zac@mail.huji.ac.il">Contact the lab</a>
    <a class="button button--outline" href="{{ '/lab/' | relative_url }}#opportunities">View opportunities</a>
  </div>
</section>
