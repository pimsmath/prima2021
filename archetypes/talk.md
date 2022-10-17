---
title: "{{ replace .Name "-" " " | title }}"
sessions: 
  - Session
locations:
  - Location
tags: ['']
outputs:
- HTML
- Calendar
categories: ['special-session']
date: 
end: #default to date + 1 hour
featured: false
draft: false
abstract: |
  Abstract goes here. $\LaTeX$ supported via mathjax.
---
