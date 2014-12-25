---
layout: portfolio
lang: ja
title: MTmylo
category: Movable Type
date: 2008-09-07
active: false
---
MTmyloは管理ページのテンプレートをmylo用に差し替え、myloで撮影した写真付きブログを簡単に書くためのプラグインです。基本的にmylo 2号機(COM2)への対応で、本プラグインはiPhone/iPod touch用のプラグインである[iMT](http://plugins.movabletype.org/imt/)をベースに画像アップロード機能を追加したものになっています。( 本プラグインは2008/07/11に行われた[Movable Type Japan Hackathon Vol.3](http://www.movabletype.jp/blog/report_mt_hack-a-thon_080126.html)にて作成しました  )

## インストール

1. 下記アーカイブをダウンロードする
 * Movable Type 4.x: [mt-MTmylo_0.10.zip]({% download_url trac_attachments/MovableType/MTmylo/mt-MTmylo_0.10.zip %})
1. 解凍し、mtディレクトリに上書きする

## 設定

MTmyloでは画像のアップロードをプラグインの設定を元に自動化しています。そのため事前に画像アップロード時のファイルオプションを設定してください。

1. (PC上で)Movable Typeにログインし、設定 -> プラグイン -> MTmyloを開く
1. 設定タブをクリックし、各種項目を設定する

## 利用方法

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

## License

This code is released under the Artistic License. The terms of the Artistic License are described at [http://www.perl.com/language/misc/Artistic.html](http://www.perl.com/language/misc/Artistic.html).

## Author & Copyright

Copyright 2008, makoto_kw 

