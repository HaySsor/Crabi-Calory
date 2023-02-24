import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  is_not as excluded,
} from '@vee-validate/rules';
import type {Validate} from '../types/interfaces';
import type {App} from 'vue';

export default {
  install(app: App) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('maxVal', maxVal);
    defineRule('minVal', minVal);
    defineRule('passwordMismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('countryExcluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages: Validate = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short`,
          mix: `The field ${ctx.field} is too long`,
          alphaSpaces: ` The field ${ctx.field} may olny contain alphabetic characters and spaces`,
          email: `The field ${ctx.field} must be a valid email`,
          maxVal: `The field ${ctx.field} is too high`,
          minVal: `The field ${ctx.field} is too low`,
          confirmed: ``,
          excluded: ` You are not allowed to use this value for the field ${ctx.field}`,
          passwordMismatch: `The password must be the same`,
          tos: `You must accept the Terms of Service`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The filed ${ctx.filed} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
    });
  },
};
