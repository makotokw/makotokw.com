---
layout: portfolio
lang: ja
title: VoiceClientOcx
category: Win32
date: 2008-12-28
active: false
---
VoiceClient ActiveX コントロールは DirectX8 の DirectPlayVoice を使った音声クライアント機能を持った ActiveX コントロールです。 DirectPlayVoice によって音声圧縮、音声合成が利用でき複数人数での音声通信が可能です。音声サーバは Visual C++ で作成したものがあるのでそれを使ってください。 

## ダウンロード

* Ver1.00 2002.12.16 Update
  * [vcctrl100.lzh ( 26,683 byte )]({% download_url trac_attachments/VoiceClientOcx/vcctrl100.lzh %}) ：本体
  * [vsdx8dpv100.lzh ( 19,003 byte )]({% download_url trac_attachments/VoiceClientOcx/vsdx8dpv100.lzh %}) ：音声サーバ
  * [vbsmvc100.lzh ( 9,325 byte )]({% download_url trac_attachments/VoiceClientOcx/vbsmvc100.lzh %}) ：Visual Basic サンプルプログラム

## インストール方法

上のファイルをダウンロードして解凍してください。 

なおActiveX コントロールを使用するにはコントロールの登録が必要です。 Visual Basicではコントロールを参照すると自動で登録されます。手動で登録または、削除を行うには ``regsvr32.exe`` を使用します。 ( ``regsvr32.exe`` は Visual Studio と共にインストールされます。)

コマンドプロンプトなどで
``regsvr32 コントロールのファイル名( フルパス名＆ショートファイル名 )``で登録。
``regsvr32 /u コントロールのファイル名( フルパス名＆ショートファイル名 )``で削除します。

また、解凍して出来たファイルにこのコマンドを記述したバッチファイル ``_Regist.bat``、``_UnRegist.bat``がありますので、これを使ってもらっても構いません。

## 対応 OS

* Windows 98/Me/NT4.0/2000/XP

## 必要ランタイム

* MFC 6.0 ランタイム 
* DirectX8 以上 

## 開発言語

* Microsoft Visual C++ 6.0 & SP5 
* DirectX SDK 8

## 更新履歴

* Ver1.00 (2002.12.16)
  * [vcctrl100.lzh ( 26,683 byte )]({% download_url trac_attachments/VoiceClientOcx/vcctrl100.lzh %}) ：本体
  * [vsdx8dpv100.lzh ( 19,003 byte )]({% download_url trac_attachments/VoiceClientOcx/vsdx8dpv100.lzh %}) ：音声サーバ
  * [vbsmvc100.lzh ( 9,325 byte )]({% download_url trac_attachments/VoiceClientOcx/vbsmvc100.lzh %}) ：Visual Basic サンプルプログラム

