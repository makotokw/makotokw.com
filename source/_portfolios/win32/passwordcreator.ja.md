---
layout: portfolio
lang: ja
title: PasswordCreator
category: Win32
date: 2008-12-28
active: false
---
PasswordCreator は乱数を使ってパスワードを作成するアプリケーションです。 

システム管理者をやっているとユーザに仮パスワードを与えたいことがあります。人数の少ない環境では、ユーザの名前をパスワードにしてしまうこともありますが悪意のあるユーザが他人のアカウントでログインすることも考えられます。しかし、実際適当なパスワードを作るというのも意外に難しいものです。 

PasswordCreator はそんなとき乱数を使って自動でパスワードを作成してくれます。数値やアルファベットの出現比を決めることができるのでいろいろな用途で PasswordCreator が役に立つと思います。 

※ V1.3より一括作成機能を追加しました。

## ダウンロード

* [pascre130.zip ( 124 KB (127,373 byte ) )]({% download_url trac_attachments/PasswordCreator/pascre130.zip %}) Ver1.30 2007.01.01 Update
* [ミラー(vector)](http://www.vector.co.jp/soft/win95/util/se314651.html)

|インストール方法|上のファイルをダウンロードして解凍してください。あとは解凍してできたフォルダの中の実行ファイルを実行するだけです。レジストリはいじっていません。|
|対応 OS|Windows 98/Me/NT4.0/2000/XP|
|必要ランタイム|なし|
|開発言語|Microsoft Visual Studio .NET 2003 SP1|


## 掲載情報

|日付|雑誌|バージョン|
|2004.04.01|SHINYUSYA 『Windows100% 04』|Ver1.20|
|2003.11.08|enter brain 『フリーフェア500 2003 Autumn』|Ver1.00|
|2002.11.18|ASCII 『WindowsPower12月号』|Ver1.00|
|2002.03.11|宝島社 『セキュリティ500技全書』|Ver1.00|

## 更新履歴

* Ver1.30 (2007.01.01)
  * [pascre130.zip ( 124 KB ( 127,373 byte ) )]({% download_url trac_attachments/PasswordCreator/pascre130.zip %})
  * タブオーダーを整理
  * 作成時にクリップボードにコピーするように変更
  * 一括作成機能を追加
  * MFC ランタイムのリンクをスタティックに
    * MFC6.0がWin2000/IE6から入っているので共有に変更したが、.NET 2003によりMFC7.1になったため
* Ver1.20 (2004.01.11)
  * [pascre120.zip ( 7,705 byte )]({% download_url trac_attachments/PasswordCreator/pascre120.zip %})
  * 連続でパスワードを生成すると同じものが2回できるバグ修正
  * その他コード見直し＆ Unicode ビルド対応
  * MFC ランタイムを共有 DLL でビルド
* Ver1.10 (2002.12.16)
  * [passcre110.lzh ( 109,208 byte )]({% download_url trac_attachments/PasswordCreator/passcre110.lzh %})
  * 記号を文字列に含める
  * 出現比が 10 以上設定できない点を修正
* Ver1.00 (2001.09.28)
  * [passcre100.lzh ( 110,050 byte )]({% download_url trac_attachments/PasswordCreator/passcre100.lzh %})
 * 初公開バージョン
