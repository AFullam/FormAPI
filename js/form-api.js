/*global $,console*/
/*jslint node: true*/

var form = {
    id: "",
    form_fields: "",
    action: "",
    form: "",
    form_init: function (form_details) {
        "use strict";
        //Setup form vars
        this.id = form_details.id;
        this.form_fields = form_details.form_fields;
        this.action = form_details.action;

        this.form_create();
    },
    form_create: function () {
        "use strict";
        var item, input_type, type, maxlength, id, option, name;

        //Process form fields and add to form
        for (item in this.form_fields) {
            if (this.form_fields.hasOwnProperty(item)) {
                input_type = this.form_fields[item].input_type;
                type = this.form_fields[item].type;
                maxlength = this.form_fields[item].maxlength;
                id = this.form_fields[item].id;
                name = this.form_fields[item].name;

                if (type !== "radio" && type !== "checkbox" && input_type !== "textarea") {
                    this.form += "<p>" + id + ": <" + input_type + " type='" + type +
                                       "' maxlength='" + maxlength +
                                       "' name='" + id +
                                       "' id='" + id +
                                       "'></input></p>";
                }

                //If field is select then define options
                if (input_type === "select") {
                    for (option in this.form_fields[item].options) {
                        if (this.form_fields[item].options.hasOwnProperty(option)) {
                            this.form += '"<p><option value"' + option + '">' + this.form_fields[item].options[option] + '</option></p>';
                        }
                    }
                    this.form += '</select>';
                } else if (input_type === "input" && (type === "radio" || type === "checkbox")) {
                //If field is radio button
                    for (option in this.form_fields[item].options) {
                        if (this.form_fields[item].options.hasOwnProperty(option)) {
                            this.form += '<p>' + this.form_fields[item].options[option] +
                                                ': <' + input_type + ' type="' + type +
                                                '" value="' + this.form_fields[item].options[option] +
                                                '" name="' + id +
                                                '" id="' + id +
                                                '"></input></p>';
                        }
                    }
                } else if (input_type === "textarea") {
                    this.form += "<p>" + id + ": <" + input_type + " type='" + type +
                                       "' maxlength='" + maxlength +
                                       "' name='" + id +
                                       "' id='" + option +
                                       "'></" + input_type + "></p>";
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
