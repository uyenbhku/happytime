const generateHTMLBlocker = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                .container{
                    position:relative;
                    background-color:#BEDCDE;
                    min-height: 650px;
                }
                .content{
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    transform: translate(0, -50%);
                    margin:0 auto;
                }
                footer{
                    position: fixed;
                    height: 80px;
                    bottom: 0;
                    background-color: #f6f8f6;
                    width: 100%;
                    text-align: center;
                    line-height: 80px;
                }
                body{
                    padding:0;
                    margin: 0;
                }
                h1{
                    padding: 20px;
                }
                h1, p{
                    font-size: 24px;
                }
            </style>
        
        </head>

        <body>
            <div class="container">
                <div class="content">
                    <center>
                        <h1 style="color:#f490a0;"> SORRY YOU'RE BLOCKED : D </h1>
                        <p class="desc">Enjoy your real life! : D</p>
                        <p>Don't remember why you're blocked?</p>
                        <p>Don't worry! <a href="http://happytime.unaux.com/" class="link-web" style="text-decoration: None; font-weight:bold; color:##fed939;" >HappyTime</a> will remind you!</p>
                    
                    </center>
                </div>
            </div>
            <footer>
                <p style="margin-top:0">A product of team 3xp3ri3nc3.</p>
            </footer>
            
        </body>
        </html>
    `
        // insert blocker file
}

function showTimeTracker() { 
    document.getElementById("popup_container").style.display = "block";
}

switch (window.location.hostname) {
    case "www.youtube.com":
    case "www.facebook.com":
    case "www.instagram.com":
    case "www.tiktok.com":
    case "twitter.com":
    case "www.reddit.com":
    case "www.snapchat.com":
        document.body.innerHTML = generateHTMLBlocker();
        break;
    default:
        alert("Enjoy your time. However, be aware of your time!");
}