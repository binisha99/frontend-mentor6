document.querySelectorAll('.content__question').forEach((item) => {
	item.addEventListener('click', (event) => {
		console.log('click!');
		let accCollapse = item.nextElementSibling;

		if (!item.classList.contains('collapsing')) {
		
			if (!item.classList.contains('open')) {
				console.log('toggle content button');

				accCollapse.style.display = 'block';
				let accHeight = accCollapse.clientHeight;
				console.log(accHeight);

				setTimeout(() => {
					accCollapse.style.height = accHeight + 'px';
					accCollapse.style.display = '';
				}, 1);

				accCollapse.classList = 'content__collapse collapsing';

				setTimeout(() => {
					console.log('open content content');
					accCollapse.classList = 'content__collapse collapse open';
				}, 300);
			}
			
			else {
				accCollapse.classList = 'content__collapse collapsing';

				setTimeout(() => {
					accCollapse.style.height = '0px';
				}, 1);

				setTimeout(() => {
					console.log('close content content');
					accCollapse.classList = 'content__collapse collapse';
					accCollapse.style.height = '';
				}, 300);
			}

			item.classList.toggle('open');
		}
	});
});