---
tags: ["notes", "graphql", "tutorial"]
title: Notes on How To GraphQL
---

# {{title}}

These are my notes as I follow along to [How To GraphQL](https://www.howtographql.com). I'm doing this as part of a Party Corgi Cohort (aka Adventure Club). As part of the cohort, the lessons are split into 4 sections. 

1. Intro to GraphQL
2. Advanced Topics in GraphQL
3. Front end Tutorial
4. Back end Tutorial

## Section 1: An Introduction to GraphQL

This first section covers the following videos: 

1. [Introduction](https://www.howtographql.com/basics/0-introduction/)
2. [GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)
3. [Core Concepts](https://www.howtographql.com/basics/2-core-concepts/)
4. []

### Introduction

- Why REST wasn't good enough?
    GraphQL was designed to better support low-powered mobile devices & unreliable networks. 

    Allows for supporting a variety of data needs from various technologies (front end frameworks, mobile apps, and more).

    Because of the nature of REST, it becomes hard to prototype and make rapid changes to the API. GraphQL has features that can make it easy to quickly change and iterate on the API that may not be possible with REST. 

- History of GraphQL
    Designed by Facebook for Mobile Apps, but really took off for the Web. Other companies (primarily Netflix & Coursera) were working on similar specifications. Netflix kept working on theirs (Falcor - Never Ending Story reference? ), and open sourced it. 


### GraphQL is the better REST
In a classic REST API, there are 2 common patterns for fetching data. They each have their own issues strengths/weaknesses.

1. `endpoint/{type}/{:id}?`
    This pattern has you access each "object" one at a time. You also have to send additional requests for any "joins" that you might need to do. There's also no easy pattern for restricting data to just the fields you need this way. However, vs the other pattern, you can always add additional requests to get new data, or remove requests when "joined" data is no longer relevant. It's also worth noting that deprecating endpoints/removing data is harder in this pattern because there could be any number of views that use an endpoint or data therein. 
2. `endpoint/{page}`
    This pattern has you put all of the data that you need for a certain "view" at a single endpoint. This lets you only serve the data needed on each page, so you don't have to worry so much about over/under fetching. You also can get a good sense of what data is/isn't being used since these endpoints should closely match the available data. 
    However, adding new features to a page requires updating the endpoint prior to scoping out the features, so more cross-team/cross-stack work is necessary to iterate designs. 


---
Adding a declarative approach to the `endpoint/{type}/{:id}?` api ends up reinventing something fairly close to graphQL anyways since you'd have to add a query parameter for each field that you need. GraphQL over `get` already works similar to this. However, you can join across types in a single request. 
---

Because GraphQL has users request specific types, you can add tracing and analytics to each field, to better understand when data is ready to be deprecated. Especially since neither of the common REST patterns addressed above have any easy way to guarantee that the client isn't using some of the data returned, while GraphQL encourages clients to just remove data they aren't using from their requests. 
As well, since GraphQL uses resolver functions to collect data from the client, you can add o11y, performance, and tracing metrics to better understand pain points in your system. 

#### Benefits of Schemas & Types
The Schema directly tells users what data is available for the API, and what the shape of the data looks like. This let's API consumers have insights into the API, and reduces the amount of documentation that the API team needs to maintain directly. This allows teams to work more independently since the API team can add/deprecate fields by way of the schema, and consumers can look to the schema to find out about data they aren't currently using. 


### Core Concepts

Schema

Query

Mutations

