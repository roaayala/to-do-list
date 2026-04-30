export default class Collection {
	constructor() {
		this.items = [];
	}

	add(item) {
		this.items = [...this.items, item];
		return item;
	}

	get isDone() {
		if (this.items.length === 0) return false;
		return this.items.every((item) => item.isDone);
	}
}
