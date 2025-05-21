---
# Title of your snip; auto-derived from filename if left blank
# Before Create Flows Actions
title: "Before Create Flows Actions"

# Creation and modification timestamps (auto-populated)
date: 2025-05-22T01:01:35+12:00
lastmod: 2025-05-22T01:01:35+12:00

# Control whether this is published or a draft; set to false when ready
draft: false

# URL slug (auto from .Name)
slug: "before-create-flows-actions"

# Content type for templates and taxonomies
type: "snip"

# Unique identifier for cross-referencing or backlinks
uuid: "21b5f87c65f9f2fba26f0e6a1b977d34"

# Categorization (add as needed)
categories: ["flows"]        # e.g. ["ideas", "research"]
tags: []              # e.g. ["hugo", "snip"]
aliases: []           # e.g. ["alias1", "alias-two"]

# Optional metadata placeholders
summary: "Salesforce flows operating as fast updates do not support actions"         # short summary or abstract
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
When using invocable actions to drive updates in a before trigger context, we
are unable to use a flow. The fast updates flows do not seem to support actions.  
The alternative seems to be a trigger in the before create before update
context.  
Need to consider whether such heavy processing should happen in a before trigger
context in any case. This would slow down creation, even while it is technically
feasible.
