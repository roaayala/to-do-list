export default class Collection {
	constructor() {
		this.items = [];
	}

	add(item) {
		this.items = [...this.items, item];
		return item;
	}
}
