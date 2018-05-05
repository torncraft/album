# slideshow
Slideshow of images from Torncraft

All this does is runs `script.js` inside your browser, which
loads the metadata in `meta.yml` and puts the images inside the
html document on load.

## Adding new images

- Put images in `images/` directory
- Edit `meta.json` and add screenshots in the same format.
    * the `time` key is milliseconds since unix epoch in UTC.
    * `author` is who took the picture. Caption credits can go in
      the caption itself, or at the top of `index.html`.
    * `caption` is a caption to go under the picture, providing
      some context.

You can verify that it works by cloning this repo and running it
in a web server. If you have Python 3, you can simply navigate to
the repo dir and do:

```bash
python -m http.server
```

You won't see the CSS since that's stored in the
[main repo](https://github.com/torncraft/torncraft.github.io).
If you wish to see that when testing, clone that repo first and
then clone this one inside that.
