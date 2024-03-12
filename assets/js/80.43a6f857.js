(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{583:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-the-validate-argument"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-validate-argument"}},[t._v("#")]),t._v(" Using the "),s("code",[t._v("validate")]),t._v(" Argument")]),t._v(" "),s("p",[t._v("There are many validation options included within Redux that can apply to "),s("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("fields")]),t._v(". You can\nalso build your own validations. A validation is basically a way to validate the data is correct. If the validation\ndoes not pass, a warning or error will be displayed and the changed value will not be saved.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#how-to-use"}},[t._v("How to Use")]),s("ul",[s("li",[s("a",{attrs:{href:"#multiple-validations"}},[t._v("Multiple Validations")])]),s("li",[s("a",{attrs:{href:"#using-a-custom-validation"}},[t._v("Using a Custom Validation")])])])]),s("li",[s("a",{attrs:{href:"#built-in-validations"}},[t._v("Built-in Validations")]),s("ul",[s("li",[s("a",{attrs:{href:"#preg-replace-example"}},[t._v("preg_replace Example")])]),s("li",[s("a",{attrs:{href:"#str-replace-example"}},[t._v("str_replace Example")])]),s("li",[s("a",{attrs:{href:"#html-custom-example"}},[t._v("html_custom Example")])])])]),s("li",[s("a",{attrs:{href:"#a-warning"}},[t._v("A Warning")])])])]),s("p")]),t._v(" "),s("h2",{attrs:{id:"how-to-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to Use")]),t._v(" "),s("p",[t._v("You declare the use of a validation by passing the "),s("code",[t._v("validate")]),t._v(" argument to the "),s("RouterLink",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field array")]),t._v(".\nBelow is an example:")],1),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'validate'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'not_empty'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"multiple-validations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-validations"}},[t._v("#")]),t._v(" Multiple Validations")]),t._v(" "),s("p",[t._v("You can also have multiple validations occur on a given field by setting an array of validations. The validations will\noccur in the order as they appear in the array. An example of this is below.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'validate'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'numeric'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'not_empty'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Be warned, not all validations may chain together. Be careful and make sure you are passing any additional arugments needed.")]),t._v(" "),s("h3",{attrs:{id:"using-a-custom-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-validation"}},[t._v("#")]),t._v(" Using a Custom Validation")]),t._v(" "),s("p",[t._v("You can declare your own custom validation by providing a callback function. An example of this can be seen below.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'validate_callback'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'test_custom_callback'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The function you set can do anything. Here is an example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("function_exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'test_custom_callback'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * Custom function for the callback validation referenced above\n\t *\n\t * @param array $field          Field array.\n\t * @param mixed $value          New value.\n\t * @param mixed $existing_value Existing value.\n\t *\n\t * @return mixed\n\t */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("test_custom_callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$existing_value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$error")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$warning")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do your validation.")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$existing_value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elseif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$warning")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$existing_value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'msg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your custom error message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$warning")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'msg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your custom warning message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'warning'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Anything you pass back in the return object "),s("code",[t._v("$return['value']")]),t._v(" will be saved. You can display a warning or an error\nattached to the field by specifying "),s("code",[t._v("warning")]),t._v(" or "),s("code",[t._v("error")]),t._v(" in the return array.")])]),t._v(" "),s("h2",{attrs:{id:"built-in-validations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#built-in-validations"}},[t._v("#")]),t._v(" Built-in Validations")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("div",{staticStyle:{width:"160px"}},[t._v("Key")])]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("color")])]),t._v(" "),s("td",[t._v("Valid HTML hex color. Works with "),s("RouterLink",{attrs:{to:"/core-fields/color-rgba.html"}},[t._v("color_rgba")]),t._v(" field (opacity)")],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("comma_numeric")])]),t._v(" "),s("td",[t._v("Value is numeric separated by commas")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("css")])]),t._v(" "),s("td",[t._v("CSS")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("date")])]),t._v(" "),s("td",[t._v("Date")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("email")])]),t._v(" "),s("td",[t._v("Valid Email")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("html_custom")])]),t._v(" "),s("td",[t._v("HTML validation - See "),s("RouterLink",{attrs:{to:"/configuration/fields/validate.html#html_custom-example"}},[t._v("html_custom example")])],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("js")])]),t._v(" "),s("td",[t._v("JavaScript")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("no_html")])]),t._v(" "),s("td",[t._v("No HTML is permitted")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("no_special_chars")])]),t._v(" "),s("td",[t._v("Alpha Numeric, excluding special characters")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("not_empty")])]),t._v(" "),s("td",[t._v("If the value is empty")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("numeric")])]),t._v(" "),s("td",[t._v("Value is numeric")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("preg_replace")])]),t._v(" "),s("td",[t._v("Perform a replacement on the contents based on a regex pattern. See "),s("RouterLink",{attrs:{to:"/configuration/fields/validate.html#preg_replace-example"}},[t._v("preg_replace Example")])],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("str_replace")])]),t._v(" "),s("td",[t._v("Return a string after running through a "),s("code",[t._v("str_replace")]),t._v(". See "),s("RouterLink",{attrs:{to:"/configuration/fields/validate.html#str_replace-example"}},[t._v("str_replace Example")])],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("unique_slug")])]),t._v(" "),s("td",[t._v("To generate a unique slug - optional "),s("code",[t._v("'flush_permalinks' => true")]),t._v(" argument can be added to force a flush permalinks on successful save")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("url")])]),t._v(" "),s("td",[t._v("Valid URL")])])])]),t._v(" "),s("h3",{attrs:{id:"preg-replace-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preg-replace-example"}},[t._v("#")]),t._v(" "),s("code",[t._v("preg_replace")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-php    'validate' => 'preg_replace', extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'preg'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pattern'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/[^a-zA-Z_ -]/s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'replacement'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'no numbers'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"str-replace-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#str-replace-example"}},[t._v("#")]),t._v(" "),s("code",[t._v("str_replace")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'validate'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'str_replace'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'str'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'search'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'replacement'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'thisisaspace'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"html-custom-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-custom-example"}},[t._v("#")]),t._v(" "),s("code",[t._v("html_custom")]),t._v(" Example")]),t._v(" "),s("p",[t._v("You can easily set what HTML is allowed in one of your fields by using the code below. This utilizes\n"),s("a",{attrs:{href:"http://codex.wordpress.org/Function_Reference/wp_kses",target:"_blank",rel:"noopener noreferrer"}},[t._v("wp_kses"),s("OutboundLink")],1),t._v(" from the WordPress core. You can find more information\nabout function at "),s("a",{attrs:{href:"http://codex.wordpress.org/Function_Reference/wp_kses",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://codex.wordpress.org/Function_Reference/wp_kses"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'validate'")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'html_custom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'allowed_html'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'a'")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'href'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'br'")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'em'")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'strong'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"a-warning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-warning"}},[t._v("#")]),t._v(" A Warning")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),s("p",[t._v("The following fields do "),s("strong",[t._v("NOT")]),t._v(" accept validation unless using "),s("RouterLink",{attrs:{to:"/configuration/fields/validate.html#using-a-custom-validation"}},[t._v("validate_callback")]),t._v(".")],1),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/core-fields/button-set.html"}},[t._v("Button Set")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core-fields/checkbox.html"}},[t._v("Checkbox")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core-fields/date.html"}},[t._v("Date")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core-fields/image-select.html"}},[t._v("Image Select")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core-fields/radio.html"}},[t._v("Radio")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/core-fields/select.html"}},[t._v("Select")])],1)]),t._v(" "),s("p",[s("strong",[t._v("There may be others yet to be documented.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);