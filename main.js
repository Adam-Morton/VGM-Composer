// ====== Global Helpers ======
async function loadHTML(id, url) {
	const res = await fetch(url);
	document.getElementById(id).innerHTML = await res.text();
}

async function fetchJSON(url) {
	const res = await fetch(url);
	return await res.json();
}

// ====== Shared UI Logic ======
async function loadSharedLayout() {
	await loadHTML('site-header', '/header.html');
	await loadHTML('site-footer', '/footer.html');

	// Wait briefly for header HTML to be added to DOM
	setTimeout(() => {
		const toggle = document.querySelector('.menu-toggle');
		const nav = document.querySelector('#site-header nav');
		if (toggle && nav) {
			toggle.addEventListener('click', () => nav.classList.toggle('active'));
		}
	}, 100);
}

