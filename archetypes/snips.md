---
# Title of your snip; auto-derived from filename if left blank
# {{ replace .Name "-" " " | title }}
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

# Creation and modification timestamps (auto-populated)
date: {{ now.Format "2006-01-02T15:04:05Z07:00" }}
lastmod: {{ now.Format "2006-01-02T15:04:05Z07:00" }}

# Control whether this is published or a draft; set to false when ready
draft: true

# URL slug (auto from .Name)
slug: "{{ .Name }}"

# Content type for templates and taxonomies
type: "snip"

# Unique identifier for cross-referencing or backlinks
uuid: "{{ .File.UniqueID }}"

# Categorization (add as needed)
categories: []        # e.g. ["ideas", "research"]
tags: []              # e.g. ["hugo", "snip"]
aliases: []           # e.g. ["alias1", "alias-two"]

# Optional metadata placeholders
summary: ""         # short summary or abstract
excerpt: ""         # manual excerpt (if different from summary)
related: []           # list of related snip UUIDs or slugs
link: ""            # external resource URL

# Papermod-specific parameters
snippet: true         # treat as a small note (disables TOC, reading time)
disableToc: true
disableReadingTime: true

---

<!--
Your snip content goes here. Keep it short and to the point—think of a fleeting
note.
-->

