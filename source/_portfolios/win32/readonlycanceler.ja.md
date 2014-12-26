---
layout: portfolio
lang: ja
title: ReadOnlyCanceler
category: Win32
date: 2008-12-30
active: false
---
(たぶん今はOSレベルでできるのでこんなアプリは要らないはず)

D&D ReadOnlyCanceler は、Lhasa 風 ファイルドロップで読み取り専用属性を解除するソフトです。 

CD-ROM からコピーしたファイルはすべて読取専用ファイルになっています。そのためファイルの編集ができなかったり、設定ファイルなどの書き込みができないためアプリケーションが動作しなかったりといろいろ不具合が発生します。 

そこで、手軽に読取専用属性を設定できないかと考え、 Lhasa のようにファイルをドラッグ＆ドロップしただけで解除できるソフトがあれば楽だろうなと思いこのソフトをつくりました。 

## ダウンロード

* [rocancel120.zip ( 8,405 byte )]({% download_url trac_attachments/ReadOnlyCanceler/rocancel120.zip %}) 2004.01.11 Update
* [ミラー(vector)](http://www.vector.co.jp/soft/win95/util/se207261.html)

|インストール方法|上のファイルをダウンロードして解凍してください。あとは解凍してできたフォルダの中の実行ファイルを実行するだけです。レジストリはいじっていません。 |
|対応 OS|Windows 98/Me/NT4.0/2000/XP|
|必要ランタイム|なし(Ver1.10まではMFC 6.0 ランタイムが必要)|
|開発言語|Microsoft Visual C++ 6.0 & SP5|

## 掲載情報

|日付|雑誌|バージョン|
|2003.11.08|enter brain 『フリーフェア500 2003 Autumn』|Ver1.00|
|2002.11.18|ASCII 『WindowsPower12月号』|Ver1.00|
|2001.11.13|『Windows100% 12月号』|Ver1.00|

## 更新履歴

* Ver1.20 (2004.01.11)
  * [rocancel120.zip ( 8,405 byte )]({% download_url trac_attachments/ReadOnlyCanceler/rocancel120.zip %})
  * リソース見直し
  * 内部処理見直しで若干の高速化
  * Unicode ビルド対応
  * MFC ランタイムを共有 DLL でビルド
* Ver1.10 (2002.08.20)
  * [ddroc110.lzh ( 114,911 byte )]({% download_url trac_attachments/ReadOnlyCanceler/ddroc110.lzh %})
  * ドロップしたフォルダの属性の変更ができなかった点を修正
  * コンパイラの Visual C++ の SP4 を SP5 にする
* Ver1.00 (2001.08.28)
  * [ddroc100.lzh ( 114,716 byte )]({% download_url trac_attachments/ReadOnlyCanceler/ddroc100.lzh %})
  * 初公開バージョン

