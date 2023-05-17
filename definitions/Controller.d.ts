export default class Controller {
    document: Document;
    root: HTMLElement;
    left: HTMLElement;
    center: HTMLElement;
    centerContainer: HTMLElement;
    right: HTMLElement;
    container1: HTMLElement;
    container2: HTMLElement;
    constructor();
    renderTemplate(container?: HTMLElement, cb?: any): HTMLElement;
}
