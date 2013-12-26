---
layout: portfolio
lang: ja
title: WPSmileVideo
category: WordPress
date: 2009-05-19
active: false
---

{% portfolio_url movabletype/mtsmilevideo.ja %}のWordPress版です。ほとんどのコードは再利用しています。

![]({% download_url trac_attachments/WordPress/WPSmileVideo/wp-smilevideo_0.1_02.jpg %})


## インストール & 設定

1. 下記アーカイブをダウンロードする  
   * [wp-smilevideo_0.1.0905190.zip]({% download_url trac_attachments/WordPress/WPSmileVideo/wp-smilevideo_0.1.0905190.zip %}
1. 解凍し、mtディレクトリに上書きする(マージする)
1. ブログの作成画面でテキストフィルタを使う
```xml
[nicovideo]sm3952414[/nicovideo]
```

![]({% download_url trac_attachments/WordPress/WPSmileVideo/wp-smilevideo_0.1_01.jpg %})


## cssの適応について

テンプレートタグWPSmileVideoからは実際には下記のようなhtmlが出力されます。

```xml
<div class="smilevideo-item">
<table border="0" cellpadding="4" cellspacing="0" style="margin-bottom:4px;">
<tr>
<td><a href="http://www.nicovideo.jp/" target="_blank"><img src="http://res.nicovideo.jp/img/thumb/logo_nico_w.gif" alt="ニコニコ動画"></a></td>
<td><img src="http://res.nicovideo.jp/img/thumb/txt_video.gif" alt="VIDEO"></td>
</tr>
</table>
<div style="padding:4px;">
<p class="TXT10">
再生：<strong>{view_counter}</strong>
コメント：<strong>{comment_num}</strong>
マイリスト：<strong>{mylist_counter}</strong>
</p>
<table border="0" cellpadding="0" cellspacing="0" summary="" style="margin-top:2px;">
<tr valign="top">
<td>
<p><a href="{watch_url}} target="_blank"><img alt="" src="{thumbnail_url}" class="video_img"></a></p>
<p class="TXT10" style="margin-top:2px;"><strong>{length}</strong></p>
</td>
<td style="padding-left:4px;">
<p class="TXT10">
<strong>{first_retrieve}</strong> 投稿
</p>
<p class="TXT12"><a href="{watch_url}" target="_blank" class="video">{title}</a></p>
<p class="TXT10">{description}</p>
</td>
</tr>
</table>
<div class="video_res">{last_res_body}</div>
</div>
</div>
```

## 既知の不具合 & 課題

1. 文字コード全然考えていない(UTF8前提)

## 更新履歴

* ver 0.1 2009/05/19
  * 初リリース

## See Also

## Author & Copyright

Copyright 2008-2009, makoto_kw 
