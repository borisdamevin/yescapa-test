// ============================================================================================= //
//                                           STYLELINT                                           //
// ============================================================================================= //

export default {
    extends: [
        '@front-factory/stylelint-config'
    ],
    rules: {
        'custom-property-pattern': null,
        'scss/at-if-no-null': null,
        'scss/at-mixin-argumentless-call-parentheses': 'never'
    }
};
