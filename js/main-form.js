/*global $,form,console,document */

$(document).ready(function () {
    "use strict";
    var form_details = {
        id: "init-form",
        action: "/",
        form_fields: {
            textarea: {
                input_type: "textarea",
                type: "text",
                name: "Description",
                id: "description"
            },
            textbox: {
                input_type: "input",
                type: "text",
                maxlength: 20,
                name: "Name",
                id: "description"
            },
            select: {
                input_type: "select",
                type: "text",
                maxlength: 30,
                name: "Email",
                id: "email",
                options: {
                    test1: "Test1",
                    test2: "Test2",
                    test3: "Test3"
                }
            },
            radio: {
                input_type: "input",
                type: "radio",
                name: "pet",
                id: "pet",
                options: {
                    dog: "Dog",
                    cat: "Cat",
                    hamster: "Hamster"
                }
            },
            checkbox: {
                input_type: "input",
                type: "checkbox",
                name: "Location",
                iod: "location",
                options: {
                    liverpool: "Liverpool",
                    manchester: "Manchester",
                    london: "London"
                }
            }
        }
    };
    form.form_init(form_details);
});
