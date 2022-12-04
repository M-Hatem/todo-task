import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  email,
  min,
  max,
  alpha_spaces as alphaSpaces,
  confirmed,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("email", email);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("tos", required);
    defineRule("confirmed", confirmed);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The Field ${ctx.field} is required.`,
          email: `The Filed ${ctx.field} must contain a valid email.`,
          min: `The Field ${ctx.field} is too short.`,
          max: `The Field ${ctx.field} is too long.`,
          alpha_spaces: `The Field ${ctx.field} may only contain alphabetical characters and spaces.`,
          tos: `You must accept our policies.`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The Field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnInput: false,
    });
  },
};
