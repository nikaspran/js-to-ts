class SomeController {
	somethingElse;

	constructor(someLocal, public somePublic, private _somePrivate, someLocalDefault = {}) {
		this.somethingElse = _somePrivate;
		const x = someLocal;
		console.log(x);
	}

	someMethod() {
		console.log(this._somePrivate);
	}
}
