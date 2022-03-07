var formbasic = {
    cols: [{
        view: "form",
        elementsConfig: {
            labelWidth: 150
        },
        id: "myform",
        scroll: true,
        elements: [{
            view: "search",
            placeholder: "Search for ...",
            inputHeight: 100,
            height: 200,
            animate: true,
            paddingY: 100
        }, {
            view: "text",
            label: "Nama lengkap",
            name: "name",
            labelWidth: 150,
        }, {
            view: "combo",
            label: "Provinsi",
            name: "provinsi",
            options: ["Jakarta", "Bandung", "Tangerang"],
            labelWidth: 150
        }, {
            view: "select",
            label: "Kecamatan",
            name: "kecamatan",
            options: ["Cakung", "Rawamangun", "Matraman"],
            labelWidth: 150
        }, {
            view: "checkbox",
            name: "checkbox",
            label: "Agree with terms and conditions",
            labelWidth: 150
        }, {
            view: "radio",
            label: "Jenis Kelamin",
            name: "gender",
            options: ["laki laki", "Perempuan"],
            labelWidth: 150
        }, {
            view: "richselect",
            id: "richselect",
            label: "Kelurahan",
            name: "kelurahan",
            options: ["Cakung Timur", "Cakung Barat", "Cakung Selatan"]
        }, {
            view: "fieldset",
            label: "Contact Form",
            body: {
                rows: [{
                    view: "textarea",
                    name: "pesan",
                    placeholder: "Pesan anda"
                }]
            }
        }, {
            template: "Label",
            type: "section"
        }, {
            view: "dbllist",
            list: {
                height: 200,
                scroll: false
            },
            name: "dbl",
            labelBottomRight: "selected",
            labelBottomLeft: "options",
            data: [{
                id: 'x1',
                value: "x1"
            }, {
                id: 'x2',
                value: "x2"
            }, {
                id: 'x3',
                value: "x3"
            }, {
                id: 'x5',
                value: "x5"
            }, {
                id: 'x6',
                value: "x6"
            }]
        }, {
            view: "datepicker",
            label: "Date",
            multiselect: "touch",
            format: "%d - %m - %Y"
        }, {
            id: "button",
            view: "button",
            autoWidth: true,
            label: "Click me",
            type: "icon",
            icon: "wxi-pencil",
            height: 50,
            css: "wbx_primary",
            click: function() {
                webix.message(JSON.stringify(this.getParentView().getValues()))
            }
        }]
    }, {}]
}