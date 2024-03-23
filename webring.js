/* https://www.irt.org/articles/js085/ */
/* Thanks DotComBoom for this code */
function Add(href) {
    WebRing[++NumInWebRing] = new WebRingObject(href);
    if (location.href.indexOf(href) > -1)
        WhereInRing = NumInWebRing;
}

function WebRingObject(href) {
    this.href = href;
}

var WhereInRing = 0,
    NumInWebRing = 0,
    WebRing = new Array();

Add("http://amccolm.codes/");
Add("http://larsenml.net/");

if (WhereInRing == 0) WhereInRing = 1;

if (WhereInRing == 1)
    PrevInRing = NumInWebRing;
else
    PrevInRing = WhereInRing - 1;

if (WhereInRing == NumInWebRing)
    NextInRing = 1;
else
    NextInRing = WhereInRing + 1;

    document.write('<div class="vi-webring" style="font-family: ' + 
    'Ubuntu, sans-serif; display: inline-block; border: 1px dashed;' + 
    ' border-radius: 5px; background-color: gray; background-color:' + 
    'rgba(128,128,128,0.7); color: black; font-size: 8pt; width: 88px'+ 
    '; height: 31px; text-align: center;"><table style="width: 88px; '+ 
    'height: 31px;" class="linux-webring-table"><tr><td><a href="' + 
    WebRing[PrevInRing].href + '" target="_top"><img '+ 
    'src="https://amccolm.codes/go-previous.png"'+ 
    ' alt="Previous" title="Previous site" /></A></td> <td>' + 
    '<a target="_blank" href="https://amccolm.codes/webring.html">'+ 
    '<img src="https://amccolm.codes/bunny-hop-right.png" width="16"'+ 
    ' height="16" alt="VIU Webring" title="VIU Webring" /></a></td>'+ 
    '<td><A href="' + WebRing[NextInRing].href + '" target="_top">'+ 
    '<img src="https://amccolm.codes/go-next.png"'+ 
    ' alt="Next" title="Next site" /></a></td></tr></table></div>');

