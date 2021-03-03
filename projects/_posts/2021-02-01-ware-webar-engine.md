---
layout: post
title: "ware (WebAR Engine)"
date: 2021-02-01
excerpt: "A WebAR Engine on Web using WebGL and Node.js..."
project: true
tags: [webar, unity, nodejs, arjs, aframe]
comments: false
---

## Note: I am still working on uploading the source code.

# Introduction

A Web Application made with Unity that lets user design webAR projects that can run on any webGL capable device, using Unity, Node.js, AR.js, aframe.

Pros:

+ Design the project with a 3D Editor through a web page on the browser to lower the device requirements.

+ Use the cloud system to continue development on anywhere.

+ Generate the project on cloud to lower device based attachments.

+ The end project is a WebAR instead of an AR app to support more devices using AR.js.

+ The end project is also on the cloud to simplify sharing and testing.

Cons:

- WebAR is less powerful to use than ARCore. So most of the AR features not implemented yet.


# Development

When I started to work on it, I didn't know how to mix all these different concepts. But in time, I added more than I could think of.

## Web Application

Web Application is trying to mimic a unity like 3D editor. The core idea is to put as many as features as simple as possible. Right now, it has some core animations to manipulate the transform and the color of the item.

Other than object, i had to redo the entire UI twice to make manipulation easier. For example, first I hade 6 buttons to move in 6 directions with a constant amount. But that was too simple even for a limited time. So, I tried to create a gizmo system although performing mostly in  parameters, it is not a perfect replica. I could buy one through the Asset Store but making it for the first time teaches a lot about local and global transforms.

Here is a look of the web app and the webAR responding to that.
![The Web Application part of ware](/assets/img/ware/desktop.png)

# Current WebAR Version

AR.js as the foundation gives freedom on moving anything on screen as we want. I tried with more than 200k triangles and it didn't hurt the performance. The problem would probably be the number of items.

Only problem is, I have to code everything from scratch. That's why right now there is only transformation and constant rotation animations. And the swipe reactions. They are all hardcoded with javascript as core functions.

# Future Development Ideas

+ Serverless version

Just download and run version. Detach the user from the limitation of the bad internet. Also I don't plan to make it viable with a server running all the time to try out. So this would be the only way to try out.


+ AI Template Creator

Since this project is a mix of all kinds of areas, why not add a template generator and an AI assistant to help out.

+ More features from Unity

In the limited time, it doesn't have the big component systems etc. Because that requires twice the work considering all systems must be implemented in both to work. But other than the systems. I also want to add a scripting language (possibly js) to let people create the project and code they want instead of writing the rotation code for them.

 I will be glad to respond to any questions and/or help on this one!
