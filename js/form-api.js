/*global $,console*/
/*jslint node: true*/

var form = {
    id: "",
    form_fields: "",
    action: "",
    form: "",
    preceding_elem: "",
    form_init: function (form_details) {
        "use strict";
        //Setup form vars
        this.id = form_details.id;
        this.form_fields = form_details.form_fields;
        this.buttons = form_details.buttons;
        this.action = form_details.action;

        this.form_create();
    },
    form_create: function () {
        "use strict";
        var item, type, maxlength, id, option, name, preceding_elem;

        //Process form fields and add to form
        for (item in this.form_fields) {
            if (this.form_fields.hasOwnProperty(item)) {
                type = this.form_fields[item].type;
                maxlength = this.form_fields[item].maxlength;
                id = this.form_fields[item].id;
                name = this.form_fields[item].name;
                preceding_elem = this.form_fields[item].preceding_elem;

                switch (type) {
                case "text":
                    this.form += name + ": <input " + "type='" + type +
                                 "' maxlength='" + maxlength +
                                 "' name='" + name +
                                 "' id='" + id +
                                 "'></input>";
                    this.form += preceding_elem;
                    break;
                case "select":
                    this.form += "<select id='" + id + "' name='" + name + "'>";
                    for (option in this.form_fields[item].options) {
                        if (this.form_fields[item].options.hasOwnProperty(option)) {
                            this.form += '"<option value"' + option + '">' + this.form_fields[item].options[option] + '</option>';
                        }
                        this.form += preceding_elem;
                    }
                    this.form += '</select>';
                    this.form += preceding_elem;
                    break;
                case "checkbox":
                case "radio":
                    for (option in this.form_fields[item].options) {
                        if (this.form_fields[item].options.hasOwnProperty(option)) {
                            this.form += this.form_fields[item].options[option] +
                                         ': <input ' + ' type="' + type +
                                         '" value="' + this.form_fields[item].options[option] +
                                         '" name="' + id +
                                         '" id="' + id +
                                         '"></input>';
                            this.form += preceding_elem;
                        }
                    }
                    this.form += preceding_elem;
                    break;
                case "textarea":
                    this.form += name + ": <textarea " + " type='" + type +
                                 "' maxlength='" + maxlength +
                                 "' name='" + name +
                                 "' id='" + id +
                                 "'></" + "textarea>";
                    this.form += preceding_elem;
                    break;
                }
            }
        }

        //Init buttons
        for (item in this.buttons) {
            if (this.buttons.hasOwnProperty(item)) {
                switch (this.buttons[item].type) {
                case "submit":
                    this.form += "<input type='submit' id='" + this.buttons[item].id + "'></input>";
                    break;
                }

            }
        }
        this.form = this.form.replace("undefined", "");
        this.form_attach();
    },
    form_attach: function () {
        "use strict";
        $("#" + this.id).append(this.form);
    }
};
