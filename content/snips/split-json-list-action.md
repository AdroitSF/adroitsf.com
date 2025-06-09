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

# Use Case
JSON list that needs to be separated based on a node value in the JSON. 

## Prerequisites
This approach uses Omni Studio low code tooling.  
It assumes that the JSON list is within an Integration Procedure.  

# Approach
Retrieve the list of JSON to a node - likely from a Data Mapper.
Use the List Action, list the Merge List Order to the JSON list.
Use the Filter List Formula to indicate condition where the item in the JSON
should be acted on. The output would now be available for that List Action.  

Add additional List Actions with Filter List Formula to achieve other lists.

Assume Input JSON List
```JSON
[
    {
        "Name": "Customer 1",
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

After two List Actions, with Filter List Formula that checks for type value.
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
