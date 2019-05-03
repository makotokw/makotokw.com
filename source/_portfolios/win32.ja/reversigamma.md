---
title: ReversiGamma
date: 2008-12-28
active: false
---
オセロ(オセロという名称は元ツクダオリジナル(現パルボックス)が権利を持っています)風リバーシゲームです。このソフトは、Visual C++ を使って作った初めてのアプリケーションです。 1999 年に作り、2 年間以上も放っていましたが、公開することにしました。

コンピュータはα-β探索で先読みしています。いろいろ問題があるかもしれませんが、暖かく見守ってください。

※V1.2以降で自分への戒め(?)として**ソースコードを添付してあります**、単に継承してみたかったからという理由によるクラス継承や、ビューやデータ管理が分離されていないなど、初心者の方は構成はあまり参考にしないほうが良いです。。。

## ダウンロード

* [greversi1202.zip( 158 KB ( 162,621 byte ) )]({% download_url trac_attachments/ReversiGamma/greversi1202.zip %}) 2007.01.10 Update
* [ミラー(vector)](http://www.vector.co.jp/soft/win95/game/se419363.html)

|インストール方法|上のファイルをダウンロードして解凍してください。あとは解凍してできたフォルダの中の実行ファイルを実行するだけです。レジストリはいじっていません。 |
|対応 OS|Windows 98/Me/NT4.0/2000/XP|
|必要ランタイム|なし(Ver1.10まではMFC 6.0 ランタイムが必要)|
|開発言語|Microsoft Visual Studio .NET 2003 SP1|

## 掲載情報

|日付|雑誌|バージョン|
|2003.11.08|enter brain 『フリーフェア500 2003 Autumn』|Ver1.00|
|2002.11.18|ASCII 『WindowsPower12月号』|Ver1.00|

## 更新履歴

* Ver1.2.2 (2007.01.10)
  * [greversi1202.zip( 158 KB (162,621 byte) )]({% download_url trac_attachments/ReversiGamma/greversi1202.zip %})
  * Net 2003でビルド
  * XP Luna Sytleに対応
  * オプションダイアログのタブオーダーを整理
  * MFC ランタイムのリンクをスタティックに
* Ver1.10 (2004.01.11)
  * [othello110.zip ( 12,018 byte )]({% download_url trac_attachments/ReversiGamma/othello110.zip %})
  * コード見直し
  * ウィンドウのリサイズを可能にしました
  * 情報表示をなくしました
  * MFC ランタイムを共有 DLL でビルド
* Ver1.00 (2001.10.09)
  * [checker100.lzh ( 142,864 byte )]({% download_url trac_attachments/ReversiGamma/checker100.lzh %})
  * 初公開バージョン
  * MFC 6.0 ランタイムが不要
