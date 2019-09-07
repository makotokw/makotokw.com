---
title: "SyntaxHighlighter for Movable Type"
date: 2009-03-23
---

SyntaxHighlighter for Movable Type allows you to easily post syntax highlighted code all without loosing it’s formatting or making an manual changes on Movable Type 4 powered by [SyntaxHighlighter 2.0](http://alexgorbatchev.com/wiki/SyntaxHighlighter).

## Download

* version 0.1.1 (2009/10/04 updated)
  * [mt-SyntaxHighlighter_0.1.1.0910040.zip]({% download_url trac_attachments/MovableType/MTSyntaxHighlighter/mt-SyntaxHighlighter_0.1.1.0910040.zip %}) (within syntaxhighlighter 2.0.320)
* version 0.1.0 (2009/03/05 updated)
  * [mt-SyntaxHighlighter_0.1.0.090305.zip]({% download_url trac_attachments/MovableType/MTSyntaxHighlighter/mt-SyntaxHighlighter_0.1.0.090305.zip%}) (within syntaxhighlighter 2.0.296)

## Functions and Limitations

This plugin has the following functions.

* Added one tempalte tag and two text filters
* Install SyntaxHighlighter 2.0 to mt-static
* Use tempate tag instead of includeing css and javascript on html header
* Write raw source code in entry by using text filter
* Supported php dynamic publishing!

It also has the following problems oppositely.

* The entry dosen’t other text filter (ex. rich text editor)
* It is not supporeted the configuration of the SyntaxHighlighter
* Required Movable Type 4 (I have tested with 4.2x, 4.3x and 5.0beta)

## How to Use

#### 1. Download this plugin and copy to your mt directory.

#### 2. Add MTSyntaxHighlighterInclude tag to “HTML Header” tempates.

![](/assets/site/images/2009/mtsyntaxhighlighter_0.1_01en.jpg);

The MTSyntaxHighlighterInclude has brush and theme attributes. The brush attribute is required and the theme attribute is optional.

|attribute|SyntaxHighlighter 2.0|
|----|----|
|brush|as3, csharp, cpp, css, delphi, diff, groovy, jscript, perl, java, php, plain, powershell , python, ruby, scala, sql, vb, xml(Use CSV)|
|theme|default, django, emacs,fadetogrey,midnight, rdark|

#### 3. Create an Entry

Select *SyntaxHighlighter* or *SyntaxHighlighter + Convert Line Breaks* as Format

![](/assets/site/images/2009/mtsyntaxhighlighter_0.1_02en.jpg);

Write source code as following format:

```text
[code:language]
source code
[/code]
```

**language** is supported in Brush aliases.

|language|Brush name|File name|
|----|----|-----|
|as3,actionscript3|[ActionScript3](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:ActionScript3)|shBrushAS3.js|
|bash, shell|[Bash/shell](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Bash)|shBrushBash.js|
|c-sharp, csharp|[C#](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:CSharp)|shBrushCSharp.js|
|cpp, c|[C++](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Cpp)|shBrushCpp.js|
|css|[CSS](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:CSS)|shBrushCss.js|
|delphi, pas, pascal|[Delphi](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Delphi)|shBrushDelphi.js|
|diff, patch|[Diff](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Diff)|shBrushDiff.js|
|groovy|[Groovy](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Groovy)|shBrushGroovy.js|
|js, jscript, javascript|[JavaScript](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:JavaScript)|shBrushJScript.js|
|java|[Java](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Java)|shBrushJava.js|
|jfx, javafx|[JavaFX](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:JavaFX)|shBrushJava.js|
|perl, pl|[Perl](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Perl)|shBrushPerl.js|
|php|[PHP](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:PHP)|shBrushPhp.js|
|plain, text|[Plain Text](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Plain)|shBrushPlain.js|
|ps, powershell|[PowerShell](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:PowerShell)|shBrushPowerShell.js|
|py, python|[Python](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Python)|shBrushPython.js|
|rails, ror, ruby|[Ruby](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Ruby)|shBrushRuby.js|
|scala|[Scala](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:Scala)|shBrushScala.js|
|sql|[SQL](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:SQL)|shBrushSql.js|
|vb, vbnet|[Visual Basic](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:VB)|shBrushVb.js|
|xml, xhtml, xslt, html, xhtml|[XML](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Brushes:XML)|shBrushXml.js|

After publishing, the entry is displayed.

![](/assets/site/images/2009/mtsyntaxhighlighter_0.1_04.jpg);

(When theme attributes is *emacs*)

![](/assets/site/images/2009/mtsyntaxhighlighter_0.1_05.jpg);

## If you have already used the syntaxhighlighter 1.5

The syntaxhighlighter 2.0 changed the target html tag from version 1.5. You have to set “compatible with 1.5″ in settings.

![](/assets/site/images/2009/mtsyntaxhighlighter_0.1_07en.jpg)

See also: [http://alexgorbatchev.com/wiki/SyntaxHighlighter:Upgrading](http://alexgorbatchev.com/wiki/SyntaxHighlighter:Upgrading)

## License

**SyntaxHighlighter for Movable Type. Copyright (C) 2009 makoto_kw ( https://makotokw.com )**

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

[SyntaxHighlighter](http://alexgorbatchev.com/wiki/SyntaxHighlighter) is licenced under [LGPL 3](http://www.gnu.org/licenses/gpl-3.0.html).
Copyright (C) 2004-2009 Alex Gorbatchev.

> SyntaxHighlighter is donationware. If you are using SyntaxHighlighter 2.0 on your site or including it in your product, please donate.



