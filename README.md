# pxvwpc
This is updated from [postcss-px-to-vw](https://www.npmjs.com/package/postcss-px-to-vw),
and I add some trick because I just need some new file  use this plugin


## How to use

### Start scan this file by add some code
```
  /*to-vw*/
```
>You must add this code on top of this file

### Ignore some line in one file

The source code is :
```
 /*to-vw*/
.title {
  /* you can override pixel replacement by adding a "px" *
   * comment after the declaration if you want to keep.  */

  font-size: 32px; /*px*/
  padding: 16px 0 18px;
}
```
The result is :
```
 /*to-vw*/
.title {
   /* you can override pixel replacement by adding a "px" *
   * comment after the declaration if you want to keep.  */

  font-size: 32px; /*px*/
  padding: 4.444444444444445vw 0 5vw;
}
```

### If you want change your UI width

Plug it into your PostCSS configuration.

```
var option = {
  uwUnit: 1920, // Base designer size; 1920px by default
};

postcss([require('postcss-px-to-vw')(option)])
```
