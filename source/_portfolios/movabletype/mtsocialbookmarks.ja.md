---
layout: portfolio
lang: ja
title: MTSocialBookmarks
category: Movable Type
date: 2009-02-28
active: false
---

ソーシャルブックマーク用ボタンを表示するためのテンプレートタグを拡張するプラグインです。phpダイナミックパブリッシングにも対応しています。

こんな感じで表示されます。

![]({% download_url trac_attachments/MovableType/MTSocialBookmarks/mt-MTSocialBookmarks_0.10_01.gif %})

テンプレートはこんな風に書きます。(in "ブログ記事のメタデータ")

```xml
<$MTSBHatenaBookmark text="0" users="1" $>
<$MTSBBuzzurl text="0" users="1" $>
<$MTSBLivedoorClip text="0" users="1" $>
<MTIf name="entry_template">
 <$MTSBYahooBookmark text="0" users="1" $>
<MTElse>
 <$MTSBYahooBookmark text="0" $>
</MTIf>
<$MTSBPOOKMARKAirlines text="0" $>
<$MTSBSaaf text="0" $>
<$MTSBNftyClip text="0" $>
<$MTSBDelicious text="0" $>
<$MTSBDigg text="0" $>
<$MTSBReddit text="0" $>
```

## インストール & 設定

1. 下記アーカイブをダウンロードする
   * Movable Type 4.x  => [mt-MTSocialBookmarks_0.1.4.zip]({% download_url trac_attachments/MovableType/MTSocialBookmarks/mt-MTSocialBookmarks_0.1.4.zip %}
1. 解凍し、mtディレクトリに上書きする

### バージョンアップ
* 0.1.4よりディレクトリ構成をドキュメントに沿い変更しました。0.1.3以下のバージョンをインストールされている場合は下記ディレクトリとファイルを一度削除してください
  * /path/to/mt/plugins/MTSocialBookmarks
  * /path/to/mt/mt-static/plugins/mtsocialmookmarks
  * /path/to/mt/php/plugins/function.mtsbbuzzurl.php
  * /path/to/mt/php/plugins/function.mtsbdelicious.php
  * /path/to/mt/php/plugins/function.mtsbdigg.php
  * /path/to/mt/php/plugins/function.mtsbhatenabookmark.php
  * /path/to/mt/php/plugins/function.mtsblivedoorclip.php
  * /path/to/mt/php/plugins/function.mtsbnftyclip.php
  * /path/to/mt/php/plugins/function.mtsbpookmarkairlines.php
  * /path/to/mt/php/plugins/function.mtsbreddit.php
  * /path/to/mt/php/plugins/function.mtsbsaaf.php
  * /path/to/mt/php/plugins/function.mtsbyahoobookmark.php


## テンプレートタグ仕様

サービス単位でテンプレートタグは別になっています。
```xml
<$MTSBxxxxxx image="1" text="1" users="1" domain="co.jp"$>
```
というように書きます。すべての引数（属性）は省略可能で
```xml
<$MTSBxxxxxx$>
```
とだけ書くこともできます。(アイコン画像だけが表示されます)

なおパーマリンクを取得するためMTSocialBookmakrsテンプレートタグはMTEntryブロック内で記述する必要があります。

### 属性

``image``
  値が0以外の場合にアイコン画像を表示する。
  表示する画像は ``mt-static/plugins/mtsocialbookmarks/`` にある画像になる。
  表示する画像サイズがプラグイン内にハードコーディングしてあるので
  画像ファイルの置き換えには注意すること。
  デフォルトは ``1`` (表示する)
``text``
  値が 0以外の場合にテキスト文字を表示する。
  表示するテキスト文字列は現在プラグインにハードコーディングしてある。
  デフォルトは ``0``(表示しない)
``users``
  値が0以外のエントリのブックマークした人数を表示する。
  このパラメータが利用できるのは一部のサービスだけである。
  デフォルトは ``0`` (表示しない)
``domain``
  複数地域でリリースされているサービスの場合に利用するドメイン文字列を入力する。
  現状はとりあえず無視してよい。


### テンプレートタグ一覧

|タグ|image(表示する画像)|text(表示する文字列)|users|domain(デフォルト)|note|
|MTSBHatenaBookmark|○("hatenabookmark.gif")|○("はてなBookmark")|○|-|はてなBookmark|
|MTSBBuzzurl|○("buzzurl.gif")|○("Buzzurl")|○|-|Buzzurl|
|MTSBLivedoorClip|○("livedoorclip.gif")|○("livedoorクリップ")|○|-|livedoorクリップ|
|MTSBYahooBookmark|○("yahoobookmarkjp.gif")|○("Yahoo!ブックマーク")|○*1|○("co.jp")|Yahoo!ブックマーク|
|MTSBPOOKMARKAirlines|○("pookmarkairk.gif")|○("POOKMARK Airlines")|-|-|POOKMARK Airlines|
|MTSBSaaf|○("saaf.gif")|○("Saaf")|-|-|Saaf|
|MTSBNftyClip*2|○("niftyclip.gif")|○("ニフティクリップ")|-|-|ニフティクリップ|
|MTSBDelicious|○("delicious.gif")|○("del.icio.us")|-|-|del.icio.us|
|MTSBDigg|○("digg.gif")|○("Digg")|-|-|"Digg|
|MTSBReddit|○("reddit.gif")|○("Reddit")|-|-|Reddit|

*1: Yahoo!ブックマークの人数取得APIでは現在表示されているページの人数を取りに行ってしまうため記事リストでは使えない。
Movable Type 4のデフォルトテンプレートであれば

```xml
<MTIf name="entry_template">
 <$MTSBYahooBookmark text="0" users="1" $>
<MTElse>
 <$MTSBYahooBookmark text="0" $>
</MTIf>
```

のように記述する必要がある。

*2: テンプレートタグ名に"if"が含まれるとphpダイナミックパブリッシングでエラーになるため
タグ名をMTSBNiftyClipではばく"i"を除いたMTSBNftyClipとしている。

## 記述例

1) アイコンおよびusersが使えるもの全部

```xml
<$MTSBHatenaBookmark text="0" users="1" $>
<$MTSBBuzzurl text="0" users="1" $>
<$MTSBLivedoorClip text="0" users="1" $>
<MTIf name="entry_template">
 <$MTSBYahooBookmark text="0" users="1" $>
<MTElse>
 <$MTSBYahooBookmark text="0" $>
</MTIf>
<$MTSBPOOKMARKAirlines text="0" $>
<$MTSBSaaf text="0" $>
<$MTSBNftyClip text="0" $>
<$MTSBDelicious text="0" $>
<$MTSBDigg text="0" $>
<$MTSBReddit text="0" $>
```

2) 英語サービスのみアイコン表示

```xml
<$MTSBDelicious text="0" $>
<$MTSBDigg text="0" $>
<$MTSBReddit text="0" $>
```

## 既知の不具合 & 課題

1. 文字コード全然考えていない(UTF8前提)、テキストタイトルは引数指定してもらうなど検討
1. 人数表示機能を増やす
1. 対応サービスの拡充

## 更新履歴

* ver 0.1.4 2009/02/26
  * プラグインのファイル構成を変更
   * Movable Type 4.x  => [mt-MTSocialBookmarks_0.1.4.zip]({% download_url trac_attachments/MovableType/MTSocialBookmarks/mt-MTSocialBookmarks_0.1.4.zip %})
* ver 0.1.3 2009/02/04
  * Yahoo!ブックマークのタグの不正を修正
   * Movable Type 4.x  => [mt-MTSocialBookmarks_0.1.3.zip]({% download_url trac_attachments/MovableType/MTSocialBookmarks/mt-MTSocialBookmarks_0.1.3.zip %})
* ver 0.1.2 2008/04/10
  * 出力するHTMLをXHTML Validに修正
   * Movable Type 4.0  => [mt-MTSocialBookmarks_0.1.2.zip]({% download_url trac_attachments/MovableType/MTSocialBookmarks/mt-MTSocialBookmarks_0.1.2.zip %})
* ver 0.1.0 2007/09/12
  * 初リリース
   * Movable Type 4.0  => [mt-MTSocialBookmarks_0.1.0.zip]({% download_url trac_attachments/MovableType/MTSocialBookmarks/mt-MTSocialBookmarks_0.10.zip %})

## License

This code is released under the Artistic License.
The terms of the Artistic License are described at [http://www.perl.com/language/misc/Artistic.html](http://www.perl.com/language/misc/Artistic.html).

## Author & Copyright

Copyright 2007-2009, makoto_kw 

