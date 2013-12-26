---
layout: portfolio
lang: ja
title: MyGoogleCalendar
category: Yahoo Widget
date: 2009-07-07
active: false
---
Google カレンダーの予定を表示するWidgetです。

![]({% download_url trac_attachments/MyGoogleCalendar/MyGoogleCalenadar_1.0.1_ja.png %})


* Version 1.0.2 (2009/07/07)
  * 機能変更
   * アイコン、カラー設定をすべてテーマ設定へ移動
   * カスタムテーマに対応
   * Google Calendarを開く機能を追加
   * カレンダーのフィルタを実装
   * Johnのテーマを更新
  * 不具合修正
   * 非選択のカレンダーの予定が表示される不具合を修正
   * 終日の予定が日をまたがって表示される不具合を修正
  * 制限事項
    * カレンダーリストが取得できないことがある（原因調査中）
    * 予定の編集は新規作成は未対応
  * ダウンロード
   *  [MyGoogleCalendar_yw_1.0.2_200907071.zip]({% download_url trac_attachments/MyGoogleCalendar/MyGoogleCalendar_yw_1.0.2_200907071.zip %}(Yahoo! Widget)

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

## History
* Version 1.0.2 (2009/07/07)
  * 機能変更
   * アイコン、カラー設定をすべてテーマ設定へ移動
   * カスタムテーマに対応
   * Google Calendarを開く機能を追加
   * カレンダーのフィルタを実装
   * Johnのテーマを更新
  * 不具合修正
   * 非選択のカレンダーの予定が表示される不具合を修正
   * 終日の予定が日をまたがって表示される不具合を修正
  * 制限事項
    * カレンダーリストが取得できないことがある（原因調査中）
    * 予定の編集は新規作成は未対応
  * ダウンロード
   *  [MyGoogleCalendar_yw_1.0.2_200907071.zip]({% download_url trac_attachments/MyGoogleCalendar/MyGoogleCalendar_yw_1.0.2_200907071.zip %}(Yahoo! Widget)
* Version 1.0.0 (2009/05/01)
  * 詳細
    * Yahoo! Widget版のみリリース
  * ダウンロード
   *  [MyGoogleCalendar_yw_1.0.0_200905010.zip]({% download_url trac_attachments/MyGoogleCalendar/MyGoogleCalendar_yw_1.0.0_200905010.zip %}(Yahoo! Widget)

## See Also
* http://widgets.yahoo.co.jp/ Yahoo! Widgets
* http://widgets.yahoo.co.jp/gallery/detail.html?wid=10509

## License
This code is released under the BSD License.

## Author & Copyright

Copyright 2009, makoto_kw 