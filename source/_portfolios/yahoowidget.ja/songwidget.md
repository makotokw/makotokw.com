---
layout: portfolio
lang: ja
title: SongWidget
category: Yahoo Widget
date: 2009-07-29
active: false
---
とにかく世の音楽プレーヤーアプリとWebサービスをつなげてやろうという試み。とりあえずはYahoo! Widgetで作っています。

![]({% download_url trac_attachments/SongWidget/SongWidget_yw_0.2.0_200704300.png %})

## 最新バージョン

* Version 0.3.3 (2009/07/28)
  * download
    * [SongWidget_yw_0.3.3_200907280.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_0.3.3_200907280.zip %})
  * Fixes
    * WMPでサムネイルが表示されない不具合を修正
    * WMPの再生モードの変更の不具合を修正
    * 検索時のアルバムからのDisc No除去を改善
    * Amazon APIの呼び出し回数を削減
  * Changes
    * Amazon Product Advertising API 対応
    * Yahoo Music Jukebox対応をドロップ
    * Yahoo Widget 4.5に対応
    * prototype.jsベースからExtJS Core 3.0ベースに変更
    * WindowsでCOMのイベントハンドリングを再開

## 対応状況

### Player
 
|アプリ|Yahoo(Win)|Yahoo(Mac)|note|
|iTunes|○(0.1-)|○(0.1-)|-|
|Windows Media Player|○(0.1-)|-|-|
|Yahoo Music Jukebox|○(0.1.1-0.3.2)|-|-|
|Mora Top 100|○(0.2-)|-|内部的にはWindows Media Playerで再生|
|winamp|対応中|-|-|
|MusicMatch Jukebox|技術調査中|-|-|
|Foobar|技術調査中|-|-|
|SonicStage|対応検討中|-|-|
|Songbird|技術調査中|-|-|
|jetAudio|技術調査中|-|-|
|BeatJam|技術調査中|-|-|

### WebService

|WebService|note|
|Amazon|アルバムのレビューコメント取得、商品情報取得、似た商品の取得|
|YouTube|アルバムの動画検索|

## History

* Version 0.3.2(2008/10/02)
  * download
    *  [SongWidget_yw_win_0.3.2_200810020.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_win_0.3.2_200810020.zip %})(Yahoo! Widget for Windows)
    *  [SongWidget_yw_mac_0.3.2_200810020.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_mac_0.3.2_200810020.zip %})(Yahoo! Widget for MacOSX)
  * functions
    * 再生モード(Repeat/Shuffle)の変更に対応
    * Moraの再生でShuffleに対応
  * bugfix
    * AmazonのResponseが文字化けする不具合を修正
    * AmazonInfomationのジャケット画像が表示されない不具合を修正
    * AmazonInfomationで評価が0のときに画像なしアイコンになる不具合を修正
    * WindowsにおいてiTunesのCoverArtが表示されない不具合を修正
    * 透過画像でクリックし辛いアイコンに対してtracking="rectangle"を指定

* Version 0.3.1(2008/02/28)
  * download
    * [SongWidget_yw_win_0.3.1_200802280.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_win_0.3.1_200802280.zip %})(Yahoo! Widget for Windows)
    * [SongWidget_yw_mac_0.3.1_200802280.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_mac_0.3.1_200802280.zip %})(Yahoo! Widget for MacOSX)
  * bugFix
    * iTunes for WindowsでPlaylogを送信していなかったバグを修正

* Version 0.3.0 (2007/12/25)
  * download
    * [SongWidget_yw_win_0.3_200712250.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_win_0.3_200712250.zip %})(Yahoo! Widget for Windows)
    * [SongWidget_yw_mac_0.3_200712250.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_mac_0.3_200712250.zip %})(Yahoo! Widget for MacOSX)
  * functions
    * 再生履歴のアップロード
  * bugfix
    * リファクタリング
    * セキュリティ問題の修正

* Version 0.2.0 (2007/04/30)
  * functions
   * 初回起動時にセットアップウィザード表示
   * アルバム情報の切り替えパネル表示
   * Mora Top 100対応

* Version 0.1.1 (2006/10/25)
  * download
    * [SongWidget_yw_win_0.1.1_200610250.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_win_0.1.1_200610250.zip %})(Yahoo! Widget for Windows)
    * [SongWidget_yw_mac_0.1.1_200610250.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_mac_0.1.1_200610250.zip %})(Yahoo! Widget for MacOSX)
  * functions
    * 音量設定を追加した
    * Mac版iTunesでジャケットの表示を可能にした
    * Mac版iTunesでPlaylist選択を可能にした
    * Yahoo Music Jukebox対応

* Version 0.1.0 (2006/10/16)
  * download
   * [SongWidget_yw_win_0.1.0_200610160.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_win_0.1.0_200610160.zip %})(Yahoo! Widget for Windows)
   * [SongWidget_yw_mac_0.1.0_200610160.zip]({% download_url trac_attachments/SongWidget/SongWidget_yw_mac_0.1.0_200610160.zip %})(Yahoo! Widget for MacOSX)
  * functions
    * iTunes/Windows Media Playerのコンテンツを再生
    * 全曲シャッフル再生
    * プレイリストを選択して再生
    * 再生曲のジャケット、アーティスト、アルバム、曲タイトルの表示
    * 再生時間、残り再生時間、曲の演奏時間の表示
    * アーティスト/アルバム/トラック名によるAmazon/Google/YouTube検索
    * シャッフル再生に対応（起動時および、一周ごとに実行）
    * 再生曲に関係する情報の表示
      * Amazonの商品表示
      * Amazonの似た商品表示
      * Amazonのレビューコメント表示
      * YouTubeのビデオ表示
  * limitation
    * デザインおよび色は仮
    * iTunes使用時にiTunesが起動する(iTunesCOMSDKの仕様)
    * Windows Media Playerを使用時にジャケットが表示されない
    * MacOS版のiTunesを使用時にジャケットが表示されない
    * MacOS版のWindows Media Playerには未対応
    * Shuffle/Repeatの変更ができない
    * Seek機能がない
    * 音量変更機能がない
    * Skin切り替えは未実装

## License

This code is released under the new BSD License.

## Author & Copyright

Copyright 2006-2009, makoto_kw 