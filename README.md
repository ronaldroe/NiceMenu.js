NiceMenu.js
===========

Similar to Mean Menu, but supports multiple menus

 * Requires jQuery.
 * Performs a function similar to meanmenu, but combines multiple menus into one mobile menu.
 * Parameters:
 ** selectors (string) *required - jQuery-style, comma-separated selectors in a single string. Pass selectors as the parent of the unordered list that contains the menu items. Works best if the parent is a nav element.
 ** winSize (integer) *optional - Integer-based viewport max width in pixels. Default: 640
 * Include script plus included CSS. Call the function using both $(window).load() and $(window).resize(). $(document).ready() is not currently supported.

###Example
2 menus, one inside nav.mainmenu, the other inside nav.footermenu.

```javascript
    $(window).load(function(){
        niceMenu('nav.mainmenu, nav.footermenu');
    }
    $(window).resize(function(){
        niceMenu('nav.mainmenu, nav.footermenu');
    }
```

