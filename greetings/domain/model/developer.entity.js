/**
 * Represents a developer entity with first and las name.
 */

export class dEVELOPER {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname?.trim() || '';
        this.#lastname = firstname?.trim()|| '';
    }
    get firstname() {
        return this.#firstname;
    }
    get lastname() {
        return this.#lastname;
    }

    get fullname() {
        return `${this.#firstname} ${this.#lastname}`;
    }
}