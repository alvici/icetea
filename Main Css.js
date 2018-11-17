/*!

 =========================================================
 * Gaia Bootstrap Template - v1.0.1
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/gaia-bootstrap-template
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/gaia-bootstrap-template/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
 
/*      light colors         */
html {
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 100%;
}
@media (min-width: 58em) {
  body {
    font-size: 100%;
  }
}
@media (min-width: 115em) {
  body {
    font-size: 110%;
  }
}
@media (min-width: 125em) {
  body {
    font-size: 115%;
  }
}
@media (min-width: 145em) {
  body {
    font-size: 120%;
  }
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  body {
    font-feature-settings: normal;
    /* Internet Explorer fix */
  }
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6,
.content-blog p {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Cambo", "Times New Roman", serif;
}
h1 a,
.h1 a,
h2 a,
.h2 a,
h3 a,
.h3 a,
h4 a,
.h4 a,
h5 a,
.h5 a,
h6 a,
.h6 a,
.content-blog p a {
  font-size: inherit;
  font-family: "Cambo", "Times New Roman", serif;
}

.content-blog {
  padding: 30px 0;
}
.content-blog p {
  font-size: 18px;
  margin-bottom: 30px;
}

h1, .h1 {
  font-size: 3em;
  line-height: 1.213483146em;
  font-weight: bold;
}

h2, .h2 {
  font-size: 2.4em;
  line-height: 1.25;
  margin: 0.4em 0;
  font-weight: bold;
}

h3, .h3 {
  font-size: 1.61em;
  line-height: 1.05em;
  margin-top: 15px;
  margin-bottom: 15px;
}

h4, .h4 {
  font-size: 1.3em;
  line-height: 1.714285714em;
}

h5 {
  font-size: 1.2em;
}

p {
  font-size: 14px;
  line-height: 1.6em;
  font-weight: 400;
  margin: 0 0 .75em;
}

p,
label,
.btn,
.form-control,
.title h5,
.navbar,
.brand,
.btn-simple,
a,
.td-name,
td,
small,
.media h5,
.subtitle {
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

a {
  color: #777777;
  opacity: .7;
  font-size: 14px;
}
a:hover {
  color: #777777;
  opacity: 1;
}

.title {
  text-align: center;
  margin-bottom: 50px;
}
.title p {
  color: #777777;
}

.title-modern {
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 200;
}

.text-gray {
  color: #777777;
}

.text-primary {
  color: #374760 !important;
}

.text-info {
  color: #00abc0 !important;
}

.text-success {
  color: #7accb8 !important;
}

.text-warning {
  color: #f88f58 !important;
}

.text-danger {
  color: #e78b90 !important;
}

.text-gold,
.title-gold {
  color: #fc4f3f;
}

.quotes {
  position: relative;
  margin: 0 auto;
}
.quotes:before, .quotes:after {
  position: absolute;
  font-size: 40px;
  font-family: sans-serif;
  color: #777777;
  line-height: 0;
}
.quotes:before {
  content: "\201C";
  left: 0;
  top: 5px;
}
.quotes:after {
  content: "\201D";
  right: 0;
  bottom: -10px;
}

.separator {
  color: #374760;
  margin: 0 auto 20px;
  max-width: 240px;
  text-align: center;
  position: relative;
}
.separator:before, .separator:after {
  display: block;
  width: 40%;
  content: " ";
  margin-top: 10px;
  border: 1px solid #374760;
}
.separator:before {
  float: left;
}
.separator:after {
  float: right;
}

.separator-danger {
  color: #fc4f3f;
}
.separator-danger:before, .separator-danger:after {
  border-color: #fc4f3f;
}

p.description {
  font-size: 16px;
  color: #777777;
}

a:hover, a:focus {
  text-decoration: none;
}

a:focus, a:active,
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
select::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
  outline: 0;
}

.ui-slider-handle:focus,
.navbar-toggle {
  outline: 0 !important;
}

/*           Animations              */
.form-control,
.input-group-addon,
.tagsinput,
.navbar,
.navbar .alert {
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.tagsinput .tag,
.tagsinput-remove-link,
.filter,
.btn-hover,
[data-toggle="collapse"] i,
body > .navbar-collapse a {
  -webkit-transition: all 150ms linear;
  -moz-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  -ms-transition: all 150ms linear;
  transition: all 150ms linear;
}

.btn-morphing .fa,
.btn-morphing .circle,
.gsdk-collapse {
  -webkit-transition: all 370ms linear;
  -moz-transition: all 370ms linear;
  -o-transition: all 370ms linear;
  -ms-transition: all 370ms linear;
  transition: all 370ms linear;
}

.fa {
  width: 18px;
  text-align: center;
}

.margin-top {
  margin-top: 50px;
}

.better-browser {
  max-width: 700px;
  margin: 200px auto;
  text-align: center;
}

.better-browser div {
  margin-bottom: 10px;
}

.info-icon {
  text-align: center;
}
.info-icon .icon {
  font-size: 62px;
  line-height: 66px;
  color: #374760;
  margin-bottom: 10px;
}
.info-icon .description {
  margin-top: 15px;
  color: #777777;
}

.avatar {
  border: 3px solid #374760;
  border-radius: 50%;
  overflow: hidden;
  max-width: 110px;
  margin: 0 auto;
}
.avatar img {
  width: 100%;
  height: auto;
}

.avatar-danger {
  border-color: #fc4f3f;
}

*::selection {
  background: #fc4f3f;
  color: #FFFFFF;
}

.form-control {
  margin-bottom: 1.875em;
}

@-webkit-keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 0;
  }
}
.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

.loading {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1032;
  opacity: 1;
  transition: opacity 0.5s cubic-bezier(0.7, 0, 0.3, 1);
}
.loading.hide {
  display: none;
}
.loading .loading-container {
  z-index: 1033;
  display: block;
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.loading .loading-container .loader {
  width: 40px;
}
.loading .loading-container p {
  font-size: 30px;
  margin-bottom: 30px;
}

/* BUTTONS */
.btn-black i {
  position: absolute;
  top: 14px;
  right: 0.25em;
  opacity: 0;
}
.btn-black:hover i, .btn-black:focus i {
  right: 26px;
  opacity: 1;
}

/* BUTTONS */
.form-control {
  border-color: #d0cdbc;
}
.form-control:focus {
  border-color: #777777;
}

a,
.list-logos a img:first-child,
.section-clients-3 #clients-carousel li img:first-child,
.project-content .icon-close i, .nav-text > li.active a {
  -webkit-transition: all 150ms linear;
  -moz-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  -ms-transition: all 150ms linear;
  transition: all 150ms linear;
}

.btn,
.btn-black i,
.form-control::-webkit-placeholder {
  -webkit-transition: all 150ms ease-out;
  -moz-transition: all 150ms ease-out;
  -o-transition: all 150ms ease-out;
  -ms-transition: all 150ms ease-out;
  transition: all 150ms ease-out;
}

/*   end animation   */
.body-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 1030;
  background-color: rgba(0, 0, 0, 0.1);
  visibility: hidden;
  transition: all .1s ease;
}
.body-layer .open {
  visibility: visible;
}

.card .icon {
  font-size: 75px;
  line-height: 75px;
}
.card .icon ~ h3 {
  margin-top: 5px;
  margin-bottom: 0px;
}

.btn,
.navbar .navbar-nav > li > a.btn {
  border-width: 1px;
  background-color: transparent;
  font-weight: 600;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.6em;
  opacity: 0.8;
  filter: alpha(opacity=80);
  padding: 10px 20px;
  border-color: #888888;
  color: #888888;
  text-transform: uppercase;
}
.btn:hover, .btn:focus, .btn:active, .btn.active, .open > .btn.dropdown-toggle,
.navbar .navbar-nav > li > a.btn:hover,
.navbar .navbar-nav > li > a.btn:focus,
.navbar .navbar-nav > li > a.btn:active,
.navbar .navbar-nav > li > a.btn.active, .open >
.navbar .navbar-nav > li > a.btn.dropdown-toggle {
  background-color: transparent;
  color: #777777;
  border-color: #777777;
}
.btn:disabled, .btn[disabled], .btn.disabled,
.navbar .navbar-nav > li > a.btn:disabled,
.navbar .navbar-nav > li > a.btn[disabled],
.navbar .navbar-nav > li > a.btn.disabled {
  background-color: transparent;
  border-color: #888888;
}
.btn.btn-fill,
.navbar .navbar-nav > li > a.btn.btn-fill {
  color: #FFFFFF;
  background-color: #888888;
  opacity: 1;
  filter: alpha(opacity=100);
}
.btn.btn-fill:hover, .btn.btn-fill:focus, .btn.btn-fill:active, .btn.btn-fill.active, .open > .btn.btn-fill.dropdown-toggle,
.navbar .navbar-nav > li > a.btn.btn-fill:hover,
.navbar .navbar-nav > li > a.btn.btn-fill:focus,
.navbar .navbar-nav > li > a.btn.btn-fill:active,
.navbar .navbar-nav > li > a.btn.btn-fill.active, .open >
.navbar .navbar-nav > li > a.btn.btn-fill.dropdown-toggle {
  background-color: #777777;
  color: #FFFFFF;
}
.btn.btn-fill .caret,
.navbar .navbar-nav > li > a.btn.btn-fill .caret {
  border-top-color: #FFFFFF;
}
.btn .caret,
.navbar .navbar-nav > li > a.btn .caret {
  border-top-color: #888888;
}
.btn:hover, .btn:focus,
.navbar .navbar-nav > li > a.btn:hover,
.navbar .navbar-nav > li > a.btn:focus {
  opacity: 1;
  filter: alpha(opacity=100);
  outline: 0 !important;
}
.btn:active, .btn.active, .open > .btn.dropdown-toggle,
.navbar .navbar-nav > li > a.btn:active,
.navbar .navbar-nav > li > a.btn.active, .open >
.navbar .navbar-nav > li > a.btn.dropdown-toggle {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: 0 !important;
}
.btn.btn-icon,
.navbar .navbar-nav > li > a.btn.btn-icon {
  padding: 10px;
}

.btn-danger,
.navbar .navbar-nav > li > a.btn-danger {
  border-color: #fc4f3f;
  color: #fc4f3f;
}
.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle,
.navbar .navbar-nav > li > a.btn-danger:hover,
.navbar .navbar-nav > li > a.btn-danger:focus,
.navbar .navbar-nav > li > a.btn-danger:active,
.navbar .navbar-nav > li > a.btn-danger.active, .open >
.navbar .navbar-nav > li > a.btn-danger.dropdown-toggle {
  background-color: transparent;
  color: #e47a80;
  border-color: #e47a80;
}
.btn-danger:disabled, .btn-danger[disabled], .btn-danger.disabled,
.navbar .navbar-nav > li > a.btn-danger:disabled,
.navbar .navbar-nav > li > a.btn-danger[disabled],
.navbar .navbar-nav > li > a.btn-danger.disabled {
  background-color: transparent;
  border-color: #fc4f3f;
}
.btn-danger.btn-fill,
.navbar .navbar-nav > li > a.btn-danger.btn-fill {
  color: #FFFFFF;
  background-color: #fc4f3f;
  opacity: 1;
  filter: alpha(opacity=100);
}
.btn-danger.btn-fill:hover, .btn-danger.btn-fill:focus, .btn-danger.btn-fill:active, .btn-danger.btn-fill.active, .open > .btn-danger.btn-fill.dropdown-toggle,
.navbar .navbar-nav > li > a.btn-danger.btn-fill:hover,
.navbar .navbar-nav > li > a.btn-danger.btn-fill:focus,
.navbar .navbar-nav > li > a.btn-danger.btn-fill:active,
.navbar .navbar-nav > li > a.btn-danger.btn-fill.active, .open >
.navbar .navbar-nav > li > a.btn-danger.btn-fill.dropdown-toggle {
  background-color: #e47a80;
  color: #FFFFFF;
}
.btn-danger.btn-fill .caret,
.navbar .navbar-nav > li > a.btn-danger.btn-fill .caret {
  border-top-color: #FFFFFF;
}
.btn-danger .caret,
.navbar .navbar-nav > li > a.btn-danger .caret {
  border-top-color: #fc4f3f;
}

.btn-black,
.navbar .navbar-nav > li > a.btn-black {
  border-color: #333333;
  color: #333333;
}
.btn-black:hover, .btn-black:focus, .btn-black:active, .btn-black.active, .open > .btn-black.dropdown-toggle,
.navbar .navbar-nav > li > a.btn-black:hover,
.navbar .navbar-nav > li > a.btn-black:focus,
.navbar .navbar-nav > li > a.btn-black:active,
.navbar .navbar-nav > li > a.btn-black.active, .open >
.navbar .navbar-nav > li > a.btn-black.dropdown-toggle {
  background-color: transparent;
  color: #393b3d;
  border-color: #393b3d;
}
.btn-black:disabled, .btn-black[disabled], .btn-black.disabled,
.navbar .navbar-nav > li > a.btn-black:disabled,
.navbar .navbar-nav > li > a.btn-black[disabled],
.navbar .navbar-nav > li > a.btn-black.disabled {
  background-color: transparent;
  border-color: #333333;
}
.btn-black.btn-fill,
.navbar .navbar-nav > li > a.btn-black.btn-fill {
  color: #FFFFFF;
  background-color: #333333;
  opacity: 1;
  filter: alpha(opacity=100);
}
.btn-black.btn-fill:hover, .btn-black.btn-fill:focus, .btn-black.btn-fill:active, .btn-black.btn-fill.active, .open > .btn-black.btn-fill.dropdown-toggle,
.navbar .navbar-nav > li > a.btn-black.btn-fill:hover,
.navbar .navbar-nav > li > a.btn-black.btn-fill:focus,
.navbar .navbar-nav > li > a.btn-black.btn-fill:active,
.navbar .navbar-nav > li > a.btn-black.btn-fill.active, .open >
.navbar .navbar-nav > li > a.btn-black.btn-fill.dropdown-toggle {
  background-color: #393b3d;
  color: #FFFFFF;
}
.btn-black.btn-fill .caret,
.navbar .navbar-nav > li > a.btn-black.btn-fill .caret {
  border-top-color: #FFFFFF;
}
.btn-black .caret,
.navbar .navbar-nav > li > a.btn-black .caret {
  border-top-color: #333333;
}

.btn-white,
.navbar .navbar-nav > li > a.btn-white {
  border-color: #FFFFFF;
  color: #FFFFFF;
  opacity: .9;
}
.btn-white:hover, .btn-white:focus, .btn-white:active, .btn-white.active, .open > .btn-white.dropdown-toggle,
.navbar .navbar-nav > li > a.btn-white:hover,
.navbar .navbar-nav > li > a.btn-white:focus,
.navbar .navbar-nav > li > a.btn-white:active,
.navbar .navbar-nav > li > a.btn-white.active, .open >
.navbar .navbar-nav > li > a.btn-white.dropdown-toggle {
  background-color: transparent;
  color: #FFFFFF;
  border-color: #FFFFFF;
}
.btn-white:disabled, .btn-white[disabled], .btn-white.disabled,
.navbar .navbar-nav > li > a.btn-white:disabled,
.navbar .navbar-nav > li > a.btn-white[disabled],
.navbar .navbar-nav > li > a.btn-white.disabled {
  background-color: transparent;
  border-color: #FFFFFF;
}
.btn-white.btn-fill,
.navbar .navbar-nav > li > a.btn-white.btn-fill {
  color: #FFFFFF;
  background-color: #FFFFFF;
  opacity: 1;
  filter: alpha(opacity=100);
}
.btn-white.btn-fill:hover, .btn-white.btn-fill:focus, .btn-white.btn-fill:active, .btn-white.btn-fill.active, .open > .btn-white.btn-fill.dropdown-toggle,
.navbar .navbar-nav > li > a.btn-white.btn-fill:hover,
.navbar .navbar-nav > li > a.btn-white.btn-fill:focus,
.navbar .navbar-nav > li > a.btn-white.btn-fill:active,
.navbar .navbar-nav > li > a.btn-white.btn-fill.active, .open >
.navbar .navbar-nav > li > a.btn-white.btn-fill.dropdown-toggle {
  background-color: #FFFFFF;
  color: #FFFFFF;
}
.btn-white.btn-fill .caret,
.navbar .navbar-nav > li > a.btn-white.btn-fill .caret {
  border-top-color: #FFFFFF;
}
.btn-white .caret,
.navbar .navbar-nav > li > a.btn-white .caret {
  border-top-color: #FFFFFF;
}
.btn-white:active, .btn-white.active, .open > .btn-white.dropdown-toggle,
.navbar .navbar-nav > li > a.btn-white:active,
.navbar .navbar-nav > li > a.btn-white.active, .open >
.navbar .navbar-nav > li > a.btn-white.dropdown-toggle {
  background-color: #FFFFFF;
  color: #888888;
}
.btn-white.btn-fill,
.navbar .navbar-nav > li > a.btn-white.btn-fill {
  color: #888888;
  opacity: .9;
}
.btn-white.btn-fill:hover, .btn-white.btn-fill:focus,
.navbar .navbar-nav > li > a.btn-white.btn-fill:hover,
.navbar .navbar-nav > li > a.btn-white.btn-fill:focus {
  color: #888888;
  opacity: 1;
}
.btn-white.btn-simple:active, .btn-white.btn-simple.active,
.navbar .navbar-nav > li > a.btn-white.btn-simple:active,
.navbar .navbar-nav > li > a.btn-white.btn-simple.active {
  background-color: transparent;
}

.btn:disabled, .btn[disabled], .btn.disabled {
  opacity: 0.5;
  filter: alpha(opacity=50);
}

.btn-round {
  border-width: 1px;
  border-radius: 30px !important;
  padding: 10px 20px;
}
.btn-round.btn-icon {
  padding: 10px;
}

.btn-simple {
  border: 0;
  font-size: 14px;
  padding: 10px 20px;
}
.btn-simple.btn-icon {
  padding: 10px;
}

.btn-lg {
  font-size: 14px;
  border-radius: 4px;
  padding: 16px 32px;
}
.btn-lg.btn-round {
  padding: 17px 32px;
}
.btn-lg.btn-simple {
  padding: 18px 32px;
}

.btn-sm {
  font-size: 12px;
  border-radius: 3px;
  padding: 5px 10px;
}
.btn-sm.btn-round {
  padding: 6px 10px;
}
.btn-sm.btn-simple {
  padding: 7px 10px;
}

.btn-xs {
  font-size: 10px;
  border-radius: 3px;
  padding: 5px 10px;
}
.btn-xs.btn-round {
  padding: 6px 10px;
}
.btn-xs.btn-simple {
  padding: 7px 10px;
}

.btn-wd {
  min-width: 140px;
}

.form-control::-moz-placeholder {
  color: #DDDDDD;
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-font-smoothing: antialiased;
}

.form-control:-moz-placeholder {
  color: #DDDDDD;
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-font-smoothing: antialiased;
}

.form-control::-webkit-input-placeholder {
  color: #DDDDDD;
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-font-smoothing: antialiased;
}

.form-control:-ms-input-placeholder {
  color: #DDDDDD;
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-font-smoothing: antialiased;
}

.form-control {
  background-color: #FFFFFF;
  border: 1px solid #E3E3E3;
  border-radius: 4px;
  color: #444444;
  padding: 10px 10px;
  height: 40px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.form-control:focus {
  background-color: #FFFFFF;
  border: 1px solid #777777;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: 0 !important;
}
.has-success .form-control, .has-error .form-control, .has-success .form-control:focus, .has-error .form-control:focus {
  border-color: #E3E3E3;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.has-success .form-control {
  color: #7accb8;
}
.has-success .form-control:focus {
  border-color: #7accb8;
}
.has-error .form-control {
  color: #fc4f3f;
}
.has-error .form-control:focus {
  border-color: #fc4f3f;
}
.form-control + .form-control-feedback {
  border-radius: 6px;
  font-size: 14px;
  margin-top: -7px;
  position: absolute;
  right: 10px;
  top: 50%;
  vertical-align: middle;
}
.open .form-control {
  border-radius: 4px 4px 0 0;
  border-bottom-color: transparent;
}

.input-lg {
  height: 55px;
  padding: 16px 32px;
}

.has-error .form-control-feedback {
  color: #fc4f3f;
}

.has-success .form-control-feedback {
  color: #7accb8;
}

.input-group-addon {
  background-color: #FFFFFF;
  border: 1px solid #E3E3E3;
  border-radius: 4px;
}
.has-success .input-group-addon, .has-error .input-group-addon {
  background-color: #FFFFFF;
  border: 1px solid #E3E3E3;
}
.has-error .form-control:focus + .input-group-addon {
  border-color: #fc4f3f;
  color: #fc4f3f;
}
.has-success .form-control:focus + .input-group-addon {
  border-color: #7accb8;
  color: #7accb8;
}
.form-control:focus + .input-group-addon, .form-control:focus ~ .input-group-addon {
  background-color: #FFFFFF;
  border-color: #777777;
}

.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {
  border-right: 0 none;
}

.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:last-child > .btn, .input-group-btn:last-child > .dropdown-toggle, .input-group-btn:first-child > .btn:not(:first-child) {
  border-left: 0 none;
}

.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
  background-color: #E3E3E3;
  color: #888888;
  cursor: not-allowed;
}

.form-control-plain {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  padding: 8px 0;
  font-size: 16px;
  background-color: transparent;
  border-color: #E3E3E3;
  resize: vertical;
}
.form-control-plain:focus {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #777;
}

.form-control:focus::-webkit-input-placeholder {
  color: rgba(119, 119, 119, 0.3);
}

.section {
  padding: 50px 0;
  position: relative;
  background-color: #FFFFFF;
}

.section-gray {
  background-color: #EEEEEE;
  padding: 70px 0;
}

.section-white {
  background-color: #FFFFFF;
}

.section {
  position: relative;
}
.section .title-area {
  max-width: 760px;
  margin: 0 auto 70px;
  display: block;
  padding: 0 15px;
  text-align: center;
}
.section .title-area .description {
  font-size: 16px;
  color: #777777;
}
.section [class*="col-"] .title-area {
  padding: 0;
}
.section .text-area {
  padding: 4.375em 0;
  position: relative;
  z-index: 3;
  display: block;
}
.section .text-area .description,
.section .text-area .description p {
  font-size: 16px;
  color: #777777;
}
.section .parallax,
.section .static-image {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
}
.section .parallax > img,
.section .parallax .filter > img,
.section .static-image > img,
.section .static-image .filter > img {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: relative;
  z-index: 1;
}
.section .parallax-small {
  height: 65vh;
}
.section .responsive-background {
  position: relative;
  background-color: #c5a47e;
  padding: 0;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 80vh;
}
.section .nav > li {
  display: inline-block;
}

.section-contact-form {
  padding-top: 110px;
}
.section-contact-form .title-area {
  margin-bottom: 15px;
}
.section-contact-form .social-buttons {
  padding: 20px 0 40px;
  margin-top: 0;
  border: none;
}

.gradient-image {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.gradient-image:after {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  content: '';
  background: -moz-linear-gradient(top, white 0%, rgba(255, 255, 255, 0.95) 22%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, white), color-stop(22%, rgba(255, 255, 255, 0.95)), color-stop(30%, rgba(255, 255, 255, 0.9)), color-stop(65%, rgba(255, 255, 255, 0.7)), color-stop(100%, rgba(255, 255, 255, 0)));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, white 0%, rgba(255, 255, 255, 0.95) 22%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, white 0%, rgba(255, 255, 255, 0.95) 22%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(top, white 0%, rgba(255, 255, 255, 0.95) 22%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%);
  /* IE10+ */
  background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0.95) 22%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );
  /* IE6-9 */
}

.section-our-team .text-area {
  padding-bottom: 0;
}

.filter {
  position: relative;
  height: 100%;
  color: #FFFFFF;
}
.filter:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 3;
  content: "";
  opacity: .7;
  background: #333;
}
.filter .title-area .description {
  color: #FFFFFF;
}
.filter .separator {
  color: #FFFFFF;
}
.filter .separator:before, .filter .separator:after {
  border-color: #FFFFFF;
}
.filter.filter-color-black:before {
  background: #333;
}
.filter.filter-color-gold:before {
  background: #bd986c;
}
.filter.filter-color-green:before {
  background: #55bea4;
}
.filter.filter-color-blue:before {
  background: #008b9c;
}
.filter.filter-color-purple:before {
  background: #50236F;
}
.filter.filter-color-red:before {
  background: #de6168;
}
.filter.filter-gradient-black:before {
  background: #1f1c2c;
  /* Old browsers */
  background: -moz-linear-gradient(-45deg, #1f1c2c 0%, #928dab 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #1f1c2c), color-stop(100%, #928dab));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(-45deg, #1f1c2c 0%, #928dab 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(-45deg, #1f1c2c 0%, #928dab 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(-45deg, #1f1c2c 0%, #928dab 100%);
  /* IE10+ */
  background: linear-gradient(135deg, #1f1c2c 0%, #928dab 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f1c2c', endColorstr='#928dab',GradientType=1 );
  /* IE6-9 fallback on horizontal gradient */
}
.filter.filter-gradient-gold:before {
  background: #dfd389;
  background: -moz-linear-gradient(-45deg, #dfd48b 0%, #ec6565 100%);
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #dfd48b), color-stop(100%, #ec6565));
  background: -webkit-linear-gradient(-45deg, #dfd48b 0%, #ec6565 100%);
  background: -o-linear-gradient(-45deg, #dfd48b 0%, #ec6565 100%);
  background: -ms-linear-gradient(-45deg, #dfd48b 0%, #ec6565 100%);
  background: linear-gradient(135deg, #dfd48b 0%, #ec6565 100%);
}
.filter.filter-gradient-green:before {
  background: #71c491;
  /* Old browsers */
  background: -moz-linear-gradient(-45deg, #71c491 0%, #465556 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #71c491), color-stop(100%, #465556));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(-45deg, #71c491 0%, #465556 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(-45deg, #71c491 0%, #465556 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(-45deg, #71c491 0%, #465556 100%);
  /* IE10+ */
  background: linear-gradient(135deg, #71c491 0%, #465556 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#71c491', endColorstr='#465556',GradientType=1 );
  /* IE6-9 fallback on horizontal gradient */
}
.filter.filter-gradient-blue:before {
  background: #085078;
  /* Old browsers */
  background: -moz-linear-gradient(-45deg, #085078 0%, #87d7db 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #085078), color-stop(100%, #87d7db));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(-45deg, #085078 0%, #87d7db 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(-45deg, #085078 0%, #87d7db 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(-45deg, #085078 0%, #87d7db 100%);
  /* IE10+ */
  background: linear-gradient(135deg, #085078 0%, #87d7db 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#085078', endColorstr='#87d7db',GradientType=1 );
  /* IE6-9 fallback on horizontal gradient */
}
.filter.filter-gradient-purple:before {
  background: #6c3aad;
  background: -moz-linear-gradient(-45deg, #6b39ac 0%, #c8fece 100%);
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #6b39ac), color-stop(100%, #c8fece));
  background: -webkit-linear-gradient(-45deg, #6b39ac 0%, #c8fece 100%);
  background: -o-linear-gradient(-45deg, #6b39ac 0%, #c8fece 100%);
  background: -ms-linear-gradient(-45deg, #6b39ac 0%, #c8fece 100%);
  background: linear-gradient(135deg, #6b39ac 0%, #c8fece 100%);
}

.section-numbers .text-area {
  padding: 30px 0 0;
}

.section-white {
  padding: 0;
}
.section-white .static-image:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  content: "";
  opacity: 0.95;
  background: #FFFFFF;
}

.section-signup .form-control {
  text-align: center;
}
.section-signup .btn {
  margin: 15px 0;
}

.section-pricing {
  padding: 0;
}
.section-pricing .container > .content {
  margin-top: 115px;
  position: relative;
  z-index: 3;
}

.section-small .parallax .image,
.section-small .static-image .image,
.section-get-started .parallax .image,
.section-get-started .static-image .image {
  height: 100vh !important;
}

.section-info {
  padding-top: 100px;
}

.section-cards .card a {
  opacity: .93;
}

.section-we-do h3 {
  margin: 10px 0 20px;
}
.section-we-do h5 {
  margin-bottom: 0;
}
.section-we-do p {
  color: #777777;
}
.section-we-do .title {
  margin-bottom: 70px;
}

.section-we-do-presentation {
  padding: 100px 0;
}

.section-info-presentation {
  padding: 0;
  overflow: hidden;
}
.section-info-presentation .info-pricing:first-child {
  margin-top: 90px;
}
.section-info-presentation .image-container {
  height: 100vh;
  width: auto;
  position: relative;
}
.section-info-presentation .image-container img {
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.nav > li > a:hover,
.nav > li > a:focus {
  background-color: transparent;
}
.nav > .social-links > a {
  display: inline-block;
}

.navbar {
  border: 0;
  font-size: 16px;
}
.navbar .navbar-brand {
  margin: 10px 0px;
  padding: 15px 15px;
  font-size: 20px;
  line-height: 22px;
}
.navbar .navbar-nav > li > a {
  padding: 10px 15px;
  margin: 15px 3px;
  line-height: 18px;
}
.navbar .navbar-nav > .social-links > a {
  padding: 10px 5px;
}
.navbar .navbar-nav.navbar-uppercase > li > a {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0px;
  font-weight: 600;
  text-transform: uppercase;
  font-weight: 600;
}
.navbar .navbar-nav > li > a.btn {
  margin: 15px 3px;
  padding: 10px 20px;
}
.navbar .navbar-nav > li > a.btn-round {
  margin: 16px 3px;
}
.navbar .navbar-nav > li > a [class^="fa"] {
  font-size: 18px;
  position: relative;
  top: 1px;
  margin-top: -3px;
}
.navbar .btn {
  margin: 15px 3px;
  font-size: 14px;
}
.navbar .btn-simple {
  font-size: 16px;
}

.navbar-default {
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.navbar-default .navbar-nav > li > a:not(.btn) {
  color: #434547;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:not(.btn):hover,
.navbar-default .navbar-nav > .active > a:not(.btn):focus,
.navbar-default .navbar-nav > li > a:not(.btn):hover,
.navbar-default .navbar-nav > li > a:not(.btn):focus {
  background-color: transparent;
  border-radius: 3px;
  color: #434547;
  opacity: 0.85;
  filter: alpha(opacity=85);
}
.navbar-default .navbar-nav > .dropdown > a:hover .caret,
.navbar-default .navbar-nav > .dropdown > a:focus .caret {
  border-bottom-color: #333333;
  border-top-color: #333333;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background-color: transparent;
  color: #c5a47e;
}
.navbar-default .navbar-nav .navbar-toggle:hover, .navbar-default .navbar-nav .navbar-toggle:focus {
  background-color: transparent;
}
.navbar-default .navbar-brand {
  color: #434547;
}
.navbar-default:not(.navbar-transparent) .btn-default:hover {
  color: #c5a47e;
  border-color: #c5a47e;
}
.navbar-default:not(.navbar-transparent) .btn-neutral, .navbar-default:not(.navbar-transparent) .btn-neutral:hover, .navbar-default:not(.navbar-transparent) .btn-neutral:active {
  color: #777777;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: transparent;
}

.navbar-transparent {
  padding-top: 15px;
  background-color: transparent;
  border-bottom: 1px solid transparent;
}

.navbar-toggle {
  margin-top: 19px;
  margin-bottom: 19px;
  border: 0;
}
.navbar-toggle .icon-bar {
  background-color: #FFFFFF;
}
.navbar-toggle .navbar-collapse,
.navbar-toggle .navbar-form {
  border-color: transparent;
}
.navbar-toggle.navbar-default .navbar-toggle:hover, .navbar-toggle.navbar-default .navbar-toggle:focus {
  background-color: transparent;
}
.navbar-transparent .navbar-toggle .icon-bar {
  background-color: #FFFFFF;
}

.navbar.navbar-fixed-top {
  transition: all .5s .1s;
}

@media (min-width: 768px) {
  .navbar-transparent .navbar-brand,
  [class*="navbar-ct"] .navbar-brand {
    color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .navbar-transparent .navbar-brand:focus, .navbar-transparent .navbar-brand:hover,
  [class*="navbar-ct"] .navbar-brand:focus,
  [class*="navbar-ct"] .navbar-brand:hover {
    background-color: transparent;
    opacity: 1;
    filter: alpha(opacity=100);
    color: #FFFFFF;
  }
  .navbar-transparent .navbar-nav > li > a:not(.btn),
  [class*="navbar-ct"] .navbar-nav > li > a:not(.btn) {
    color: #FFFFFF;
    border-color: #FFFFFF;
    opacity: 0.85;
    filter: alpha(opacity=85);
  }
  .navbar-transparent .navbar-nav > .active > a:not(.btn),
  .navbar-transparent .navbar-nav > .active > a:hover:not(.btn),
  .navbar-transparent .navbar-nav > .active > a:focus:not(.btn),
  .navbar-transparent .navbar-nav > li > a:hover:not(.btn),
  .navbar-transparent .navbar-nav > li > a:focus:not(.btn),
  [class*="navbar-ct"] .navbar-nav > .active > a:not(.btn),
  [class*="navbar-ct"] .navbar-nav > .active > a:hover:not(.btn),
  [class*="navbar-ct"] .navbar-nav > .active > a:focus:not(.btn),
  [class*="navbar-ct"] .navbar-nav > li > a:hover:not(.btn),
  [class*="navbar-ct"] .navbar-nav > li > a:focus:not(.btn) {
    background-color: transparent;
    border-radius: 3px;
    color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .navbar-transparent .navbar-nav .nav > li > a.btn:hover,
  [class*="navbar-ct"] .navbar-nav .nav > li > a.btn:hover {
    background-color: transparent;
  }
  .navbar-transparent .navbar-nav > .dropdown > a .caret,
  .navbar-transparent .navbar-nav > .dropdown > a:hover .caret,
  .navbar-transparent .navbar-nav > .dropdown > a:focus .caret,
  [class*="navbar-ct"] .navbar-nav > .dropdown > a .caret,
  [class*="navbar-ct"] .navbar-nav > .dropdown > a:hover .caret,
  [class*="navbar-ct"] .navbar-nav > .dropdown > a:focus .caret {
    border-bottom-color: #FFFFFF;
    border-top-color: #FFFFFF;
  }
  .navbar-transparent .navbar-nav > .open > a,
  .navbar-transparent .navbar-nav > .open > a:hover,
  .navbar-transparent .navbar-nav > .open > a:focus,
  [class*="navbar-ct"] .navbar-nav > .open > a,
  [class*="navbar-ct"] .navbar-nav > .open > a:hover,
  [class*="navbar-ct"] .navbar-nav > .open > a:focus {
    background-color: transparent;
    color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .navbar-transparent .btn-default,
  [class*="navbar-ct"] .btn-default {
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
  .navbar-transparent .btn-default.btn-fill,
  [class*="navbar-ct"] .btn-default.btn-fill {
    color: #777777;
    background-color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .navbar-transparent .btn-default.btn-fill:hover,
  .navbar-transparent .btn-default.btn-fill:focus,
  .navbar-transparent .btn-default.btn-fill:active,
  .navbar-transparent .btn-default.btn-fill.active,
  .navbar-transparent .open .dropdown-toggle.btn-fill.btn-default,
  [class*="navbar-ct"] .btn-default.btn-fill:hover,
  [class*="navbar-ct"] .btn-default.btn-fill:focus,
  [class*="navbar-ct"] .btn-default.btn-fill:active,
  [class*="navbar-ct"] .btn-default.btn-fill.active,
  [class*="navbar-ct"] .open .dropdown-toggle.btn-fill.btn-default {
    border-color: #FFFFFF;
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .navbar-transparent .dropdown-menu .divider {
    background-color: rgba(255, 255, 255, 0.2);
  }
}
.footer {
  background-color: #FFFFFF;
  line-height: 20px;
  /*border-top: 1px solid #DDDDDD;*/
  overflow: hidden;
}
.footer nav > ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: normal;
}
.footer nav > ul a:not(.btn) {
  color: #777777;
  display: block;
  margin-bottom: 3px;
}
.footer nav > ul a:not(.btn):hover, .footer nav > ul a:not(.btn):focus {
  color: #777777;
}
.footer .social-area {
  padding: 15px 0;
}
.footer .social-area h5 {
  padding-bottom: 15px;
}
.footer .social-area > a:not(.btn) {
  color: #777777;
  display: inline-block;
  vertical-align: top;
  padding: 10px 5px;
  font-size: 18px;
  font-weight: normal;
  line-height: 20px;
  text-align: center;
}
.footer .social-area > a:not(.btn):hover, .footer .social-area > a:not(.btn):focus {
  color: #777777;
}
.footer .copyright {
  color: #777777;
  padding: 10px 15px;
  margin: 15px 3px;
  line-height: 20px;
  text-align: center;
}
.footer hr {
  border-color: #DDDDDD;
}
.footer .title {
  color: #777777;
}
.footer .title {
  text-align: left;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
}
.footer .btn-social {
  color: #9A9A9A;
}

.footer:not(.footer-big) nav > ul {
  font-size: 16px;
}
.footer:not(.footer-big) nav > ul li {
  margin-left: 20px;
  float: left;
}
.footer:not(.footer-big) nav > ul a {
  padding: 10px 0px;
  margin: 15px 10px 15px 0px;
}

.footer-color-gray {
  background-color: #F5F5F5;
}

.footer-color-black,
.footer-transparent {
  background-color: rgba(30, 30, 30, 0.97);
  color: #DDDDDD;
}
.footer-color-black nav > ul a,
.footer-transparent nav > ul a {
  color: #FFFFFF;
}
.footer-color-black nav > ul a:hover, .footer-color-black nav > ul a:focus,
.footer-transparent nav > ul a:hover,
.footer-transparent nav > ul a:focus {
  color: #777777;
}
.footer-color-black .social-area > a:not(.btn),
.footer-transparent .social-area > a:not(.btn) {
  color: #FFFFFF;
}
.footer-color-black .social-area > a:not(.btn):hover, .footer-color-black .social-area > a:not(.btn):focus,
.footer-transparent .social-area > a:not(.btn):hover,
.footer-transparent .social-area > a:not(.btn):focus {
  color: #777777;
}
.footer-color-black .btn-social,
.footer-transparent .btn-social {
  color: #FFFFFF;
}
.footer-color-black hr,
.footer-transparent hr {
  border-color: #444444;
}
.footer-color-black .title,
.footer-transparent .title {
  color: #DDDDDD;
}

.footer-transparent {
  background-attachment: fixed;
  background-size: cover;
  position: relative;
}
.footer-transparent .container {
  z-index: 2;
  position: relative;
}
.footer-transparent::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(17, 17, 17, 0.8);
  display: block;
  content: "";
  z-index: 1;
}

.footer-big {
  padding-top: 30px;
}
.footer-big hr {
  margin-bottom: 10px;
  margin-top: 10px;
}
.footer-big .container > hr {
  margin-top: 50px;
}
.footer-big .copyright {
  margin: 10px 0px 20px;
}
.footer-big .social-area > * {
  margin: 0 15px;
}
.footer-big nav > ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: normal;
}
.footer-big nav > ul li {
  float: none;
}
.footer-big nav > ul .btn {
  margin-bottom: 5px;
}
.footer-big nav > ul .btn-social.btn-simple {
  padding: 0 0 4px 0;
}
.footer-big .form-group {
  margin-top: 15px;
}
.footer-big .numbers h4 {
  margin: 0 0 10px 0;
}

.social-line {
  padding: 16px 0;
  background-color: #FFFFFF;
}
.social-line .title {
  margin: 0;
  line-height: 40px;
  font-size: 22px;
}
.social-line .btn {
  width: 100%;
}

.social-line-black {
  background-color: rgba(30, 30, 30, 0.97);
  color: #FFFFFF;
}

.label-primary {
  background-color: #c5a47e;
}

.label-info {
  background-color: #00abc0;
}

.label-success {
  background-color: #7accb8;
}

.label-warning {
  background-color: #f88f58;
}

.label-danger {
  background-color: #fc4f3f;
}

.btn-social {
  opacity: 0.85;
  padding: 8px 9px;
}
.btn-social .fa {
  font-size: 18px;
  top: -1px;
  vertical-align: middle;
  display: inline-block;
  position: relative;
}
.btn-social.btn-round {
  padding: 9px 10px;
}
.btn-social.btn-simple {
  padding: 9px 5px;
  font-size: 14px;
}
.btn-social.btn-simple .fa {
  font-size: 20px;
  position: relative;
  top: -2px;
  width: 24px;
}

.dropdown-menu {
  visibility: hidden;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  display: block;
  z-index: 9000;
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.125);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.125);
  -webkit-transform: translate3d(0, -20px, 0);
  -moz-transform: translate3d(0, -20px, 0);
  -o-transform: translate3d(0, -20px, 0);
  -ms-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
  -webkit-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  -moz-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  -o-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  -ms-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
}
.open .dropdown-menu {
  opacity: 1;
  filter: alpha(opacity=100);
  visibility: visible;
  -webkit-transform: translate3d(0, 0px, 0);
  -moz-transform: translate3d(0, 0px, 0);
  -o-transform: translate3d(0, 0px, 0);
  -ms-transform: translate3d(0, 0px, 0);
  transform: translate3d(0, 0px, 0);
}
.navbar-nav > li > .dropdown-menu {
  border-radius: 4px;
  margin-top: -5px;
}
.navbar-nav > li > .dropdown-menu:before {
  border-bottom: 11px solid rgba(0, 0, 0, 0.2);
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  content: "";
  display: inline-block;
  position: absolute;
  left: 12px;
  top: -11px;
}
.navbar-nav > li > .dropdown-menu:after {
  border-bottom: 11px solid #FFFFFF;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  content: "";
  display: inline-block;
  position: absolute;
  left: 12px;
  top: -10px;
}
.navbar-nav.navbar-right > li > .dropdown-menu:before {
  left: auto;
  right: 12px;
}
.navbar-nav.navbar-right > li > .dropdown-menu:after {
  left: auto;
  right: 12px;
}
.dropdown-menu > li > a {
  padding: 10px 20px;
  margin: 0px 0px;
  color: #434547;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  padding: 20px 20px;
  border-bottom: 1px solid #EEEEEE;
}
.dropdown-menu > li > a img {
  margin-top: -3px;
}
.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
  background-color: #FFFFFF;
  color: #c5a47e;
  opacity: 1;
  text-decoration: none;
}
.dropdown-menu > li:last-child > a {
  border-bottom: 0;
}
.dropdown-menu > li > a:focus {
  outline: 0 !important;
}
.btn-group.select .dropdown-menu {
  min-width: 100%;
}
.dropdown-menu > li:first-child > a {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.dropdown-menu > li:last-child > a {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.select .dropdown-menu > li:first-child > a {
  border-radius: 0;
  border-bottom: 0 none;
}

.dropdown-menu.dropdown-info > li > a:hover, .dropdown-menu.dropdown-info > li > a:focus {
  color: #00abc0;
}
.dropdown-menu.dropdown-success > li > a:hover, .dropdown-menu.dropdown-success > li > a:focus {
  color: #7accb8;
}
.dropdown-menu.dropdown-danger > li > a:hover, .dropdown-menu.dropdown-danger > li > a:focus {
  color: #fc4f3f;
}
.dropdown-menu.dropdown-warning > li > a:hover, .dropdown-menu.dropdown-warning > li > a:focus {
  color: #f88f58;
}
.dropdown-menu.dropdown-black > li > a:hover, .dropdown-menu.dropdown-black > li > a:focus {
  color: #333333;
}

.dropdown-with-icons > li > a {
  padding-left: 0px;
  line-height: 28px;
}
.dropdown-with-icons i {
  text-align: center;
  line-height: 28px;
  float: left;
}
.dropdown-with-icons i[class^="pe-"] {
  font-size: 24px;
  width: 46px;
}
.dropdown-with-icons i[class^="fa"] {
  font-size: 14px;
  width: 38px;
}

.card {
  background: #fff;
  box-shadow: 0 32px 44px -24px rgba(0, 0, 0, 0.23), 0 20px 25px 0px rgba(0, 0, 0, 0.12), 0 15px 10px -10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-bottom: 30px;
  -webkit-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  -moz-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  -o-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  -ms-transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
  transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
}
.card:not(.card-plain):not(.card-price):hover {
  -webkit-transform: scale(1.03);
  -moz-transform: scale(1.03);
  -o-transform: scale(1.03);
  -ms-transform: scale(1.03);
  transform: scale(1.03);
  box-shadow: 0 26px 50px -10px rgba(0, 0, 0, 0.38), 0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 15px 10px -10px rgba(0, 0, 0, 0.2);
}
.card .subtitle-black {
  color: #141414;
}
.card a {
  opacity: .85;
}
.card:hover .header {
  opacity: 1;
}
.card h2 {
  margin-top: 0;
}
.card img {
  max-width: 100%;
}
.card .header img {
  border-radius: 4px;
}
.card .image-header,
.card .header img {
  width: 100%;
  border-radius: 4px 4px 0 0;
}
.card .image-header.image-full,
.card .header img.image-full {
  border-radius: 4px;
}
.card .row .image-header,
.card .row .header img {
  width: 100%;
  border-radius: 4px;
}
.card .btn {
  margin-top: 15px;
}
.card > img {
  border-radius: 4px;
}
.card .title {
  margin-bottom: 5px;
  color: #333333;
}
.card .description {
  font-size: 13px;
}

.card-member {
  display: block;
  text-align: center;
  margin-bottom: 20px;
}
.card-member .content {
  padding: 25px;
}
.card-member > img {
  background: none repeat scroll 0 0 transparent;
  height: auto;
  width: 120px;
  margin: 0 auto;
}

.card-white {
  background: #FFFFFF;
}

.card-plain {
  border-radius: 0;
  box-shadow: none;
  background: none;
}
.card-plain .image-header {
  border-radius: 4px;
}

.section-header,
.section-header-blog,
.section-presentation-page {
  padding: 0;
}
.section-header .container,
.section-header-blog .container,
.section-presentation-page .container {
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
}
.section-header .content,
.section-header-blog .content,
.section-presentation-page .content {
  position: relative;
  color: white;
  text-align: center;
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  vertical-align: center;
  line-height: 1.7;
  position: relative;
  top: 44%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.section-header .btn,
.section-header-blog .btn,
.section-presentation-page .btn {
  text-shadow: none;
}
.section-header h1,
.section-header-blog h1,
.section-presentation-page h1 {
  font-weight: 400;
  font-size: 3.6em;
  text-shadow: -2px 2px 0px rgba(0, 0, 0, 0.3), -2px 4px 2px rgba(0, 0, 0, 0.1);
}
.section-header h5,
.section-header-blog h5,
.section-presentation-page h5 {
  font-size: 1.3em;
  margin: 0 auto .5em;
  line-height: 1.5;
  letter-spacing: 0.125;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
}
.section-header p,
.section-header-blog p,
.section-presentation-page p {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 1em 0 0.5em;
}
.section-header p span,
.section-header-blog p span,
.section-presentation-page p span {
  text-transform: lowercase;
}
.section-header .separator,
.section-header-blog .separator,
.section-presentation-page .separator {
  color: #fff;
  margin: 30px auto;
}
.section-header .separator.line-separator:before, .section-header .separator.line-separator:after,
.section-header-blog .separator.line-separator:before,
.section-header-blog .separator.line-separator:after,
.section-presentation-page .separator.line-separator:before,
.section-presentation-page .separator.line-separator:after {
  border-color: white;
}

.section-header-small .parallax,
.section-header-small .static-image {
  min-height: 50vh;
  height: auto;
}

.section-clients-1 .logo {
  position: relative;
  margin-bottom: 30px;
}

.section-clients-2 .nav-text {
  margin: 0 auto;
  text-align: center;
}
.section-clients-2 .nav-text li {
  margin: 0 10px 10px 0;
}
.section-clients-2 .nav-text li a {
  opacity: .9;
  color: #343434;
  padding: 3px 0;
}
.section-clients-2 .nav-text li a img {
  width: 120px;
}
.section-clients-2 .nav-text > li.active a {
  color: #374760 !important;
  border-bottom: 2px solid #c5a47e;
}
.section-clients-2 .nav-text > li.active a img:first-child {
  opacity: 0;
}
.section-clients-2 .tab-content {
  text-align: center;
  max-width: 760px;
  min-height: 130px;
}
.section-clients-2 .tab-content p.large {
  color: #777777;
}

.section-clients-3 .nbs-flexisel-inner:before, .section-clients-3 .nbs-flexisel-inner:after {
  position: absolute;
  top: 0;
  width: 6%;
  height: 50px;
  display: block;
  z-index: 1;
  content: "";
  z-index: 3;
}
.section-clients-3 .nbs-flexisel-inner:before {
  background: -moz-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, white), color-stop(100%, rgba(255, 255, 255, 0)));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
  /* IE10+ */
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$left-color', endColorstr='$right-color',GradientType=1 );
  /* IE6-9 */
  left: 0;
}
.section-clients-3 .nbs-flexisel-inner:after {
  background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, white 100%);
  /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(100%, white));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, white 100%);
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, white 100%);
  /* Opera 11.10+ */
  background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0%, white 100%);
  /* IE10+ */
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$left-color', endColorstr='$right-color',GradientType=1 );
  /* IE6-9 */
  right: 0;
}
.section-clients-3 #clients-carousel li {
  position: relative;
}
.section-clients-3 #clients-carousel li img {
  width: 50%;
  cursor: pointer;
  position: relative;
  margin: 0;
  max-height: 50px;
  max-width: 200px;
}
.section-clients-3 #clients-carousel li img:first-child {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 2;
}
.section-clients-3 #clients-carousel li img:first-child:hover {
  opacity: 0;
}
.section-clients-3 .nbs-flexisel-nav-left,
.section-clients-3 .nbs-flexisel-nav-right {
  font-size: 30px;
}

.list-logos img {
  max-width: 120px;
  margin: 0 auto;
  display: block;
}
.list-logos .active .client-logo {
  color: #c5a47e;
}
.list-logos a {
  opacity: 0.9;
  color: #333333;
}

.list-logos-info .active .client-logo {
  color: #00abc0;
}

.list-logos-success .active .client-logo {
  color: #7accb8;
}

.list-logos-warning .active .client-logo {
  color: #f88f58;
}

.list-logos-danger .active .client-logo {
  color: #fc4f3f;
}

.client-logo {
  text-align: center;
  margin: 0 15px;
}
.client-logo i {
  font-size: 35px;
  width: auto;
  margin-bottom: 5px;
}
.client-logo h3 {
  font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.section-team-1 {
  padding-top: 0;
}
.section-team-1 .container {
  position: absolute;
  width: 100%;
  top: 0;
}
.section-team-1 .text-area {
  background-color: transparent;
  max-width: 760px;
  margin: 0 auto;
}
.section-team-1 p {
  color: #555;
}
.section-team-1 .static-image img {
  width: 100%;
}

.section-team-2 {
  padding-top: 0;
}
.section-team-2 .team-text {
  position: relative;
  padding: 0 0 75px;
}
.section-team-2 .team {
  display: block;
  position: relative;
}
.section-team-2 .team .member {
  border-radius: 50%;
  display: block;
  text-align: center;
}
.section-team-2 .team .member p {
  font-size: 1em;
}
.section-team-2 .team .member .social-buttons {
  display: inline-block;
  padding: 15px 35px;
}
.section-team-2 .team .member img {
  background: none repeat scroll 0 0 transparent;
  height: auto;
  width: 120px;
  margin: 0 auto;
}
.section-team-2 .team .description {
  padding: 10px 0;
  text-align: center;
}

.section-team-3 .team {
  margin-bottom: 50px;
}
.section-team-3 .team .member {
  text-align: center;
}
.section-team-3 .team .member .big-text {
  margin-bottom: 20px;
}
.section-team-3 .team .member img {
  margin: 0 auto;
}
.section-team-3 .team .member .first-name, .section-team-3 .team .member .last-name {
  min-width: 65%;
  padding: 0 15px;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  font-size: 18px;
  padding-top: 9px;
  vertical-align: middle;
  margin-top: 35px;
}
.section-team-3 .team .member .first-name {
  float: right;
}
.section-team-3 .team .member .last-name {
  float: left;
}
.section-team-3 .team .member .motto {
  position: relative;
  text-transform: none;
  color: #c5a47e;
  max-width: 55%;
  margin: 0 auto;
}
.section-team-3 .team .member .motto h3 {
  font-size: 22px;
}

.section-team-4 {
  padding-top: 5em;
}
.section-team-4 .team {
  text-align: center;
  padding: 10px 0;
}
.section-team-4 .team .member {
  padding: 0 10px;
}
.section-team-4 .team .member img {
  width: 120px;
  height: 120px;
  margin: 0 auto;
}
.section-team-4 .team .member .description {
  padding: 10px 0;
}
.section-team-4 .team .member .description .details {
  font-size: 14px;
}
.section-team-4 .team .member .description .details i {
  color: #777777;
}

.img-circle.img-profile {
  width: 120px;
  height: 120px;
}

.description {
  margin-bottom: 20px;
}

.big-text {
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0;
}

.small-text {
  color: #777777;
  text-align: center;
}

.social-buttons {
  margin-top: -20px;
  border-top: 1px solid #DDDDDD;
  text-align: center;
}

.scroller {
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -ms-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

.address h4 {
  font-size: 1.6em;
}
.address p {
  font-size: 1em;
}

.section-contact-1 h4,
.section-contact-2 h4,
.section-contact-3 h4 {
  margin-bottom: 5px;
}

.section-contact-1 .form-control,
.section-contact-1 .form-control:focus {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  padding: 8px 0;
  font-size: 16px;
}
.section-contact-1 .contact-form {
  margin-top: 90px;
}

.section-contact-2 .contact-form {
  margin-top: 20px;
}
.section-contact-2 label {
  font-weight: 400;
  font-size: 16px;
  /*         margin-left: 10px; */
}

.section-contact-3 {
  position: relative;
  overflow: hidden;
  margin-top: 30px;
  padding-bottom: 0;
}
.section-contact-3 .contact-container {
  position: relative;
}
.section-contact-3 .contact-container .address-container {
  position: absolute;
  left: 0;
  width: 40%;
  height: 570px;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 3;
  padding: 20px 20px 20px 60px;
}
.section-contact-3 .contact-container .address-container .address {
  text-align: center;
}
.section-contact-3 .contact-container .map {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  height: 570px;
  overflow: hidden;
  display: block;
}
.section-contact-3 .contact-container .map .big-map {
  height: 100%;
  width: 100%;
  display: block;
}

@media (min-width: 768px) {
  .section-contact-3 {
    min-height: 570px;
  }
  .section-contact-3 .address {
    margin-top: 100px;
  }
}
.section-closure {
  padding: 0;
  overflow: hidden;
}
.section-closure .static-image {
  position: absolute;
  z-index: 1;
}
.section-closure .container {
  position: relative;
  z-index: 2;
  padding: 150px 0;
}
.section-closure .text-area {
  background-color: transparent;
  color: #FFFFFF;
}

/* HOME PAGE */
.section .image {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: absolute;
  display: block;
}

.section-get-started,
.section-header-freebie,
.section-our-team-freebie {
  padding-bottom: 0;
}
.section-get-started .container,
.section-header-freebie .container,
.section-our-team-freebie .container {
  position: relative;
  z-index: 100;
  display: block;
  margin-top: 30vh;
  text-align: center;
}
.section-get-started .title-header,
.section-header-freebie .title-header,
.section-our-team-freebie .title-header {
  text-transform: none;
}
.section-get-started .button-contact,
.section-header-freebie .button-contact,
.section-our-team-freebie .button-contact {
  padding: 25px 0 17px;
}
.section-get-started .text-description,
.section-header-freebie .text-description,
.section-our-team-freebie .text-description {
  color: #fff;
  margin: 40px auto;
  max-width: 760px;
}
.section-get-started .text-white,
.section-header-freebie .text-white,
.section-our-team-freebie .text-white {
  color: #fff;
}
.section-get-started .text-gold,
.section-header-freebie .text-gold,
.section-our-team-freebie .text-gold {
  color: #c5a47e;
}
.section-get-started .parallax,
.section-get-started .static-image,
.section-header-freebie .parallax,
.section-header-freebie .static-image,
.section-our-team-freebie .parallax,
.section-our-team-freebie .static-image {
  height: auto;
}
.section-get-started .image,
.section-header-freebie .image,
.section-our-team-freebie .image {
  height: 100%;
}

.section-get-started {
  padding: 0;
}
.section-get-started .container {
  margin: 15vh auto;
}

.section-contact-4 .parallax,
.section-our-services .parallax {
  height: 450px;
}

.section-our-projects-fluid .row [class^="col-"] {
  padding-left: 0;
  padding-right: 0;
}
.section-our-projects-fluid .row [class^="col-"] .project {
  margin-bottom: 0;
}

.section-our-projects .project {
  margin-bottom: 30px;
}

.member .description {
  min-height: 100px;
}

.section-our-clients-freebie .nav-text,
.section-our-clients .nav-text {
  margin: 30px auto;
  text-align: center;
}

.section-our-clients-freebie .nav-text li,
.section-our-clients .nav-text li {
  margin: 0 10px 10px 0;
}

.section-our-clients .nav-text li a img {
  width: 120px;
}

.section-our-clients-freebie .tab-content,
.section-our-clients .tab-content {
  text-align: center;
  max-width: 760px;
  min-height: 130px;
  margin: 0 auto;
}

.section-our-clients-freebie .tab-content p.large,
.section-our-clients .tab-content p.large {
  color: #777777;
}

.section-contact-4 {
  padding: 0;
}

/* END HOME */
/* FREEBIE */
.section-header-freebie {
  padding: 0;
}

.section-our-team-freebie .container {
  margin-top: 14vh;
  margin-bottom: 50px;
}

.card p {
  min-height: 0;
}

.section-our-clients-freebie .list-logos img {
  position: inherit;
  top: 0;
  left: 0;
  opacity: none;
  -webkit-transform: none;
  transform: none;
}
.section-our-clients-freebie .list-logos img:hover {
  opacity: 1;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.section-our-clients-freebie .nav-text > li.active a {
  border-bottom: 0;
  opacity: 1;
}
.section-our-clients-freebie .nav-text > li.active a .image-clients img {
  opacity: 1;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.image-clients {
  width: 90px;
  margin: 0 auto;
  margin-right: 8px;
  margin-left: 8px;
}

.image-clients img,
.author img {
  width: 100%;
}

/* END FREEBIE */
/* PRESENTATION PAGE */
.section-presentation-page .container {
  margin-top: 4vh;
}

.fa-pay {
  font-size: 30px !important;
  display: inline-block;
  margin: 5px 1px 0;
  width: auto;
  color: #FFFFFF;
}

.share-area {
  margin-top: 80px;
}

/* END PRESENTATION PAGE */
@media (min-width: 768px) {
  .nav > .social-links {
    margin-left: 15px;
  }

  .section-header .separator {
    max-width: 20em;
  }
}
@media (min-width: 992px) {
  .section-we-made-1 .row {
    margin: 0;
  }
  .section-we-made-1 .row [class^="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
  .section-we-made-1 .transition-1 {
    /*     		transition: all 0.5s; */
  }

  .section-we-made-2 .scroll-area {
    width: 70%;
    height: 100%;
    position: relative;
    margin: 0 auto;
  }
  .section-we-made-2 .projects {
    width: 100%;
    display: block;
    margin: 0;
    overflow: hidden;
  }
  .section-we-made-2 .projects .row {
    width: 2500px;
    margin: 0;
    position: relative;
  }
  .section-we-made-2 .projects .row.scroller [class^="col-"] {
    padding-left: 0;
    padding-right: 0;
  }
  .section-we-made-2 .projects .row.scroller [class^="col-"] .project {
    margin-bottom: 50px;
    height: 400px;
  }
  .section-we-made-2 .projects .row.scroller.scroller-portrait .project {
    height: 550px;
  }
  .section-we-made-2 .projects .project-description p {
    color: #777777;
    display: inline;
  }
}
@media (max-width: 992px) {
  .section-with-hover .project .over-area {
    opacity: 1;
    -webkit-transition: background 0.25s, opacity 0.25s 0.25s;
    -moz-transition: background 0.25s, opacity 0.25s 0.25s;
    -o-transition: background 0.25s, opacity 0.25s 0.25s;
    -ms-transition: background 0.25s, opacity 0.25s 0.25s;
    transition: background 0.25s, opacity 0.25s 0.25s;
    transition-delay: 0;
    -webkit-transition-delay: 0;
  }
  .section-with-hover .project .over-area .content {
    opacity: 1;
    opacity: 0.2s;
    filter: alpha(opacity=20s);
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
  }
  .section-with-hover .project .over-area .content h4 {
    opacity: 1;
    -moz-transition: opacity 0.3s, -moz-transform 0.3s;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
  }
  .section-with-hover .project .over-area .content p {
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
  }

  .project-content .project-details {
    padding: 0 30px;
  }
  .project-content .icon-close {
    right: -15px;
  }
  .project-content .icon-close i {
    font-size: 30px;
  }

  .section-header {
    padding: 0 !important;
  }
  .section-header .parallax, .section-header .static-image {
    height: 80vh;
  }
  .section-header .parallax:after, .section-header .static-image:after {
    height: 80vh;
  }
  .section-header .content {
    top: 50%;
  }
  .section-header .content h1, .section-header .content h5, .section-header .content p {
    margin: 0;
  }
  .section-header .content h1 {
    font-size: 4.5em;
    letter-spacing: 0.07em;
    line-height: 1.7;
  }
  .section-header .content h1 span {
    font-size: 1em;
  }
  .section-header .content h5 {
    font-size: 1.125em;
    margin-top: 50px;
  }
  .section-header .content .separator {
    width: 12em;
  }

  .section-signin {
    padding: 0;
  }
  .section-signin .image-container,
  .section-signin .form-container {
    width: 100%;
  }
  .section-signin .filter {
    min-height: 0;
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  h1.responsive-small {
    font-size: 4em !important;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
    line-height: 1.25;
  }
  h1.responsive-small {
    font-size: 2.3em !important;
  }

  h2 {
    font-size: 1.625em;
    line-height: 1.15384615;
  }

  h3 {
    font-size: 1.375em;
    line-height: 1.13636364;
  }

  h4 {
    line-height: 1.11111111;
  }

  .navbar-transparent {
    background-color: transparent;
  }

  .wrapper {
    text-align: center !important;
    overflow: hidden;
  }

  .section-we-made-1 p {
    display: none;
  }

  .section-clients-1 .logos ul li {
    width: 33%;
  }
  .section-clients-1 .logos ul li img {
    width: 80%;
  }
  .section-clients-1 .logos ul li img:last-child {
    opacity: 0;
  }

  .section-clients-2 .tab-content {
    min-height: 130px;
  }

  .section-team-1 .static-image img {
    margin-top: 0;
  }

  .section-team-3 .name {
    margin-top: -10px;
  }
  .section-team-3 .motto h3 {
    font-size: 1em;
  }

  .btn {
    margin: 0 auto 15px;
    float: none;
  }

  .section-contact-3 .address-container {
    top: 0;
    width: 100% !important;
    padding: 20px !important;
  }

  .project-content .product .project-text {
    text-align: center !important;
  }
  .project-content .article .project-image {
    width: 100% !important;
  }

  footer {
    padding-top: 15px;
  }
  footer .row .info {
    margin-top: 15px;
  }
  footer .row .info .title {
    text-align: center !important;
    margin-top: 25px;
  }
  footer .row .info ul {
    text-align: center;
  }
  footer .row div:first-child .title {
    margin-top: 0;
  }

  .navbar-transparent .navbar-brand {
    color: #FFFFFF;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#bodyClick {
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0;
  top: 0;
  left: auto;
  right: 300px;
  content: "";
  z-index: 1029;
  overflow-x: hidden;
}

body {
  position: relative;
}

.navbar-header {
  -webkit-transform: translate3d(0px, 0, 0);
  -moz-transform: translate3d(0px, 0, 0);
  -o-transform: translate3d(0px, 0, 0);
  -ms-transform: translate3d(0px, 0, 0);
  transform: translate3d(0px, 0, 0);
  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  position: relative;
}

.navbar-burger .navbar-collapse {
  position: fixed;
  display: block;
  top: 0;
  height: 100vh !important;
  width: 300px;
  right: 0;
  z-index: 1032;
  visibility: visible;
  background-color: #999;
  overflow-y: visible;
  border-top: none;
  text-align: left;
  border-left: 1px solid #e3e3e3;
  padding-right: 0px;
  padding-left: 40px;
  max-height: none !important;
  -webkit-transform: translate3d(300px, 0, 0);
  -moz-transform: translate3d(300px, 0, 0);
  -o-transform: translate3d(300px, 0, 0);
  -ms-transform: translate3d(300px, 0, 0);
  transform: translate3d(300px, 0, 0);
  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}
.navbar-burger .navbar-collapse > ul {
  position: relative;
  z-index: 3;
  overflow-y: auto;
  height: 100%;
}
.navbar-burger .navbar-collapse .nav > li {
  border-bottom: 1px solid #e5e5e5;
  display: block;
  width: 100%;
}
.navbar-burger .navbar-collapse .nav > li:last-child {
  border-bottom: 0;
}
.navbar-burger .navbar-collapse .nav > li > a {
  margin: 0px 0px;
  color: #434547;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  line-height: 13px;
  padding: 24px 0;
}
.navbar-burger .navbar-collapse .nav > li > a:hover, .navbar-burger .navbar-collapse .nav > li > a.active {
  color: #c5a47e;
}
.navbar-burger .navbar-collapse .nav > li.social-links {
  text-align: center;
  margin-left: -40px;
}
.navbar-burger .navbar-collapse .nav > li.social-links > a {
  font-size: 18px;
  padding: 24px 15px;
}
.navbar-burger .navbar-collapse::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #FFFFFF;
  display: block;
  content: "";
  z-index: 1;
}
.navbar-burger .navbar-collapse.has-image::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(17, 17, 17, 0.8);
  display: block;
  content: "";
  z-index: 1;
}
.navbar-burger .navbar-collapse .active > a,
.navbar-burger .navbar-collapse .dropdown .dropdown-menu > li > a {
  color: #434547;
}
.navbar-burger .navbar-collapse .active > a:hover, .navbar-burger .navbar-collapse .active > a:focus,
.navbar-burger .navbar-collapse .dropdown .dropdown-menu > li > a:hover,
.navbar-burger .navbar-collapse .dropdown .dropdown-menu > li > a:focus {
  color: #c5a47e;
}
.navbar-burger .navbar-nav > li > .dropdown-menu:after, .navbar-burger .navbar-nav > li > .dropdown-menu:before {
  display: none;
}
.navbar-burger .dropdown-menu {
  float: none;
  width: auto;
  margin-top: 0;
  background-color: transparent;
  border: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  -ms-transition: none;
  transition: none;
}
.navbar-burger .open .dropdown-menu {
  position: static;
}
.navbar-burger .navbar-toggle .icon-bar {
  display: block;
  position: relative;
  width: 24px;
  height: 2px;
  border-radius: 1px;
}
.navbar-burger.navbar-transparent .navbar-toggle .icon-bar {
  background: #fff;
}
.navbar-burger .navbar-header .navbar-toggle {
  margin-top: 12px;
  margin-bottom: 8px;
  width: 40px;
  height: 40px;
}
.navbar-burger .bar1,
.navbar-burger .bar2,
.navbar-burger .bar3 {
  outline: 1px solid transparent;
}
.navbar-burger .bar1 {
  top: 0px;
  -webkit-animation: topbar-back 500ms linear 0s;
  -moz-animation: topbar-back 500ms linear 0s;
  animation: topbar-back 500ms 0s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.navbar-burger .bar2 {
  opacity: 1;
}
.navbar-burger .bar3 {
  bottom: 0px;
  -webkit-animation: bottombar-back 500ms linear 0s;
  -moz-animation: bottombar-back 500ms linear 0s;
  animation: bottombar-back 500ms 0s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.navbar-burger .toggled .bar1 {
  top: 6px;
  -webkit-animation: topbar-x 500ms linear 0s;
  -moz-animation: topbar-x 500ms linear 0s;
  animation: topbar-x 500ms 0s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.navbar-burger .toggled .bar2 {
  opacity: 0;
}
.navbar-burger .toggled .bar3 {
  bottom: 6px;
  -webkit-animation: bottombar-x 500ms linear 0s;
  -moz-animation: bottombar-x 500ms linear 0s;
  animation: bottombar-x 500ms 0s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
@keyframes topbar-x {
  0% {
    top: 0px;
    transform: rotate(0deg);
  }
  45% {
    top: 6px;
    transform: rotate(145deg);
  }
  75% {
    transform: rotate(130deg);
  }
  100% {
    transform: rotate(135deg);
  }
}
@-webkit-keyframes topbar-x {
  0% {
    top: 0px;
    -webkit-transform: rotate(0deg);
  }
  45% {
    top: 6px;
    -webkit-transform: rotate(145deg);
  }
  75% {
    -webkit-transform: rotate(130deg);
  }
  100% {
    -webkit-transform: rotate(135deg);
  }
}
@-moz-keyframes topbar-x {
  0% {
    top: 0px;
    -moz-transform: rotate(0deg);
  }
  45% {
    top: 6px;
    -moz-transform: rotate(145deg);
  }
  75% {
    -moz-transform: rotate(130deg);
  }
  100% {
    -moz-transform: rotate(135deg);
  }
}
@keyframes topbar-back {
  0% {
    top: 6px;
    transform: rotate(135deg);
  }
  45% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    top: 0px;
    transform: rotate(0);
  }
}
@-webkit-keyframes topbar-back {
  0% {
    top: 6px;
    -webkit-transform: rotate(135deg);
  }
  45% {
    -webkit-transform: rotate(-10deg);
  }
  75% {
    -webkit-transform: rotate(5deg);
  }
  100% {
    top: 0px;
    -webkit-transform: rotate(0);
  }
}
@-moz-keyframes topbar-back {
  0% {
    top: 6px;
    -moz-transform: rotate(135deg);
  }
  45% {
    -moz-transform: rotate(-10deg);
  }
  75% {
    -moz-transform: rotate(5deg);
  }
  100% {
    top: 0px;
    -moz-transform: rotate(0);
  }
}
@keyframes bottombar-x {
  0% {
    bottom: 0px;
    transform: rotate(0deg);
  }
  45% {
    bottom: 6px;
    transform: rotate(-145deg);
  }
  75% {
    transform: rotate(-130deg);
  }
  100% {
    transform: rotate(-135deg);
  }
}
@-webkit-keyframes bottombar-x {
  0% {
    bottom: 0px;
    -webkit-transform: rotate(0deg);
  }
  45% {
    bottom: 6px;
    -webkit-transform: rotate(-145deg);
  }
  75% {
    -webkit-transform: rotate(-130deg);
  }
  100% {
    -webkit-transform: rotate(-135deg);
  }
}
@-moz-keyframes bottombar-x {
  0% {
    bottom: 0px;
    -moz-transform: rotate(0deg);
  }
  45% {
    bottom: 6px;
    -moz-transform: rotate(-145deg);
  }
  75% {
    -moz-transform: rotate(-130deg);
  }
  100% {
    -moz-transform: rotate(-135deg);
  }
}
@keyframes bottombar-back {
  0% {
    bottom: 6px;
    transform: rotate(-135deg);
  }
  45% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    bottom: 0px;
    transform: rotate(0);
  }
}
@-webkit-keyframes bottombar-back {
  0% {
    bottom: 6px;
    -webkit-transform: rotate(-135deg);
  }
  45% {
    -webkit-transform: rotate(10deg);
  }
  75% {
    -webkit-transform: rotate(-5deg);
  }
  100% {
    bottom: 0px;
    -webkit-transform: rotate(0);
  }
}
@-moz-keyframes bottombar-back {
  0% {
    bottom: 6px;
    -moz-transform: rotate(-135deg);
  }
  45% {
    -moz-transform: rotate(10deg);
  }
  75% {
    -moz-transform: rotate(-5deg);
  }
  100% {
    bottom: 0px;
    -moz-transform: rotate(0);
  }
}
.wrapper {
  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  left: 0;
  background-color: white;
}
.wrapper.transition {
  -webkit-transform: translate3d(0px, 0, 0);
  -moz-transform: translate3d(0px, 0, 0);
  -o-transform: translate3d(0px, 0, 0);
  -ms-transform: translate3d(0px, 0, 0);
  transform: translate3d(0px, 0, 0);
}

.nav-open .wrapper {
  -webkit-transform: translate3d(-150px, 0, 0);
  -moz-transform: translate3d(-150px, 0, 0);
  -o-transform: translate3d(-150px, 0, 0);
  -ms-transform: translate3d(-150px, 0, 0);
  transform: translate3d(-150px, 0, 0);
}

.nav-open .navbar .navbar-header {
  -webkit-transform: translate3d(-200px, 0, 0);
  -moz-transform: translate3d(-200px, 0, 0);
  -o-transform: translate3d(-200px, 0, 0);
  -ms-transform: translate3d(-200px, 0, 0);
  transform: translate3d(-200px, 0, 0);
}

@media (min-width: 768px) {
  .navbar-form {
    margin-top: 21px;
    margin-bottom: 21px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .navbar-search-form {
    display: none;
  }

  .section-pricing [class*="col-"]:not(:first-child):not(:last-child) > .card:not(.card-black) {
    border-radius: 0;
  }
  .section-pricing .card:not(.card-black) {
    box-shadow: none;
  }
  .section-pricing [class*="col-"]:first-child > .card:not(.card-black) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .section-pricing [class*="col-"]:last-child > .card:not(.card-black) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .footer:not(.footer-big) nav > ul li:first-child {
    margin-left: 0;
  }

  .nav-open .navbar-collapse {
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate3d(0px, 0, 0);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }

  .navbar-burger .container {
    padding: 0 15px;
  }
  .navbar-burger .navbar-header {
    width: 100%;
  }
  .navbar-burger .navbar-toggle {
    display: block;
    margin-right: 0;
  }

  body > .navbar-collapse .navbar-nav,
  body > .navbar-collapse .navbar-nav > li {
    float: none;
  }
  body > .navbar-collapse .navbar-nav > li {
    float: none;
  }
}
/*          Changes for small display      */
@media (max-width: 767px) {
  .navbar-transparent {
    padding-top: 0;
    background-color: rgba(0, 0, 0, 0.45);
  }

  #bodyClick {
    right: 230px;
  }

  .navbar-collapse {
    position: fixed;
    display: block;
    top: 0;
    height: 100vh;
    width: 230px;
    right: 0;
    z-index: 1032;
    visibility: visible;
    background-color: #999;
    overflow-y: visible;
    border-top: none;
    text-align: left;
    border-left: 1px solid #e3e3e3;
    padding-right: 15px;
    padding-left: 15px;
    max-height: none !important;
    -webkit-transform: translate3d(230px, 0, 0);
    -moz-transform: translate3d(230px, 0, 0);
    -o-transform: translate3d(230px, 0, 0);
    -ms-transform: translate3d(230px, 0, 0);
    transform: translate3d(230px, 0, 0);
    -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -moz-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -o-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    -ms-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  }
  .navbar-collapse ul {
    position: relative;
    z-index: 3;
    overflow-y: auto;
    height: 100%;
  }
  .navbar-collapse .nav > li {
    border-bottom: 1px solid #e5e5e5;
    padding-right: 15px;
  }
  .navbar-collapse .nav > li:last-child {
    border-bottom: 0;
  }
  .navbar-collapse .nav > li > a {
    margin: 0px 0px;
    color: #434547;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
    padding: 24px 0;
  }
  .navbar-collapse .nav > li > a:hover, .navbar-collapse .nav > li > a.active {
    color: #c5a47e;
  }
  .navbar-collapse .nav > li.social-links {
    text-align: center;
    margin-left: -40px;
  }
  .navbar-collapse .nav > li.social-links > a {
    font-size: 18px;
    padding: 24px 15px;
  }
  .navbar-collapse::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #FFFFFF;
    display: block;
    content: "";
    z-index: 1;
  }
  .navbar-collapse.has-image::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(17, 17, 17, 0.8);
    display: block;
    content: "";
    z-index: 1;
  }

  .navbar .container {
    left: 0;
  }

  .nav-open .navbar-collapse {
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate3d(0px, 0, 0);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }

  .nav-open .wrapper {
    left: 0;
    -webkit-transform: translate3d(-115px, 0, 0);
    -moz-transform: translate3d(-115px, 0, 0);
    -o-transform: translate3d(-115px, 0, 0);
    -ms-transform: translate3d(-115px, 0, 0);
    transform: translate3d(-115px, 0, 0);
  }

  .navbar-nav {
    margin: 0;
  }
  .navbar-nav .dropdown .dropdown-menu > li > a {
    padding: 10px 15px 10px;
  }
  .navbar-nav .dropdown .dropdown-menu > li:first-child > a {
    padding-top: 0;
  }
  .navbar-nav .dropdown .dropdown-menu > li:last-child > a {
    padding-bottom: 20px;
  }

  [class*="navbar-"] .navbar-nav > li > a,
  [class*="navbar-"] .navbar-nav > li > a:hover,
  [class*="navbar-"] .navbar-nav > li > a:focus,
  [class*="navbar-"] .navbar-nav .navbar-nav .open .dropdown-menu > li > a:active {
    color: white;
  }
  [class*="navbar-"] .navbar-nav .active > a,
  [class*="navbar-"] .navbar-nav .dropdown .dropdown-menu > li > a {
    color: #434547;
  }
  [class*="navbar-"] .navbar-nav > li > a,
  [class*="navbar-"] .navbar-nav .open .dropdown-menu > li > a {
    opacity: .7;
    background: transparent;
  }
  [class*="navbar-"] .navbar-nav > li > a:hover, [class*="navbar-"] .navbar-nav > li > a:focus,
  [class*="navbar-"] .navbar-nav .open .dropdown-menu > li > a:hover,
  [class*="navbar-"] .navbar-nav .open .dropdown-menu > li > a:focus {
    opacity: 1;
  }
  [class*="navbar-"] .navbar-nav.navbar-nav .open .dropdown-menu > li > a:active {
    opacity: 1;
  }
  [class*="navbar-"] .navbar-nav .dropdown > a:hover .caret {
    border-bottom-color: #777;
    border-top-color: #777;
  }
  [class*="navbar-"] .navbar-nav .dropdown > a:active .caret {
    border-bottom-color: white;
    border-top-color: white;
  }

  .dropdown-menu {
    display: none;
  }

  .navbar-fixed-top {
    -webkit-backface-visibility: hidden;
  }

  .social-line .btn {
    margin: 0 0 10px 0;
  }

  .subscribe-line .form-control {
    margin: 0 0 10px 0;
  }

  .social-line.pull-right {
    float: none;
  }

  .footer nav.pull-left {
    float: none !important;
  }

  .footer:not(.footer-big) nav > ul li {
    float: none;
  }

  .social-area.pull-right {
    float: none !important;
  }

  .form-control + .form-control-feedback {
    margin-top: -8px;
  }

  .navbar-toggle:hover, .navbar-toggle:focus {
    background-color: transparent !important;
  }

  .btn.dropdown-toggle {
    margin-bottom: 0;
  }

  .media-post .author {
    width: 20%;
    float: none !important;
    display: block;
    margin: 0 auto 10px;
  }

  .media-post .media-body {
    width: 100%;
  }

  .nav-open .navbar .navbar-header {
    -webkit-transform: translate3d(-280px, 0, 0);
    -moz-transform: translate3d(-280px, 0, 0);
    -o-transform: translate3d(-280px, 0, 0);
    -ms-transform: translate3d(-280px, 0, 0);
    transform: translate3d(-280px, 0, 0);
  }
}
@media (max-width: 767px) {
  .footer .social-area.pull-right,
  .footer nav.pull-left {
    text-align: center;
  }

  .section-numbers .card {
    padding: 20px 0;
  }

  .section-pricing .parallax {
    height: auto;
  }
  .section-pricing .card-price {
    margin-bottom: 30px;
    border-radius: 10px;
  }
  .section-pricing .image {
    height: 215vh;
  }
}
@media (max-width: 930px) {
  .section.section-our-team .title-description,
  .section.section-we-do .title-description {
    max-width: 550px;
    margin: 0 auto;
  }

  .section.section-we-do .text-description {
    max-width: 420px;
    margin: 0 auto;
  }
}
@media (min-width: 768px) {
  .section-contact-us {
    min-height: 570px;
  }

  .section-contact-us .address {
    margin-top: 100px;
  }

  .section-pricing .row [class^="col-"]:first-child {
    padding-right: 0;
  }
  .section-pricing .row [class^="col-"]:last-child {
    padding-left: 0;
  }
  .section-pricing .row [class^="col-"]:nth-child(2) {
    padding: 0;
  }
}
@media (max-width: 992px) {
  .section-faq .box {
    max-width: 480px;
    margin: 0 auto;
  }

  .section-faq .text-description {
    margin-bottom: 30px;
  }

  .section.section-we-are .description {
    max-width: 560px;
    text-align: center;
    margin: 0 auto;
  }

  .text-center {
    margin-top: 20px;
  }

  .section.section-info .info-pricing {
    max-width: 400px;
    margin: 50px auto;
  }

  .section.section-info {
    height: auto;
  }

  .section.section-info .info-pricing .text {
    text-align: -webkit-center;
  }

  .section.section-info .info-pricing .icon {
    text-align: center;
    float: none;
    margin-top: 0;
    margin-right: 0;
  }
}
@media (min-width: 992px) {
  .section-pricing .row [class^="col-"] {
    padding: 0;
  }
}