<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="google" content="notranslate">

      <script type="text/javascript" async="" src="https://trinketsofcody.com/cody-widget.js"></script><script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-3897705.js?sv=7"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-BLGQHYCV6F&amp;l=dataLayer&amp;cx=c"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-N4C8MF2"></script><script>
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({"userId":213103,"visitorType":"student","batch":{"id":76,"fullNameWithC":"LOS-0223 (C#13)","schoolLocation":{"id":3,"name":"Lagos"}},"curriculum":{"id":17,"name":"Short Specializations"}});

    window.gtm_user_custom_event = function (name, options) {
      if (typeof name === 'undefined') {
        return;
      }

      window.dataLayer.push({
        customEventOptions: typeof options !== 'undefined' ? options : {},
        event: name,
      });
    }
  </script>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N4C8MF2');</script>
  <!-- End Google Tag Manager -->


    <title>Project: 0x04. Files manager | Lagos Intranet</title>

      <link rel="stylesheet" href="https://use.typekit.net/xgz4ilr.css">
      <link rel="stylesheet" media="all" href="/assets/application_alx-42f25473a01386db8cf1b6a39c720f51053c958623a609b5b1524927abd61549.css">
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="/assets/application-e108fb75f939d72d47f0e99c7163aee8c5572427c1e62e5b50334df42d03f2d3.js"></script>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon_alx.ico">
      <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="6XaM5yaf1jrtsYi3Quw4v32-lJIiRuaBS8jTZQIHcvYbC05crTQKv1vj3LJYUxAauoJq5wjDu-TZRNgzuTSuPA">

      <link rel="apple-touch-icon" href="/apple-touch-icon_alx.png">

      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

      <!-- Store user timezone -->
      <script>
        Cookies.set('timezone', (new Date()).getTimezoneOffset() / -60.0);
      </script>

      <!-- intro.js for interactive onboarding -->

      <!-- React -->
      <script src="/packs/js/application-c9e88dafb112ccf51f08.js"></script>
      <link rel="stylesheet" media="screen" href="/packs/css/application-87456da7.css">
  <script async="" src="https://script.hotjar.com/modules.a4fd7e5489291affcf56.js" charset="utf-8"></script><script src="https://js.userpilot.io/sdk/version/1.463/app.js" async=""></script><script src="https://script.hotjar.com/browser-perf.8417c6bba72228fa2e29.js"></script><style nonce="undefined">
iframe#userpilot-nps {
  width: 900px;
  right: 0px;
  margin: 0px auto;
  opacity: 1 !important;
}

/* NPS Mobile */
@media (max-width: 900px) {
  iframe#userpilot-nps {
      width: 100%;
  }
}

iframe#userpilot-resource-centre-frame {
  width: 0px;
  height: 0px;
}

div#userpilotContent[key=""]:not(.preview) {
  position: absolute;
  line-height: 18px;
  -webkit-transition: none;
  transition: none;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2147483638;
  pointer-events: none;
  outline: none !important;
  background: none !important;
  --sidebar-width: 0px;
  direction: ltr;
  display: block;
}

div#userpilotContent[key=""] * {
  -webkit-transition: none;
  transition: none;
  direction: ltr;
}

#userpilotContent[key=""] .conv-cont, #userpilotContent[key=""] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key=""] .conv-cont, #userpilotContent[key=""] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key=""] .userpilot .conv-cont {
  z-index: 2147483000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none
}

#userpilotContent[key=""] .canv {
  position: absolute;
  top: 0;
  box-shadow: inset 0 0 0 0px #ffffff, inset 0 0 15px rgb(208, 208, 208);
  background: none !important;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .56);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  transition: opacity 0.6s;
  border-radius: 10006px
}

#userpilotContent[key=""] .userpilot .canv {
  position: fixed;
  top: 0;
  background: none;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .7);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  border-radius: 10006px
}

#userpilotContent[key=""] .canv.userpilot-canv-hidden {
  opacity: 0 !important
}

#userpilotContent[key=""] .userpilot-soft-focus .canv {
  border: none
}

#userpilotContent[key=""] .conv-cont[userpilot-hidden] .up-userpilot-mmx-part{
  pointer-events: none !important;
}

#userpilotContent[key=""] .up-userpilot-mmx-part {
  position: absolute;
  z-index: 1 !important;
}

#userpilotContent[key=""] [up-backdrop="0"] {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

#userpilotContent[key=""] .conv-cont[backdrop-overlay="1"] .up-userpilot-mmx-part {
  width: 100% !important;
  height: 100% !important;
  top: 0px !important;
  left: 0px !important;
}

#userpilotContent[key=""] .conv-cont.allow-scroll .up-userpilot-mmx-part {
  pointer-events: none;
}

div#userpilotContent[key=""]>*, div#userpilotContent[key=""]>*:not(.userpilot-hotspot-container)>*:not(.userpilot-backdrop) {
  pointer-events: all;
}

#userpilotContent[key=""] .userpilot-mmx-cursor {
  position: fixed;
  width: 14px;
  -webkit-transition: all 1.5s;
  transition: all 1.5s;
  pointer-events: none
}
#userpilotContent[key=""] .userpilot-mmx-cursor * {
  pointer-events: none !important;
}
#userpilotContent[key=""] .up-t-pluse {
  position: absolute;
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 100%;
  color: gainsboro;
  background: gainsboro
}
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse {
  width: 10px;
  height: 10px;
  pointer-events: none !important;
}
#userpilotContent[key=""] .up-t-pluse:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: -3px;
  top: -3px;
  background-color: transparent;
  border-radius: 50%;
  border: 7px solid;
  border-color: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear
}
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse:before {
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
  border: 0px;
  background: inherit;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear
}
@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

#userpilotContent[key=""] .userpilot-ripple {
  position: absolute;
  pointer-events: none;
  width: 0px;
  height: 30px;
  border: none;
  border-radius: 100%;
  left: 50%;
  top: 50%;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple {
  height: 18px;
  width: 18px;
  background-color: transparent !important;
}
#userpilotContent[key=""] .userpilot-ripple:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 0px;
  top: 0px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear;
  border: 10px solid;
  border-color: inherit;
  box-sizing: border-box;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple:before {
  height: 18px;
  width: 18px;
  left: -1px;
  top: -1px;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear;
}
@-webkit-keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

@keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

#userpilotContent[key=""] .userpilot-ripple:after {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 10px;
  top: 10px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilot_active_after 2s infinite linear;
  animation: userpilot_active_after 2s infinite linear;
  box-sizing: border-box;
  background: currentColor;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple:after {
  height: 10px;
  width: 10px;
  left: 4px;
  top: 4px;
  animation: none;
}
@keyframes userpilot_active_after {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1)
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(5)
  }
}

@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1;
    border-color: inherit;
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1.5);
    border-color: inherit;
  }

  30% {
    background: none;
    border: 0 solid;
    border-color: inherit;
    opacity: 0
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(2.5);
    border-color: inherit;
  }
}


/* sonar animations */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"], 
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"] {
  background: none !important;
  animation: none;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::after, 
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::after {
  content: "";
  width: 9px;
  height: 9px;
  position: absolute;
  border-radius: 150px;
  animation: pulse-dot infinite 1.5s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: currentColor;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::before {
  animation: pulse-ring infinite 1.5s;
  border-style: solid;
  border-width: 4px;
  padding: 5px;
  background: none !important;
}

/* morph animation */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"],
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"] {
  background: none !important;
  animation: none;
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::before {
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: currentColor;
  opacity: .6;
  position: absolute;
  border-radius: 50%;
  animation: morph 1s linear infinite;
  box-shadow: 0 0 5px 1px currentColor;
  border: 9px solid;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::after {
  background: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  content: "";
  display: block;
}

/* target animation */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"],
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]{
  height: 18px;
  width: 18px;
  box-shadow: 0 0 4px 2px currentColor;
  opacity: 1;
  animation: target 2s linear infinite;
  background: currentColor !important;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]::before {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 0;
  border-color: currentColor transparent transparent transparent;
  opacity: .6;
  background: none;
  animation: none;
  border-radius: 0;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent currentColor transparent;
  opacity: .6;
  top: initial;
  left: initial;
  border-radius: initial;
  background: none;
}

 /* egg animations */
 #userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"],
 #userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 0 6px 4px currentColor;
  animation: egg 600ms linear infinite;
  animation-direction: alternate;
  background: none !important;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::before {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: transparent;
  border: 1px solid currentColor;
  animation: none;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::after {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: currentColor;
  opacity: .6;
}


@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(1, 1) translate(-50%, -50%);
  }

  30% {
    transform: scale(1.25, 1.25) translate(-40%, -40%);
  }

  100% {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }

  25% {
    opacity: .5;
  }

  100% {
    transform: scale(1.8, 1.8);
    opacity: 0;
  }
}

@keyframes morph {
  0% {
    transform: rotateZ(0);
    border-radius: 20%;
  }

  50% {
    transform: rotateZ(45deg);
    border-radius: 50%;
  }

  100% {
    transform: rotateZ(90deg);
    border-radius: 20%;
  }
}

@keyframes target {
  0% {
    transform: rotateZ(0) scale(0.6);
  }

  50% {
    transform: rotateZ(180deg) scale(1);
  }

  100% {
    transform: rotateZ(360deg) scale(0.6);
  }
}

@keyframes egg {
  from {
    box-shadow: inset 0 0 8px 3px currentColor;
  }

  to {
    box-shadow: inset 0 0 4px 1px currentColor;
  }
}</style><style nonce="undefined">
iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-nps,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys {
  max-height: none;
  max-width: none;
  min-height: 0px;
  min-width: 0px;
  filter: none;
  pointer-events: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys {
  right: initial;
  left: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame {
    display: initial;
}
</style></head>

  <body class="signed_in env_production notranslate" translate="no" data-theme-suffix="_alx" inmaintabuse="1">
      <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4C8MF2"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->


      <input type="hidden" id="hbtn-slack-url" value="https://alx-students.slack.com">
      <nav class="navbar navbar-default navbar-fixed-top topbar visible-xs">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-mobile" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>

    <a class="navbar-brand" href="/">
      <div class="logo"></div>
</a>  </div>

  <div class="collapse navbar-collapse navigation" id="navbar-mobile">
    <ul class="nav navbar-nav">
      


    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Captain's Logs"><a href="/dashboards/my_captain_log"><div class="icon "><i aria-hidden="true" class="fa-solid fa-book "></i></div><div class="visible-xs">Captain's Logs</div></a></li>


<hr class="visible-xs">

<li>

      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://s3.amazonaws.com/alx-intranet.hbtn.io/users/photos/000/213/103/thumb/IMG-00950.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240311T101352Z&amp;X-Amz-Expires=600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e395a2d4161f0902f416bbdf4986c25a58e6033033c946080de52f9ca5c85cb2')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


    </ul>
  </div>
</nav>

      <div class="hidden-xs navigation sidebar">
  <a class="logo-container" href="/">
    <div class="logo"></div>
</a>
  <ul>
    


    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Captain's Logs"><a href="/dashboards/my_captain_log"><div class="icon "><i aria-hidden="true" class="fa-solid fa-book "></i></div><div class="visible-xs">Captain's Logs</div></a></li>


<hr class="visible-xs">

<li>

      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://s3.amazonaws.com/alx-intranet.hbtn.io/users/photos/000/213/103/thumb/IMG-00950.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240311T101352Z&amp;X-Amz-Expires=600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e395a2d4161f0902f416bbdf4986c25a58e6033033c946080de52f9ca5c85cb2')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


  </ul>
</div>


    <main>
        

        <div id="layout-bars">
          
          <div class="px-5 py-3" id="student-switch-curriculum">
  <div class="dropdown d-flex flex-column gap-1">
    <span class="fs-small text-muted">Curriculum</span>

    <div aria-haspopup="true" aria-expanded="false" class="align-items-center d-flex gap-3" data-toggle="dropdown" id="student-switch-curriculum-dropdown" role="button">
      <div class="d-flex flex-column" style="line-height: 16px">
        <span class="fs-4 fw-600">
          Short Specializations
        </span>
        <span class="fs-small text-muted">
          Average: <span class="fw-500">110.23%</span>
        </span>
      </div>

      <div class="d-flex flex-column justify-content-center">
        <span style="margin-bottom: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-up  fa-fw"></i>
        </span>
        <span style="margin-top: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-down  fa-fw"></i>
        </span>
      </div>
    </div>

    <ul aria-labelledby="student-switch-curriculum-dropdown" class="dropdown-menu fs-5">
        <li>
          <a href="/curriculums/17/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  Short Specializations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">110.23%</span>
                </span>
              </div>

                <span class="fw-600 text-info" style="margin-left: 42px">
                  <i aria-hidden="true" class="fa-solid fa-check "></i>
                </span>
            </div>
</a>        </li>
        <li>
          <a href="/curriculums/1/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  SE Foundations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">95.06%</span>
                </span>
              </div>

            </div>
</a>        </li>
    </ul>
  </div>
</div>

          
          
          
        </div>

      <article class="">

        
<div class="project row">
  <div class="col-xs-12 col-md-10 col-lg-8 contains-images">

      <h1 class="gap">
    0x04. Files manager
    
  </h1>

  <div data-react-class="tags/Tags" data-react-props="{&quot;tags&quot;:[{&quot;id&quot;:35,&quot;value&quot;:&quot;Back-end&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:46,&quot;value&quot;:&quot;JavaScript&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:52,&quot;value&quot;:&quot;ES6&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:57,&quot;value&quot;:&quot;NoSQL&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:58,&quot;value&quot;:&quot;MongoDB&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:59,&quot;value&quot;:&quot;Redis&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:62,&quot;value&quot;:&quot;NodeJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:63,&quot;value&quot;:&quot;ExpressJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:65,&quot;value&quot;:&quot;Kue &quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;}]}" data-react-cache-id="tags/Tags-0"><div class="align-items-center d-flex flex-wrap gap-3 my-2"><span class="label label-primary" style="font-size: 14px;">Back-end</span><span class="label label-primary" style="font-size: 14px;">JavaScript</span><span class="label label-primary" style="font-size: 14px;">ES6</span><span class="label label-primary" style="font-size: 14px;">NoSQL</span><span class="label label-primary" style="font-size: 14px;">MongoDB</span><span class="label label-primary" style="font-size: 14px;">Redis</span><span class="label label-primary" style="font-size: 14px;">NodeJS</span><span class="label label-primary" style="font-size: 14px;">ExpressJS</span><span class="label label-primary" style="font-size: 14px;">Kue </span></div></div>

  <div data-react-class="projects/ProjectMetadata" data-react-props="{&quot;metadata&quot;:{&quot;author&quot;:&quot;Guillaume, CTO at Holberton School&quot;,&quot;weight&quot;:1,&quot;correction&quot;:{&quot;released&quot;:true,&quot;auto_correction_available_at&quot;:&quot;2024-03-09T00:00:00.000+01:00&quot;,&quot;requires_auto_correction&quot;:true,&quot;requires_manual_correction&quot;:true},&quot;bpi&quot;:{&quot;current&quot;:true,&quot;started&quot;:false,&quot;in_second_deadline&quot;:false,&quot;starts_at&quot;:&quot;2024-03-07T06:00:00.000+01:00&quot;,&quot;ends_at&quot;:&quot;2024-03-14T06:00:00.000+01:00&quot;,&quot;second_deadline_at&quot;:&quot;2024-03-16T06:00:00.000+01:00&quot;},&quot;team&quot;:{&quot;in_team_of&quot;:2,&quot;members&quot;:[&quot;Emmanuel Akejelu&quot;]}}}" data-react-cache-id="projects/ProjectMetadata-0"><ul class="list-group metadata" id="project-metadata"><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-user fa-fw"></i> By: Guillaume, CTO at Holberton School</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-gear fa-fw"></i> Weight: 1</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-users fa-fw"></i> Project to be done in teams of 2 people (your team: Emmanuel Akejelu)</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-calendar fa-fw"></i> Project will start <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-07 06:00 (GMT+01:00)"><span class="datetime">Mar 7, 2024 6:00 AM</span></span>, must end by <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-14 06:00 (GMT+01:00)"><span class="datetime">Mar 14, 2024 6:00 AM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-check fa-fw"></i> Checker was released at <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-09 00:00 (GMT+01:00)"><span class="datetime">Mar 9, 2024 12:00 AM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-square-check fa-fw"></i> <strong>Manual QA review must be done</strong> (request it when you are done with the project)</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-square-check fa-fw"></i> An auto review will be launched at the deadline</li></ul></div>




    


    <div id="project_id" style="display: none" data-project-id="1246"></div>



      

      

      <div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <p>This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.</p>

<p>The objective is to build a simple platform to upload and view files:</p>

<ul>
<li>User authentication via a token </li>
<li>List all files</li>
<li>Upload a new file</li>
<li>Change permission of a file</li>
<li>View a file</li>
<li>Generate thumbnails for images</li>
</ul>

<p>You will be guided step by step for building it, but you have some freedoms of implementation, split in more files etc… (<code>utils</code> folder will be your friend)</p>

<p>Of course, this kind of service already exists in the real life - it’s a learning purpose to assemble each piece and build a full product.</p>

<p>Enjoy!</p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/buFPHJYnZjtOrTd610j6Og" title="Node JS getting started" target="_blank">Node JS getting started</a></li>
<li><a href="/rltoken/uYPplj2cPK8pcP0LtV6RuA" title="Process API doc" target="_blank">Process API doc</a></li>
<li><a href="/rltoken/SujfeWKCWmUMomfETjETEg" title="Express getting started" target="_blank">Express getting started</a></li>
<li><a href="/rltoken/FzEwplmoZiyGvkgKllZNJw" title="Mocha documentation" target="_blank">Mocha documentation</a></li>
<li><a href="/rltoken/pdNNTX0OLugbhxvP3sLgOw" title="Nodemon documentation" target="_blank">Nodemon documentation</a></li>
<li><a href="/rltoken/g1x7y_3GskzVAJBTXcSjmA" title="MongoDB" target="_blank">MongoDB</a></li>
<li><a href="/rltoken/NkHBpGrxnd0sK_fDPMbihg" title="Bull" target="_blank">Bull</a></li>
<li><a href="/rltoken/KX6cck2nyLpQOTDMLcwxLg" title="Image thumbnail" target="_blank">Image thumbnail</a></li>
<li><a href="/rltoken/j9B0Kc-4HDKLUe88ShbOjQ" title="Mime-Types" target="_blank">Mime-Types</a></li>
<li><a href="/rltoken/nqwKRszO8Tkj_ZWW1EFwGw" title="Redis" target="_blank">Redis</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/88vbnogJmkEoxqu-6wAXEw" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>how to create an API with Express</li>
<li>how to authenticate a user</li>
<li>how to store data in MongoDB</li>
<li>how to store temporary data in Redis</li>
<li>how to setup and use a background worker</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>node</code> (version 12.x.x)</li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be verified against lint using ESLint</li>
</ul>

<h2>Provided files</h2>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
{
  "name": "files_manager",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "start-server": "nodemon --exec babel-node --presets @babel/preset-env ./server.js",
    "start-worker": "nodemon --exec babel-node --presets @babel/preset-env ./worker.js",
    "dev": "nodemon --exec babel-node --presets @babel/preset-env",
    "test": "./node_modules/.bin/mocha --require @babel/register --exit" 
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bull": "^3.16.0",
    "chai-http": "^4.3.0",
    "express": "^4.17.1",
    "image-thumbnail": "^1.0.10",
    "mime-types": "^2.1.27",
    "mongodb": "^3.5.9",
    "redis": "^2.8.0",
    "sha1": "^1.1.1",
    "uuid": "^8.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.0",
    "@babel/core": "^7.8.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.8.2",
    "@babel/register": "^7.8.0",
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "mocha": "^6.2.2",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides:[
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ]
};
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
};
</code>
</pre>
</details>

<h3>and…</h3>

<p>Don’t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>

  </div>
</div>


      

      

        
          <h2 class="gap">Tasks</h2>

    <div data-role="task11792" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-11792">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Redis utils
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside the folder <code>utils</code>, create a file <code>redis.js</code> that contains the class <code>RedisClient</code>.</p>

<p><code>RedisClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to Redis:

<ul>
<li>any error of the redis client must be displayed in the console (you should use <code>on('error')</code> of the redis client)</li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to Redis is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>get</code> that takes a string key as argument and returns the Redis value stored for this key</li>
<li>an asynchronous function <code>set</code> that takes a string key, a value and a duration in second as arguments to store it in Redis (with an expiration set by the duration argument)</li>
<li>an asynchronous function <code>del</code> that takes a string key as argument and remove the value in Redis for this key</li>
</ul>

<p>After the class definition, create and export an instance of <code>RedisClient</code> called <code>redisClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import redisClient from './utils/redis';

(async () =&gt; {
    console.log(redisClient.isAlive());
    console.log(await redisClient.get('myKey'));
    await redisClient.set('myKey', 12, 5);
    console.log(await redisClient.get('myKey'));

    setTimeout(async () =&gt; {
        console.log(await redisClient.get('myKey'));
    }, 1000*10)
})();

bob@dylan:~$ npm run dev main.js
true
null
12
null
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/redis.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11792">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11792" data-batch-id="76" data-toggle="modal" data-target="#task-11792-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11792-modal-button" data-task-id="11792" data-toggle="modal" data-target="#task-test-correction-11792-correction-modal" id="task-num-0-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11792}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11792}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11793" data-position="2" id="task-num-1">
      <div class="panel panel-default task-card " id="task-11793">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. MongoDB utils
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside the folder <code>utils</code>, create a file <code>db.js</code> that contains the class <code>DBClient</code>.</p>

<p><code>DBClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to MongoDB:

<ul>
<li>host: from the environment variable <code>DB_HOST</code> or default: <code>localhost</code></li>
<li>port: from the environment variable <code>DB_PORT</code> or default: <code>27017</code></li>
<li>database: from the environment variable <code>DB_DATABASE</code> or default: <code>files_manager</code></li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to MongoDB is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>nbUsers</code> that returns the number of documents in the collection <code>users</code></li>
<li>an asynchronous function <code>nbFiles</code> that returns the number of documents in the collection <code>files</code></li>
</ul>

<p>After the class definition, create and export an instance of <code>DBClient</code> called <code>dbClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import dbClient from './utils/db';

const waitConnection = () =&gt; {
    return new Promise((resolve, reject) =&gt; {
        let i = 0;
        const repeatFct = async () =&gt; {
            await setTimeout(() =&gt; {
                i += 1;
                if (i &gt;= 10) {
                    reject()
                }
                else if(!dbClient.isAlive()) {
                    repeatFct()
                }
                else {
                    resolve()
                }
            }, 1000);
        };
        repeatFct();
    })
};

(async () =&gt; {
    console.log(dbClient.isAlive());
    await waitConnection();
    console.log(dbClient.isAlive());
    console.log(await dbClient.nbUsers());
    console.log(await dbClient.nbFiles());
})();

bob@dylan:~$ npm run dev main.js
false
true
4
30
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/db.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11793">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11793" data-batch-id="76" data-toggle="modal" data-target="#task-11793-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11793-modal-button" data-task-id="11793" data-toggle="modal" data-target="#task-test-correction-11793-correction-modal" id="task-num-1-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11793}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11793}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11794" data-position="3" id="task-num-2">
      <div class="panel panel-default task-card " id="task-11794">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. First API
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside <code>server.js</code>, create the Express server:</p>

<ul>
<li>it should listen on the port set by the environment variable <code>PORT</code> or by default 5000</li>
<li>it should load all routes from the file <code>routes/index.js</code></li>
</ul>

<p>Inside the folder <code>routes</code>, create a file <code>index.js</code> that contains all endpoints of our API:</p>

<ul>
<li><code>GET /status</code> =&gt; <code>AppController.getStatus</code></li>
<li><code>GET /stats</code> =&gt; <code>AppController.getStats</code></li>
</ul>

<p>Inside the folder <code>controllers</code>, create a file <code>AppController.js</code> that contains the definition of the 2 endpoints:</p>

<ul>
<li><code>GET /status</code> should return if Redis is alive and if the DB is alive too by using the 2 utils created previously: <code>{ "redis": true, "db": true }</code> with a status code 200</li>
<li><code>GET /stats</code> should return the number of users and files in DB: <code>{ "users": 12, "files": 1231 }</code> with a status code 200

<ul>
<li><code>users</code> collection must be used for counting all users</li>
<li><code>files</code> collection must be used for counting all files</li>
</ul></li>
</ul>

<p><strong>Terminal 1:</strong></p>

<pre><code>bob@dylan:~$ npm run start-server
Server running on port 5000
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/status ; echo ""
{"redis":true,"db":true}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/stats ; echo ""
{"users":4,"files":30}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>server.js, routes/index.js, controllers/AppController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11794">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11794" data-batch-id="76" data-toggle="modal" data-target="#task-11794-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11794-modal-button" data-task-id="11794" data-toggle="modal" data-target="#task-test-correction-11794-correction-modal" id="task-num-2-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11794}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11794}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11795" data-position="4" id="task-num-3">
      <div class="panel panel-default task-card " id="task-11795">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Create a new user
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Now that we have a simple API, it’s time to add users to our database.</p>

<p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /users</code> =&gt; <code>UsersController.postNew</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>UsersController.js</code> that contains the new endpoint:</p>

<p><code>POST /users</code> should create a new user in DB:</p>

<ul>
<li>To create a user, you must specify an <code>email</code> and a <code>password</code> </li>
<li>If the <code>email</code> is missing, return an error <code>Missing email</code> with a status code 400</li>
<li>If the <code>password</code> is missing, return an error <code>Missing password</code> with a status code 400</li>
<li>If the <code>email</code> already exists in DB, return an error <code>Already exist</code> with a status code 400</li>
<li>The <code>password</code> must be stored after being hashed in <code>SHA1</code></li>
<li>The endpoint is returning the new user with only the <code>email</code> and the <code>id</code> (auto generated by MongoDB) with a status code 201</li>
<li>The new user must be saved in the collection <code>users</code>:

<ul>
<li><code>email</code>: same as the value received</li>
<li><code>password</code>: <code>SHA1</code> value of the value received</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"id":"5f1e7d35c7ba06511e683b21","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ echo 'db.users.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e7d35c7ba06511e683b21"), "email" : "bob@dylan.com", "password" : "89cad29e3ebc1035b29b1478a8e70854f25fa2b2" }
bob@dylan:~$ 
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"error":"Already exist"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com" }' ; echo ""
{"error":"Missing password"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/UsersController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11795">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11795" data-batch-id="76" data-toggle="modal" data-target="#task-11795-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11795-modal-button" data-task-id="11795" data-toggle="modal" data-target="#task-test-correction-11795-correction-modal" id="task-num-3-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11795}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11795}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11796" data-position="5" id="task-num-4">
      <div class="panel panel-default task-card " id="task-11796">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Authenticate a user
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 3 new endpoints:</p>

<ul>
<li><code>GET /connect</code> =&gt; <code>AuthController.getConnect</code></li>
<li><code>GET /disconnect</code> =&gt; <code>AuthController.getDisconnect</code></li>
<li><code>GET /users/me</code> =&gt; <code>UserController.getMe</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>AuthController.js</code> that contains new endpoints:</p>

<p><code>GET /connect</code> should sign-in the user by generating a new authentication token:</p>

<ul>
<li>By using the header <code>Authorization</code> and the technique of the Basic auth (Base64 of the <code>&lt;email&gt;:&lt;password&gt;</code>), find the user associate to this email and with this password (reminder: we are storing the SHA1 of the password)</li>
<li>If no user has been found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise:

<ul>
<li>Generate a random string (using <code>uuidv4</code>) as token</li>
<li>Create a key: <code>auth_&lt;token&gt;</code> </li>
<li>Use this key for storing in Redis (by using the <code>redisClient</code> create previously) the user ID for 24 hours</li>
<li>Return this token: <code>{ "token": "155342df-2399-41da-9e8c-458b6ac52a0c" }</code> with a status code 200</li>
</ul></li>
</ul>

<p>Now, we have a way to identify a user, create a token (= avoid to store the password on any front-end) and use this token for 24h to access to the API!</p>

<p>Every authenticated endpoints of our API will look at this token inside the header <code>X-Token</code>.</p>

<p><code>GET /disconnect</code> should sign-out the user based on the token:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, delete the token in Redis and return nothing with a status code 204</li>
</ul></li>
</ul>

<p>Inside the file <code>controllers/UsersController.js</code> add a new endpoint:</p>

<p><code>GET /users/me</code> should retrieve the user base on the token used:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, return the user object (<code>email</code> and <code>id</code> only)</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"031bffac-3edc-4e51-aaae-1c121317da8a"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"id":"5f1e7cda04a394508232559d","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/disconnect -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""

bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"error":"Unauthorized"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/UsersController.js, controllers/AuthController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11796">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11796" data-batch-id="76" data-toggle="modal" data-target="#task-11796-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11796-modal-button" data-task-id="11796" data-toggle="modal" data-target="#task-test-correction-11796-correction-modal" id="task-num-4-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11796}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11796}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11797" data-position="6" id="task-num-5">
      <div class="panel panel-default task-card " id="task-11797">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. First file
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /files</code> =&gt; <code>FilesController.postUpload</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>FilesController.js</code> that contains the new endpoint:</p>

<p><code>POST /files</code> should create a new file in DB and in disk:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>To create a file, you must specify:

<ul>
<li><code>name</code>: as filename</li>
<li><code>type</code>: either <code>folder</code>, <code>file</code> or <code>image</code></li>
<li><code>parentId</code>: (optional) as ID of the parent (default: 0 -&gt; the root)</li>
<li><code>isPublic</code>: (optional) as boolean to define if the file is public or not (default: false)</li>
<li><code>data</code>: (only for <code>type=file|image</code>) as Base64 of the file content</li>
</ul></li>
<li>If the <code>name</code> is missing, return an error <code>Missing name</code> with a status code 400</li>
<li>If the <code>type</code> is missing or not part of the list of accepted type, return an error <code>Missing type</code> with a status code 400</li>
<li>If the <code>data</code> is missing and <code>type != folder</code>, return an error <code>Missing data</code> with a status code 400</li>
<li>If the <code>parentId</code> is set:

<ul>
<li>If no file is present in DB for this <code>parentId</code>, return an error <code>Parent not found</code> with a status code 400</li>
<li>If the file present in DB for this <code>parentId</code> is not of type <code>folder</code>, return an error <code>Parent is not a folder</code> with a status code 400</li>
</ul></li>
<li>The user ID should be added to the document saved in DB - as owner of a file</li>
<li>If the type is <code>folder</code>, add the new file document in the DB and return the new file with a status code 201</li>
<li>Otherwise:

<ul>
<li>All file will be stored locally in a folder (to create automatically if not present):

<ul>
<li>The relative path of this folder is given by the environment variable <code>FOLDER_PATH</code> </li>
<li>If this variable is not present or empty, use <code>/tmp/files_manager</code> as storing folder path</li>
</ul></li>
<li>Create a local path in the storing folder with filename a UUID </li>
<li>Store the file in clear (reminder: <code>data</code> contains the Base64 of the file) in this local path</li>
<li>Add the new file document in the collection <code>files</code> with these attributes:

<ul>
<li><code>userId</code>: ID of the owner document (owner from the authentication)</li>
<li><code>name</code>: same as the value received</li>
<li><code>type</code>: same as the value received</li>
<li><code>isPublic</code>: same as the value received</li>
<li><code>parentId</code>: same as the value received - if not present: 0</li>
<li><code>localPath</code>: for a <code>type=file|image</code>, the absolute path to the file save in local</li>
</ul></li>
<li>Return the new file with a status code 201</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "myText.txt", "type": "file", "data": "SGVsbG8gV2Vic3RhY2shCg==" }' ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9
bob@dylan:~$
bob@dylan:~$ cat /tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9 
Hello Webstack!
bob@dylan:~$
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "images", "type": "folder" }' ; echo ""
{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ cat image_upload.py
import base64
import requests
import sys

file_path = sys.argv[1]
file_name = file_path.split('/')[-1]

file_encoded = None
with open(file_path, "rb") as image_file:
    file_encoded = base64.b64encode(image_file.read()).decode('utf-8')

r_json = { 'name': file_name, 'type': 'image', 'isPublic': True, 'data': file_encoded, 'parentId': sys.argv[3] }
r_headers = { 'X-Token': sys.argv[2] }

r = requests.post("http://0.0.0.0:5000/files", json=r_json, headers=r_headers)
print(r.json())

bob@dylan:~$
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$
bob@dylan:~$ echo 'db.files.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e881cc7ba06511e683b23"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "images", "type" : "folder", "parentId" : "0" }
{ "_id" : ObjectId("5f1e879ec7ba06511e683b22"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "myText.txt", "type" : "file", "parentId" : "0", "isPublic" : false, "localPath" : "/tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9" }
{ "_id" : ObjectId("5f1e8896c7ba06511e683b25"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "image.png", "type" : "image", "parentId" : ObjectId("5f1e881cc7ba06511e683b23"), "isPublic" : true, "localPath" : "/tmp/files_manager/51997b88-5c42-42c2-901e-e7f4e71bdc47" }
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11797">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11797" data-batch-id="76" data-toggle="modal" data-target="#task-11797-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11797-modal-button" data-task-id="11797" data-toggle="modal" data-target="#task-test-correction-11797-correction-modal" id="task-num-5-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11797}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11797}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11798" data-position="7" id="task-num-6">
      <div class="panel panel-default task-card " id="task-11798">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Get and list file
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>GET /files/:id</code> =&gt; <code>FilesController.getShow</code></li>
<li><code>GET /files</code> =&gt; <code>FilesController.getIndex</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>GET /files/:id</code> should retrieve the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise, return the file document</li>
</ul>

<p><code>GET /files</code> should retrieve all users file documents for a specific <code>parentId</code> and with pagination:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>Based on the query parameters <code>parentId</code> and <code>page</code>, return the list of file document

<ul>
<li><code>parentId</code>:

<ul>
<li>No validation of <code>parentId</code> needed - if the <code>parentId</code> is not linked to any user folder, returns an empty list</li>
<li>By default, <code>parentId</code> is equal to 0 = the root</li>
</ul></li>
<li>Pagination:

<ul>
<li>Each page should be 20 items max</li>
<li><code>page</code> query parameter starts at 0 for the first page. If equals to 1, it means it’s the second page (form the 20th to the 40th), etc…</li>
<li>Pagination can be done directly by the <code>aggregate</code> of MongoDB</li>
</ul></li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0},{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0},{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files?parentId=5f1e881cc7ba06511e683b23 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11798">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11798" data-batch-id="76" data-toggle="modal" data-target="#task-11798-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11798-modal-button" data-task-id="11798" data-toggle="modal" data-target="#task-test-correction-11798-correction-modal" id="task-num-6-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11798}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11798}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11799" data-position="8" id="task-num-7">
      <div class="panel panel-default task-card " id="task-11799">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. File publish/unpublish
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putPublish</code></li>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putUnpublish</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>PUT /files/:id/publish</code> should set <code>isPublic</code> to <code>true</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>true</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<p><code>PUT /files/:id/unpublish</code> should set <code>isPublic</code> to <code>false</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>false</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11799">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11799" data-batch-id="76" data-toggle="modal" data-target="#task-11799-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11799-modal-button" data-task-id="11799" data-toggle="modal" data-target="#task-test-correction-11799-correction-modal" id="task-num-7-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11799}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11799}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11800" data-position="9" id="task-num-8">
      <div class="panel panel-default task-card " id="task-11800">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. File data
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add one new endpoint:</p>

<ul>
<li><code>GET /files/:id/data</code> =&gt; <code>FilesController.getFile</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the new endpoint:</p>

<p><code>GET /files/:id/data</code> should return the content of the file document based on the ID:</p>

<ul>
<li>If no file document is linked to the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>If the file document (folder or file) is not public (<code>isPublic: false</code>) and no user authenticate or not the owner of the file, return an error <code>Not found</code> with a status code 404</li>
<li>If the type of the file document is <code>folder</code>, return an error <code>A folder doesn't have content</code> with a status code 400</li>
<li>If the file is not locally present, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>By using the module <code>mime-types</code>, get the <a href="/rltoken/buV7HGNuNMB5ZCUH0LdECw" title="MIME-type" target="_blank">MIME-type</a> based on the <code>name</code> of the file</li>
<li>Return the content of the file with the correct MIME-type</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
Hello Webstack!

bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
{"error":"Not found"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":true,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
Hello Webstack!

bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11800">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11800" data-batch-id="76" data-toggle="modal" data-target="#task-11800-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11800-modal-button" data-task-id="11800" data-toggle="modal" data-target="#task-test-correction-11800-correction-modal" id="task-num-8-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11800}">
          Check your code
      </button>
      



    

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11801" data-position="10" id="task-num-9">
      <div class="panel panel-default task-card " id="task-11801">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      9. Image Thumbnails
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Update the endpoint <code>POST /files</code> endpoint to start a background processing for generating thumbnails for a file of type <code>image</code>:</p>

<ul>
<li>Create a <code>Bull</code> queue <code>fileQueue</code> </li>
<li>When a new image is stored (in local and in DB), add a job to this queue with the <code>userId</code> and <code>fileId</code></li>
</ul>

<p>Create a file <code>worker.js</code>:</p>

<ul>
<li>By using the module <code>Bull</code>, create a queue <code>fileQueue</code></li>
<li>Process this queue:

<ul>
<li>If <code>fileId</code> is not present in the job, raise an error <code>Missing fileId</code></li>
<li>If <code>userId</code> is not present in the job, raise an error <code>Missing userId</code></li>
<li>If no document is found in DB based on the <code>fileId</code> and <code>userId</code>, raise an error <code>File not found</code></li>
<li>By using the module <code>image-thumbnail</code>, generate 3 thumbnails with <code>width</code> = 500, 250 and 100 - store each result on the same location of the original file by appending <code>_&lt;width size&gt;</code></li>
</ul></li>
</ul>

<p>Update the endpoint <code>GET /files/:id/data</code> to accept a query parameter <code>size</code>:</p>

<ul>
<li><code>size</code> can be <code>500</code>, <code>250</code> or <code>100</code></li>
<li>Based on <code>size</code>, return the correct local file</li>
<li>If the local file doesn’t exist, return an error <code>Not found</code> with a status code 404</li>
</ul>

<p><strong>Terminal 3:</strong> (start the worker)</p>

<pre><code>bob@dylan:~$ npm run start-worker
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47   6dc53397-8491-4b7c-8273-f748b1a031cb   6dc53397-8491-4b7c-8273-f748b1a031cb_100   6dc53397-8491-4b7c-8273-f748b1a031cb_250    6dc53397-8491-4b7c-8273-f748b1a031cb_500
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data -so new_image.png ; file new_image.png
new_image.png: PNG image data, 471 x 512, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=100 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 100 x 109, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=250 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 250 x 272, 8-bit/color RGBA, non-interlaced
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, controllers/FilesController.js, worker.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11801">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11801" data-batch-id="76" data-toggle="modal" data-target="#task-11801-users-done-modal">
    Help
  </button>
  


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>

    <p class="lg-gap">
      </p><form class="button_to" method="post" action="/projects/1246/unlock_optionals"><input id="unlock_optional_btn" class="btn btn-primary btn-block" data-confirm="Are you sure? Make sure you focused on the mandatory tasks first" data-disable-with="Unlocking 2 advanced tasks..." data-gtm-custom-event-name="project_unlock_advanced_tasks" type="submit" value="Done with the mandatory tasks? Unlock 2 advanced tasks now!"><input type="hidden" name="authenticity_token" value="6XaM5yaf1jrtsYi3Quw4v32-lJIiRuaBS8jTZQIHcvYbC05crTQKv1vj3LJYUxAauoJq5wjDu-TZRNgzuTSuPA" autocomplete="off"></form>
    <p></p>



          <div data-react-class="projects/ProjectReadyForReview" data-react-props="{&quot;csrfToken&quot;:&quot;bX4hKWtDEcx5TxojiYJa9ucJvcrYADM452IBMB0xxtOfA-OS4OjNSc8dTiaTPXJTIDVDv_KFbl117gpmpgIaGQ&quot;,&quot;firstReview&quot;:true,&quot;peerReview&quot;:{&quot;availableReviewersURI&quot;:&quot;/corrections/23229182/available_reviewers.json&quot;,&quot;canReviewPeerDirectly&quot;:true,&quot;cancelReadyForReviewURI&quot;:&quot;/corrections/23229182/cancel_ready_for_review.json&quot;,&quot;correctCorrectionURI&quot;:&quot;https://intranet.alxswe.com/corrections/23229182/correct&quot;,&quot;disabled&quot;:false,&quot;manualReviewBehavior&quot;:&quot;any_student&quot;,&quot;qaReviewsURI&quot;:&quot;/corrections/to_review&quot;,&quot;readyForReviewURI&quot;:&quot;/corrections/23229182/toggle_ready_for_review.json&quot;,&quot;reviewDeadline&quot;:&quot;2024-03-21T06:00:00.000+01:00&quot;,&quot;synchronousManualReview&quot;:false},&quot;toggled&quot;:false}" data-react-cache-id="projects/ProjectReadyForReview-0"><div class="row gap"><div class="col-md-12"><div class="text-center"><button class="btn btn-lg btn-primary">Ready for a  manual review</button></div></div></div></div>

          

  </div>
</div>


      </article>

      <div class="copyright">Copyright © 2024 ALX, All rights reserved.</div>

    </main><script type="text/javascript" id="">window.userpilotSettings={token:"NX-b636a33d"};</script>
<script type="text/javascript" id="" src="https://js.userpilot.io/sdk/latest.js"></script>

        <button class="btn btn-primary atop-help" id="search-button" data-search-active="false" data-toggle="modal" data-target="#search-modal">
  <i aria-hidden="true" class="fa-solid fa-magnifying-glass "></i>
  <i aria-hidden="true" class="fa-solid fa-window-minimize "></i>
</button>

        



        


        <script id="cody-snippet">
          window.codySettings = { widget_id: "9b733b82-6921-495f-a618-9c46c40be7f6" };
          !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();
        </script>
  

<script src="chrome-extension://igkkmokkmlbkkgdnkkancbonkbbmkioc/sm.bundle.js" data-pname="recorder-screenshot-v3" data-asset-path="https://apv3.s3.ap-northeast-2.amazonaws.com"></script>
<script type="text/javascript" id="">userpilot.identify("\x3cUNIQUE USER ID\x3e",{name:"John Doe",email:"customer@example.com",created_at:"1519205055"});userpilot.reload();</script>
<iframe id="_hjSafeContext_28175854" title="_hjSafeContext" tabindex="-1" aria-hidden="true" src="about:blank" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe><div id="userpilotContent" key="" theme_id="0"></div><div style="display: none" class="ubey-RecordingScreen-count-down ubey-RecordingScreen-count-down-container">
          <style>
              .ubey-RecordingScreen-count-down-container {
                  position: fixed;
                  height: 100vh;
                  width: 100vw;
                  top: 0;
                  left: 0;
                  z-index: 9999999999999;
                  background-color: rgba(0, 0, 0, 0.2);
              }
      
              .ubey-RecordingScreen-count-down-content {
                  position: absolute;
                  display: flex;
                  top: 50%;
                  left: 50%;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  height: 15em;
                  width: 15em;
                  transform: translate(-50%, -100%);
                  background-color: rgba(0, 0, 0, 0.6);
                  border-radius: 50%;
              }
      
              #ubey-RecordingScreen-count-count {
                  font-size: 14em;
                  transform: translateY(-2%);
              }
          </style>
          <div class="ubey-RecordingScreen-count-down-content">
              <span id="ubey-RecordingScreen-count-count"></span>
          </div>
      </div><div id="cody-wrapper"><style>
  #cody-wrapper .cody-launcher {
    position: var(--position) !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--launcher-bottom) !important;
    border-radius: 9999px !important;
    border: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
    z-index: 999999 !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: box-shadow, scale 300ms linear !important;
    animation: cody-launcher-pulse 4s infinite !important;
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
    cursor: pointer !important;
    --icon-margin: 12px;
    --close-icon-margin: 16px;
  }

    #cody-wrapper {
    --position: fixed;
    --left: unset;
    --right: 20px;
    --launcher-bottom: 20px;
    --frame-bottom: 90px;
    --background-color: #FBD647;
    --text-color: #020617;
    --shadow-color: 251, 214, 71;
  }

  @media screen and (max-width: 512px) {
    #cody-wrapper {
      --left: unset;
      --right: 10px;
    }
  }

  
  #cody-wrapper .cody-launcher:hover {
    scale: 1.1 !important;
  }

  #cody-wrapper .cody-launcher .cody-close-icon {
    display: none !important;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-icon {
    display: none !important;;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-close-icon {
    display: block !important;;
  }

  #cody-wrapper .cody-iframe {
    z-index: 99999 !important;
    transition: visibility .5s, opacity .5s linear !important;
    background-color: #fff !important;
    position: fixed !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--frame-bottom) !important;
    height: 75vh !important;
    width: 448px !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    box-shadow: 0 2px 4px rgba(0, 18, 26, .08), 0 3px 12px rgba(0, 18, 26, .16), 0 2px 14px 0 rgba(0, 18, 26, .2) !important;
    border: 0 !important;
    display: none !important;
  }

  @media screen and (max-height: 667px) {
    #cody-wrapper .cody-iframe {
      height: calc(100vh - 110px) !important;
    }
  }

  @media screen and (max-width: 448px) {
    #cody-wrapper .cody-iframe {
      width: calc(100vw - 20px) !important;
    }
  }

  #cody-wrapper[data-launcher-open] .cody-iframe {
    display: block !important;
  }

  @keyframes cody-launcher-pulse {
    0%, 100% {
      box-shadow: 0 0 18px 4px rgba(var(--shadow-color), 0.8);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(var(--shadow-color), 0.4);
    }
  }
</style>

<button class="cody-launcher" style="width: 56px; height: 56px; font-size: 16px;">
    <svg class="cody-icon" style="aspect-ratio: 1 / 1; width: 100%; height: 100%; margin: var(--icon-margin)" aria-hidden="true" version="1.1" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689  c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01  c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5  c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4  S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z" fill="currentColor"></path>
</svg>    <svg style="aspect-ratio: 1/1; width: 100%; height: 100%; margin: var(--close-icon-margin);" class="cody-close-icon" launchercloseicon="chevron-down" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" fill="currentColor"></path>
</svg></button></div><div class="modal fade users-done-modal" id="task-11792-users-done-modal" data-task-id="11792" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "0. Redis utils"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11792-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "0. Redis utils"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11792">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11792">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11792">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11793-users-done-modal" data-task-id="11793" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "1. MongoDB utils"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11793-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "1. MongoDB utils"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11793">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11793">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11793">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11794-users-done-modal" data-task-id="11794" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "2. First API"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11794-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "2. First API"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11794">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11794">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11794">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11795-users-done-modal" data-task-id="11795" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "3. Create a new user"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11795-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "3. Create a new user"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11795">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11795">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11795">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11796-users-done-modal" data-task-id="11796" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "4. Authenticate a user"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11796-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "4. Authenticate a user"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11796">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11796">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11796">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11797-users-done-modal" data-task-id="11797" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "5. First file"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11797-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "5. First file"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11797">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11797">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11797">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11798-users-done-modal" data-task-id="11798" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "6. Get and list file"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11798-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "6. Get and list file"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11798">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11798">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11798">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11799-users-done-modal" data-task-id="11799" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "7. File publish/unpublish"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11799-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "7. File publish/unpublish"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11799">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11799">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11799">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11800-users-done-modal" data-task-id="11800" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "8. File data"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11800-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "8. File data"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11800">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11800">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11800">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11801-users-done-modal" data-task-id="11801" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "9. Image Thumbnails"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade" id="container-specs-modal" style="display: none;"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title">Recommended Sandbox</h4></div><div class="modal-body"><div data-react-class="user_containers/ContainerSpecs" data-react-props="{&quot;containerModelName&quot;:&quot;Sandbox&quot;,&quot;containerSpecs&quot;:[{&quot;available&quot;:true,&quot;description&quot;:&quot;\u003cp\u003eUbuntu 18.04 with Node 12, Redis and MongoDB installed\u003c/p\u003e\n&quot;,&quot;id&quot;:31,&quot;name&quot;:&quot;Ubuntu 18.04 - Node 12 - Redis/MongoDB&quot;,&quot;online&quot;:true}],&quot;containersLimit&quot;:2,&quot;csrfToken&quot;:&quot;0ps6lyx5j_SV5nH8wkm788TTMuA2jOSNDWq2G1Ru0yAg5vgsp9JTcSO0JfnY9pNWA-_MlRwJueif5r1N710P6g&quot;,&quot;startStatusURI&quot;:&quot;/user_containers/start_status.json&quot;,&quot;startURI&quot;:&quot;/user_containers/start.json&quot;}" data-react-cache-id="user_containers/ContainerSpecs-0"><div><div class="d-flex gap-4 sandboxes-filters"><a class="btn btn-outline-primary"><i aria-hidden="true" class="fa-solid fa-filter"></i><span class="ml-2">Running only</span></a><div class="align-items-center d-flex" style="position: relative; width: 100%;"><input class="form-control" placeholder="Search for an image ..." type="search" value=""></div></div><div class="mt-3"><h3>1 image<small class="ml-2">(1/2 Sandboxes spawned)</small></h3></div><div class="mt-3"><div class="panel panel-default"><div class="panel-body border-left-success" style="border-left: 6px solid;"><div class="align-items-center d-flex flex-wrap justify-content-between"><div><h3 class="mt-0"><i aria-hidden="true" class="fa-solid fa-terminal text-success"></i><span class="ml-2">Ubuntu 18.04 - Node 12 - Redis/MongoDB</span></h3><div class="mt-2 text-muted"><p>Ubuntu 18.04 with Node 12, Redis and MongoDB installed</p>
</div></div><div class="d-flex flex-wrap gap-5"><div class="align-items-center d-flex gap-3"><div><span data-container="body" data-html="false" data-placement="top" data-toggle="tooltip" title="" data-original-title="Copy SSH command"><span role="button"><button class="btn btn-default">SSH</button></span></span></div><div><span data-container="body" data-html="false" data-placement="top" data-toggle="tooltip" title="" data-original-title="Copy SFTP command"><span role="button"><button class="btn btn-default">SFTP</button></span></span></div><a class="btn btn-webterm" href="/user_containers/644038/webterm" rel="noreferrer" target="_blank"><i aria-hidden="true" class="fa-solid fa-terminal"></i><span class="ml-2">Webterm</span></a></div><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Restart your Sandbox"><a class="btn btn-warning "><i aria-hidden="true" class="fa-solid fa-power-off"></i><span class="ml-2">Restart</span></a></span><a class="btn btn-danger"><i aria-hidden="true" class="fa-solid fa-trash"></i><span class="ml-2">Destroy</span></a></div></div><div class="d-flex flex-wrap gap-5 mt-3"><div class="p-4" style="flex-shrink: 0;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-user text-info"></i><span class="ml-2">Credentials</span></h4><div class="d-flex gap-2"><strong>Host</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>2805a3eff317.d82e1789.alx-cod.online</small></span></span></div><div class="d-flex gap-2"><strong>Username</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>2805a3eff317</small></span></span></div><div class="d-flex gap-2"><strong>Password</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>aee367209a0cf527e5ea</small></span></span></div></div></div><div class="p-4" style="flex: 1 1 40%;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-globe text-info"></i><span class="ml-2">Web access</span></h4><div class="align-items-center d-flex flex-wrap gap-2"><a class="btn btn-outline-primary" href="http://2805a3eff317.d82e1789.alx-cod.online" rel="noreferrer" target="_blank">HTTP</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:3000" rel="noreferrer" target="_blank">3000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:4000" rel="noreferrer" target="_blank">4000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:5000" rel="noreferrer" target="_blank">5000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:5001" rel="noreferrer" target="_blank">5001</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:6379" rel="noreferrer" target="_blank">6379</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:8000" rel="noreferrer" target="_blank">8000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:8080" rel="noreferrer" target="_blank">8080</a></div></div></div><div class="p-4" style="flex: 1 1 35%;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-signs-post text-info"></i><span class="ml-2">Port mapping</span></h4><div class="align-items-center d-flex flex-wrap"><div class="align-items-center text-primary d-flex gap-2" style="padding: 5px 10px;"><strong>SSH</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41605</span></div><div class="align-items-center text-primary d-flex gap-2" style="padding: 5px 10px;"><strong>HTTP</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41604</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>1245</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41603</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>3000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41602</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>4000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41601</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>5000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41600</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>5001</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41599</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>6379</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41598</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>8000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41597</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>8080</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41596</span></div></div></div></div></div></div></div></div></div></div></div></div></div></div><div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal-label">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <div id="search-bar-container">
    <input id="search-bar" autocomplete="off" type="text" name="hbtn-search-bar" placeholder="✨Start search by typing in this field✨">
</div>

            </div>
            <div class="modal-body">
                <div id="modal-spinner" class="spinner gap">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
                <div id="search-results-container">
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade" id="markdownGuideModal" tabindex="-1" role="dialog" aria-labelledby="markdownGuideModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Markdown Guide</h4>
        </div>
        <div class="modal-body">
            <h4>Emphasis</h4>
<pre>**<strong>bold</strong>**
*<em>italics</em>*
~~<strike>strikethrough</strike>~~</pre>
<h4>Headers</h4>
<pre># Big header
## Medium header
### Small header
#### Tiny header</pre>
<h4>Lists</h4>
<pre>* Generic list item
* Generic list item
* Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item</pre>
<h4>Links</h4>
<pre>[Text to display](http://www.example.com)</pre>
<h4>Quotes</h4>
<pre>&gt; This is a quote.
&gt; It can span multiple lines!</pre>
<h4>Images</h4>
<p>CSS style available: <code>width, height, opacity</code></p>
<pre>![](http://www.example.com/image.jpg)
![](http://www.example.com/image.jpg | width: 200px)
![](http://www.example.com/image.jpg | height: 124px | width: 80px | opacity: 0.6)
</pre>
<h4>Tables</h4>
<pre>| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

<em>Or without aligning the columns...</em>

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
</pre>
<h4>Displaying code</h4>
<pre>`var example = "hello!";`

<em>Or spanning multiple lines...</em>

```
var example = "hello!";
alert(example);
```</pre>
        </div>
    </div>
  </div>
</div></body></html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="google" content="notranslate">

      <script type="text/javascript" async="" src="https://trinketsofcody.com/cody-widget.js"></script><script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-3897705.js?sv=7"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-BLGQHYCV6F&amp;l=dataLayer&amp;cx=c"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-N4C8MF2"></script><script>
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({"userId":213103,"visitorType":"student","batch":{"id":76,"fullNameWithC":"LOS-0223 (C#13)","schoolLocation":{"id":3,"name":"Lagos"}},"curriculum":{"id":17,"name":"Short Specializations"}});

    window.gtm_user_custom_event = function (name, options) {
      if (typeof name === 'undefined') {
        return;
      }

      window.dataLayer.push({
        customEventOptions: typeof options !== 'undefined' ? options : {},
        event: name,
      });
    }
  </script>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N4C8MF2');</script>
  <!-- End Google Tag Manager -->


    <title>Project: 0x04. Files manager | Lagos Intranet</title>

      <link rel="stylesheet" href="https://use.typekit.net/xgz4ilr.css">
      <link rel="stylesheet" media="all" href="/assets/application_alx-42f25473a01386db8cf1b6a39c720f51053c958623a609b5b1524927abd61549.css">
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="/assets/application-e108fb75f939d72d47f0e99c7163aee8c5572427c1e62e5b50334df42d03f2d3.js"></script>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon_alx.ico">
      <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="6XaM5yaf1jrtsYi3Quw4v32-lJIiRuaBS8jTZQIHcvYbC05crTQKv1vj3LJYUxAauoJq5wjDu-TZRNgzuTSuPA">

      <link rel="apple-touch-icon" href="/apple-touch-icon_alx.png">

      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

      <!-- Store user timezone -->
      <script>
        Cookies.set('timezone', (new Date()).getTimezoneOffset() / -60.0);
      </script>

      <!-- intro.js for interactive onboarding -->

      <!-- React -->
      <script src="/packs/js/application-c9e88dafb112ccf51f08.js"></script>
      <link rel="stylesheet" media="screen" href="/packs/css/application-87456da7.css">
  <script async="" src="https://script.hotjar.com/modules.a4fd7e5489291affcf56.js" charset="utf-8"></script><script src="https://js.userpilot.io/sdk/version/1.463/app.js" async=""></script><script src="https://script.hotjar.com/browser-perf.8417c6bba72228fa2e29.js"></script><style nonce="undefined">
iframe#userpilot-nps {
  width: 900px;
  right: 0px;
  margin: 0px auto;
  opacity: 1 !important;
}

/* NPS Mobile */
@media (max-width: 900px) {
  iframe#userpilot-nps {
      width: 100%;
  }
}

iframe#userpilot-resource-centre-frame {
  width: 0px;
  height: 0px;
}

div#userpilotContent[key=""]:not(.preview) {
  position: absolute;
  line-height: 18px;
  -webkit-transition: none;
  transition: none;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2147483638;
  pointer-events: none;
  outline: none !important;
  background: none !important;
  --sidebar-width: 0px;
  direction: ltr;
  display: block;
}

div#userpilotContent[key=""] * {
  -webkit-transition: none;
  transition: none;
  direction: ltr;
}

#userpilotContent[key=""] .conv-cont, #userpilotContent[key=""] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key=""] .conv-cont, #userpilotContent[key=""] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key=""] .userpilot .conv-cont {
  z-index: 2147483000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none
}

#userpilotContent[key=""] .canv {
  position: absolute;
  top: 0;
  box-shadow: inset 0 0 0 0px #ffffff, inset 0 0 15px rgb(208, 208, 208);
  background: none !important;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .56);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  transition: opacity 0.6s;
  border-radius: 10006px
}

#userpilotContent[key=""] .userpilot .canv {
  position: fixed;
  top: 0;
  background: none;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .7);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  border-radius: 10006px
}

#userpilotContent[key=""] .canv.userpilot-canv-hidden {
  opacity: 0 !important
}

#userpilotContent[key=""] .userpilot-soft-focus .canv {
  border: none
}

#userpilotContent[key=""] .conv-cont[userpilot-hidden] .up-userpilot-mmx-part{
  pointer-events: none !important;
}

#userpilotContent[key=""] .up-userpilot-mmx-part {
  position: absolute;
  z-index: 1 !important;
}

#userpilotContent[key=""] [up-backdrop="0"] {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

#userpilotContent[key=""] .conv-cont[backdrop-overlay="1"] .up-userpilot-mmx-part {
  width: 100% !important;
  height: 100% !important;
  top: 0px !important;
  left: 0px !important;
}

#userpilotContent[key=""] .conv-cont.allow-scroll .up-userpilot-mmx-part {
  pointer-events: none;
}

div#userpilotContent[key=""]>*, div#userpilotContent[key=""]>*:not(.userpilot-hotspot-container)>*:not(.userpilot-backdrop) {
  pointer-events: all;
}

#userpilotContent[key=""] .userpilot-mmx-cursor {
  position: fixed;
  width: 14px;
  -webkit-transition: all 1.5s;
  transition: all 1.5s;
  pointer-events: none
}
#userpilotContent[key=""] .userpilot-mmx-cursor * {
  pointer-events: none !important;
}
#userpilotContent[key=""] .up-t-pluse {
  position: absolute;
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 100%;
  color: gainsboro;
  background: gainsboro
}
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse {
  width: 10px;
  height: 10px;
  pointer-events: none !important;
}
#userpilotContent[key=""] .up-t-pluse:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: -3px;
  top: -3px;
  background-color: transparent;
  border-radius: 50%;
  border: 7px solid;
  border-color: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear
}
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse:before {
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
  border: 0px;
  background: inherit;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear
}
@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

#userpilotContent[key=""] .userpilot-ripple {
  position: absolute;
  pointer-events: none;
  width: 0px;
  height: 30px;
  border: none;
  border-radius: 100%;
  left: 50%;
  top: 50%;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple {
  height: 18px;
  width: 18px;
  background-color: transparent !important;
}
#userpilotContent[key=""] .userpilot-ripple:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 0px;
  top: 0px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear;
  border: 10px solid;
  border-color: inherit;
  box-sizing: border-box;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple:before {
  height: 18px;
  width: 18px;
  left: -1px;
  top: -1px;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear;
}
@-webkit-keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

@keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

#userpilotContent[key=""] .userpilot-ripple:after {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 10px;
  top: 10px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilot_active_after 2s infinite linear;
  animation: userpilot_active_after 2s infinite linear;
  box-sizing: border-box;
  background: currentColor;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple:after {
  height: 10px;
  width: 10px;
  left: 4px;
  top: 4px;
  animation: none;
}
@keyframes userpilot_active_after {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1)
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(5)
  }
}

@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1;
    border-color: inherit;
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1.5);
    border-color: inherit;
  }

  30% {
    background: none;
    border: 0 solid;
    border-color: inherit;
    opacity: 0
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(2.5);
    border-color: inherit;
  }
}


/* sonar animations */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"], 
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"] {
  background: none !important;
  animation: none;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::after, 
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::after {
  content: "";
  width: 9px;
  height: 9px;
  position: absolute;
  border-radius: 150px;
  animation: pulse-dot infinite 1.5s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: currentColor;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::before {
  animation: pulse-ring infinite 1.5s;
  border-style: solid;
  border-width: 4px;
  padding: 5px;
  background: none !important;
}

/* morph animation */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"],
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"] {
  background: none !important;
  animation: none;
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::before {
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: currentColor;
  opacity: .6;
  position: absolute;
  border-radius: 50%;
  animation: morph 1s linear infinite;
  box-shadow: 0 0 5px 1px currentColor;
  border: 9px solid;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::after {
  background: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  content: "";
  display: block;
}

/* target animation */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"],
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]{
  height: 18px;
  width: 18px;
  box-shadow: 0 0 4px 2px currentColor;
  opacity: 1;
  animation: target 2s linear infinite;
  background: currentColor !important;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]::before {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 0;
  border-color: currentColor transparent transparent transparent;
  opacity: .6;
  background: none;
  animation: none;
  border-radius: 0;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent currentColor transparent;
  opacity: .6;
  top: initial;
  left: initial;
  border-radius: initial;
  background: none;
}

 /* egg animations */
 #userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"],
 #userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 0 6px 4px currentColor;
  animation: egg 600ms linear infinite;
  animation-direction: alternate;
  background: none !important;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::before {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: transparent;
  border: 1px solid currentColor;
  animation: none;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::after {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: currentColor;
  opacity: .6;
}


@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(1, 1) translate(-50%, -50%);
  }

  30% {
    transform: scale(1.25, 1.25) translate(-40%, -40%);
  }

  100% {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }

  25% {
    opacity: .5;
  }

  100% {
    transform: scale(1.8, 1.8);
    opacity: 0;
  }
}

@keyframes morph {
  0% {
    transform: rotateZ(0);
    border-radius: 20%;
  }

  50% {
    transform: rotateZ(45deg);
    border-radius: 50%;
  }

  100% {
    transform: rotateZ(90deg);
    border-radius: 20%;
  }
}

@keyframes target {
  0% {
    transform: rotateZ(0) scale(0.6);
  }

  50% {
    transform: rotateZ(180deg) scale(1);
  }

  100% {
    transform: rotateZ(360deg) scale(0.6);
  }
}

@keyframes egg {
  from {
    box-shadow: inset 0 0 8px 3px currentColor;
  }

  to {
    box-shadow: inset 0 0 4px 1px currentColor;
  }
}</style><style nonce="undefined">
iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-nps,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys {
  max-height: none;
  max-width: none;
  min-height: 0px;
  min-width: 0px;
  filter: none;
  pointer-events: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys {
  right: initial;
  left: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame {
    display: initial;
}
</style></head>

<body class="signed_in env_production notranslate" translate="no" data-theme-suffix="_alx" inmaintabuse="1">
      <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4C8MF2"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->


      <input type="hidden" id="hbtn-slack-url" value="https://alx-students.slack.com">
      <nav class="navbar navbar-default navbar-fixed-top topbar visible-xs">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-mobile" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>

    <a class="navbar-brand" href="/">
      <div class="logo"></div>
</a>  </div>

  <div class="collapse navbar-collapse navigation" id="navbar-mobile">
    <ul class="nav navbar-nav">
      


    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Captain's Logs"><a href="/dashboards/my_captain_log"><div class="icon "><i aria-hidden="true" class="fa-solid fa-book "></i></div><div class="visible-xs">Captain's Logs</div></a></li>


<hr class="visible-xs">

<li>

      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://s3.amazonaws.com/alx-intranet.hbtn.io/users/photos/000/213/103/thumb/IMG-00950.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240311T101352Z&amp;X-Amz-Expires=600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e395a2d4161f0902f416bbdf4986c25a58e6033033c946080de52f9ca5c85cb2')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


    </ul>
  </div>
</nav>

      <div class="hidden-xs navigation sidebar">
  <a class="logo-container" href="/">
    <div class="logo"></div>
</a>
  <ul>
    


    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Captain's Logs"><a href="/dashboards/my_captain_log"><div class="icon "><i aria-hidden="true" class="fa-solid fa-book "></i></div><div class="visible-xs">Captain's Logs</div></a></li>


<hr class="visible-xs">

<li>

      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://s3.amazonaws.com/alx-intranet.hbtn.io/users/photos/000/213/103/thumb/IMG-00950.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240311T101352Z&amp;X-Amz-Expires=600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e395a2d4161f0902f416bbdf4986c25a58e6033033c946080de52f9ca5c85cb2')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


  </ul>
</div>


    <main>
        

        <div id="layout-bars">
          
          <div class="px-5 py-3" id="student-switch-curriculum">
  <div class="dropdown d-flex flex-column gap-1">
    <span class="fs-small text-muted">Curriculum</span>

    <div aria-haspopup="true" aria-expanded="false" class="align-items-center d-flex gap-3" data-toggle="dropdown" id="student-switch-curriculum-dropdown" role="button">
      <div class="d-flex flex-column" style="line-height: 16px">
        <span class="fs-4 fw-600">
          Short Specializations
        </span>
        <span class="fs-small text-muted">
          Average: <span class="fw-500">110.23%</span>
        </span>
      </div>

      <div class="d-flex flex-column justify-content-center">
        <span style="margin-bottom: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-up  fa-fw"></i>
        </span>
        <span style="margin-top: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-down  fa-fw"></i>
        </span>
      </div>
    </div>

    <ul aria-labelledby="student-switch-curriculum-dropdown" class="dropdown-menu fs-5">
        <li>
          <a href="/curriculums/17/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  Short Specializations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">110.23%</span>
                </span>
              </div>

                <span class="fw-600 text-info" style="margin-left: 42px">
                  <i aria-hidden="true" class="fa-solid fa-check "></i>
                </span>
            </div>
</a>        </li>
        <li>
          <a href="/curriculums/1/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  SE Foundations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">95.06%</span>
                </span>
              </div>

            </div>
</a>        </li>
    </ul>
  </div>
</div>

          
          
          
        </div>

      <article class="">

        
<div class="project row">
  <div class="col-xs-12 col-md-10 col-lg-8 contains-images">

      <h1 class="gap">
    0x04. Files manager
    
  </h1>

  <div data-react-class="tags/Tags" data-react-props="{&quot;tags&quot;:[{&quot;id&quot;:35,&quot;value&quot;:&quot;Back-end&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:46,&quot;value&quot;:&quot;JavaScript&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:52,&quot;value&quot;:&quot;ES6&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:57,&quot;value&quot;:&quot;NoSQL&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:58,&quot;value&quot;:&quot;MongoDB&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:59,&quot;value&quot;:&quot;Redis&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:62,&quot;value&quot;:&quot;NodeJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:63,&quot;value&quot;:&quot;ExpressJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:65,&quot;value&quot;:&quot;Kue &quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;}]}" data-react-cache-id="tags/Tags-0"><div class="align-items-center d-flex flex-wrap gap-3 my-2"><span class="label label-primary" style="font-size: 14px;">Back-end</span><span class="label label-primary" style="font-size: 14px;">JavaScript</span><span class="label label-primary" style="font-size: 14px;">ES6</span><span class="label label-primary" style="font-size: 14px;">NoSQL</span><span class="label label-primary" style="font-size: 14px;">MongoDB</span><span class="label label-primary" style="font-size: 14px;">Redis</span><span class="label label-primary" style="font-size: 14px;">NodeJS</span><span class="label label-primary" style="font-size: 14px;">ExpressJS</span><span class="label label-primary" style="font-size: 14px;">Kue </span></div></div>

  <div data-react-class="projects/ProjectMetadata" data-react-props="{&quot;metadata&quot;:{&quot;author&quot;:&quot;Guillaume, CTO at Holberton School&quot;,&quot;weight&quot;:1,&quot;correction&quot;:{&quot;released&quot;:true,&quot;auto_correction_available_at&quot;:&quot;2024-03-09T00:00:00.000+01:00&quot;,&quot;requires_auto_correction&quot;:true,&quot;requires_manual_correction&quot;:true},&quot;bpi&quot;:{&quot;current&quot;:true,&quot;started&quot;:false,&quot;in_second_deadline&quot;:false,&quot;starts_at&quot;:&quot;2024-03-07T06:00:00.000+01:00&quot;,&quot;ends_at&quot;:&quot;2024-03-14T06:00:00.000+01:00&quot;,&quot;second_deadline_at&quot;:&quot;2024-03-16T06:00:00.000+01:00&quot;},&quot;team&quot;:{&quot;in_team_of&quot;:2,&quot;members&quot;:[&quot;Emmanuel Akejelu&quot;]}}}" data-react-cache-id="projects/ProjectMetadata-0"><ul class="list-group metadata" id="project-metadata"><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-user fa-fw"></i> By: Guillaume, CTO at Holberton School</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-gear fa-fw"></i> Weight: 1</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-users fa-fw"></i> Project to be done in teams of 2 people (your team: Emmanuel Akejelu)</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-calendar fa-fw"></i> Project will start <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-07 06:00 (GMT+01:00)"><span class="datetime">Mar 7, 2024 6:00 AM</span></span>, must end by <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-14 06:00 (GMT+01:00)"><span class="datetime">Mar 14, 2024 6:00 AM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-check fa-fw"></i> Checker was released at <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-09 00:00 (GMT+01:00)"><span class="datetime">Mar 9, 2024 12:00 AM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-square-check fa-fw"></i> <strong>Manual QA review must be done</strong> (request it when you are done with the project)</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-square-check fa-fw"></i> An auto review will be launched at the deadline</li></ul></div>




    


    <div id="project_id" style="display: none" data-project-id="1246"></div>



      

      

      <div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <p>This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.</p>

<p>The objective is to build a simple platform to upload and view files:</p>

<ul>
<li>User authentication via a token </li>
<li>List all files</li>
<li>Upload a new file</li>
<li>Change permission of a file</li>
<li>View a file</li>
<li>Generate thumbnails for images</li>
</ul>

<p>You will be guided step by step for building it, but you have some freedoms of implementation, split in more files etc… (<code>utils</code> folder will be your friend)</p>

<p>Of course, this kind of service already exists in the real life - it’s a learning purpose to assemble each piece and build a full product.</p>

<p>Enjoy!</p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/buFPHJYnZjtOrTd610j6Og" title="Node JS getting started" target="_blank">Node JS getting started</a></li>
<li><a href="/rltoken/uYPplj2cPK8pcP0LtV6RuA" title="Process API doc" target="_blank">Process API doc</a></li>
<li><a href="/rltoken/SujfeWKCWmUMomfETjETEg" title="Express getting started" target="_blank">Express getting started</a></li>
<li><a href="/rltoken/FzEwplmoZiyGvkgKllZNJw" title="Mocha documentation" target="_blank">Mocha documentation</a></li>
<li><a href="/rltoken/pdNNTX0OLugbhxvP3sLgOw" title="Nodemon documentation" target="_blank">Nodemon documentation</a></li>
<li><a href="/rltoken/g1x7y_3GskzVAJBTXcSjmA" title="MongoDB" target="_blank">MongoDB</a></li>
<li><a href="/rltoken/NkHBpGrxnd0sK_fDPMbihg" title="Bull" target="_blank">Bull</a></li>
<li><a href="/rltoken/KX6cck2nyLpQOTDMLcwxLg" title="Image thumbnail" target="_blank">Image thumbnail</a></li>
<li><a href="/rltoken/j9B0Kc-4HDKLUe88ShbOjQ" title="Mime-Types" target="_blank">Mime-Types</a></li>
<li><a href="/rltoken/nqwKRszO8Tkj_ZWW1EFwGw" title="Redis" target="_blank">Redis</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/88vbnogJmkEoxqu-6wAXEw" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>how to create an API with Express</li>
<li>how to authenticate a user</li>
<li>how to store data in MongoDB</li>
<li>how to store temporary data in Redis</li>
<li>how to setup and use a background worker</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>node</code> (version 12.x.x)</li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be verified against lint using ESLint</li>
</ul>

<h2>Provided files</h2>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
{
  "name": "files_manager",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "start-server": "nodemon --exec babel-node --presets @babel/preset-env ./server.js",
    "start-worker": "nodemon --exec babel-node --presets @babel/preset-env ./worker.js",
    "dev": "nodemon --exec babel-node --presets @babel/preset-env",
    "test": "./node_modules/.bin/mocha --require @babel/register --exit" 
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bull": "^3.16.0",
    "chai-http": "^4.3.0",
    "express": "^4.17.1",
    "image-thumbnail": "^1.0.10",
    "mime-types": "^2.1.27",
    "mongodb": "^3.5.9",
    "redis": "^2.8.0",
    "sha1": "^1.1.1",
    "uuid": "^8.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.0",
    "@babel/core": "^7.8.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.8.2",
    "@babel/register": "^7.8.0",
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "mocha": "^6.2.2",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides:[
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ]
};
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
};
</code>
</pre>
</details>

<h3>and…</h3>

<p>Don’t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>

  </div>
</div>


      

      

        
          <h2 class="gap">Tasks</h2>

    <div data-role="task11792" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-11792">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Redis utils
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside the folder <code>utils</code>, create a file <code>redis.js</code> that contains the class <code>RedisClient</code>.</p>

<p><code>RedisClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to Redis:

<ul>
<li>any error of the redis client must be displayed in the console (you should use <code>on('error')</code> of the redis client)</li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to Redis is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>get</code> that takes a string key as argument and returns the Redis value stored for this key</li>
<li>an asynchronous function <code>set</code> that takes a string key, a value and a duration in second as arguments to store it in Redis (with an expiration set by the duration argument)</li>
<li>an asynchronous function <code>del</code> that takes a string key as argument and remove the value in Redis for this key</li>
</ul>

<p>After the class definition, create and export an instance of <code>RedisClient</code> called <code>redisClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import redisClient from './utils/redis';

(async () =&gt; {
    console.log(redisClient.isAlive());
    console.log(await redisClient.get('myKey'));
    await redisClient.set('myKey', 12, 5);
    console.log(await redisClient.get('myKey'));

    setTimeout(async () =&gt; {
        console.log(await redisClient.get('myKey'));
    }, 1000*10)
})();

bob@dylan:~$ npm run dev main.js
true
null
12
null
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/redis.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11792">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11792" data-batch-id="76" data-toggle="modal" data-target="#task-11792-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11792-modal-button" data-task-id="11792" data-toggle="modal" data-target="#task-test-correction-11792-correction-modal" id="task-num-0-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11792}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11792}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11793" data-position="2" id="task-num-1">
      <div class="panel panel-default task-card " id="task-11793">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. MongoDB utils
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside the folder <code>utils</code>, create a file <code>db.js</code> that contains the class <code>DBClient</code>.</p>

<p><code>DBClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to MongoDB:

<ul>
<li>host: from the environment variable <code>DB_HOST</code> or default: <code>localhost</code></li>
<li>port: from the environment variable <code>DB_PORT</code> or default: <code>27017</code></li>
<li>database: from the environment variable <code>DB_DATABASE</code> or default: <code>files_manager</code></li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to MongoDB is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>nbUsers</code> that returns the number of documents in the collection <code>users</code></li>
<li>an asynchronous function <code>nbFiles</code> that returns the number of documents in the collection <code>files</code></li>
</ul>

<p>After the class definition, create and export an instance of <code>DBClient</code> called <code>dbClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import dbClient from './utils/db';

const waitConnection = () =&gt; {
    return new Promise((resolve, reject) =&gt; {
        let i = 0;
        const repeatFct = async () =&gt; {
            await setTimeout(() =&gt; {
                i += 1;
                if (i &gt;= 10) {
                    reject()
                }
                else if(!dbClient.isAlive()) {
                    repeatFct()
                }
                else {
                    resolve()
                }
            }, 1000);
        };
        repeatFct();
    })
};

(async () =&gt; {
    console.log(dbClient.isAlive());
    await waitConnection();
    console.log(dbClient.isAlive());
    console.log(await dbClient.nbUsers());
    console.log(await dbClient.nbFiles());
})();

bob@dylan:~$ npm run dev main.js
false
true
4
30
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/db.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11793">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11793" data-batch-id="76" data-toggle="modal" data-target="#task-11793-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11793-modal-button" data-task-id="11793" data-toggle="modal" data-target="#task-test-correction-11793-correction-modal" id="task-num-1-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11793}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11793}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11794" data-position="3" id="task-num-2">
      <div class="panel panel-default task-card " id="task-11794">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. First API
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside <code>server.js</code>, create the Express server:</p>

<ul>
<li>it should listen on the port set by the environment variable <code>PORT</code> or by default 5000</li>
<li>it should load all routes from the file <code>routes/index.js</code></li>
</ul>

<p>Inside the folder <code>routes</code>, create a file <code>index.js</code> that contains all endpoints of our API:</p>

<ul>
<li><code>GET /status</code> =&gt; <code>AppController.getStatus</code></li>
<li><code>GET /stats</code> =&gt; <code>AppController.getStats</code></li>
</ul>

<p>Inside the folder <code>controllers</code>, create a file <code>AppController.js</code> that contains the definition of the 2 endpoints:</p>

<ul>
<li><code>GET /status</code> should return if Redis is alive and if the DB is alive too by using the 2 utils created previously: <code>{ "redis": true, "db": true }</code> with a status code 200</li>
<li><code>GET /stats</code> should return the number of users and files in DB: <code>{ "users": 12, "files": 1231 }</code> with a status code 200

<ul>
<li><code>users</code> collection must be used for counting all users</li>
<li><code>files</code> collection must be used for counting all files</li>
</ul></li>
</ul>

<p><strong>Terminal 1:</strong></p>

<pre><code>bob@dylan:~$ npm run start-server
Server running on port 5000
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/status ; echo ""
{"redis":true,"db":true}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/stats ; echo ""
{"users":4,"files":30}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>server.js, routes/index.js, controllers/AppController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11794">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11794" data-batch-id="76" data-toggle="modal" data-target="#task-11794-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11794-modal-button" data-task-id="11794" data-toggle="modal" data-target="#task-test-correction-11794-correction-modal" id="task-num-2-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11794}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11794}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11795" data-position="4" id="task-num-3">
      <div class="panel panel-default task-card " id="task-11795">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Create a new user
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Now that we have a simple API, it’s time to add users to our database.</p>

<p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /users</code> =&gt; <code>UsersController.postNew</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>UsersController.js</code> that contains the new endpoint:</p>

<p><code>POST /users</code> should create a new user in DB:</p>

<ul>
<li>To create a user, you must specify an <code>email</code> and a <code>password</code> </li>
<li>If the <code>email</code> is missing, return an error <code>Missing email</code> with a status code 400</li>
<li>If the <code>password</code> is missing, return an error <code>Missing password</code> with a status code 400</li>
<li>If the <code>email</code> already exists in DB, return an error <code>Already exist</code> with a status code 400</li>
<li>The <code>password</code> must be stored after being hashed in <code>SHA1</code></li>
<li>The endpoint is returning the new user with only the <code>email</code> and the <code>id</code> (auto generated by MongoDB) with a status code 201</li>
<li>The new user must be saved in the collection <code>users</code>:

<ul>
<li><code>email</code>: same as the value received</li>
<li><code>password</code>: <code>SHA1</code> value of the value received</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"id":"5f1e7d35c7ba06511e683b21","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ echo 'db.users.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e7d35c7ba06511e683b21"), "email" : "bob@dylan.com", "password" : "89cad29e3ebc1035b29b1478a8e70854f25fa2b2" }
bob@dylan:~$ 
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"error":"Already exist"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com" }' ; echo ""
{"error":"Missing password"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/UsersController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11795">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11795" data-batch-id="76" data-toggle="modal" data-target="#task-11795-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11795-modal-button" data-task-id="11795" data-toggle="modal" data-target="#task-test-correction-11795-correction-modal" id="task-num-3-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11795}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11795}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11796" data-position="5" id="task-num-4">
      <div class="panel panel-default task-card " id="task-11796">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Authenticate a user
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 3 new endpoints:</p>

<ul>
<li><code>GET /connect</code> =&gt; <code>AuthController.getConnect</code></li>
<li><code>GET /disconnect</code> =&gt; <code>AuthController.getDisconnect</code></li>
<li><code>GET /users/me</code> =&gt; <code>UserController.getMe</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>AuthController.js</code> that contains new endpoints:</p>

<p><code>GET /connect</code> should sign-in the user by generating a new authentication token:</p>

<ul>
<li>By using the header <code>Authorization</code> and the technique of the Basic auth (Base64 of the <code>&lt;email&gt;:&lt;password&gt;</code>), find the user associate to this email and with this password (reminder: we are storing the SHA1 of the password)</li>
<li>If no user has been found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise:

<ul>
<li>Generate a random string (using <code>uuidv4</code>) as token</li>
<li>Create a key: <code>auth_&lt;token&gt;</code> </li>
<li>Use this key for storing in Redis (by using the <code>redisClient</code> create previously) the user ID for 24 hours</li>
<li>Return this token: <code>{ "token": "155342df-2399-41da-9e8c-458b6ac52a0c" }</code> with a status code 200</li>
</ul></li>
</ul>

<p>Now, we have a way to identify a user, create a token (= avoid to store the password on any front-end) and use this token for 24h to access to the API!</p>

<p>Every authenticated endpoints of our API will look at this token inside the header <code>X-Token</code>.</p>

<p><code>GET /disconnect</code> should sign-out the user based on the token:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, delete the token in Redis and return nothing with a status code 204</li>
</ul></li>
</ul>

<p>Inside the file <code>controllers/UsersController.js</code> add a new endpoint:</p>

<p><code>GET /users/me</code> should retrieve the user base on the token used:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, return the user object (<code>email</code> and <code>id</code> only)</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"031bffac-3edc-4e51-aaae-1c121317da8a"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"id":"5f1e7cda04a394508232559d","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/disconnect -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""

bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"error":"Unauthorized"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/UsersController.js, controllers/AuthController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11796">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11796" data-batch-id="76" data-toggle="modal" data-target="#task-11796-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11796-modal-button" data-task-id="11796" data-toggle="modal" data-target="#task-test-correction-11796-correction-modal" id="task-num-4-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11796}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11796}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11797" data-position="6" id="task-num-5">
      <div class="panel panel-default task-card " id="task-11797">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. First file
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /files</code> =&gt; <code>FilesController.postUpload</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>FilesController.js</code> that contains the new endpoint:</p>

<p><code>POST /files</code> should create a new file in DB and in disk:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>To create a file, you must specify:

<ul>
<li><code>name</code>: as filename</li>
<li><code>type</code>: either <code>folder</code>, <code>file</code> or <code>image</code></li>
<li><code>parentId</code>: (optional) as ID of the parent (default: 0 -&gt; the root)</li>
<li><code>isPublic</code>: (optional) as boolean to define if the file is public or not (default: false)</li>
<li><code>data</code>: (only for <code>type=file|image</code>) as Base64 of the file content</li>
</ul></li>
<li>If the <code>name</code> is missing, return an error <code>Missing name</code> with a status code 400</li>
<li>If the <code>type</code> is missing or not part of the list of accepted type, return an error <code>Missing type</code> with a status code 400</li>
<li>If the <code>data</code> is missing and <code>type != folder</code>, return an error <code>Missing data</code> with a status code 400</li>
<li>If the <code>parentId</code> is set:

<ul>
<li>If no file is present in DB for this <code>parentId</code>, return an error <code>Parent not found</code> with a status code 400</li>
<li>If the file present in DB for this <code>parentId</code> is not of type <code>folder</code>, return an error <code>Parent is not a folder</code> with a status code 400</li>
</ul></li>
<li>The user ID should be added to the document saved in DB - as owner of a file</li>
<li>If the type is <code>folder</code>, add the new file document in the DB and return the new file with a status code 201</li>
<li>Otherwise:

<ul>
<li>All file will be stored locally in a folder (to create automatically if not present):

<ul>
<li>The relative path of this folder is given by the environment variable <code>FOLDER_PATH</code> </li>
<li>If this variable is not present or empty, use <code>/tmp/files_manager</code> as storing folder path</li>
</ul></li>
<li>Create a local path in the storing folder with filename a UUID </li>
<li>Store the file in clear (reminder: <code>data</code> contains the Base64 of the file) in this local path</li>
<li>Add the new file document in the collection <code>files</code> with these attributes:

<ul>
<li><code>userId</code>: ID of the owner document (owner from the authentication)</li>
<li><code>name</code>: same as the value received</li>
<li><code>type</code>: same as the value received</li>
<li><code>isPublic</code>: same as the value received</li>
<li><code>parentId</code>: same as the value received - if not present: 0</li>
<li><code>localPath</code>: for a <code>type=file|image</code>, the absolute path to the file save in local</li>
</ul></li>
<li>Return the new file with a status code 201</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "myText.txt", "type": "file", "data": "SGVsbG8gV2Vic3RhY2shCg==" }' ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9
bob@dylan:~$
bob@dylan:~$ cat /tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9 
Hello Webstack!
bob@dylan:~$
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "images", "type": "folder" }' ; echo ""
{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ cat image_upload.py
import base64
import requests
import sys

file_path = sys.argv[1]
file_name = file_path.split('/')[-1]

file_encoded = None
with open(file_path, "rb") as image_file:
    file_encoded = base64.b64encode(image_file.read()).decode('utf-8')

r_json = { 'name': file_name, 'type': 'image', 'isPublic': True, 'data': file_encoded, 'parentId': sys.argv[3] }
r_headers = { 'X-Token': sys.argv[2] }

r = requests.post("http://0.0.0.0:5000/files", json=r_json, headers=r_headers)
print(r.json())

bob@dylan:~$
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$
bob@dylan:~$ echo 'db.files.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e881cc7ba06511e683b23"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "images", "type" : "folder", "parentId" : "0" }
{ "_id" : ObjectId("5f1e879ec7ba06511e683b22"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "myText.txt", "type" : "file", "parentId" : "0", "isPublic" : false, "localPath" : "/tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9" }
{ "_id" : ObjectId("5f1e8896c7ba06511e683b25"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "image.png", "type" : "image", "parentId" : ObjectId("5f1e881cc7ba06511e683b23"), "isPublic" : true, "localPath" : "/tmp/files_manager/51997b88-5c42-42c2-901e-e7f4e71bdc47" }
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11797">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11797" data-batch-id="76" data-toggle="modal" data-target="#task-11797-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11797-modal-button" data-task-id="11797" data-toggle="modal" data-target="#task-test-correction-11797-correction-modal" id="task-num-5-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11797}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11797}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11798" data-position="7" id="task-num-6">
      <div class="panel panel-default task-card " id="task-11798">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Get and list file
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>GET /files/:id</code> =&gt; <code>FilesController.getShow</code></li>
<li><code>GET /files</code> =&gt; <code>FilesController.getIndex</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>GET /files/:id</code> should retrieve the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise, return the file document</li>
</ul>

<p><code>GET /files</code> should retrieve all users file documents for a specific <code>parentId</code> and with pagination:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>Based on the query parameters <code>parentId</code> and <code>page</code>, return the list of file document

<ul>
<li><code>parentId</code>:

<ul>
<li>No validation of <code>parentId</code> needed - if the <code>parentId</code> is not linked to any user folder, returns an empty list</li>
<li>By default, <code>parentId</code> is equal to 0 = the root</li>
</ul></li>
<li>Pagination:

<ul>
<li>Each page should be 20 items max</li>
<li><code>page</code> query parameter starts at 0 for the first page. If equals to 1, it means it’s the second page (form the 20th to the 40th), etc…</li>
<li>Pagination can be done directly by the <code>aggregate</code> of MongoDB</li>
</ul></li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0},{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0},{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files?parentId=5f1e881cc7ba06511e683b23 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11798">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11798" data-batch-id="76" data-toggle="modal" data-target="#task-11798-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11798-modal-button" data-task-id="11798" data-toggle="modal" data-target="#task-test-correction-11798-correction-modal" id="task-num-6-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11798}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11798}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11799" data-position="8" id="task-num-7">
      <div class="panel panel-default task-card " id="task-11799">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. File publish/unpublish
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putPublish</code></li>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putUnpublish</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>PUT /files/:id/publish</code> should set <code>isPublic</code> to <code>true</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>true</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<p><code>PUT /files/:id/unpublish</code> should set <code>isPublic</code> to <code>false</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>false</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11799">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11799" data-batch-id="76" data-toggle="modal" data-target="#task-11799-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11799-modal-button" data-task-id="11799" data-toggle="modal" data-target="#task-test-correction-11799-correction-modal" id="task-num-7-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11799}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11799}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11800" data-position="9" id="task-num-8">
      <div class="panel panel-default task-card " id="task-11800">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. File data
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add one new endpoint:</p>

<ul>
<li><code>GET /files/:id/data</code> =&gt; <code>FilesController.getFile</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the new endpoint:</p>

<p><code>GET /files/:id/data</code> should return the content of the file document based on the ID:</p>

<ul>
<li>If no file document is linked to the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>If the file document (folder or file) is not public (<code>isPublic: false</code>) and no user authenticate or not the owner of the file, return an error <code>Not found</code> with a status code 404</li>
<li>If the type of the file document is <code>folder</code>, return an error <code>A folder doesn't have content</code> with a status code 400</li>
<li>If the file is not locally present, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>By using the module <code>mime-types</code>, get the <a href="/rltoken/buV7HGNuNMB5ZCUH0LdECw" title="MIME-type" target="_blank">MIME-type</a> based on the <code>name</code> of the file</li>
<li>Return the content of the file with the correct MIME-type</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
Hello Webstack!

bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
{"error":"Not found"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":true,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
Hello Webstack!

bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11800">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11800" data-batch-id="76" data-toggle="modal" data-target="#task-11800-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11800-modal-button" data-task-id="11800" data-toggle="modal" data-target="#task-test-correction-11800-correction-modal" id="task-num-8-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11800}">
          Check your code
      </button>
      



    

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11801" data-position="10" id="task-num-9">
      <div class="panel panel-default task-card " id="task-11801">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      9. Image Thumbnails
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Update the endpoint <code>POST /files</code> endpoint to start a background processing for generating thumbnails for a file of type <code>image</code>:</p>

<ul>
<li>Create a <code>Bull</code> queue <code>fileQueue</code> </li>
<li>When a new image is stored (in local and in DB), add a job to this queue with the <code>userId</code> and <code>fileId</code></li>
</ul>

<p>Create a file <code>worker.js</code>:</p>

<ul>
<li>By using the module <code>Bull</code>, create a queue <code>fileQueue</code></li>
<li>Process this queue:

<ul>
<li>If <code>fileId</code> is not present in the job, raise an error <code>Missing fileId</code></li>
<li>If <code>userId</code> is not present in the job, raise an error <code>Missing userId</code></li>
<li>If no document is found in DB based on the <code>fileId</code> and <code>userId</code>, raise an error <code>File not found</code></li>
<li>By using the module <code>image-thumbnail</code>, generate 3 thumbnails with <code>width</code> = 500, 250 and 100 - store each result on the same location of the original file by appending <code>_&lt;width size&gt;</code></li>
</ul></li>
</ul>

<p>Update the endpoint <code>GET /files/:id/data</code> to accept a query parameter <code>size</code>:</p>

<ul>
<li><code>size</code> can be <code>500</code>, <code>250</code> or <code>100</code></li>
<li>Based on <code>size</code>, return the correct local file</li>
<li>If the local file doesn’t exist, return an error <code>Not found</code> with a status code 404</li>
</ul>

<p><strong>Terminal 3:</strong> (start the worker)</p>

<pre><code>bob@dylan:~$ npm run start-worker
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47   6dc53397-8491-4b7c-8273-f748b1a031cb   6dc53397-8491-4b7c-8273-f748b1a031cb_100   6dc53397-8491-4b7c-8273-f748b1a031cb_250    6dc53397-8491-4b7c-8273-f748b1a031cb_500
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data -so new_image.png ; file new_image.png
new_image.png: PNG image data, 471 x 512, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=100 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 100 x 109, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=250 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 250 x 272, 8-bit/color RGBA, non-interlaced
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, controllers/FilesController.js, worker.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11801">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11801" data-batch-id="76" data-toggle="modal" data-target="#task-11801-users-done-modal">
    Help
  </button>
  


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>

    <p class="lg-gap">
      </p><form class="button_to" method="post" action="/projects/1246/unlock_optionals"><input id="unlock_optional_btn" class="btn btn-primary btn-block" data-confirm="Are you sure? Make sure you focused on the mandatory tasks first" data-disable-with="Unlocking 2 advanced tasks..." data-gtm-custom-event-name="project_unlock_advanced_tasks" type="submit" value="Done with the mandatory tasks? Unlock 2 advanced tasks now!"><input type="hidden" name="authenticity_token" value="6XaM5yaf1jrtsYi3Quw4v32-lJIiRuaBS8jTZQIHcvYbC05crTQKv1vj3LJYUxAauoJq5wjDu-TZRNgzuTSuPA" autocomplete="off"></form>
    <p></p>



          <div data-react-class="projects/ProjectReadyForReview" data-react-props="{&quot;csrfToken&quot;:&quot;bX4hKWtDEcx5TxojiYJa9ucJvcrYADM452IBMB0xxtOfA-OS4OjNSc8dTiaTPXJTIDVDv_KFbl117gpmpgIaGQ&quot;,&quot;firstReview&quot;:true,&quot;peerReview&quot;:{&quot;availableReviewersURI&quot;:&quot;/corrections/23229182/available_reviewers.json&quot;,&quot;canReviewPeerDirectly&quot;:true,&quot;cancelReadyForReviewURI&quot;:&quot;/corrections/23229182/cancel_ready_for_review.json&quot;,&quot;correctCorrectionURI&quot;:&quot;https://intranet.alxswe.com/corrections/23229182/correct&quot;,&quot;disabled&quot;:false,&quot;manualReviewBehavior&quot;:&quot;any_student&quot;,&quot;qaReviewsURI&quot;:&quot;/corrections/to_review&quot;,&quot;readyForReviewURI&quot;:&quot;/corrections/23229182/toggle_ready_for_review.json&quot;,&quot;reviewDeadline&quot;:&quot;2024-03-21T06:00:00.000+01:00&quot;,&quot;synchronousManualReview&quot;:false},&quot;toggled&quot;:false}" data-react-cache-id="projects/ProjectReadyForReview-0"><div class="row gap"><div class="col-md-12"><div class="text-center"><button class="btn btn-lg btn-primary">Ready for a  manual review</button></div></div></div></div>

          

  </div>
</div>


      </article>

      <div class="copyright">Copyright © 2024 ALX, All rights reserved.</div>

    </main><script type="text/javascript" id="">window.userpilotSettings={token:"NX-b636a33d"};</script>
<script type="text/javascript" id="" src="https://js.userpilot.io/sdk/latest.js"></script>

        <button class="btn btn-primary atop-help" id="search-button" data-search-active="false" data-toggle="modal" data-target="#search-modal">
  <i aria-hidden="true" class="fa-solid fa-magnifying-glass "></i>
  <i aria-hidden="true" class="fa-solid fa-window-minimize "></i>
</button>

        



        


        <script id="cody-snippet">
          window.codySettings = { widget_id: "9b733b82-6921-495f-a618-9c46c40be7f6" };
          !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();
        </script>
  

<script src="chrome-extension://igkkmokkmlbkkgdnkkancbonkbbmkioc/sm.bundle.js" data-pname="recorder-screenshot-v3" data-asset-path="https://apv3.s3.ap-northeast-2.amazonaws.com"></script>
<script type="text/javascript" id="">userpilot.identify("\x3cUNIQUE USER ID\x3e",{name:"John Doe",email:"customer@example.com",created_at:"1519205055"});userpilot.reload();</script>
<iframe id="_hjSafeContext_28175854" title="_hjSafeContext" tabindex="-1" aria-hidden="true" src="about:blank" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe><div id="userpilotContent" key="" theme_id="0"></div><div style="display: none" class="ubey-RecordingScreen-count-down ubey-RecordingScreen-count-down-container">
          <style>
              .ubey-RecordingScreen-count-down-container {
                  position: fixed;
                  height: 100vh;
                  width: 100vw;
                  top: 0;
                  left: 0;
                  z-index: 9999999999999;
                  background-color: rgba(0, 0, 0, 0.2);
              }
      
              .ubey-RecordingScreen-count-down-content {
                  position: absolute;
                  display: flex;
                  top: 50%;
                  left: 50%;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  height: 15em;
                  width: 15em;
                  transform: translate(-50%, -100%);
                  background-color: rgba(0, 0, 0, 0.6);
                  border-radius: 50%;
              }
      
              #ubey-RecordingScreen-count-count {
                  font-size: 14em;
                  transform: translateY(-2%);
              }
          </style>
          <div class="ubey-RecordingScreen-count-down-content">
              <span id="ubey-RecordingScreen-count-count"></span>
          </div>
      </div><div id="cody-wrapper"><style>
  #cody-wrapper .cody-launcher {
    position: var(--position) !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--launcher-bottom) !important;
    border-radius: 9999px !important;
    border: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
    z-index: 999999 !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: box-shadow, scale 300ms linear !important;
    animation: cody-launcher-pulse 4s infinite !important;
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
    cursor: pointer !important;
    --icon-margin: 12px;
    --close-icon-margin: 16px;
  }

    #cody-wrapper {
    --position: fixed;
    --left: unset;
    --right: 20px;
    --launcher-bottom: 20px;
    --frame-bottom: 90px;
    --background-color: #FBD647;
    --text-color: #020617;
    --shadow-color: 251, 214, 71;
  }

  @media screen and (max-width: 512px) {
    #cody-wrapper {
      --left: unset;
      --right: 10px;
    }
  }

  
  #cody-wrapper .cody-launcher:hover {
    scale: 1.1 !important;
  }

  #cody-wrapper .cody-launcher .cody-close-icon {
    display: none !important;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-icon {
    display: none !important;;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-close-icon {
    display: block !important;;
  }

  #cody-wrapper .cody-iframe {
    z-index: 99999 !important;
    transition: visibility .5s, opacity .5s linear !important;
    background-color: #fff !important;
    position: fixed !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--frame-bottom) !important;
    height: 75vh !important;
    width: 448px !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    box-shadow: 0 2px 4px rgba(0, 18, 26, .08), 0 3px 12px rgba(0, 18, 26, .16), 0 2px 14px 0 rgba(0, 18, 26, .2) !important;
    border: 0 !important;
    display: none !important;
  }

  @media screen and (max-height: 667px) {
    #cody-wrapper .cody-iframe {
      height: calc(100vh - 110px) !important;
    }
  }

  @media screen and (max-width: 448px) {
    #cody-wrapper .cody-iframe {
      width: calc(100vw - 20px) !important;
    }
  }

  #cody-wrapper[data-launcher-open] .cody-iframe {
    display: block !important;
  }

  @keyframes cody-launcher-pulse {
    0%, 100% {
      box-shadow: 0 0 18px 4px rgba(var(--shadow-color), 0.8);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(var(--shadow-color), 0.4);
    }
  }
</style>

<button class="cody-launcher" style="width: 56px; height: 56px; font-size: 16px;">
    <svg class="cody-icon" style="aspect-ratio: 1 / 1; width: 100%; height: 100%; margin: var(--icon-margin)" aria-hidden="true" version="1.1" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689  c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01  c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5  c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4  S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z" fill="currentColor"></path>
</svg>    <svg style="aspect-ratio: 1/1; width: 100%; height: 100%; margin: var(--close-icon-margin);" class="cody-close-icon" launchercloseicon="chevron-down" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" fill="currentColor"></path>
</svg></button></div><div class="modal fade users-done-modal" id="task-11792-users-done-modal" data-task-id="11792" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "0. Redis utils"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11792-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "0. Redis utils"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11792">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11792">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11792">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11793-users-done-modal" data-task-id="11793" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "1. MongoDB utils"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11793-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "1. MongoDB utils"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11793">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11793">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11793">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11794-users-done-modal" data-task-id="11794" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "2. First API"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11794-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "2. First API"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11794">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11794">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11794">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11795-users-done-modal" data-task-id="11795" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "3. Create a new user"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11795-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "3. Create a new user"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11795">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11795">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11795">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11796-users-done-modal" data-task-id="11796" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "4. Authenticate a user"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11796-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "4. Authenticate a user"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11796">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11796">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11796">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11797-users-done-modal" data-task-id="11797" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "5. First file"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11797-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "5. First file"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11797">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11797">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11797">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11798-users-done-modal" data-task-id="11798" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "6. Get and list file"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11798-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "6. Get and list file"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11798">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11798">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11798">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11799-users-done-modal" data-task-id="11799" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "7. File publish/unpublish"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11799-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "7. File publish/unpublish"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11799">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11799">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11799">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11800-users-done-modal" data-task-id="11800" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "8. File data"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11800-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "8. File data"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11800">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11800">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11800">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11801-users-done-modal" data-task-id="11801" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "9. Image Thumbnails"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade" id="container-specs-modal" style="display: none;"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title">Recommended Sandbox</h4></div><div class="modal-body"><div data-react-class="user_containers/ContainerSpecs" data-react-props="{&quot;containerModelName&quot;:&quot;Sandbox&quot;,&quot;containerSpecs&quot;:[{&quot;available&quot;:true,&quot;description&quot;:&quot;\u003cp\u003eUbuntu 18.04 with Node 12, Redis and MongoDB installed\u003c/p\u003e\n&quot;,&quot;id&quot;:31,&quot;name&quot;:&quot;Ubuntu 18.04 - Node 12 - Redis/MongoDB&quot;,&quot;online&quot;:true}],&quot;containersLimit&quot;:2,&quot;csrfToken&quot;:&quot;0ps6lyx5j_SV5nH8wkm788TTMuA2jOSNDWq2G1Ru0yAg5vgsp9JTcSO0JfnY9pNWA-_MlRwJueif5r1N710P6g&quot;,&quot;startStatusURI&quot;:&quot;/user_containers/start_status.json&quot;,&quot;startURI&quot;:&quot;/user_containers/start.json&quot;}" data-react-cache-id="user_containers/ContainerSpecs-0"><div><div class="d-flex gap-4 sandboxes-filters"><a class="btn btn-outline-primary"><i aria-hidden="true" class="fa-solid fa-filter"></i><span class="ml-2">Running only</span></a><div class="align-items-center d-flex" style="position: relative; width: 100%;"><input class="form-control" placeholder="Search for an image ..." type="search" value=""></div></div><div class="mt-3"><h3>1 image<small class="ml-2">(1/2 Sandboxes spawned)</small></h3></div><div class="mt-3"><div class="panel panel-default"><div class="panel-body border-left-success" style="border-left: 6px solid;"><div class="align-items-center d-flex flex-wrap justify-content-between"><div><h3 class="mt-0"><i aria-hidden="true" class="fa-solid fa-terminal text-success"></i><span class="ml-2">Ubuntu 18.04 - Node 12 - Redis/MongoDB</span></h3><div class="mt-2 text-muted"><p>Ubuntu 18.04 with Node 12, Redis and MongoDB installed</p>
</div></div><div class="d-flex flex-wrap gap-5"><div class="align-items-center d-flex gap-3"><div><span data-container="body" data-html="false" data-placement="top" data-toggle="tooltip" title="" data-original-title="Copy SSH command"><span role="button"><button class="btn btn-default">SSH</button></span></span></div><div><span data-container="body" data-html="false" data-placement="top" data-toggle="tooltip" title="" data-original-title="Copy SFTP command"><span role="button"><button class="btn btn-default">SFTP</button></span></span></div><a class="btn btn-webterm" href="/user_containers/644038/webterm" rel="noreferrer" target="_blank"><i aria-hidden="true" class="fa-solid fa-terminal"></i><span class="ml-2">Webterm</span></a></div><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Restart your Sandbox"><a class="btn btn-warning "><i aria-hidden="true" class="fa-solid fa-power-off"></i><span class="ml-2">Restart</span></a></span><a class="btn btn-danger"><i aria-hidden="true" class="fa-solid fa-trash"></i><span class="ml-2">Destroy</span></a></div></div><div class="d-flex flex-wrap gap-5 mt-3"><div class="p-4" style="flex-shrink: 0;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-user text-info"></i><span class="ml-2">Credentials</span></h4><div class="d-flex gap-2"><strong>Host</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>2805a3eff317.d82e1789.alx-cod.online</small></span></span></div><div class="d-flex gap-2"><strong>Username</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>2805a3eff317</small></span></span></div><div class="d-flex gap-2"><strong>Password</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>aee367209a0cf527e5ea</small></span></span></div></div></div><div class="p-4" style="flex: 1 1 40%;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-globe text-info"></i><span class="ml-2">Web access</span></h4><div class="align-items-center d-flex flex-wrap gap-2"><a class="btn btn-outline-primary" href="http://2805a3eff317.d82e1789.alx-cod.online" rel="noreferrer" target="_blank">HTTP</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:3000" rel="noreferrer" target="_blank">3000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:4000" rel="noreferrer" target="_blank">4000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:5000" rel="noreferrer" target="_blank">5000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:5001" rel="noreferrer" target="_blank">5001</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:6379" rel="noreferrer" target="_blank">6379</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:8000" rel="noreferrer" target="_blank">8000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:8080" rel="noreferrer" target="_blank">8080</a></div></div></div><div class="p-4" style="flex: 1 1 35%;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-signs-post text-info"></i><span class="ml-2">Port mapping</span></h4><div class="align-items-center d-flex flex-wrap"><div class="align-items-center text-primary d-flex gap-2" style="padding: 5px 10px;"><strong>SSH</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41605</span></div><div class="align-items-center text-primary d-flex gap-2" style="padding: 5px 10px;"><strong>HTTP</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41604</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>1245</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41603</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>3000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41602</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>4000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41601</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>5000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41600</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>5001</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41599</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>6379</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41598</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>8000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41597</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>8080</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41596</span></div></div></div></div></div></div></div></div></div></div></div></div></div></div><div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal-label">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <div id="search-bar-container">
    <input id="search-bar" autocomplete="off" type="text" name="hbtn-search-bar" placeholder="✨Start search by typing in this field✨">
</div>

            </div>
            <div class="modal-body">
                <div id="modal-spinner" class="spinner gap">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
                <div id="search-results-container">
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade" id="markdownGuideModal" tabindex="-1" role="dialog" aria-labelledby="markdownGuideModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Markdown Guide</h4>
        </div>
        <div class="modal-body">
            <h4>Emphasis</h4>
<pre>**<strong>bold</strong>**
*<em>italics</em>*
~~<strike>strikethrough</strike>~~</pre>
<h4>Headers</h4>
<pre># Big header
## Medium header
### Small header
#### Tiny header</pre>
<h4>Lists</h4>
<pre>* Generic list item
* Generic list item
* Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item</pre>
<h4>Links</h4>
<pre>[Text to display](http://www.example.com)</pre>
<h4>Quotes</h4>
<pre>&gt; This is a quote.
&gt; It can span multiple lines!</pre>
<h4>Images</h4>
<p>CSS style available: <code>width, height, opacity</code></p>
<pre>![](http://www.example.com/image.jpg)
![](http://www.example.com/image.jpg | width: 200px)
![](http://www.example.com/image.jpg | height: 124px | width: 80px | opacity: 0.6)
</pre>
<h4>Tables</h4>
<pre>| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

<em>Or without aligning the columns...</em>

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
</pre>
<h4>Displaying code</h4>
<pre>`var example = "hello!";`

<em>Or spanning multiple lines...</em>

```
var example = "hello!";
alert(example);
```</pre>
        </div>
    </div>
  </div>
</div></body>
<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="google" content="notranslate">

      <script type="text/javascript" async="" src="https://trinketsofcody.com/cody-widget.js"></script><script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-3897705.js?sv=7"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-BLGQHYCV6F&amp;l=dataLayer&amp;cx=c"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-N4C8MF2"></script><script>
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({"userId":213103,"visitorType":"student","batch":{"id":76,"fullNameWithC":"LOS-0223 (C#13)","schoolLocation":{"id":3,"name":"Lagos"}},"curriculum":{"id":17,"name":"Short Specializations"}});

    window.gtm_user_custom_event = function (name, options) {
      if (typeof name === 'undefined') {
        return;
      }

      window.dataLayer.push({
        customEventOptions: typeof options !== 'undefined' ? options : {},
        event: name,
      });
    }
  </script>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N4C8MF2');</script>
  <!-- End Google Tag Manager -->


    <title>Project: 0x04. Files manager | Lagos Intranet</title>

      <link rel="stylesheet" href="https://use.typekit.net/xgz4ilr.css">
      <link rel="stylesheet" media="all" href="/assets/application_alx-42f25473a01386db8cf1b6a39c720f51053c958623a609b5b1524927abd61549.css">
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script src="/assets/application-e108fb75f939d72d47f0e99c7163aee8c5572427c1e62e5b50334df42d03f2d3.js"></script>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon_alx.ico">
      <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="6XaM5yaf1jrtsYi3Quw4v32-lJIiRuaBS8jTZQIHcvYbC05crTQKv1vj3LJYUxAauoJq5wjDu-TZRNgzuTSuPA">

      <link rel="apple-touch-icon" href="/apple-touch-icon_alx.png">

      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

      <!-- Store user timezone -->
      <script>
        Cookies.set('timezone', (new Date()).getTimezoneOffset() / -60.0);
      </script>

      <!-- intro.js for interactive onboarding -->

      <!-- React -->
      <script src="/packs/js/application-c9e88dafb112ccf51f08.js"></script>
      <link rel="stylesheet" media="screen" href="/packs/css/application-87456da7.css">
  <script async="" src="https://script.hotjar.com/modules.a4fd7e5489291affcf56.js" charset="utf-8"></script><script src="https://js.userpilot.io/sdk/version/1.463/app.js" async=""></script><script src="https://script.hotjar.com/browser-perf.8417c6bba72228fa2e29.js"></script><style nonce="undefined">
iframe#userpilot-nps {
  width: 900px;
  right: 0px;
  margin: 0px auto;
  opacity: 1 !important;
}

/* NPS Mobile */
@media (max-width: 900px) {
  iframe#userpilot-nps {
      width: 100%;
  }
}

iframe#userpilot-resource-centre-frame {
  width: 0px;
  height: 0px;
}

div#userpilotContent[key=""]:not(.preview) {
  position: absolute;
  line-height: 18px;
  -webkit-transition: none;
  transition: none;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2147483638;
  pointer-events: none;
  outline: none !important;
  background: none !important;
  --sidebar-width: 0px;
  direction: ltr;
  display: block;
}

div#userpilotContent[key=""] * {
  -webkit-transition: none;
  transition: none;
  direction: ltr;
}

#userpilotContent[key=""] .conv-cont, #userpilotContent[key=""] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key=""] .conv-cont, #userpilotContent[key=""] .conv-backdrop-cont {
  z-index: 999999999;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  transition: opacity 0.1s, z-index 0s, visibility 0s;
}

#userpilotContent[key=""] .userpilot .conv-cont {
  z-index: 2147483000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none
}

#userpilotContent[key=""] .canv {
  position: absolute;
  top: 0;
  box-shadow: inset 0 0 0 0px #ffffff, inset 0 0 15px rgb(208, 208, 208);
  background: none !important;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .56);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  transition: opacity 0.6s;
  border-radius: 10006px
}

#userpilotContent[key=""] .userpilot .canv {
  position: fixed;
  top: 0;
  background: none;
  display: flex;
  border: 10000px solid rgba(255, 255, 255, .7);
  margin-left: -10000px;
  margin-top: -10000px;
  padding: 150px;
  opacity: 0;
  border-radius: 10006px
}

#userpilotContent[key=""] .canv.userpilot-canv-hidden {
  opacity: 0 !important
}

#userpilotContent[key=""] .userpilot-soft-focus .canv {
  border: none
}

#userpilotContent[key=""] .conv-cont[userpilot-hidden] .up-userpilot-mmx-part{
  pointer-events: none !important;
}

#userpilotContent[key=""] .up-userpilot-mmx-part {
  position: absolute;
  z-index: 1 !important;
}

#userpilotContent[key=""] [up-backdrop="0"] {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

#userpilotContent[key=""] .conv-cont[backdrop-overlay="1"] .up-userpilot-mmx-part {
  width: 100% !important;
  height: 100% !important;
  top: 0px !important;
  left: 0px !important;
}

#userpilotContent[key=""] .conv-cont.allow-scroll .up-userpilot-mmx-part {
  pointer-events: none;
}

div#userpilotContent[key=""]>*, div#userpilotContent[key=""]>*:not(.userpilot-hotspot-container)>*:not(.userpilot-backdrop) {
  pointer-events: all;
}

#userpilotContent[key=""] .userpilot-mmx-cursor {
  position: fixed;
  width: 14px;
  -webkit-transition: all 1.5s;
  transition: all 1.5s;
  pointer-events: none
}
#userpilotContent[key=""] .userpilot-mmx-cursor * {
  pointer-events: none !important;
}
#userpilotContent[key=""] .up-t-pluse {
  position: absolute;
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 100%;
  color: gainsboro;
  background: gainsboro
}
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse {
  width: 10px;
  height: 10px;
  pointer-events: none !important;
}
#userpilotContent[key=""] .up-t-pluse:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: -3px;
  top: -3px;
  background-color: transparent;
  border-radius: 50%;
  border: 7px solid;
  border-color: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear
}
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse:before {
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
  border: 0px;
  background: inherit;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear
}
@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

#userpilotContent[key=""] .userpilot-ripple {
  position: absolute;
  pointer-events: none;
  width: 0px;
  height: 30px;
  border: none;
  border-radius: 100%;
  left: 50%;
  top: 50%;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple {
  height: 18px;
  width: 18px;
  background-color: transparent !important;
}
#userpilotContent[key=""] .userpilot-ripple:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 0px;
  top: 0px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilotActive 2s infinite linear;
  animation: userpilotActive 2s infinite linear;
  border: 10px solid;
  border-color: inherit;
  box-sizing: border-box;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple:before {
  height: 18px;
  width: 18px;
  left: -1px;
  top: -1px;
  -webkit-animation: userpilot-tooltip-pulse 2s infinite linear;
  animation: userpilot-tooltip-pulse 2s infinite linear;
}
@-webkit-keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

@keyframes userpilot-tooltip-pulse {
  0%,
  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.2;
  }

  50% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.3;
  }
}

#userpilotContent[key=""] .userpilot-ripple:after {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 10px;
  top: 10px;
  background-color: transparent;
  border-radius: 50%;
  background: inherit;
  -webkit-animation: userpilot_active_after 2s infinite linear;
  animation: userpilot_active_after 2s infinite linear;
  box-sizing: border-box;
  background: currentColor;
}
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple:after {
  height: 10px;
  width: 10px;
  left: 4px;
  top: 4px;
  animation: none;
}
@keyframes userpilot_active_after {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1)
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(5)
  }
}

@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    opacity: 1;
    border-color: inherit;
  }

  20% {
    opacity: 1;
    -webkit-transform: scale(1.5);
    border-color: inherit;
  }

  30% {
    background: none;
    border: 0 solid;
    border-color: inherit;
    opacity: 0
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(2.5);
    border-color: inherit;
  }
}


/* sonar animations */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"], 
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"] {
  background: none !important;
  animation: none;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::after, 
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::after {
  content: "";
  width: 9px;
  height: 9px;
  position: absolute;
  border-radius: 150px;
  animation: pulse-dot infinite 1.5s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: currentColor;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="sonar"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="sonar"]::before {
  animation: pulse-ring infinite 1.5s;
  border-style: solid;
  border-width: 4px;
  padding: 5px;
  background: none !important;
}

/* morph animation */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"],
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"] {
  background: none !important;
  animation: none;
  height: 18px;
  width: 18px;
  left: -4px;
  top: -4px;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::before {
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: currentColor;
  opacity: .6;
  position: absolute;
  border-radius: 50%;
  animation: morph 1s linear infinite;
  box-shadow: 0 0 5px 1px currentColor;
  border: 9px solid;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="morph"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="morph"]::after {
  background: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  content: "";
  display: block;
}

/* target animation */
#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"],
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]{
  height: 18px;
  width: 18px;
  box-shadow: 0 0 4px 2px currentColor;
  opacity: 1;
  animation: target 2s linear infinite;
  background: currentColor !important;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]::before {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 0;
  border-color: currentColor transparent transparent transparent;
  opacity: .6;
  background: none;
  animation: none;
  border-radius: 0;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="target"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="target"]::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent currentColor transparent;
  opacity: .6;
  top: initial;
  left: initial;
  border-radius: initial;
  background: none;
}

 /* egg animations */
 #userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"],
 #userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 0 6px 4px currentColor;
  animation: egg 600ms linear infinite;
  animation-direction: alternate;
  background: none !important;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"]::before,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::before {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: transparent;
  border: 1px solid currentColor;
  animation: none;
}

#userpilotContent[key=""]:not([version="0.1"]) .up-t-pluse[animation="egg"]::after,
#userpilotContent[key=""]:not([version="0.1"]) .userpilot-ripple[animation="egg"]::after {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  background: currentColor;
  opacity: .6;
}


@keyframes userpilotActive {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@-webkit-keyframes active {
  0% {
    -webkit-transform: scale(.1);
    border-color: inherit;
    opacity: 1
  }

  30% {
    -webkit-transform: scale(1);
    border: 5px solid;
    border-color: inherit;
    opacity: 1
  }

  40% {
    -webkit-transform: scale(1.3);
    border: 0 solid;
    border-color: inherit
  }

  100% {
    border: 0 solid;
    border-color: inherit
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(1, 1) translate(-50%, -50%);
  }

  30% {
    transform: scale(1.25, 1.25) translate(-40%, -40%);
  }

  100% {
    transform: scale(1, 1) translate(-50%, -50%);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }

  25% {
    opacity: .5;
  }

  100% {
    transform: scale(1.8, 1.8);
    opacity: 0;
  }
}

@keyframes morph {
  0% {
    transform: rotateZ(0);
    border-radius: 20%;
  }

  50% {
    transform: rotateZ(45deg);
    border-radius: 50%;
  }

  100% {
    transform: rotateZ(90deg);
    border-radius: 20%;
  }
}

@keyframes target {
  0% {
    transform: rotateZ(0) scale(0.6);
  }

  50% {
    transform: rotateZ(180deg) scale(1);
  }

  100% {
    transform: rotateZ(360deg) scale(0.6);
  }
}

@keyframes egg {
  from {
    box-shadow: inset 0 0 8px 3px currentColor;
  }

  to {
    box-shadow: inset 0 0 4px 1px currentColor;
  }
}</style><style nonce="undefined">
iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-nps,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys {
  max-height: none;
  max-width: none;
  min-height: 0px;
  min-width: 0px;
  filter: none;
  pointer-events: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame,
iframe#userpilot-checklist,
iframe#userpilotSurveys {
  right: initial;
  left: initial;
}

iframe#userpilotIframeContainer,
iframe#userpilotContentNativeIframe,
iframe#userpilot-resource-centre-frame {
    display: initial;
}
</style></head>

  <body class="signed_in env_production notranslate" translate="no" data-theme-suffix="_alx" inmaintabuse="1">
      <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4C8MF2"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->


      <input type="hidden" id="hbtn-slack-url" value="https://alx-students.slack.com">
      <nav class="navbar navbar-default navbar-fixed-top topbar visible-xs">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-mobile" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>

    <a class="navbar-brand" href="/">
      <div class="logo"></div>
</a>  </div>

  <div class="collapse navbar-collapse navigation" id="navbar-mobile">
    <ul class="nav navbar-nav">
      


    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Captain's Logs"><a href="/dashboards/my_captain_log"><div class="icon "><i aria-hidden="true" class="fa-solid fa-book "></i></div><div class="visible-xs">Captain's Logs</div></a></li>


<hr class="visible-xs">

<li>

      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://s3.amazonaws.com/alx-intranet.hbtn.io/users/photos/000/213/103/thumb/IMG-00950.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240311T101352Z&amp;X-Amz-Expires=600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e395a2d4161f0902f416bbdf4986c25a58e6033033c946080de52f9ca5c85cb2')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


    </ul>
  </div>
</nav>

      <div class="hidden-xs navigation sidebar">
  <a class="logo-container" href="/">
    <div class="logo"></div>
</a>
  <ul>
    


    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Planning"><a href="/planning/me"><div class="icon "><i aria-hidden="true" class="fa-solid fa-calendar "></i></div><div class="visible-xs">My Planning</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-current-projects-item" title="" data-original-title="Projects"><a href="/projects/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-code-fork "></i></div><div class="visible-xs">Projects</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="QA Reviews I can make"><a href="/corrections/to_review"><div class="icon "><i aria-hidden="true" class="fa-solid fa-check "></i></div><div class="visible-xs">QA Reviews I can make</div></a></li>
    
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Evaluation quizzes"><a href="/dashboards/my_current_evaluation_quizzes"><div class="icon "><i aria-hidden="true" class="fa-solid fa-question "></i></div><div class="visible-xs">Evaluation quizzes</div></a></li>

    <hr title="My resources">

    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Curriculums"><a href="/dashboards/my_curriculums"><div class="icon "><i aria-hidden="true" class="fa-solid fa-graduation-cap "></i></div><div class="visible-xs">Curriculums</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-concepts-item" title="" data-original-title="Concepts"><a href="/concepts"><div class="icon "><i aria-hidden="true" class="fa-solid fa-file-text "></i></div><div class="visible-xs">Concepts</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-video-rooms" title="" data-original-title="Conference rooms"><a href="/dashboards/video_rooms"><div class="icon "><i aria-hidden="true" class="fa-solid fa-comments "></i></div><div class="visible-xs">Conference rooms</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Servers"><a href="/servers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-server "></i></div><div class="visible-xs">Servers</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" id="sidebar-dashboards-my-containers" title="" data-original-title="Sandboxes"><a href="/user_containers/current"><div class="icon "><i aria-hidden="true" class="fa-solid fa-terminal "></i></div><div class="visible-xs">Sandboxes</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Tools"><a href="/dashboards/my_tools"><div class="icon "><i aria-hidden="true" class="fa-solid fa-wrench "></i></div><div class="visible-xs">Tools</div></a></li>
    <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Video on demand"><a href="/dashboards/videos"><div class="icon "><i aria-hidden="true" class="fa-solid fa-film "></i></div><div class="visible-xs">Video on demand</div></a></li>

      <hr title="My campus">

      
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Peers"><a href="/users/peers"><div class="icon "><i aria-hidden="true" class="fa-solid fa-users "></i></div><div class="visible-xs">Peers</div></a></li>
      <li data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Captain's Logs"><a href="/dashboards/my_captain_log"><div class="icon "><i aria-hidden="true" class="fa-solid fa-book "></i></div><div class="visible-xs">Captain's Logs</div></a></li>


<hr class="visible-xs">

<li>

      <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="Discord">
        <a rel="noreferrer" target="_blank" href="https://discord.com/app">
          <div class="icon discord">
            <i aria-hidden="true" class="fa-brands fa-discord "></i>
          </div>
          <div class="visible-xs">Discord</div>
</a>      </div>

  <div data-container="body" data-placement="right" data-toggle="tooltip" title="" data-original-title="My Profile">
    <a href="/users/my_profile">
        <div class="image ">
          <div class="inner" style="background-image: url('https://s3.amazonaws.com/alx-intranet.hbtn.io/users/photos/000/213/103/thumb/IMG-00950.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240311T101352Z&amp;X-Amz-Expires=600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=e395a2d4161f0902f416bbdf4986c25a58e6033033c946080de52f9ca5c85cb2')"></div>
        </div>

      <div class="visible-xs">My Profile</div>
</a>  </div>
</li>


  </ul>
</div>


    <main>
        

        <div id="layout-bars">
          
          <div class="px-5 py-3" id="student-switch-curriculum">
  <div class="dropdown d-flex flex-column gap-1">
    <span class="fs-small text-muted">Curriculum</span>

    <div aria-haspopup="true" aria-expanded="false" class="align-items-center d-flex gap-3" data-toggle="dropdown" id="student-switch-curriculum-dropdown" role="button">
      <div class="d-flex flex-column" style="line-height: 16px">
        <span class="fs-4 fw-600">
          Short Specializations
        </span>
        <span class="fs-small text-muted">
          Average: <span class="fw-500">110.23%</span>
        </span>
      </div>

      <div class="d-flex flex-column justify-content-center">
        <span style="margin-bottom: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-up  fa-fw"></i>
        </span>
        <span style="margin-top: -4px">
          <i aria-hidden="true" class="fa-solid fa-angle-down  fa-fw"></i>
        </span>
      </div>
    </div>

    <ul aria-labelledby="student-switch-curriculum-dropdown" class="dropdown-menu fs-5">
        <li>
          <a href="/curriculums/17/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  Short Specializations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">110.23%</span>
                </span>
              </div>

                <span class="fw-600 text-info" style="margin-left: 42px">
                  <i aria-hidden="true" class="fa-solid fa-check "></i>
                </span>
            </div>
</a>        </li>
        <li>
          <a href="/curriculums/1/observe">
            <div class="align-items-center d-flex py-2">
              <div class="d-flex flex-column" style="line-height: 16px">
                <span class="fs-4 fw-500">
                  SE Foundations
                </span>
                <span class="text-muted">
                  Average: <span class="fw-500">95.06%</span>
                </span>
              </div>

            </div>
</a>        </li>
    </ul>
  </div>
</div>

          
          
          
        </div>

      <article class="">

        
<div class="project row">
  <div class="col-xs-12 col-md-10 col-lg-8 contains-images">

      <h1 class="gap">
    0x04. Files manager
    
  </h1>

  <div data-react-class="tags/Tags" data-react-props="{&quot;tags&quot;:[{&quot;id&quot;:35,&quot;value&quot;:&quot;Back-end&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:46,&quot;value&quot;:&quot;JavaScript&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:52,&quot;value&quot;:&quot;ES6&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:57,&quot;value&quot;:&quot;NoSQL&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:58,&quot;value&quot;:&quot;MongoDB&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:59,&quot;value&quot;:&quot;Redis&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:62,&quot;value&quot;:&quot;NodeJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:63,&quot;value&quot;:&quot;ExpressJS&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:65,&quot;value&quot;:&quot;Kue &quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;}]}" data-react-cache-id="tags/Tags-0"><div class="align-items-center d-flex flex-wrap gap-3 my-2"><span class="label label-primary" style="font-size: 14px;">Back-end</span><span class="label label-primary" style="font-size: 14px;">JavaScript</span><span class="label label-primary" style="font-size: 14px;">ES6</span><span class="label label-primary" style="font-size: 14px;">NoSQL</span><span class="label label-primary" style="font-size: 14px;">MongoDB</span><span class="label label-primary" style="font-size: 14px;">Redis</span><span class="label label-primary" style="font-size: 14px;">NodeJS</span><span class="label label-primary" style="font-size: 14px;">ExpressJS</span><span class="label label-primary" style="font-size: 14px;">Kue </span></div></div>

  <div data-react-class="projects/ProjectMetadata" data-react-props="{&quot;metadata&quot;:{&quot;author&quot;:&quot;Guillaume, CTO at Holberton School&quot;,&quot;weight&quot;:1,&quot;correction&quot;:{&quot;released&quot;:true,&quot;auto_correction_available_at&quot;:&quot;2024-03-09T00:00:00.000+01:00&quot;,&quot;requires_auto_correction&quot;:true,&quot;requires_manual_correction&quot;:true},&quot;bpi&quot;:{&quot;current&quot;:true,&quot;started&quot;:false,&quot;in_second_deadline&quot;:false,&quot;starts_at&quot;:&quot;2024-03-07T06:00:00.000+01:00&quot;,&quot;ends_at&quot;:&quot;2024-03-14T06:00:00.000+01:00&quot;,&quot;second_deadline_at&quot;:&quot;2024-03-16T06:00:00.000+01:00&quot;},&quot;team&quot;:{&quot;in_team_of&quot;:2,&quot;members&quot;:[&quot;Emmanuel Akejelu&quot;]}}}" data-react-cache-id="projects/ProjectMetadata-0"><ul class="list-group metadata" id="project-metadata"><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-user fa-fw"></i> By: Guillaume, CTO at Holberton School</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-gear fa-fw"></i> Weight: 1</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-users fa-fw"></i> Project to be done in teams of 2 people (your team: Emmanuel Akejelu)</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-calendar fa-fw"></i> Project will start <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-07 06:00 (GMT+01:00)"><span class="datetime">Mar 7, 2024 6:00 AM</span></span>, must end by <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-14 06:00 (GMT+01:00)"><span class="datetime">Mar 14, 2024 6:00 AM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-check fa-fw"></i> Checker was released at <span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="2024-03-09 00:00 (GMT+01:00)"><span class="datetime">Mar 9, 2024 12:00 AM</span></span></li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-square-check fa-fw"></i> <strong>Manual QA review must be done</strong> (request it when you are done with the project)</li><li class="list-group-item"><i aria-hidden="true" class="fa-solid fa-square-check fa-fw"></i> An auto review will be launched at the deadline</li></ul></div>




    


    <div id="project_id" style="display: none" data-project-id="1246"></div>



      

      

      <div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <p>This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.</p>

<p>The objective is to build a simple platform to upload and view files:</p>

<ul>
<li>User authentication via a token </li>
<li>List all files</li>
<li>Upload a new file</li>
<li>Change permission of a file</li>
<li>View a file</li>
<li>Generate thumbnails for images</li>
</ul>

<p>You will be guided step by step for building it, but you have some freedoms of implementation, split in more files etc… (<code>utils</code> folder will be your friend)</p>

<p>Of course, this kind of service already exists in the real life - it’s a learning purpose to assemble each piece and build a full product.</p>

<p>Enjoy!</p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/buFPHJYnZjtOrTd610j6Og" title="Node JS getting started" target="_blank">Node JS getting started</a></li>
<li><a href="/rltoken/uYPplj2cPK8pcP0LtV6RuA" title="Process API doc" target="_blank">Process API doc</a></li>
<li><a href="/rltoken/SujfeWKCWmUMomfETjETEg" title="Express getting started" target="_blank">Express getting started</a></li>
<li><a href="/rltoken/FzEwplmoZiyGvkgKllZNJw" title="Mocha documentation" target="_blank">Mocha documentation</a></li>
<li><a href="/rltoken/pdNNTX0OLugbhxvP3sLgOw" title="Nodemon documentation" target="_blank">Nodemon documentation</a></li>
<li><a href="/rltoken/g1x7y_3GskzVAJBTXcSjmA" title="MongoDB" target="_blank">MongoDB</a></li>
<li><a href="/rltoken/NkHBpGrxnd0sK_fDPMbihg" title="Bull" target="_blank">Bull</a></li>
<li><a href="/rltoken/KX6cck2nyLpQOTDMLcwxLg" title="Image thumbnail" target="_blank">Image thumbnail</a></li>
<li><a href="/rltoken/j9B0Kc-4HDKLUe88ShbOjQ" title="Mime-Types" target="_blank">Mime-Types</a></li>
<li><a href="/rltoken/nqwKRszO8Tkj_ZWW1EFwGw" title="Redis" target="_blank">Redis</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/88vbnogJmkEoxqu-6wAXEw" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>how to create an API with Express</li>
<li>how to authenticate a user</li>
<li>how to store data in MongoDB</li>
<li>how to store temporary data in Redis</li>
<li>how to setup and use a background worker</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>node</code> (version 12.x.x)</li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be verified against lint using ESLint</li>
</ul>

<h2>Provided files</h2>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
{
  "name": "files_manager",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "start-server": "nodemon --exec babel-node --presets @babel/preset-env ./server.js",
    "start-worker": "nodemon --exec babel-node --presets @babel/preset-env ./worker.js",
    "dev": "nodemon --exec babel-node --presets @babel/preset-env",
    "test": "./node_modules/.bin/mocha --require @babel/register --exit" 
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bull": "^3.16.0",
    "chai-http": "^4.3.0",
    "express": "^4.17.1",
    "image-thumbnail": "^1.0.10",
    "mime-types": "^2.1.27",
    "mongodb": "^3.5.9",
    "redis": "^2.8.0",
    "sha1": "^1.1.1",
    "uuid": "^8.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.0",
    "@babel/core": "^7.8.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.8.2",
    "@babel/register": "^7.8.0",
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "mocha": "^6.2.2",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides:[
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ]
};
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
};
</code>
</pre>
</details>

<h3>and…</h3>

<p>Don’t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>

  </div>
</div>


      

      

        
          <h2 class="gap">Tasks</h2>

    <div data-role="task11792" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-11792">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Redis utils
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside the folder <code>utils</code>, create a file <code>redis.js</code> that contains the class <code>RedisClient</code>.</p>

<p><code>RedisClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to Redis:

<ul>
<li>any error of the redis client must be displayed in the console (you should use <code>on('error')</code> of the redis client)</li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to Redis is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>get</code> that takes a string key as argument and returns the Redis value stored for this key</li>
<li>an asynchronous function <code>set</code> that takes a string key, a value and a duration in second as arguments to store it in Redis (with an expiration set by the duration argument)</li>
<li>an asynchronous function <code>del</code> that takes a string key as argument and remove the value in Redis for this key</li>
</ul>

<p>After the class definition, create and export an instance of <code>RedisClient</code> called <code>redisClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import redisClient from './utils/redis';

(async () =&gt; {
    console.log(redisClient.isAlive());
    console.log(await redisClient.get('myKey'));
    await redisClient.set('myKey', 12, 5);
    console.log(await redisClient.get('myKey'));

    setTimeout(async () =&gt; {
        console.log(await redisClient.get('myKey'));
    }, 1000*10)
})();

bob@dylan:~$ npm run dev main.js
true
null
12
null
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/redis.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11792">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11792" data-batch-id="76" data-toggle="modal" data-target="#task-11792-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11792-modal-button" data-task-id="11792" data-toggle="modal" data-target="#task-test-correction-11792-correction-modal" id="task-num-0-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11792}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11792}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11793" data-position="2" id="task-num-1">
      <div class="panel panel-default task-card " id="task-11793">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. MongoDB utils
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside the folder <code>utils</code>, create a file <code>db.js</code> that contains the class <code>DBClient</code>.</p>

<p><code>DBClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to MongoDB:

<ul>
<li>host: from the environment variable <code>DB_HOST</code> or default: <code>localhost</code></li>
<li>port: from the environment variable <code>DB_PORT</code> or default: <code>27017</code></li>
<li>database: from the environment variable <code>DB_DATABASE</code> or default: <code>files_manager</code></li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to MongoDB is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>nbUsers</code> that returns the number of documents in the collection <code>users</code></li>
<li>an asynchronous function <code>nbFiles</code> that returns the number of documents in the collection <code>files</code></li>
</ul>

<p>After the class definition, create and export an instance of <code>DBClient</code> called <code>dbClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import dbClient from './utils/db';

const waitConnection = () =&gt; {
    return new Promise((resolve, reject) =&gt; {
        let i = 0;
        const repeatFct = async () =&gt; {
            await setTimeout(() =&gt; {
                i += 1;
                if (i &gt;= 10) {
                    reject()
                }
                else if(!dbClient.isAlive()) {
                    repeatFct()
                }
                else {
                    resolve()
                }
            }, 1000);
        };
        repeatFct();
    })
};

(async () =&gt; {
    console.log(dbClient.isAlive());
    await waitConnection();
    console.log(dbClient.isAlive());
    console.log(await dbClient.nbUsers());
    console.log(await dbClient.nbFiles());
})();

bob@dylan:~$ npm run dev main.js
false
true
4
30
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/db.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11793">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11793" data-batch-id="76" data-toggle="modal" data-target="#task-11793-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11793-modal-button" data-task-id="11793" data-toggle="modal" data-target="#task-test-correction-11793-correction-modal" id="task-num-1-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11793}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11793}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11794" data-position="3" id="task-num-2">
      <div class="panel panel-default task-card " id="task-11794">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. First API
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Inside <code>server.js</code>, create the Express server:</p>

<ul>
<li>it should listen on the port set by the environment variable <code>PORT</code> or by default 5000</li>
<li>it should load all routes from the file <code>routes/index.js</code></li>
</ul>

<p>Inside the folder <code>routes</code>, create a file <code>index.js</code> that contains all endpoints of our API:</p>

<ul>
<li><code>GET /status</code> =&gt; <code>AppController.getStatus</code></li>
<li><code>GET /stats</code> =&gt; <code>AppController.getStats</code></li>
</ul>

<p>Inside the folder <code>controllers</code>, create a file <code>AppController.js</code> that contains the definition of the 2 endpoints:</p>

<ul>
<li><code>GET /status</code> should return if Redis is alive and if the DB is alive too by using the 2 utils created previously: <code>{ "redis": true, "db": true }</code> with a status code 200</li>
<li><code>GET /stats</code> should return the number of users and files in DB: <code>{ "users": 12, "files": 1231 }</code> with a status code 200

<ul>
<li><code>users</code> collection must be used for counting all users</li>
<li><code>files</code> collection must be used for counting all files</li>
</ul></li>
</ul>

<p><strong>Terminal 1:</strong></p>

<pre><code>bob@dylan:~$ npm run start-server
Server running on port 5000
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/status ; echo ""
{"redis":true,"db":true}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/stats ; echo ""
{"users":4,"files":30}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>server.js, routes/index.js, controllers/AppController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11794">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11794" data-batch-id="76" data-toggle="modal" data-target="#task-11794-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11794-modal-button" data-task-id="11794" data-toggle="modal" data-target="#task-test-correction-11794-correction-modal" id="task-num-2-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11794}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11794}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11795" data-position="4" id="task-num-3">
      <div class="panel panel-default task-card " id="task-11795">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Create a new user
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Now that we have a simple API, it’s time to add users to our database.</p>

<p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /users</code> =&gt; <code>UsersController.postNew</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>UsersController.js</code> that contains the new endpoint:</p>

<p><code>POST /users</code> should create a new user in DB:</p>

<ul>
<li>To create a user, you must specify an <code>email</code> and a <code>password</code> </li>
<li>If the <code>email</code> is missing, return an error <code>Missing email</code> with a status code 400</li>
<li>If the <code>password</code> is missing, return an error <code>Missing password</code> with a status code 400</li>
<li>If the <code>email</code> already exists in DB, return an error <code>Already exist</code> with a status code 400</li>
<li>The <code>password</code> must be stored after being hashed in <code>SHA1</code></li>
<li>The endpoint is returning the new user with only the <code>email</code> and the <code>id</code> (auto generated by MongoDB) with a status code 201</li>
<li>The new user must be saved in the collection <code>users</code>:

<ul>
<li><code>email</code>: same as the value received</li>
<li><code>password</code>: <code>SHA1</code> value of the value received</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"id":"5f1e7d35c7ba06511e683b21","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ echo 'db.users.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e7d35c7ba06511e683b21"), "email" : "bob@dylan.com", "password" : "89cad29e3ebc1035b29b1478a8e70854f25fa2b2" }
bob@dylan:~$ 
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"error":"Already exist"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com" }' ; echo ""
{"error":"Missing password"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/UsersController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11795">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11795" data-batch-id="76" data-toggle="modal" data-target="#task-11795-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11795-modal-button" data-task-id="11795" data-toggle="modal" data-target="#task-test-correction-11795-correction-modal" id="task-num-3-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11795}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11795}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11796" data-position="5" id="task-num-4">
      <div class="panel panel-default task-card " id="task-11796">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Authenticate a user
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 3 new endpoints:</p>

<ul>
<li><code>GET /connect</code> =&gt; <code>AuthController.getConnect</code></li>
<li><code>GET /disconnect</code> =&gt; <code>AuthController.getDisconnect</code></li>
<li><code>GET /users/me</code> =&gt; <code>UserController.getMe</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>AuthController.js</code> that contains new endpoints:</p>

<p><code>GET /connect</code> should sign-in the user by generating a new authentication token:</p>

<ul>
<li>By using the header <code>Authorization</code> and the technique of the Basic auth (Base64 of the <code>&lt;email&gt;:&lt;password&gt;</code>), find the user associate to this email and with this password (reminder: we are storing the SHA1 of the password)</li>
<li>If no user has been found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise:

<ul>
<li>Generate a random string (using <code>uuidv4</code>) as token</li>
<li>Create a key: <code>auth_&lt;token&gt;</code> </li>
<li>Use this key for storing in Redis (by using the <code>redisClient</code> create previously) the user ID for 24 hours</li>
<li>Return this token: <code>{ "token": "155342df-2399-41da-9e8c-458b6ac52a0c" }</code> with a status code 200</li>
</ul></li>
</ul>

<p>Now, we have a way to identify a user, create a token (= avoid to store the password on any front-end) and use this token for 24h to access to the API!</p>

<p>Every authenticated endpoints of our API will look at this token inside the header <code>X-Token</code>.</p>

<p><code>GET /disconnect</code> should sign-out the user based on the token:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, delete the token in Redis and return nothing with a status code 204</li>
</ul></li>
</ul>

<p>Inside the file <code>controllers/UsersController.js</code> add a new endpoint:</p>

<p><code>GET /users/me</code> should retrieve the user base on the token used:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, return the user object (<code>email</code> and <code>id</code> only)</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"031bffac-3edc-4e51-aaae-1c121317da8a"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"id":"5f1e7cda04a394508232559d","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/disconnect -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""

bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"error":"Unauthorized"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/UsersController.js, controllers/AuthController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11796">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11796" data-batch-id="76" data-toggle="modal" data-target="#task-11796-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11796-modal-button" data-task-id="11796" data-toggle="modal" data-target="#task-test-correction-11796-correction-modal" id="task-num-4-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11796}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11796}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11797" data-position="6" id="task-num-5">
      <div class="panel panel-default task-card " id="task-11797">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. First file
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /files</code> =&gt; <code>FilesController.postUpload</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>FilesController.js</code> that contains the new endpoint:</p>

<p><code>POST /files</code> should create a new file in DB and in disk:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>To create a file, you must specify:

<ul>
<li><code>name</code>: as filename</li>
<li><code>type</code>: either <code>folder</code>, <code>file</code> or <code>image</code></li>
<li><code>parentId</code>: (optional) as ID of the parent (default: 0 -&gt; the root)</li>
<li><code>isPublic</code>: (optional) as boolean to define if the file is public or not (default: false)</li>
<li><code>data</code>: (only for <code>type=file|image</code>) as Base64 of the file content</li>
</ul></li>
<li>If the <code>name</code> is missing, return an error <code>Missing name</code> with a status code 400</li>
<li>If the <code>type</code> is missing or not part of the list of accepted type, return an error <code>Missing type</code> with a status code 400</li>
<li>If the <code>data</code> is missing and <code>type != folder</code>, return an error <code>Missing data</code> with a status code 400</li>
<li>If the <code>parentId</code> is set:

<ul>
<li>If no file is present in DB for this <code>parentId</code>, return an error <code>Parent not found</code> with a status code 400</li>
<li>If the file present in DB for this <code>parentId</code> is not of type <code>folder</code>, return an error <code>Parent is not a folder</code> with a status code 400</li>
</ul></li>
<li>The user ID should be added to the document saved in DB - as owner of a file</li>
<li>If the type is <code>folder</code>, add the new file document in the DB and return the new file with a status code 201</li>
<li>Otherwise:

<ul>
<li>All file will be stored locally in a folder (to create automatically if not present):

<ul>
<li>The relative path of this folder is given by the environment variable <code>FOLDER_PATH</code> </li>
<li>If this variable is not present or empty, use <code>/tmp/files_manager</code> as storing folder path</li>
</ul></li>
<li>Create a local path in the storing folder with filename a UUID </li>
<li>Store the file in clear (reminder: <code>data</code> contains the Base64 of the file) in this local path</li>
<li>Add the new file document in the collection <code>files</code> with these attributes:

<ul>
<li><code>userId</code>: ID of the owner document (owner from the authentication)</li>
<li><code>name</code>: same as the value received</li>
<li><code>type</code>: same as the value received</li>
<li><code>isPublic</code>: same as the value received</li>
<li><code>parentId</code>: same as the value received - if not present: 0</li>
<li><code>localPath</code>: for a <code>type=file|image</code>, the absolute path to the file save in local</li>
</ul></li>
<li>Return the new file with a status code 201</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "myText.txt", "type": "file", "data": "SGVsbG8gV2Vic3RhY2shCg==" }' ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9
bob@dylan:~$
bob@dylan:~$ cat /tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9 
Hello Webstack!
bob@dylan:~$
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "images", "type": "folder" }' ; echo ""
{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ cat image_upload.py
import base64
import requests
import sys

file_path = sys.argv[1]
file_name = file_path.split('/')[-1]

file_encoded = None
with open(file_path, "rb") as image_file:
    file_encoded = base64.b64encode(image_file.read()).decode('utf-8')

r_json = { 'name': file_name, 'type': 'image', 'isPublic': True, 'data': file_encoded, 'parentId': sys.argv[3] }
r_headers = { 'X-Token': sys.argv[2] }

r = requests.post("http://0.0.0.0:5000/files", json=r_json, headers=r_headers)
print(r.json())

bob@dylan:~$
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$
bob@dylan:~$ echo 'db.files.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e881cc7ba06511e683b23"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "images", "type" : "folder", "parentId" : "0" }
{ "_id" : ObjectId("5f1e879ec7ba06511e683b22"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "myText.txt", "type" : "file", "parentId" : "0", "isPublic" : false, "localPath" : "/tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9" }
{ "_id" : ObjectId("5f1e8896c7ba06511e683b25"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "image.png", "type" : "image", "parentId" : ObjectId("5f1e881cc7ba06511e683b23"), "isPublic" : true, "localPath" : "/tmp/files_manager/51997b88-5c42-42c2-901e-e7f4e71bdc47" }
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11797">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11797" data-batch-id="76" data-toggle="modal" data-target="#task-11797-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11797-modal-button" data-task-id="11797" data-toggle="modal" data-target="#task-test-correction-11797-correction-modal" id="task-num-5-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11797}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11797}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11798" data-position="7" id="task-num-6">
      <div class="panel panel-default task-card " id="task-11798">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Get and list file
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>GET /files/:id</code> =&gt; <code>FilesController.getShow</code></li>
<li><code>GET /files</code> =&gt; <code>FilesController.getIndex</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>GET /files/:id</code> should retrieve the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise, return the file document</li>
</ul>

<p><code>GET /files</code> should retrieve all users file documents for a specific <code>parentId</code> and with pagination:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>Based on the query parameters <code>parentId</code> and <code>page</code>, return the list of file document

<ul>
<li><code>parentId</code>:

<ul>
<li>No validation of <code>parentId</code> needed - if the <code>parentId</code> is not linked to any user folder, returns an empty list</li>
<li>By default, <code>parentId</code> is equal to 0 = the root</li>
</ul></li>
<li>Pagination:

<ul>
<li>Each page should be 20 items max</li>
<li><code>page</code> query parameter starts at 0 for the first page. If equals to 1, it means it’s the second page (form the 20th to the 40th), etc…</li>
<li>Pagination can be done directly by the <code>aggregate</code> of MongoDB</li>
</ul></li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0},{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0},{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files?parentId=5f1e881cc7ba06511e683b23 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11798">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11798" data-batch-id="76" data-toggle="modal" data-target="#task-11798-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11798-modal-button" data-task-id="11798" data-toggle="modal" data-target="#task-test-correction-11798-correction-modal" id="task-num-6-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11798}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11798}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11799" data-position="8" id="task-num-7">
      <div class="panel panel-default task-card " id="task-11799">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. File publish/unpublish
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putPublish</code></li>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putUnpublish</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>PUT /files/:id/publish</code> should set <code>isPublic</code> to <code>true</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>true</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<p><code>PUT /files/:id/unpublish</code> should set <code>isPublic</code> to <code>false</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>false</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11799">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11799" data-batch-id="76" data-toggle="modal" data-target="#task-11799-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11799-modal-button" data-task-id="11799" data-toggle="modal" data-target="#task-test-correction-11799-correction-modal" id="task-num-7-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11799}">
          Check your code
      </button>
      



    <button class="btn btn-default btn-sm" data-toggle="modal" data-target="#container-specs-modal" data-gtm-custom-event-name="task_sandbox_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11799}"><i aria-hidden="true" class="fa-solid fa-terminal "></i><span>Get a sandbox</span></button>

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11800" data-position="9" id="task-num-8">
      <div class="panel panel-default task-card " id="task-11800">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. File data
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>In the file <code>routes/index.js</code>,  add one new endpoint:</p>

<ul>
<li><code>GET /files/:id/data</code> =&gt; <code>FilesController.getFile</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the new endpoint:</p>

<p><code>GET /files/:id/data</code> should return the content of the file document based on the ID:</p>

<ul>
<li>If no file document is linked to the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>If the file document (folder or file) is not public (<code>isPublic: false</code>) and no user authenticate or not the owner of the file, return an error <code>Not found</code> with a status code 404</li>
<li>If the type of the file document is <code>folder</code>, return an error <code>A folder doesn't have content</code> with a status code 400</li>
<li>If the file is not locally present, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>By using the module <code>mime-types</code>, get the <a href="/rltoken/buV7HGNuNMB5ZCUH0LdECw" title="MIME-type" target="_blank">MIME-type</a> based on the <code>name</code> of the file</li>
<li>Return the content of the file with the correct MIME-type</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
Hello Webstack!

bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
{"error":"Not found"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":true,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
Hello Webstack!

bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, routes/index.js, controllers/FilesController.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11800">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11800" data-batch-id="76" data-toggle="modal" data-target="#task-11800-users-done-modal">
    Help
  </button>
  


      <button class="btn btn-default btn-sm check-your-task-11800-modal-button" data-task-id="11800" data-toggle="modal" data-target="#task-test-correction-11800-correction-modal" id="task-num-8-check-code-btn" data-gtm-custom-event-name="task_checker_modal" data-gtm-custom-event-options="{&quot;taskId&quot;:11800}">
          Check your code
      </button>
      



    

</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>
    <div data-role="task11801" data-position="10" id="task-num-9">
      <div class="panel panel-default task-card " id="task-11801">
  <span id="user_id" data-id="213103"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      9. Image Thumbnails
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="213103"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Update the endpoint <code>POST /files</code> endpoint to start a background processing for generating thumbnails for a file of type <code>image</code>:</p>

<ul>
<li>Create a <code>Bull</code> queue <code>fileQueue</code> </li>
<li>When a new image is stored (in local and in DB), add a job to this queue with the <code>userId</code> and <code>fileId</code></li>
</ul>

<p>Create a file <code>worker.js</code>:</p>

<ul>
<li>By using the module <code>Bull</code>, create a queue <code>fileQueue</code></li>
<li>Process this queue:

<ul>
<li>If <code>fileId</code> is not present in the job, raise an error <code>Missing fileId</code></li>
<li>If <code>userId</code> is not present in the job, raise an error <code>Missing userId</code></li>
<li>If no document is found in DB based on the <code>fileId</code> and <code>userId</code>, raise an error <code>File not found</code></li>
<li>By using the module <code>image-thumbnail</code>, generate 3 thumbnails with <code>width</code> = 500, 250 and 100 - store each result on the same location of the original file by appending <code>_&lt;width size&gt;</code></li>
</ul></li>
</ul>

<p>Update the endpoint <code>GET /files/:id/data</code> to accept a query parameter <code>size</code>:</p>

<ul>
<li><code>size</code> can be <code>500</code>, <code>250</code> or <code>100</code></li>
<li>Based on <code>size</code>, return the correct local file</li>
<li>If the local file doesn’t exist, return an error <code>Not found</code> with a status code 404</li>
</ul>

<p><strong>Terminal 3:</strong> (start the worker)</p>

<pre><code>bob@dylan:~$ npm run start-worker
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47   6dc53397-8491-4b7c-8273-f748b1a031cb   6dc53397-8491-4b7c-8273-f748b1a031cb_100   6dc53397-8491-4b7c-8273-f748b1a031cb_250    6dc53397-8491-4b7c-8273-f748b1a031cb_500
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data -so new_image.png ; file new_image.png
new_image.png: PNG image data, 471 x 512, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=100 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 100 x 109, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=250 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 250 x 272, 8-bit/color RGBA, non-interlaced
bob@dylan:~$
</code></pre>

  </div>

  <div class="list-group">
    <!-- Task Files -->

    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>alx-files_manager</code></li>
            <li>File: <code>utils/, controllers/FilesController.js, worker.js</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="11801">
      <span class="no"><i aria-hidden="true" class="fa-regular fa-square "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa-regular fa-square-check "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa-solid fa-spinner  fa-spin-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="11801" data-batch-id="76" data-toggle="modal" data-target="#task-11801-users-done-modal">
    Help
  </button>
  


</div>


        <div class="fs-4">
        </div>
      </div>


  </div>
</div>

    </div>

    <p class="lg-gap">
      </p><form class="button_to" method="post" action="/projects/1246/unlock_optionals"><input id="unlock_optional_btn" class="btn btn-primary btn-block" data-confirm="Are you sure? Make sure you focused on the mandatory tasks first" data-disable-with="Unlocking 2 advanced tasks..." data-gtm-custom-event-name="project_unlock_advanced_tasks" type="submit" value="Done with the mandatory tasks? Unlock 2 advanced tasks now!"><input type="hidden" name="authenticity_token" value="6XaM5yaf1jrtsYi3Quw4v32-lJIiRuaBS8jTZQIHcvYbC05crTQKv1vj3LJYUxAauoJq5wjDu-TZRNgzuTSuPA" autocomplete="off"></form>
    <p></p>



          <div data-react-class="projects/ProjectReadyForReview" data-react-props="{&quot;csrfToken&quot;:&quot;bX4hKWtDEcx5TxojiYJa9ucJvcrYADM452IBMB0xxtOfA-OS4OjNSc8dTiaTPXJTIDVDv_KFbl117gpmpgIaGQ&quot;,&quot;firstReview&quot;:true,&quot;peerReview&quot;:{&quot;availableReviewersURI&quot;:&quot;/corrections/23229182/available_reviewers.json&quot;,&quot;canReviewPeerDirectly&quot;:true,&quot;cancelReadyForReviewURI&quot;:&quot;/corrections/23229182/cancel_ready_for_review.json&quot;,&quot;correctCorrectionURI&quot;:&quot;https://intranet.alxswe.com/corrections/23229182/correct&quot;,&quot;disabled&quot;:false,&quot;manualReviewBehavior&quot;:&quot;any_student&quot;,&quot;qaReviewsURI&quot;:&quot;/corrections/to_review&quot;,&quot;readyForReviewURI&quot;:&quot;/corrections/23229182/toggle_ready_for_review.json&quot;,&quot;reviewDeadline&quot;:&quot;2024-03-21T06:00:00.000+01:00&quot;,&quot;synchronousManualReview&quot;:false},&quot;toggled&quot;:false}" data-react-cache-id="projects/ProjectReadyForReview-0"><div class="row gap"><div class="col-md-12"><div class="text-center"><button class="btn btn-lg btn-primary">Ready for a  manual review</button></div></div></div></div>

          

  </div>
</div>


      </article>

      <div class="copyright">Copyright © 2024 ALX, All rights reserved.</div>

    </main><script type="text/javascript" id="">window.userpilotSettings={token:"NX-b636a33d"};</script>
<script type="text/javascript" id="" src="https://js.userpilot.io/sdk/latest.js"></script>

        <button class="btn btn-primary atop-help" id="search-button" data-search-active="false" data-toggle="modal" data-target="#search-modal">
  <i aria-hidden="true" class="fa-solid fa-magnifying-glass "></i>
  <i aria-hidden="true" class="fa-solid fa-window-minimize "></i>
</button>

        



        


        <script id="cody-snippet">
          window.codySettings = { widget_id: "9b733b82-6921-495f-a618-9c46c40be7f6" };
          !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();
        </script>
  

<script src="chrome-extension://igkkmokkmlbkkgdnkkancbonkbbmkioc/sm.bundle.js" data-pname="recorder-screenshot-v3" data-asset-path="https://apv3.s3.ap-northeast-2.amazonaws.com"></script>
<script type="text/javascript" id="">userpilot.identify("\x3cUNIQUE USER ID\x3e",{name:"John Doe",email:"customer@example.com",created_at:"1519205055"});userpilot.reload();</script>
<iframe id="_hjSafeContext_28175854" title="_hjSafeContext" tabindex="-1" aria-hidden="true" src="about:blank" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe><div id="userpilotContent" key="" theme_id="0"></div><div style="display: none" class="ubey-RecordingScreen-count-down ubey-RecordingScreen-count-down-container">
          <style>
              .ubey-RecordingScreen-count-down-container {
                  position: fixed;
                  height: 100vh;
                  width: 100vw;
                  top: 0;
                  left: 0;
                  z-index: 9999999999999;
                  background-color: rgba(0, 0, 0, 0.2);
              }
      
              .ubey-RecordingScreen-count-down-content {
                  position: absolute;
                  display: flex;
                  top: 50%;
                  left: 50%;
                  justify-content: center;
                  align-items: center;
                  color: white;
                  height: 15em;
                  width: 15em;
                  transform: translate(-50%, -100%);
                  background-color: rgba(0, 0, 0, 0.6);
                  border-radius: 50%;
              }
      
              #ubey-RecordingScreen-count-count {
                  font-size: 14em;
                  transform: translateY(-2%);
              }
          </style>
          <div class="ubey-RecordingScreen-count-down-content">
              <span id="ubey-RecordingScreen-count-count"></span>
          </div>
      </div><div id="cody-wrapper"><style>
  #cody-wrapper .cody-launcher {
    position: var(--position) !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--launcher-bottom) !important;
    border-radius: 9999px !important;
    border: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
    z-index: 999999 !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: box-shadow, scale 300ms linear !important;
    animation: cody-launcher-pulse 4s infinite !important;
    background-color: var(--background-color) !important;
    color: var(--text-color) !important;
    cursor: pointer !important;
    --icon-margin: 12px;
    --close-icon-margin: 16px;
  }

    #cody-wrapper {
    --position: fixed;
    --left: unset;
    --right: 20px;
    --launcher-bottom: 20px;
    --frame-bottom: 90px;
    --background-color: #FBD647;
    --text-color: #020617;
    --shadow-color: 251, 214, 71;
  }

  @media screen and (max-width: 512px) {
    #cody-wrapper {
      --left: unset;
      --right: 10px;
    }
  }

  
  #cody-wrapper .cody-launcher:hover {
    scale: 1.1 !important;
  }

  #cody-wrapper .cody-launcher .cody-close-icon {
    display: none !important;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-icon {
    display: none !important;;
  }

  #cody-wrapper[data-launcher-open] .cody-launcher .cody-close-icon {
    display: block !important;;
  }

  #cody-wrapper .cody-iframe {
    z-index: 99999 !important;
    transition: visibility .5s, opacity .5s linear !important;
    background-color: #fff !important;
    position: fixed !important;
    left: var(--left) !important;
    right: var(--right) !important;
    bottom: var(--frame-bottom) !important;
    height: 75vh !important;
    width: 448px !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    box-shadow: 0 2px 4px rgba(0, 18, 26, .08), 0 3px 12px rgba(0, 18, 26, .16), 0 2px 14px 0 rgba(0, 18, 26, .2) !important;
    border: 0 !important;
    display: none !important;
  }

  @media screen and (max-height: 667px) {
    #cody-wrapper .cody-iframe {
      height: calc(100vh - 110px) !important;
    }
  }

  @media screen and (max-width: 448px) {
    #cody-wrapper .cody-iframe {
      width: calc(100vw - 20px) !important;
    }
  }

  #cody-wrapper[data-launcher-open] .cody-iframe {
    display: block !important;
  }

  @keyframes cody-launcher-pulse {
    0%, 100% {
      box-shadow: 0 0 18px 4px rgba(var(--shadow-color), 0.8);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(var(--shadow-color), 0.4);
    }
  }
</style>

<button class="cody-launcher" style="width: 56px; height: 56px; font-size: 16px;">
    <svg class="cody-icon" style="aspect-ratio: 1 / 1; width: 100%; height: 100%; margin: var(--icon-margin)" aria-hidden="true" version="1.1" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.204,1.646,10.245,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689  c-0.304,0.304-0.38,0.769-0.188,1.153C0.275,58.289,0.625,58.5,1,58.5c0.046,0,0.092-0.003,0.139-0.01  c0.405-0.057,9.813-1.411,16.618-5.339C21.621,54.71,25.737,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z M16,32.5  c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S18.206,32.5,16,32.5z M30,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4  S32.206,32.5,30,32.5z M44,32.5c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S46.206,32.5,44,32.5z" fill="currentColor"></path>
</svg>    <svg style="aspect-ratio: 1/1; width: 100%; height: 100%; margin: var(--close-icon-margin);" class="cody-close-icon" launchercloseicon="chevron-down" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" fill="currentColor"></path>
</svg></button></div><div class="modal fade users-done-modal" id="task-11792-users-done-modal" data-task-id="11792" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "0. Redis utils"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11792-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "0. Redis utils"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11792">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11792">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11792">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11793-users-done-modal" data-task-id="11793" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "1. MongoDB utils"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11793-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "1. MongoDB utils"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11793">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11793">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11793">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11794-users-done-modal" data-task-id="11794" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "2. First API"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11794-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "2. First API"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11794">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11794">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11794">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11795-users-done-modal" data-task-id="11795" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "3. Create a new user"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11795-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "3. Create a new user"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11795">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11795">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11795">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11796-users-done-modal" data-task-id="11796" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "4. Authenticate a user"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11796-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "4. Authenticate a user"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11796">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11796">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11796">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11797-users-done-modal" data-task-id="11797" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "5. First file"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11797-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "5. First file"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11797">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11797">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11797">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11798-users-done-modal" data-task-id="11798" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "6. Get and list file"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11798-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "6. Get and list file"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11798">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11798">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11798">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11799-users-done-modal" data-task-id="11799" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "7. File publish/unpublish"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11799-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "7. File publish/unpublish"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11799">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11799">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11799">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11800-users-done-modal" data-task-id="11800" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "8. File data"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade task_correction_modal student_modal" id="task-test-correction-11800-correction-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Correction of "8. File data"</h4>
            </div>
            <div class="modal-body">
                <div class="actions">
                    <center>
                        <div class="alert alert-info hidden"></div>

                        <button name="button" type="submit" class="btn btn-primary correction_request_test_send" data-task-id="11800">Start a new test</button>
                        <button class="btn btn-default close-modal hidden" data-dismiss="modal" type="button">Close</button>

                        <div class="spinner" style="display: none;">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        <div class="error"></div>
                        <div class="info"></div>
                    </center>
                </div>
                <div class="result"></div>

                <div class="help">
    <button data-task-id="11800">
        <i aria-hidden="true" class="fa-solid fa-circle-info "></i>
    </button>
    <div class="help-container" data-task-id="11800">
        <div class="check-line">
            <div class="check-inline requirement success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Requirement success
            </div>
            <div class="check-inline requirement fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Requirement fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline code success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Code success
            </div>
            <div class="check-inline code fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Code fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline efficiency success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Efficiency success
            </div>
            <div class="check-inline efficiency fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Efficiency fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline answer success">
                <i aria-hidden="true" class="fa-solid fa-circle-check "></i>
                Text answer success
            </div>
            <div class="check-inline answer fail">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Text answer fail
            </div>
        </div>
        <div class="check-line">
            <div class="check-inline requirement fail offline">
                <i aria-hidden="true" class="fa-solid fa-circle-xmark "></i>
                Skipped - Previous check failed
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade users-done-modal" id="task-11801-users-done-modal" data-task-id="11801" data-batch-id="76">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Learners who are done with "9. Image Thumbnails"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div><div class="modal fade" id="container-specs-modal" style="display: none;"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title">Recommended Sandbox</h4></div><div class="modal-body"><div data-react-class="user_containers/ContainerSpecs" data-react-props="{&quot;containerModelName&quot;:&quot;Sandbox&quot;,&quot;containerSpecs&quot;:[{&quot;available&quot;:true,&quot;description&quot;:&quot;\u003cp\u003eUbuntu 18.04 with Node 12, Redis and MongoDB installed\u003c/p\u003e\n&quot;,&quot;id&quot;:31,&quot;name&quot;:&quot;Ubuntu 18.04 - Node 12 - Redis/MongoDB&quot;,&quot;online&quot;:true}],&quot;containersLimit&quot;:2,&quot;csrfToken&quot;:&quot;0ps6lyx5j_SV5nH8wkm788TTMuA2jOSNDWq2G1Ru0yAg5vgsp9JTcSO0JfnY9pNWA-_MlRwJueif5r1N710P6g&quot;,&quot;startStatusURI&quot;:&quot;/user_containers/start_status.json&quot;,&quot;startURI&quot;:&quot;/user_containers/start.json&quot;}" data-react-cache-id="user_containers/ContainerSpecs-0"><div><div class="d-flex gap-4 sandboxes-filters"><a class="btn btn-outline-primary"><i aria-hidden="true" class="fa-solid fa-filter"></i><span class="ml-2">Running only</span></a><div class="align-items-center d-flex" style="position: relative; width: 100%;"><input class="form-control" placeholder="Search for an image ..." type="search" value=""></div></div><div class="mt-3"><h3>1 image<small class="ml-2">(1/2 Sandboxes spawned)</small></h3></div><div class="mt-3"><div class="panel panel-default"><div class="panel-body border-left-success" style="border-left: 6px solid;"><div class="align-items-center d-flex flex-wrap justify-content-between"><div><h3 class="mt-0"><i aria-hidden="true" class="fa-solid fa-terminal text-success"></i><span class="ml-2">Ubuntu 18.04 - Node 12 - Redis/MongoDB</span></h3><div class="mt-2 text-muted"><p>Ubuntu 18.04 with Node 12, Redis and MongoDB installed</p>
</div></div><div class="d-flex flex-wrap gap-5"><div class="align-items-center d-flex gap-3"><div><span data-container="body" data-html="false" data-placement="top" data-toggle="tooltip" title="" data-original-title="Copy SSH command"><span role="button"><button class="btn btn-default">SSH</button></span></span></div><div><span data-container="body" data-html="false" data-placement="top" data-toggle="tooltip" title="" data-original-title="Copy SFTP command"><span role="button"><button class="btn btn-default">SFTP</button></span></span></div><a class="btn btn-webterm" href="/user_containers/644038/webterm" rel="noreferrer" target="_blank"><i aria-hidden="true" class="fa-solid fa-terminal"></i><span class="ml-2">Webterm</span></a></div><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Restart your Sandbox"><a class="btn btn-warning "><i aria-hidden="true" class="fa-solid fa-power-off"></i><span class="ml-2">Restart</span></a></span><a class="btn btn-danger"><i aria-hidden="true" class="fa-solid fa-trash"></i><span class="ml-2">Destroy</span></a></div></div><div class="d-flex flex-wrap gap-5 mt-3"><div class="p-4" style="flex-shrink: 0;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-user text-info"></i><span class="ml-2">Credentials</span></h4><div class="d-flex gap-2"><strong>Host</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>2805a3eff317.d82e1789.alx-cod.online</small></span></span></div><div class="d-flex gap-2"><strong>Username</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>2805a3eff317</small></span></span></div><div class="d-flex gap-2"><strong>Password</strong><span data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" title="" data-original-title="Click to copy"><span role="button"><small>aee367209a0cf527e5ea</small></span></span></div></div></div><div class="p-4" style="flex: 1 1 40%;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-globe text-info"></i><span class="ml-2">Web access</span></h4><div class="align-items-center d-flex flex-wrap gap-2"><a class="btn btn-outline-primary" href="http://2805a3eff317.d82e1789.alx-cod.online" rel="noreferrer" target="_blank">HTTP</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:3000" rel="noreferrer" target="_blank">3000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:4000" rel="noreferrer" target="_blank">4000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:5000" rel="noreferrer" target="_blank">5000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:5001" rel="noreferrer" target="_blank">5001</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:6379" rel="noreferrer" target="_blank">6379</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:8000" rel="noreferrer" target="_blank">8000</a><a class="btn btn-default" href="http://2805a3eff317.d82e1789.alx-cod.online:8080" rel="noreferrer" target="_blank">8080</a></div></div></div><div class="p-4" style="flex: 1 1 35%;"><div class="d-flex flex-column gap-3"><h4 class="mt-0"><i aria-hidden="true" class="fa-solid fa-signs-post text-info"></i><span class="ml-2">Port mapping</span></h4><div class="align-items-center d-flex flex-wrap"><div class="align-items-center text-primary d-flex gap-2" style="padding: 5px 10px;"><strong>SSH</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41605</span></div><div class="align-items-center text-primary d-flex gap-2" style="padding: 5px 10px;"><strong>HTTP</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41604</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>1245</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41603</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>3000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41602</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>4000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41601</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>5000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41600</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>5001</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41599</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>6379</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41598</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>8000</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41597</span></div><div class="align-items-center  d-flex gap-2" style="padding: 5px 10px;"><strong>8080</strong><i aria-hidden="true" class="fa-solid fa-arrow-right-long"></i><span>41596</span></div></div></div></div></div></div></div></div></div></div></div></div></div></div><div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-labelledby="search-modal-label">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <div id="search-bar-container">
    <input id="search-bar" autocomplete="off" type="text" name="hbtn-search-bar" placeholder="✨Start search by typing in this field✨">
</div>

            </div>
            <div class="modal-body">
                <div id="modal-spinner" class="spinner gap">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
                <div id="search-results-container">
</div>

            </div>
        </div>
    </div>
</div><div class="modal fade" id="markdownGuideModal" tabindex="-1" role="dialog" aria-labelledby="markdownGuideModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Markdown Guide</h4>
        </div>
        <div class="modal-body">
            <h4>Emphasis</h4>
<pre>**<strong>bold</strong>**
*<em>italics</em>*
~~<strike>strikethrough</strike>~~</pre>
<h4>Headers</h4>
<pre># Big header
## Medium header
### Small header
#### Tiny header</pre>
<h4>Lists</h4>
<pre>* Generic list item
* Generic list item
* Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item</pre>
<h4>Links</h4>
<pre>[Text to display](http://www.example.com)</pre>
<h4>Quotes</h4>
<pre>&gt; This is a quote.
&gt; It can span multiple lines!</pre>
<h4>Images</h4>
<p>CSS style available: <code>width, height, opacity</code></p>
<pre>![](http://www.example.com/image.jpg)
![](http://www.example.com/image.jpg | width: 200px)
![](http://www.example.com/image.jpg | height: 124px | width: 80px | opacity: 0.6)
</pre>
<h4>Tables</h4>
<pre>| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

<em>Or without aligning the columns...</em>

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
</pre>
<h4>Displaying code</h4>
<pre>`var example = "hello!";`

<em>Or spanning multiple lines...</em>

```
var example = "hello!";
alert(example);
```</pre>
        </div>
    </div>
  </div>
</div></body></html>
