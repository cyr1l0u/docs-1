(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{449:function(t,s,e){t.exports=e.p+"assets/img/button_set.e1c5f873.png"},450:function(t){t.exports=JSON.parse('{"type":"button_set","name":"Button Set","description":null,"icon":null,"groups":{"Global":["id","type","title","desc","subtitle","class"],"Advanced":["attributes","data","compiler","output","output_variables","permissions","required","default","validate"]},"fields":{"id":{"name":"id","title":"ID","type":"input","inputType":"text","description":"","order":0},"title":{"name":"title","title":"Title","type":"input","inputType":"text","description":"","order":5},"subtitle":{"name":"subtitle","title":"Subtitle","type":"input","inputType":"text","description":"","order":10},"desc":{"name":"desc","title":"Desc","type":"input","inputType":"text","description":"","order":15},"class":{"name":"class","title":"Class","type":"input","inputType":"text","description":"","order":20},"compiler":{"name":"compiler","title":"Compiler","type":"bool","default":false,"order":25},"output":{"name":"output","title":"Output","fieldClasses":"full-width","formatter":"dynamic-type","properties":["background-color","color"],"type":"object","order":30},"permissions":{"type":"input","inputType":"text","name":"permissions","title":"Permissions","order":35},"required":{"name":"required","title":"Required","fieldClasses":"full-width","type":"array","description":"Field visibility requirements.","order":40},"options":{"type":"custom-object","formatter":"keyvalue","title":"Options","name":"options","newElementButtonLabel":"+ Add Option","default":{},"order":45},"default":{"type":"custom-object","formatter":"keyvalue","title":"Default","name":"default","order":50,"dependent":true,"dependencyType":"type","dependency":{"parent":"multi","status":[{"parentValue":true,"type":"custom-object","formatter":"keyvalue","typeof":"object","default":{}},{"parentValue":false,"type":"input","inputType":"text","formatter":"","typeof":"string","default":""}]}},"multiple":{"name":"multi","title":"Multi (Multi-Select)","type":"bool","order":55}}}')},539:function(t,s,e){"use strict";e.r(s);var a=e(450),n={data:function(){return{builder:a,defaults:{}}}},r=e(6),o=Object(r.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"button-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#button-set"}},[t._v("#")]),t._v(" Button Set")]),t._v(" "),a("p",[t._v("The button set gives you a button bar to set options. It can be useful when you want to group a number of options together in a more advanced radio or checkbox (multi argument, see below).")]),t._v(" "),a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[a("img",{attrs:{src:e(449),alt:""}})])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),a("li",[a("a",{attrs:{href:"#default-argument"}},[t._v("Default Argument")])]),a("li",[a("a",{attrs:{href:"#build-config"}},[t._v("Build Config")])]),a("li",[a("a",{attrs:{href:"#example-config"}},[t._v("Example Config")])]),a("li",[a("a",{attrs:{href:"#example-usage"}},[t._v("Example Usage")])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[a("div",{staticStyle:{width:"70px"}},[t._v("Default")])]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("button_set")])]),t._v(" "),a("td",[t._v("Value identifying the field type.")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Array of key pairs representing the individual ticks.")])]),t._v(" "),a("tr",[a("td",[t._v("default")]),t._v(" "),a("td",[t._v("string/int/array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("See "),a("a",{attrs:{href:"#default-argument"}},[t._v("Default Argument")]),t._v(" below.")])]),t._v(" "),a("tr",[a("td",[t._v("multi")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Flag to set the field to multi-select.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/arguments.html"}},[t._v("Global Field Arguments")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),a("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/output.html"}},[t._v("Using the "),a("code",[t._v("output")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),a("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),a("code",[t._v("required")]),t._v(" Argument")])],1)])]),t._v(" "),a("h2",{attrs:{id:"default-argument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-argument"}},[t._v("#")]),t._v(" Default Argument")]),t._v(" "),a("p",[t._v("The value of the default option will depend on whether the "),a("code",[t._v("multi")]),t._v(" argument is set to true.  By default, the\n"),a("code",[t._v("multi")]),t._v(" argument is set to false.  In this case, the "),a("code",[t._v("default")]),t._v(" argument accepts a string or int value representing the\nkey value from the "),a("code",[t._v("options")]),t._v(" argument to set as selected.  When "),a("code",[t._v("multi")]),t._v(" is set to true, the "),a("code",[t._v("default")]),t._v(" argument accepts\nan array of values representing the key of the option from "),a("code",[t._v("options")]),t._v(" to set as selected.")]),t._v(" "),a("h2",{attrs:{id:"build-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-config"}},[t._v("#")]),t._v(" Build Config")]),t._v(" "),a("builder",{attrs:{builder_json:t.builder,builder_defaults:t.defaults}}),t._v(" "),a("h2",{attrs:{id:"example-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-config"}},[t._v("#")]),t._v(" Example Config")]),t._v(" "),a("h4",{attrs:{id:"single-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-select"}},[t._v("#")]),t._v(" Single select")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'button-set-single'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'button_set'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Button Set, Single'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-project-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'No validation can be done on this field type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-project-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is the description field, again good for additional info.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-project-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Must provide key => value pairs for options")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'options'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Opt 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Opt 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Opt 3'")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"multi-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-select"}},[t._v("#")]),t._v(" Multi select")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'button-set-multi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'button_set'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Button Set, Single'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-project-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'No validation can be done on this field type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-project-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is the description field, again good for additional info.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-project-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'multi'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Must provide key => value pairs for options")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'options'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Opt 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Opt 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Opt 3'")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("This example in based on the code above. Be sure to change "),a("code",[t._v("$redux_demo")]),t._v(" to the value you specified in your "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt_name"}},[t._v("opt_name")]),t._v(" argument.")],1),t._v(" "),a("h4",{attrs:{id:"single"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single"}},[t._v("#")]),t._v(" Single")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'button-set-single'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"multi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi"}},[t._v("#")]),t._v(" Multi")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("empty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'button-set-multi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Due to the way in which data is saved to the database, it is strongly recommended performing a PHP empty() and/or is_array() check when retrieving the data from this field via a foreach() loop.")])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);