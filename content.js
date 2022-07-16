const generateHTMLBlocker = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>

        <body>
            <h1>HELLO WORLD</h1>
            <script src="content.js"></script>
        </body>
        </html>
    `
        // insert blocker file
}

const generateCSS = () => {
    return `
    
    `
    // insert css file
}

switch (window.location.hostname) {
    case "www.youtube.com":
    case "www.facebook.com":
    case "www.instagram.com":
    case "www.tiktok.com":
    case "twitter.com":
    case "www.reddit.com":
    case "www.snapchat.com":
        document.head.innerHTML = generateCSS();
        document.body.innerHTML = generateHTMLBlocker();
        break;
    default:


}