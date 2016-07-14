/*global $,form,console,document */

$(document).ready(function () {
    "use strict";
    var form_details = {
        id: "init-form",
        action: "/",
        form_fields: {
            input: {
                input_type: "input",
                type: "text",
                maxlength: 20,
                name: "Name"
            },
            input1: {
                input_type: "select",
                type: "text",
                maxlength: 30,
                name: "Email",
                options: {
                    test1: "Test1",
                    test2: "Test2",
                    test3: "Test3"
                }
            },
            input2: {
                input_type: "input",
                type: "radio",
                name: "pet",
                options: {
                    dog: "Dog",
                    cat: "Cat",
                    hamster: "Hamster"
                }
            }
        }
    };
    form.form_init(form_details);
});
