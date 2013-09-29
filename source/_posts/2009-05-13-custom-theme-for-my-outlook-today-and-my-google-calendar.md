---
layout: post
title: "Custom Theme for My Outlook Today and My Google Calendar"
category: "Product"
tag: ["Yahoo Widgets"]
date: 2009-05-13
---
(last updated) 2009-05-17

I would like to intoduce adding custom theme to widgets I developed.

"My Outlook Today" and "My Google Calendar" are calendar widgets. My Outlook Today 1.2 of and My Google Calendar have a function to change appearance. And My Outlook Today 1.2.1 and My Google Calendar 1.0.1 will search custom theme on widget folder when its start up.

## Custom Theme file structure

```
/MyWidgets/MyOutlookToday/theme  (/MyWidgets/MyGoogleCalendar/theme)
   /theme1      -- theme name. displayed on widget preferences.
      /theme.js   -- style settings
      /*.png     -- image files
```

MyWidgets folder is at C:\Users\{UserName}\Documents\My Widgets on Windows Vista, C: \Documents and Settings\{UserName}\My Documents\My Widgets  on Windows XP, or ~/Documents/Widgets on MacOSX.

## theme.js

theme.js is simply json data follow:

```
{
	padding:[0,0,0,0],  // padding for background
	defaultFont:'Catull', // default font 
	titleCss:{textAlign:'center'}, // header text style
	titleColor:['#9EA8AF',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}], // color, shadow settings
	textColor:['#808080',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	headerColor:['#514A4C',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	remainColor:['#f7d60a',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	emptyItemColor:['#808080',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	completedItemColor:['#DE7008',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	justbeforeItemColor:['#d92d29',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	currentItemColor:['#DADADA',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	footerColor:['#9EA8AF',{color:'#000000',vOffset:0,hOffset:-1,opacity:190}],
	apptIconColor:['#808080'], // Appointment colorize
	taskIconColor:['#EFA763','#6767F2','#808080','#EF5656'] // Done,Low,Normal,High for Task
}
```

image files are for background and icon. 

## background image files

background using 9 files (nine-grid) and 1 file(divider).

<table class="table table-bordered">
<tr>
<td>top_left.png<br/><img src="/assets/images/2009/dark/top_left.png"/></td>
<td>top.png<br/><img src="/assets/images/2009/dark/top.png"/></td>
<td>top_right.png<br/><img src="/assets/images/2009/dark/top_right.png"/></td>
</tr>

<tr>
<td>left.png<br/><img src="/assets/images/2009/dark/left.png"></td>
<td>center.png<br/><img src="/assets/images/2009/dark/center.png"/></td>
<td>right.png<br/><img src="/assets/images/2009/dark/right.png"/></td>
</tr>

<tr>
<td>bottom_left.png<br/><img src="/assets/images/2009/dark/bottom_left.png"></td>
<td>bottom.png<br/><img src="/assets/images/2009/dark/bottom.png"></td>
<td>bottom_right.png<br/><img src="/assets/images/2009/dark/bottom_right.png"></td>
</tr>

<tr>
<td colspan="3">line.png<br/><img src="/assets/images/2009/dark/line.png"/></td>
</tr>

</table>

Nine-grid rendering allows you to preserve the original dimensions of the corners (top_left, top_right, bottom_left, and bottom_right). The top and bottom are stretched horizontally only, and the sides left and right are stretched vertically only. The center is stretched in both dimensions.

## icon files

<table class="table table-bordered">
<tr><td><img src="/assets/images/2009/dark/icon_current.png"/></td><td>icon_current.png</td><td>current or near appointment</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_event.png"/></td><td>icon_event.png</td><td>event icon</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_task.png"/></td><td>icon_task.png</td><td>task icon</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_next.png"/></td><td>icon_next.png</td><td>arrow right</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_prev.png"/></td><td>icon_prev.png</td><td>arrow left</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_schedule.png"/></td><td>icon_schedule.png</td><td>calendar view icon(My Google Calander never use)</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_tasklist.png"/></td><td>icon_tasklist.png</td><td>task view icon(My Google Calander never use)</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_today.png"/></td><td>icon_today.png</td><td>today icon</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_back.png"/></td><td>icon_back.png</td><td>today icon to return</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_forward.png"/></td><td>icon_forward.png</td><td>today icon for return</td></tr>
<tr><td><img src="/assets/images/2009/dark/icon_loading.gif"/></td><td>icon_loading.gif</td><td>loading icon(My Outlook Today never use because it load sync)</td></tr>
</table>

## for example

I tried to create new theme named "wood".

<ol>
<li>create image files by Fireworks CS4 :)<br/><img src="/assets/images/2009/customtheme_03thm.jpg"/></li>
<li>copy style.js and image files to <em>C:\Users\makoto_kw\Documents\My Widgets\MyOutlookToday\theme\wood</em><br/> <img src="/assets/images/2009/customtheme_05thm.jpg"/></li>
<li>run My Outlook Today widget and open preferences<br/><img src="/assets/images/2009/customtheme_04thm.jpg"/></li>
<li>select wood at theme<br/><img src="/assets/images/2009/customtheme_06.jpg"/></li>
</ol>

That's all!

<a href="/assets/images/2009/wood.zip"><strong>sample theme download</strong></a>

I understand this function is very simple and is not usefule yet. Please let me know you have any problems , questions and ideas. # give me beautiful theme you designed also :)


