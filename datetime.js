now = new Date();
localtime = now.toString();
utctime = now.toGMTString();
document.write("<b>Local Time:</b> " + localtime + "<br>");
document.write("<b>UTC Time:</b> " + utctime);

hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
milli = now.getMilliseconds();
                
document.write("<h1>");
document.write(hours + ":" + mins + ":" + secs + ":" + milli);
document.write("</h1>");

url = document.URL;
cookie = document.cookie;
title = document.title;
referer = document.referrer;
lastModified = document.lastModified;
/* 
Alt + Shift + A comments a selected code in Visual Studio code
 */
document.write(url);
document.write("<br>");
document.write(cookie);
document.write("<br>");
document.write(title);
document.write("<br>");
document.write(referer);
document.write("<br>");
document.write(lastModified);
document.write("<br>");
document.write(document.anchors.length);

link1 = links[0].href;
document.write(link1);

document.write(history.length);
document.write(location.hostname);