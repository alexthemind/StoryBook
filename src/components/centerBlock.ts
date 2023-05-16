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
        
        exampleBlockContent(this.lorem,code,textElm,this.container1,true,id);
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

        exampleBlockContent(this.lorem,code,output,this.container1,true,id).then(co => {
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

        exampleBlockContent(this.lorem,code,output,this.container1,true,id).then(co => {
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

        exampleBlockContent(this.lorem,code,output,this.container1,true,id);
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

        exampleBlockContent(this.lorem,code,table,this.container1,true,id).then(co => {
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
        exampleBlockContent(this.lorem,code,slct,this.container1,true,id).then(co => {
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

        exampleBlockContent(this.lorem,code,div,this.container1,true,id).then(co => {
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

        exampleBlockContent(this.lorem,code,check,this.container1,true,id).then(co => {
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

        exampleBlockContent(this.lorem,code,vstack,this.container1,true,id).then(co => {
            let divided = co.querySelector('.divided');
            let divs = divided.querySelectorAll('div');
                divs[1].classList.add('h-[17em]','w-[70%]','overflow-y-scroll');
        });

    }
}


export {
    CenterBlock
}