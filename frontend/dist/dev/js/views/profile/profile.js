var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* ToDo: Test view remove */
import ViewLayout from '../view';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { msg, localized } from '@lit/localize';
import { setLocale } from '../../utilities/language/language';
import { capitalize } from '../../utilities/text/text';
let ProfileView = class ProfileView extends ViewLayout {
    constructor() {
        super();
    }
    // Bootstraping any other lang than english
    updated() {
        const lang = localStorage.getItem('lang');
        if (lang && lang !== 'en') {
            setLocale(lang);
        }
    }
    createRenderRoot() {
        return this; // prevents creating a shadow root
    }
    #changeEvent({ target: { value } }) {
        setLocale(value);
        localStorage.setItem('lang', value);
    }
    #renderRows() {
        const lang = localStorage.getItem('lang');
        const row1 = html `
            <project-select
                @change="${this.#changeEvent}"
                selected="${lang || 'en'}"
                label="${capitalize(msg('language'))}"
                values='["en", "de-CH-1901"]'
                options='["${msg('English')}", "${msg('German')}"]'
            ></project-select>
        `;
        return [row1];
    }
    render() {
        const rows = this.#renderRows();
        return super.render(rows);
    }
};
ProfileView = __decorate([
    localized(),
    customElement('profile-layout')
], ProfileView);
export default ProfileView;
