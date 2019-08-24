---
title: "Gravatar for Movable Type"
date: 2009-09-21
---
Displays the Gravatar image into comments by using [Gravator](http://gravatar.com/).

## Download

* Version 0.1 (2009/09/21 updated)
 * [mt-Gravatar_0.1.0909210.zip]({% download_url mt-Gravatar_0.1.0909210.zip %})

## Functions

* Adds ``MTCommentGravatar`` tag into MTComments
* Supported php dynamic publishing!

Outputs the image tag of the current avatar image by author's e-mail address.
This tag is only into ``<$mt:Comments$>``, and to display the image is required to register it by same e-mail address to the Gravatar.

|attribute|description|in default|
|:-----------|:------------|:------------:|
|rating|rating||
|size|size of image(between 1 and 512 pixels)|32|
|default|default image url||

### Source

```html
<mt:Comments>
<$mt:CommentGravatar$>
</mt:Comments>
```

### Output

```html
<img class="avatar avatar-32" width="32" height="32" src="https://www.gravatar.com/avatar.php?gravatar_id=d7c1272e4d1025a72ecb8f052fb58c3d&amp;size=32" alt="makoto_kw"/>
```

## License

This code is released under the Artistic License.
The terms of the Artistic License are described at [http://www.perl.com/language/misc/Artistic.html](http://www.perl.com/language/misc/Artistic.html).