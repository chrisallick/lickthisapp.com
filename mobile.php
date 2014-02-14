<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

        <meta name="viewport" content="width=640, initial-scale=.5, user-scalable=no">

        <title>Lick</title>

        <meta property="og:title" content="Train your tongue with Lick." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="http://lickthisapp.com/img/sharethis.png" />
        <meta property="og:url" content="http://lickthisapp.com" />
        <meta property="og:description" content="Give your lady what she really wants for Valentine’s Day. Train your tongue with Lick. http://lickthisapp.com" />

        <meta name="twitter:card" value="summary">
        <meta name="twitter:creator" value="@chrisallick">
        <meta name="twitter:url" content="http://lickthisapp.com">
        <meta name="twitter:domain" content="http://lickthisapp.com">
        <meta name="twitter:title" content="Lick.">
        <meta name="twitter:description" content="Give your lady what she really wants for Valentine’s Day. Train your tongue with Lick.">
        <meta name="twitter:image" content="http://lickthisapp.com/img/sharethis.png">

        <link href='./css/reset.css' media='all' rel='stylesheet' type='text/css' />
        <link href='./css/mobile.css' media='all' rel='stylesheet' type='text/css' />

        <script src='http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js' type='text/javascript'></script>
        <script src='./js/hammer.min.js' type='text/javascript'></script>
        <script src='./js/jq.hammer.min.js' type='text/javascript'></script>
        <script src='./js/mobile.js' type='text/javascript'></script>
        <script src='./js/processing.js' type='text/javascript'></script>
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-48081507-1']);
            _gaq.push(['_trackPageview']);

            (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>
    </head>
    <body>
        <!--
            Chris Allick
            Pablo Rochat

            http://clubsexytime.com/


            Justin Ralph 

            http://justinstuartralph.com/
            
            8==D ~~ :)
        -->
        <div id="wrapper">
            <div id="home">
                <a class="facebook" href="#" onclick="
                window.open(
                  'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('http://lickthisapp.com'), 
                  'facebook-share-dialog', 
                  'width=626,height=436'); 
                return false;"></a>
                <a class="twitter" href="javascript:(function(){window.twttr=window.twttr||{};var D=550,A=450,C=screen.height,B=screen.width,H=Math.round((B/2)-(D/2)),G=0,F=document,E;if(C>A){G=Math.round((C/2)-(A/2))}window.twttr.shareWin=window.open('https://twitter.com/intent/tweet?text=Give your lady what she really wants for Valentine’s Day. Train your tongue with Lick. lickthisapp.com','','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');E=F.createElement('script');E.src='http://platform.twitter.com/widgets.js';F.getElementsByTagName('head')[0].appendChild(E)}());"></a>
                <img class="logo" src="./img/logo.png" />
                <img class="trainyourtongue" src="./img/trainYourTongue.gif" />
                <div class="start centerthis" ></div>
            </div>
            <div id="howto">
                <img class="title" src="./img/howToTitle.png" />
                <img class="instructions" src="./img/howToInstructions.gif" />
                <div class="lickheretobegin centerthis" ></div>
                <div class="overlay"></div>
            </div>
            <div id="menu">
                <img class="title" src="./img/selectAnExercise.png" />
                <div id="levels" class="scrollable">
                    <img class="lightswitch scrollable" src="./img/lightLevel.gif" />
                    <img class="pencilsharpener scrollable" src="./img/circleLevel.gif" />
                    <img class="freestyle scrollable" src="./img/freestyleLevel.gif" />
                </div>
            </div>
            <div id="lightswitch">
                <img class="on" src="./img/lighton.png" />
                <img class="off" src="./img/lightoff.png" />
                <div class="overlay"></div>
                <div class="startscreen">
                    <img src="./img/howManFlips.png" />
                </div>
            </div>
            <div id="freestyle">
                <canvas id="BouncingBallthree" data-processing-sources="BouncingBall_three.pde" width="640" height="100%"></canvas>
                <div class="startscreen">
                    <img src="./img/howManyTimesBall.png" />
                </div>
            </div>
            <div id="pencilsharpener">
                <img class="psbody centerthis" src="./img/pencilsharpener_body.png" />
                <img class="psarm centerthis" src="./img/pencilsharperner_handle.png" />
                <div class="overlay"></div>
                <div class="startscreen">
                    <img src="./img/howManyPencils.png" />
                </div>
            </div>
            <div id="footer">
                <a class="menulink" href="#"></a>
                <p class="score">0</p>
                <a class="nextlink" href="#"><a/>
            </div>
        </div>
    </body>
</html>