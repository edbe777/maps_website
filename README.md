# Hugo Split Gallery 

Split Gallery is a theme for [Hugo](http://gohugo.io/) focused on photos and maps.  
This Hugo theme features a photo gallery, a map and custom content per page, and supports custom sections and taxonomies.

This project is licensed under the [GPLv3 license](/LICENSE). Due to 3rd-party included in this project, you are *not* free to use it for commercial applications. See the license section below for more info.

It is inspired by [Hugo Split Theme](https://github.com/christianmendoza/hugo-split-theme), itself ported from [Split](https://onepagelove.com/split) by [One Page Love](https://onepagelove.com).

For more information, read the official [setup guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) of Hugo.

### Structure

*This theme supports any type of section (`post`, `blog`, ...). For simplicity, we'll use the term `post` in this part.*

This theme requires each post to follow this structure:

```text
content/
├── posts
│   ├── post1
│   │   ├── index.md
│   │   ├── track_a1.gpx
│   │   └── images
│   │       ├── IMG_a1.jpg
│   │       └── ..
│   ├── post2
│   │   ├── index.md
│   │   ├── track_a2.gpx
│   │   ├── track_b2.gpx
│   │   └── images
│   │       ├── IMG_a2.jpg
│   │       └── ..
```

Photos displayed in the gallery **must** be in a `images` subfolder, and track(s) -if any- must be at the same level as the content. Supported formats for tracks are GPX (`.gpx` files), KML (`.kml` files) and GeoJSON (`.geojson` files).

Additionnally, the content of the post:

* **requires** an `images` parameter, refering to at least one picture from this post, which will be used as thumbnail in the home gallery,
* can have a `seealso` parameter, refering to one or multiple other posts.

Example:

```text
---
title: "test1"
date: 2011-04-30T00:00:00+00:00
images: ["images/IMG_a1.jpg"]
seealso: ["posts/post1", "posts/post2"] 
---

Some text can be written here.
```

## License

This theme is licensed under the [GPLv3 license](/LICENSE), except for the photos distributed with the example site which are not free to use.

This theme includes [fancybox](https://fancyapps.com/fancybox/3/), which is not free to use for commercial applications. If you wish to use this theme in commercial applications, you will need to get a [commercial license from fancybox](https://fancyapps.com/fancybox/3/#license).

All other third-parties included are free to use (under MIT License, SIL OFL 1.1, BSD-2-Clause).


If you wish to add a new translation, there are two files to create:

* `i18n/<language>.toml`, containing main theme translations
* `assets/hugo-split-gallery/fancybox.<language>.js`, containing fancybox translations

### Adding new third-parties / updating third-parties

Adding/updating a third-party requires npm to be used. Resources (JS, CSS, images, fonts, etc.) are copied and commited into git, so using this theme does not require npm.

1. Add or update the third-party as a development dependency (e.g. `npm install --save-dev my-third-party`)
2. Edit `post-install.js` to add the resources to be copied
3. Run `npm i` to run the script
4. Edit `layouts/partials/site-script.html` and/or `layouts/partials/site-style.html` to include the new resources
   1. If there are non-CSS/JS files (e.g. images, fonts), Hugo will not copy them by itself whne generating the site. A hack is provided in `layouts/partials/site-style.html` to bundle them anyway.
