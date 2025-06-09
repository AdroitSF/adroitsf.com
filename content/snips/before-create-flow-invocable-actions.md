---
title: "Before Create Flow Invocable Actions"
date: 2025-06-09T12:34:12+12:00
lastmod: 2025-06-09T12:34:12+12:00
draft: false
slug: "before-create-flow-invocable-actions"
type: "snips"
summary: "Before trigger or fast update flows are limited in their actions."
categories: ["nuance"]
tags: ["Flow", "Invocable Action"]
authors: ["AdroitSF"]
# hero: ""
---

When using invocable actions to drive updates in a before trigger context, we
are unable to use a flow. The fast updates flows do not seem to support actions.  
The alternative seems to be a trigger in the before create before update
context.  
Need to consider whether such heavy processing should happen in a before trigger
context in any case. This would slow down creation, even while it is technically
feasible.
