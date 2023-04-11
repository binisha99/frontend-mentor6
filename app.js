document.querySelectorAll('.content__question').forEach((item) => {
	item.addEventListener('click', (event) => {
		console.log('click!');
		let accCollapse = item.nextElementSibling;

		if (!item.classList.contains('collapsing')) {
		
			if (!item.classList.contains('open')) {
				console.log('toggle accordion button');
			}