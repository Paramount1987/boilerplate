const APP = {
	$window: null,
	$body: null,
	$html: null,

	init: function () {
		const _this = this;

		$(document).ready(function () {
			_this.initConst();

			setTimeout(function () {
				$('#preloader').fadeOut(400);
			}, 100);
		});
	},

	initConst: function () {
		this.$window = $(window);
		this.$body = $('body');
		this.$html = $('html');
	}
};

export default APP;
