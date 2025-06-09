---
title: "Pattern: Split JSON List Action"
date: 2025-06-09T12:03:38+12:00
lastmod: 2025-06-09T12:03:38+12:00
draft: false
slug: "split-json-list-action"
type: "snips"
summary: "Designers encounter cases where JSON lists need to be split based on
attribute values. Typically this would involve looping through the list and
filtering. This pattern offers a cleaner approach to split values."
categories: ["Patterns"]
tags: ["Omni Studio", "Integration Procedures"]
authors: ["AdroitSF"]
# hero: ""
---
tl;dr:  
Use this pattern in Omnistudio Integration Procedure to efficiently collect JSON nodes from a JSON list.  
This is an alternative to looping through a JSON list using a Loop Block and collecting nodes.  
Loop Block in an Integration Procedure needs careful consideration and often
results in value sets that needs to be corrected. This approach avoids such
issues.  


```JSON
[
    {
        "Name": "yjCustomer 1",
        "Type": "Residential"
    },
    {
        "Name": "Customer 2",
        "Type": "Commercial"
    },
    {
        "Name": "Customer 3",
        "Type": "Residential"
    },
    {
        "Name": "Customer 4",
        "Type": "Commercial"
    }
]
```


```JSON
{
    "Residential": [
    {
        "Name": "Customer 1",
        "Type": "Residential"
    },
    {
        "Name": "Customer 3",
        "Type": "Residential"
    }
    ],
    "Commercial": [
    {
        "Name": "Customer 2",
        "Type": "Commercial"
    },
    {
        "Name": "Customer 4",
        "Type": "Commercial"
    }
    ]
}
```
