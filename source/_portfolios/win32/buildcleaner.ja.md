---
layout: portfolio
lang: ja
title: BuildCleaner
category: Win32
date: 2008-12-28
active: false
---
Microsoft Visual C++ でビルドを行うと各ソースファイルやリソースファイルに対して中間ファイルが生成されます。この中間ファイルを生成することで次回からのビルドでは変更があったファイルのみ中間ファイルを作成すればよく、ビルドに掛かる時間を短縮することができます。 

しかし、これらの中間ファイルは非常にディスク容量をとります。中間ファイルは消してしまっても、ビルドすればまた作成できるので頻繁にビルドを繰り返すことがないなら削除してしまった方が良いのです。 

BuildClearnerを使えば、指定されたフォルダから中間ファイルを検索して削除することができハードディスクを有効に使えます。

## ダウンロード

* [bcleaner130.zip ( 23,320 byte )]({% download_url trac_attachments/BuildCleaner/bcleaner130.zip %}) 2004.01.11 Update
* [ミラー(vector)](http://www.vector.co.jp/soft/win95/prog/se207027.html)

|インストール方法|上のファイルをダウンロードして解凍してください。あとは解凍してできたフォルダの中の実行ファイルを実行するだけです|
|対応 OS|Windows 98/Me/NT4.0/2000/XP|
|必要ランタイム|なし|
|開発言語|Microsoft Visual C++ 6.0 & SP5|

## 雑誌掲載

|日付|雑誌|バージョン|
|2003.11.08|enter brain 『フリーフェア500 2003 Autumn』|Ver1.22|
|2002.11.18|ASCII 『WindowsPower12月号』|Ver1.22|

## 更新履歴

* Ver1.30 (2004.01.11)
  * [bcleaner130.zip ( 23,320 byte )]({% download_url trac_attachments/BuildCleaner/bcleaner130.zip %})
  * マルチユーザ対応
  * 検索フォルダの履歴の保存機能を追加(レジストリを使用)
* Ver1.22 (2001.10.10)
  * [bucle122.lzh ( 21,008 byte )]({% download_url trac_attachments/BuildCleaner/bucle122.lzh %})
  * リストビューの選択を一行選択にする
  * 読み取り専用ファイルが削除できないバグを修正
  * bscファイルに対応
* Ver1.21 (2001.08.25)
  * [bucle121.lzh ( 20,598 byte )]({% download_url trac_attachments/BuildCleaner/bucle121.lzh %})
  * 初公開バージョン


