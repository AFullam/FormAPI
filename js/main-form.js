/*global $,form,console,document */

$(document).ready(function () {
    "use strict";
    var form_details = {
        id: "init-form",
        form_fields: {
            input: {
                type: "text",
                size: 20,
                name: "Name"
            },
            input1: {
                type: "text",
                size: 30,
                name: "email"
            }
        }
    };
    form.form_init(form_details);
});
