/*global $,form,console,document */
$(document).ready(function () {
    "use strict";
    var form_details = {
        id: "init-form",
        action: "/",
        form_fields: {
            textarea: {
                type: "textarea",
                name: "Description",
                id: "description",
                preceding_elem: "<br>"
            },
            textbox: {
                type: "text",
                maxlength: 20,
                name: "Name",
                id: "name",
                preceding_elem: "<br>"
            },
            select: {
                type: "select",
                maxlength: 30,
                name: "Email",
                id: "email",
                preceding_elem: "<br>",
                options: {
                    test1: "Test1",
                    test2: "Test2",
                    test3: "Test3"
                }
            },
            radio: {
                type: "radio",
                name: "pet",
                id: "pet",
                preceding_elem: "<br>",
                options: {
                    dog: "Dog",
                    cat: "Cat",
                    hamster: "Hamster"
                }
            },
            checkbox: {
                type: "checkbox",
                name: "Location",
                id: "location",
                preceding_elem: "<br>",
                options: {
                    liverpool: "Liverpool",
                    manchester: "Manchester",
                    london: "London"
                }
            }
        },
        buttons: {
            submit: {
                type: "submit",
                id: "submit"
            }
        }
    };
    form.form_init(form_details);
});
