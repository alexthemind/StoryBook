import Controller from '../Controller';
import {
     buildUiList
    ,textDarkBlock
    ,shadeTextBlock
    ,exampleBlockContent
    ,implementScrollUp
    ,activeSearchInput
    ,actionTabs
} from './ElementCollections';
import { 
     TextElement
    ,ButtonElement 
    ,ButtonElementType
    ,VStack
    ,HStack
    ,Table
    ,TableConstructor
    ,SelectElement
    ,GenericIcon
    ,IconDAV
    ,InputElement
    ,VStackType
    ,CheckBoxElement
} from 'ait-bpd-common-core';
import {
     XAppModal
    ,XAppDialog
    ,XAppDialogStatuses
    ,CloseAppActionsEnum
    ,XAppDialogTypes
    ,XAppDialogIcons
    ,AitXIcon
} from 'ait-bpd-common';




class CenterBlock extends Controller {

    lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil, harum quam exercitationem quidem impedit ea corrupti debitis officia eos maiores aliquam in incidunt minus illum corporis tenetur expedita pariatur."
    descTexto = "El elemento <b>TextElement</b>, representa un elemento de control para la edición de texto sin formato.<br><br>Este elemento tiene dos parametros: <b>text:</b> tipo <em>string</em>, el cual es requerido, y <b>options:</b> tipo <em>TextElementOptions</em>, el cual es opcional.<br><br>Las opciones disponibles de tipo <em>TextElementOptions</em> son:  <b>alignment</b>, <b>class</b> y <b>node</b>"
    descButton = "El elemento <b>ButtonElement</b> representa un elemento cliqueable de tipo botón que puede ser utilizado en formularios o en cualquier parte de la página que necesite un botón.<br><br> Este elemento tiene dos parametros: <b>content:</b> de tipo <em>AITElement</em> o de tipo <em>HTMLElement</em>, el cual es requerido, y <b>options:</b> de tipo <em>ButtonElementOptions</em>, el cual es opcional.<br><br> Las opciones disponibles de tipo <em>ButtonElementOptions</em> son: <b>type</b>, <b>disabled</b>, <b>class</b>, <b>node</b> y <b>target</b>"
    descVStack = "El elemento <b>VStack</b> representa un elemento que puede ser utilizado para crear secciones o agrupar contenidos con orientación vértical.<br><br> Este elemento tiene dos parametros: <b>elements:</b> un arreglo de tipo <em>HTMLElement</em> o de tipo <em>AITElement</em>, el cual es requerido, y <b>options:</b> de tipo <em>VStackConstructorOptions</em>, el cual es opcional.<br><br> Las opciones de tipo <em>VStackConstructorOptions</em> son: <b>type</b>, <b>node</b> y <b>class</b>"
    descHStack = "El elemento <b>HStack</b> representa un elemento que puede ser utilizado para crear secciones o agrupar contenidos con orientación horizontal.<br><br> Este elemento tiene dos parametros: <b>elements:</b> un arreglo de tipo <em>HTMLElement</em> o de tipo <em>AITElement</em>, el cual es requerido, y <b>options:</b> de tipo <em>HStackConstructorOptions</em>, el cual es opcional.<br><br> Las opciones de tipo <em>HStackConstructorOptions</em> son: <b>type</b>, <b>node</b> y <b>class</b>"
    descTable = "El Elemento <b>Table</b> representa un elemento para agrupar datos en dos o mas dimensiones.<br><br> Este elemento tiene dos objetos como parametros: <b>columns</b>, el cual es requerido, y <b>options:</b>, el cual es opcional.<br><br>El objeto <em>columns</em> tiene como parametros requeridos: <b>header:</b> de tipo <em>TableColumnHeaderOptions</em> y <b>data:</b>, el cual a su vez es un objeto formado por <b>_row:</b> de tipo <em>RowType</em>, <b>_id:</b> de tipo <em>number</em>.<br><br>En el parametro options solo existe un parametro: <b>outsideBorder:</b>de tipo <em>boolean</em>"
    descSelect = "El elemento <b>SelectElement</b> representa un elemento de control que muestra un menú de opciones<br><br>Este elemento tiene un parametro opcional llamado <b>options:</b> de tipo <em>AITSelectOptions</em>.<br><br>Las opciones disponibles de tipo <em>AITSelectOptions</em> son: <b>buttonIcon:</b> de tipo <em>HTMLElement</em> o de tipo <em>AITElement</em>, <b>title:</b> de tipo <em>string</em>, <b>placeholder:</b> de tipo <em>string</em> y un metodo <b>setValue:</b> con parametros <b>select:</b> de tipo <em>SelectElement</em> y <b>value:</b> de tipo <em>string</em>"
    descInput = "El elemento <b>InputElement</b> representa un elemento que se puede usar para crear controles interactivos, con el fin de recibir datos del usuario.<br><br>Este elemento tiene un parametro opcional llamado <b>options:</b> de tipo <em>InputElementOptions</em>.<br><br>Las opciones disponibles de tipo <em>InputElementOptions</em> son: un metodo <b>setValue:</b> con los parametros: <b>select:</b> de tipo <em>InputElement</em> y <b>value:</b> de tipo <em>string</em>, <b>placeholder:</b> de tipo <em>string</em>, <b>alignment?:</b> de tipo <em>TextAlignment</em>, <b>prefix?:</b> de tipo <em>InputElementPrefix</em>, <b>maxLength:</b> de tipo <em>number</em>, <b>typeNumber:</b> de <em>tipo boolean</em>"
    descCheckbox = "El elemento <b>CheckBoxElement</b> representa un elemento de control que permite seleccionar una o mas opciones en un formulario.<br><br>Este elemento tiene un parametro opcional llamado <b>options</b> de tipo <em>CheckBoxElementOptions</em>.<br><br>Las opciones disponibles de tipo <em>CheckBoxElementOptions</em> son:  un metodo <b>target</b> con parametro <b>ev</b> de tipo <em>CheckBoxElement</em>, <b>disabled?:</b> de tipo <em>boolean</em>, <b>class?:</b> un arreglo de tipo <em>string</em> y <b>checked?:</b> de tipo <em>boolean</em>"
    descDialog = "El elemento <b>XAppDialog</b> representa un elemento que puede ser utilizado para mostrar una ventana de dialogo dependiendo de la situacion del usuario.<br><br>Este elemento tiene un parametro requerido llamado <b>config:</b> de tipo <em>XAppDialogConfig</em>.<br><br>Las opciones disponibles de tipo <em>XAppDialogConfig</em> son: <b>type:</b> de tipo <em>XAppDialogTypes</em>, <b>status:</b> de tipo <em>XAppDialogStatuses</em>, <b>icon:</b> de tipo <em>string</em>, <b>title:</b> de tipo <em>string</em>, <b>message:</b>de tipo <em>string</em>, <b>actions:</b> de tipo <em>XAppDialogButtons</em>, <b>color:</b> de tipo <em>string</em> y el parametro <b>context:</b> formado por los parametros <b>selector:</b> de tipo <em>string</em> y <b>attachMethod:</b> de tipo <em>XAppDialogAttachMethod</em>."
    stylei = "text-cyan-300";
    stylev = "text-teal-300";
    stylel = "text-red-300";
    styler = "text-purple-300";
    stylen = "text-blue-400";
    stylef = "text-yellow-300";
    constructor() {
        super();

        this.center && implementScrollUp(this.center);
        this.left && activeSearchInput(this.left);
        this.center && actionTabs(this.center);
    }

    initPage() {
        console.log("Welcome to Siebel StoryBoard!!!");
            
        this.BList();
        this.shadeText("Texto");
        this.exmapleContentText("texto");
        this.shadeText("Button");
        this.exmapleContentButton("button");
        this.shadeText("VStack");
        this.exmapleContentVStack("vstack");
        this.shadeText("HStack");
        this.exmapleContentHStack("hstack");
        this.shadeText("Table");
        this.exmapleContentTable("table");
        this.shadeText("Select");
        this.exmapleContentSelect("select");
        this.shadeText("Input");
        this.exmapleContentInput("input");
        this.shadeText("Checkbox");
        this.exampleContentCheckbox("checkbox");
        this.shadeText("Dialog");
        this.exampleContentDialog("dialog");
    }

    BList() {
        let items = [
            { name: 'Texto', href: 'texto',icon: 'fa fa-caret-right text' },
            { name: 'Button', href: 'button',icon: 'fa fa-caret-right' },
            { name: 'X-Button', href: 'x-button',icon: 'fa fa-caret-right' },
            { name: 'VStack', href: 'vstack',icon: 'fa fa-caret-right' },
            { name: 'HStack', href: 'hstack',icon: 'fa fa-caret-right' },
            { name: 'Table', href: 'table',icon: 'fa fa-caret-right' },
            { name: 'Select', href: 'select',icon: 'fa fa-caret-right' },
            { name: 'Input', href: 'input',icon: 'fa fa-caret-right' },
            { name: 'Checkbox', href: 'checkbox',icon: 'fa fa-caret-right' },
            { name: 'Dialog', href: 'dialog',icon: 'fa fa-caret-right' },
        ]

        return buildUiList(items,this.left);
    }

    textBlock(str:string) {
        textDarkBlock(str,this.container1);
    }

    shadeText(str:string,icon?:string) {
        shadeTextBlock(str,this.container1,icon);
    }

    exmapleContentText(id:string) {
        let code = `
new TextElement("Hola a todos",{ 
    class: ["color-texto"] 
});
        `;
        
        let textElm = new TextElement("Hola a todos", { class: ["border","p-2","rounded"] });
        
        exampleBlockContent(this.descTexto,code,textElm,this.container1,true,id);
    }

    exmapleContentButton(id:string) {
        let code = `
new ButtonElement(
    new TextElement("Click aquí")
    ,{
    target: () => {
        alert("hola cómo estas");
    },
    type: ButtonElementType.Primary,
    class: ["custom-css"]
});
        `;
        let output = new ButtonElement(
            new TextElement("Click aquí")
            ,{
            target: () => {
                alert("hola cómo estas");
            },
            //type: ButtonElementType.Primary,
            class: [
                "w-[30%]",
                "bg-red-500",
                "text-white",
                "p-3",
                "rounded",
                "hover:bg-red-600",
                "transition",
                "flex",
                "justify-center",
                "items-center"
            ]
        });

        exampleBlockContent(this.descButton,code,output,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[15em]');
        });
    }

    exmapleContentVStack(id:string) {
        let code = `
VStack([
    new TextElement("Uno"), 
    new TextElement("Dos"), 
    new TextElement("Tres"), 
],{
    class: ["custom-css"],
    node: "custom",
    type: VStackType.Grid
});
        `;
        let output = VStack([
            new TextElement("Uno"), 
            new TextElement("Dos"), 
            new TextElement("Tres"), 
        ],{
            class: ["border","p-2","rounded","w-[30%]"],
            node: "custom",
            type: VStackType.Grid
        });

        exampleBlockContent(this.descVStack,code,output,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[15em]');
        });
    }

    exmapleContentHStack(id:string) {
        let code = `
HStack([
    new TextElement("Uno"),
    new TextElement("Dos"),
    new TextElement("Tres"),
], {
    class: ["custom-css"]
});
        `;
        let output = HStack([
            new TextElement("Uno",{ class: ["w-full"] }),
            new TextElement("Dos",{ class: ["w-full"] }),
            new TextElement("Tres",{ class: ["w-full"] }),
        ], {
            class: ["border","p-2","rounded","w-[10em]","flex","space-between","items-center"],
        });

        exampleBlockContent(this.descHStack,code,output,this.container1,true,id);
    }

    exmapleContentTable(id:string) {
        let code = `
let tbl: TableConstructor<{
    id: number,
    name: string,
    lname: string
}>;

tbl = Table<{
    id: number,
    name: string,
    lname: string
}>([
    {
        header: { title: "ID" },
        data: (_row) => {
            return new TextElement(_row.id.toString());
        }
    },
    {
        header: { title: "Nombre" },
        data: (_row) => {
            return new TextElement(_row.name);
        }
    },
    {
        header: { title: "Pellido" },
        data: (_row) => {
            return new TextElement(_row.lname);
        }
    },
],{
    outsideBorder: true
});

// asigno valores a la tabla 
tbl.data = [
    { id: 1, name: "Uno" , lname: "Uno" },
    { id: 2, name: "Dos" , lname: "Dos" },
    { id: 3, name: "Tres" , lname: "Tres" },
];
`;
        let table: TableConstructor<{
            id: number,
            name: string,
            lname: string
        }>;

        table = Table<{
            id: number,
            name: string,
            lname: string
        }>([
            {
                header: { title: "ID" },
                data: (_row) => {
                    return new TextElement(_row.id.toString());
                }
            },
            {
                header: { title: "Nombre" },
                data: (_row) => {
                    return new TextElement(_row.name);
                }
            },
            {
                header: { title: "Pellido" },
                data: (_row) => {
                    return new TextElement(_row.lname);
                }
            },
        ],{
            outsideBorder: true
        });

        // asigno valores a la tabla 
        table.data = [
            { id: 1, name: "Uno" , lname: "Uno" },
            { id: 2, name: "Dos" , lname: "Dos" },
            { id: 3, name: "Tres" , lname: "Tres" },
        ];

        exampleBlockContent(this.descTable,code,table,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[17em]','w-[70%]','overflow-y-scroll');
        });
    }

    exmapleContentSelect(id:string) {
        let code = `
let icon = document.createElement('i');
    icon.className = 'fa fa-caret-down text-gray-500 ml-[.4em]';

let slct = new SelectElement({
    tag: "relationType",
    title: "Relación",
    model: "relation",
    buttonIcon: icon,
    placeholder: "Seleccione", 
});

slct.data = [{ 
    name: "Valor 1",
    value: 1, 
}, { 
    name: "Valor 2",
    value: 2,
}, {
    name: "Valor 3",
    value: 3,
}];
        `;

        let icon = document.createElement('i');
            icon.className = 'fa fa-caret-down text-gray-500 ml-[.4em]';

        let slct = new SelectElement({
            tag: "relationType",
            title: "Relación",
            model: "relation",
            buttonIcon: icon,
            placeholder: "Seleccione", 
        });

        slct.className = "w-[35%] pl-[1em]";
        
        slct.data = [
            { 
                name: "Valor 1",
                value: "Valor 1", 
            }, 
            { 
                name: "Valor 2",
                value: "Valor 2",
            }, 
            {
                name: "Valor 3",
                value: "Valor 3",
            }
        ];
        exampleBlockContent(this.descSelect,code,slct,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[17em]','w-[70%]','overflow-y-scroll');
        });
    }

    exmapleContentInput(id:string) {
        let code = `
let inpNumber = new InputElement({
    tag: "idNum",
    title: "Número de Identificación",
    model: "idNum",
    typeNumber: true,
    maxLength: 10,
    placeholder: "ingrece un numero"
});

let inpText = new InputElement({
    tag: "idtext",
    title: "Nómbre",
    model: "name",
    placeholder: "Ingrese un texto"
});
        `;

        let div = document.createElement('div');
            div.className = 'flex space-between items-center';

        let inpNumber = new InputElement({
            tag: "idNum",
            title: "Número de Identificación",
            model: "idNum",
            typeNumber: true,
            maxLength: 10,
            placeholder: "ingrece un numero"
        });
        
        let inpText = new InputElement({
            tag: "idtext",
            title: "Nómbre",
            model: "name",
            placeholder: "Ingrese un texto"
        });

        inpText.className = "ml-[1em]";

        div.appendChild(inpNumber);
        div.appendChild(inpText);

        exampleBlockContent(this.descInput,code,div,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[17em]','w-[70%]','overflow-y-scroll');
        });
    }

    exampleContentCheckbox(id:string) {
        let code = `
let check = new CheckBoxElement({
    checked: false, 
    disabled: false, 
    target: (check) => {
        if(check.check)
        {
            alert("Marcado!");
        }
        else
        {
            alert("Desmarcado!");
        }
    },
    class: ["custom-css"]
});
        `;

        let check = new CheckBoxElement({
                checked: false, 
                disabled: false, 
                target: (check) => {
                    if(check.check)
                    {
                        alert("Marcado!");
                    }
                    else
                    {
                        alert("Desmarcado!");
                    }
                },
                class: ["custom-css"]
            });

        exampleBlockContent(this.descCheckbox,code,check,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[17em]','w-[70%]','overflow-y-scroll');
        });
    }

    exampleContentDialog(id:string) {

        let code = `
new ButtonElement(
    new TextElement("Default"),
    {
        target: () => {
            new XAppDialog({
                status: XAppDialogStatuses.error,
                message: "Dialog por defecto",
                type: XAppDialogTypes.alert,
                icon: XAppDialogIcons.error
            }).show();
        },
        class: ["custom-css"]
    }
);
        `;

        let error = new ButtonElement(
            new TextElement("Default"),
            {
                target: () => {
                    new XAppDialog({
                        status: XAppDialogStatuses.error,
                        message: "Dialog por defecto",
                        type: XAppDialogTypes.alert,
                        icon: XAppDialogIcons.error,
                    }).show();
                },
                class: ["p-2","w-[25%]","bg-red-500","hover:bg-red-600","text-white","rounded","flex","justify-center","items-center","mb-1"]
            }
        );

        let info = new ButtonElement(
            new TextElement("Info"),
            {
                target: () => {
                    new XAppDialog({
                        status: XAppDialogStatuses.info,
                        message: "Dialog de información",
                        type: XAppDialogTypes.alert,
                        icon: XAppDialogIcons.info
                    }).show();
                },
                class: ["p-2","w-[25%]","bg-blue-500","hover:bg-blue-600","text-white","rounded","flex","justify-center","items-center","mb-1"]
            }
        );

        let success = new ButtonElement(
            new TextElement("Success"),
            {
                target: () => {
                    new XAppDialog({
                        status: XAppDialogStatuses.success,
                        message: "Dialog de aprobación",
                        type: XAppDialogTypes.alert,
                        icon: XAppDialogIcons.success
                    }).show();
                },
                class: ["p-2","w-[25%]","bg-teal-500","hover:bg-teal-600","text-white","rounded","flex","justify-center","items-center","mb-1"]
            }
        );

        let confirm = new ButtonElement(
            new TextElement("Confirm"),
            {
                target: () => {
                    new XAppDialog({
                        status: XAppDialogStatuses.confirm,
                        message: "Dialog de confirmación",
                        type: XAppDialogTypes.confirm,
                        icon: XAppDialogIcons.confirm
                    }).show();
                },
                class: ["p-2","w-[25%]","bg-blue-500","hover:bg-blue-600","text-white","rounded","flex","justify-center","items-center","mb-1"]
            }
        );

        let alert = new ButtonElement(
            new TextElement("alert"),
            {
                target: () => {
                    new XAppDialog({
                        status: XAppDialogStatuses.alert,
                        message: "Dialog de alerta",
                        type: XAppDialogTypes.alert,
                        icon: XAppDialogIcons.alert
                    }).show();
                },
                class: ["p-2","w-[25%]",'text-gray-500',"bg-yellow-400","hover:bg-yellow-500","rounded","flex","justify-center","items-center","mb-1"]
            }
        );

        let vstack = VStack([
            error,
            info,
            success,
            confirm,
            alert
        ]);

        exampleBlockContent(this.descDialog,code,vstack,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[17em]','w-[70%]','overflow-y-scroll');
        });

    }
}


export {
    CenterBlock
}