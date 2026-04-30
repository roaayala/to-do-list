export default function createMainLayout() {
	const container = document.createElement("div");
	container.classList.add("container");

	const aside = document.createElement("aside");
	aside.id = "sidebar";

	const main = document.createElement("main");
	main.id = "main";

	container.appendChild(aside);
	container.appendChild(main);

	return container;
}
