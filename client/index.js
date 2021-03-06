// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-52715750-3', 'auto');
ga('send', 'pageview');

// Convert svg files into inline svg, so css editing works
Meteor.setTimeout(function(){
	svgConvert('img.close-extra')
}, 100)
Meteor.setTimeout(function(){
	svgConvert('img.close-extra')
}, 1000)

// Realign extra panel title to main panel title
window.onresize = function(){
	setExtraTopMargin()
};

Meteor.startup(function () {
	Meteor.subscribe('email', Meteor.default_connection._lastSessionId)
});