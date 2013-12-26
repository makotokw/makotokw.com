---
layout: portfolio
lang: ja
title: MylynExporter
category: Win32
date: 2008-02-02
active: false
---
Eclipseのタスク管理プラグインmylyn(旧名mylar)( http://www.eclipse.org/mylyn/ )のデータファイルをExcelに出力ツールです。
Tracなどを使って無く、個人のメモとして使っていたのですが、ある日人にタスクを見せたくなってエクセルに出力するコードを書いてみました。

## ダウンロード

* Version 1.0 2007/07/31 update
  * Binaries
    * [MylarExpoter1.0.200707310.zip]({% download_url trac_attachments/MylynExporter/MylarExpoter1.0.200707310.zip %}
  * SourceCode (C# .NET 2005 Project)
    * [MylarExpote_src_1.0.2007310r.zip]({% download_url trac_attachments/MylynExporter/MylarExpote_src_1.0.2007310r.zip %}

## 使い方

1. データファイルを解凍する
  * *ワークスペース\.mylar_'または'_ワークスペース\.metadata\.mylyn*にあるtasklist.xml.zipを解凍します
1. 解凍するとtasklist.xmlが現れます
  * MylarExpoter.exeを起動
  * 要.NET
1. _Export Excel_ボタンを押す
1. ファイルダイアログがでるのでtasklist.xmlを選択する
1. Excelが起動されワークシートにタスクが出力されている
  * 要Excel

## 必須なもの
*  Microsoft .NET Framework 2.0
* Microsoft Excel

## コードの仕組み

* C#でxmlファイルをそのままオブジェクトにunserializeして、あとはExcelのautomationにどかどかセルをつっこんでいるだけです
* タスクのうち出力するか否かをForm1.csの*private bool isExport(Task task)*で決められます。てきとうに変更してください・・・
