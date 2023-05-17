import Controller from '../Controller';
declare class CenterBlock extends Controller {
    lorem: string;
    stylei: string;
    stylev: string;
    stylel: string;
    styler: string;
    stylen: string;
    stylef: string;
    constructor();
    initPage(): void;
    BList(): HTMLDivElement;
    textBlock(str: string): void;
    shadeText(str: string, icon?: string): void;
    exmapleContentText(id: string): void;
    exmapleContentButton(id: string): void;
    exmapleContentVStack(id: string): void;
    exmapleContentHStack(id: string): void;
    exmapleContentTable(id: string): void;
    exmapleContentSelect(id: string): void;
    exmapleContentInput(id: string): void;
    exampleContentCheckbox(id: string): void;
    exampleContentDialog(id: string): void;
}
export { CenterBlock };
