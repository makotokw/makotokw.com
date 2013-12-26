---
layout: portfolio
lang: ja
title: MTmylo
category: Movable Type
date: 2008-09-07
active: false
---

MTmyloは管理ページのテンプレートをmylo用に差し替え、myloで撮影した写真付きブログを簡単に書くためのプラグインです。基本的にmylo 2号機(COM2)への対応で、本プラグインはiPhone/iPod touch用のプラグインである[[iMT](http://plugins.movabletype.org/imt/)]をベースに画像アップロード機能を追加したものになっています。
( 本プラグインは2008/07/11のMovable Type Japan Hackathon Vol.3にて作成しました http://www.movabletype.jp/blog/report_mt_hack-a-thon_080126.html )

```html
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<div style="float:left;">
<input type="image" src="https://www.paypal.com/en_US/i/btn/x-click-but04.gif" border="0" name="submit" alt="お支払いはPayPalで - 迅速、無料、安全です">
<img alt="" border="0" src="https://www.paypal.com/ja_JP/i/scr/pixel.gif" width="1" height="1">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
</div>
<div style="float:left;color:#333333; width:32em;">
本ソフトウェアは個人用・商用を問わず無償で提供しています。継続的な開発をご支援くださる方はご寄付をご考慮ください。
</div>
<div style="clear:both;"></div>
</form>
```

## インストール

1. 下記アーカイブをダウンロードする
   * Movable Type 4.x  => [mt-MTmylo_0.10.zip]({% download_url trac_attachments/MovableType/MTmylo/mt-MTmylo_0.10.zip %}
1. 解凍し、mtディレクトリに上書きする

## 設定

MTmyloでは画像のアップロードをプラグインの設定を元に自動化しています。そのため事前に画像アップロード時のファイルオプションを設定してください。

1. (PC上で)Movable Typeにログインし、設定 -> プラグイン -> MTmyloを開く
1. 設定タブをクリックし、各種項目を設定する

## 利用方法

(myloでキャプチャがとれないためfirefoxで表示しています)

1. Movable Typeにログインすると管理画面が開きます

1. 新しいブログ記事の作成を選択すると、記事の編集画面が開きます


   * "本文"、"続き"、の下に画像アップロードリンクがあります
1. "新しい画像をアップロード"を押すとフレームが表示されます

1. 画像を選択して、アップロードボタンを押すと画像がアップロードされます

1. アップロードされるとプラグインの設定で本文に画像を表示するhtmlが追加されます

## 既知の不具合 & 課題

1. mylo 1号機(COM1)では未確認
1. 新規画像しか本文に追加できないので、既存画像を追加できるようにする

## 更新履歴

* ver 0.10 2008/07/14
  * 初リリース

## See Also

## License
This code is released under the Artistic License. The terms of the Artistic License are described at http://www.perl.com/language/misc/Artistic.html. 

## Author & Copyright

Copyright 2008, makoto_kw 

