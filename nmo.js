$.getScript("https://raw.githack.com/muamlraad/muaml/main/sty.js");
$(`<link href="https://raw.githack.com/muamlraad/muaml/main/01.css" rel="stylesheet" type="text/css">
<link href="https://raw.githack.com/muamlraad/muaml/main/20.css" media="screen" rel="alternate stylesheet" title="Co2" type="text/css">
<link href="https://raw.githack.com/muamlraad/muaml/main/03.css" media="screen" rel="alternate stylesheet" title="Co3" type="text/css">
<link href="https://raw.githack.com/muamlraad/muaml/main/04.css" media="screen" rel="alternate stylesheet" title="Co4" type="text/css">
<link href="https://raw.githack.com/muamlraad/muaml/main/05.css" media="screen" rel="alternate stylesheet" title="Co5" type="text/css">
<style>
.des {
    position: absolute;
    transform: matrix(1, 0, 0, 1, 85, 0);
    margin-top: 2px;
    width: 300px;
    height: 25px;
    float: left;
    background: transparent url(https://s6acl.com/sico/z1evqkmun510.png) no-repeat scroll right top;
    text-align: left;
}
</style>`).insertBefore("body");
$("div#tlogins button.btn.btn-primary").click(function(){var b=setInterval(function(){var c=$(".pmsgc").length;0<c?($(` <form name="jump">
<div class="des">
					<map id="ColorsMap" name="ColorsMap">
					<area alt="" coords="275, 0, 298, 25" href="javascript:chooseStyle('none',60)" shape="rect" title="1">
					<area alt="" coords="244, 0, 268, 25" href="javascript:chooseStyle('Co2',60)" shape="rect" title="2">
					<area alt="" coords="213, 0, 238, 25" href="javascript:chooseStyle('Co3',60)" shape="rect" title="3">
					<area alt="" coords="183, 0, 207, 25" href="javascript:chooseStyle('Co4',60)" shape="rect" title="4">
					<area alt="" coords="152, 0, 177, 25" href="javascript:chooseStyle('Co5',60)" shape="rect" title="5">
					</map>
			        <img alt="" height="25" src="https://1.top4top.net/p_1388gqx1c1.gif" width="300" usemap="#ColorsMap"></div>
</form>`).appendTo("#settings"),clearInterval(b)):console.log(c)},1)});
