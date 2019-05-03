---
title: "highlightcode legacy style by Syntaxhighlighter Evolved"
category: "Product"
tag: ["WordPress"]
date: 2009-12-26
---
I was(am?) <a href="/portfolio/movabletype/syntaxhighlighter/">Syntaxhighlighter for Movable Type</a> author. I developed it because I never find Alex Gorbatchev Syntaxhighlighter plugin for Movable Type.

I used the Syntaxhighlighter Evolved on WordPress.  I have to make it apply to some entries of Movable Type. Then, I developed two plugins work with Syntaxhighlighter Evolved.

### 1) for Syntaxhighlighter for Movable Type

change Syntaxhighlighter for Movable Type style(code:lang) to Syntaxhighlighter Evolved style(code class="lang")

<script src="https://gist.github.com/253118.js?file=syntaxhighlighter-for-movable-type-to-evolved.php"></script>

### 2) for Legacy style (Syntaxhighlighter 1.5 style)

highlightcode ``<pre name="code" class="c"></pre>``
Syntaxhighlighter Evolved (2.3.6) dose not support legacy style. It needs to ugrade:
<a href="http://alexgorbatchev.com/wiki/SyntaxHighlighter:Upgrading">http://alexgorbatchev.com/wiki/SyntaxHighlighter:Upgrading</a>

<script src="https://gist.github.com/263869.js?file=syntaxhighlighter-for-legacy.php"></script>



