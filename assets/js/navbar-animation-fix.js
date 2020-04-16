$('#navbarSupportedContent').on('show.bs.collapse', function () {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, 15%')
});

$('#navbarSupportedContent').on('hide.bs.collapse', function () {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, -50%')
});