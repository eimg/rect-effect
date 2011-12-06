$(function() {

	(function () {
		o = [0.4, 0.3, 0.2];

		$(".rec").each(function() {
			v = o[Math.floor(Math.random() * 3)];
			$(this).fadeTo(300, v);
		});

		setTimeout(arguments.callee, 200);
	})();

});

