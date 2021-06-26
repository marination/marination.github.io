$(() => {
	AOS.init();

	$("#mouse-scroll").mouseover(() => {
		$("#work-container")[0].scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
})