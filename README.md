# pass-ui-static

PASS is an application which provides a unified user interface that allow its users to deposit their manuscripts into multiple repositories as required by applicable funding agency's public access policies.

This repository holds most of the static assets used by the dynamic application ([`pass-ui` found here](https://github.com/eclipse-pass/pass-ui)). There are some important HTML pages that the Ember app links to. Also importantly, a configuration is defined here that can inform the Ember app about where various assets can be loaded.

```
pass-ui-static
  |- assets/
  |- fonts/
  |- img/
  |
  |- 404.html
  |- about.html
  |- contact.html
  |- faq.html
  |- index.html
  |- logout.html
  |
  |- favicon.ico
  |- config.json
```


### `config.json`

```
{
  "assetsUri": "/",
  "branding": {
    "homepage": "https://www.harvard.edu/",
    "logo": "img/logo-final.svg",
    "stylesheet": "assets/branding.css",
    "favicon": "favicon.ico"
  }
}
```

URLs in this file are relative to the project root

* `branding.homepage`: the logo will link here
* `branding.logo`: the image to use as the logo
* `stylesheet`: url where the branding stylesheet is located
* 'favicon': where Ember can find the favicon
