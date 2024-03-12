(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{626:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-the-redux-wp-filesystem-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-redux-wp-filesystem-proxy"}},[t._v("#")]),t._v(" Using the Redux WP_Filesystem Proxy")]),t._v(" "),a("p",[t._v("Redux has a WordPress filesystem proxy built in to help you read and write files that will pass Theme Check. These calls are available\nthe moment a Redux object has been loaded (your Redux config has been run).")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#getting-started"}},[t._v("Getting Started")])]),a("li",[a("a",{attrs:{href:"#chmod-file-permissions"}},[t._v("Chmod / File Permissions")])]),a("li",[a("a",{attrs:{href:"#possible-calls-arguments"}},[t._v("Possible Calls & Arguments.")]),a("ul",[a("li",[a("a",{attrs:{href:"#mkdir"}},[t._v("mkdir")])]),a("li",[a("a",{attrs:{href:"#copy"}},[t._v("copy")])]),a("li",[a("a",{attrs:{href:"#put-contents"}},[t._v("put_contents")])]),a("li",[a("a",{attrs:{href:"#get-contents"}},[t._v("get_contents")])]),a("li",[a("a",{attrs:{href:"#object"}},[t._v("object")])]),a("li",[a("a",{attrs:{href:"#unzip"}},[t._v("unzip")])])])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("First, you must get the Redux object. The easiest method is as follows:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Use your opt_name")]),t._v("\n")])])]),a("p",[t._v("Once the Redux object has been obtained, the filesystem is now available to use. It's easy to do.  Run the following call:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'action'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$args")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Below is a list of available commands and the arguments associated with each.")]),t._v(" "),a("h2",{attrs:{id:"chmod-file-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chmod-file-permissions"}},[t._v("#")]),t._v(" Chmod / File Permissions")]),t._v(" "),a("p",[t._v("By default, the WP_FileSystem API uses default values for chmod (read/write permissions). These are in the form of the\ndeclared FS_CHMOD_DIR for directories or FS_CHMOD_FILE for files. Do not worry about setting these values yourself.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you "),a("strong",[t._v("must")]),t._v(" override the default chmod settings, you may pass in a chmod argument for all actions except\nobject and unzip. To do so, pass a string or int: "),a("code",[t._v("0644")]),t._v(" as this argument value.")])]),t._v(" "),a("h2",{attrs:{id:"possible-calls-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#possible-calls-arguments"}},[t._v("#")]),t._v(" Possible Calls & Arguments.")]),t._v(" "),a("h3",{attrs:{id:"mkdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mkdir"}},[t._v("#")]),t._v(" "),a("code",[t._v("mkdir")])]),t._v(" "),a("p",[t._v("Creates a directory. It will even make multiple children directories even it if it doesn't exist.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Use your opt_name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"THE_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with path")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"mkdir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[t._v("#")]),t._v(" "),a("code",[t._v("copy")])]),t._v(" "),a("p",[t._v("Copy files from one location to another.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("required")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("destination")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("required")]),t._v(" "),a("td",[t._v("The destination file path.")])]),t._v(" "),a("tr",[a("td",[t._v("overwrite")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("optional")]),t._v(" "),a("td",[t._v("Overwrite the files if exist, or by default the WP_FileSystem will skip existing if the file exists.")])])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Use your opt_name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"THE_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with path")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$destination")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"DESTINATION_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with target/destination path")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'copy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'destination'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$destination")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with target/destination path")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"put-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put-contents"}},[t._v("#")]),t._v(" "),a("code",[t._v("put_contents")])]),t._v(" "),a("p",[t._v("The same as "),a("code",[t._v("file_put_contents")]),t._v(" in PHP, but uses the WordPress filesystem API. Writes the contents of a variable\nto file. This will override any file if it already exists.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("required")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("required")]),t._v(" "),a("td",[t._v("The content of the file.")])])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Use your opt_name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"THE_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with path")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contents")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"This is the content of the file."')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TODO - Replace with contents")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'put_contents'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contents")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-contents"}},[t._v("#")]),t._v(" "),a("code",[t._v("get_contents")])]),t._v(" "),a("p",[t._v("Retrieves the contents of a file. This command will attempt to use the WordPress filesystem first.\nHowever, if the file does not have the standard WordPress read permissions, it will fall back to "),a("code",[t._v("file_get_contents")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Use your opt_name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"THE_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with path")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file_contents")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'get_contents'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" "),a("code",[t._v("object")])]),t._v(" "),a("p",[t._v("Return a valid WordPress FileSystem API object.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Use your opt_name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'object'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"unzip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unzip"}},[t._v("#")]),t._v(" "),a("code",[t._v("unzip")])]),t._v(" "),a("p",[t._v("Unzips an existing zip file to a new location.")]),t._v(" "),a("h5",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("required")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("destination")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("required")]),t._v(" "),a("td",[t._v("The destination to unzip the zip file contents.")])])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Use your opt_name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"THE_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with path")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$destination")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"DESTINATION_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO - Replace with target/destination path")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'unzip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'destination'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$destination")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);