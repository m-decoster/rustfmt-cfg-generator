/* file: options.js

Copyright 2016 The rustfmt-cfg-generator developers

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

/*
Contributing guidelines:

- Make sure all keys and values are present and correct.
- Use single and double quotes around string values.
- Make sure that for each option, the default choice is first.
- Use backticks for example code, to have multiline strings.
- For example code, make sure there is no superfluous indentation.
*/

var options = [
    [
        {
            "description": "Don't use verbose rustfmt output",
            "example": "",
            "key": "verbose",
            "value": false,
            "default": true
        },
        {
            "description": "Use verbose rustfmt output",
            "example": "",
            "key": "verbose",
            "value": true,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Don't reformat out of line modules",
            "example": "",
            "key": "skip_children",
            "value": false,
            "default": true
        },
        {
            "description": "Reformat out of line modules",
            "example": "",
            "key": "skip_children",
            "value": true,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Braces on the same line (functions)",
            "example":
`fn main() <span class='hl'>{</span>
    println!("Hello, world!");
}`,
            "key": "fn_brace_style",
            "value": '"SameLineWhere"',
            "default": true
        },
        {
            "description": "Braces on the next line (functions)",
            "example":
`fn main()
<span class='hl'>{</span>
    println!("Hello, world!");
}`,
            "key": "fn_brace_style",
            "value": '"AlwaysNextLine"',
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Braces on the same line (structs and enums)",
            "example":
`struct A <span class='hl'>{</span>
    value: i32,
}`,
            "key": "item_brace_style",
            "value": '"SameLineWhere"',
            "default": true
        },
        {
            "description": "Braces on the next line (structs and enums)",
            "example":
`struct A
<span class='hl'>{</span>
    value: i32,
}`,
            "key": "item_brace_style",
            "value": '"AlwaysNextLine"',
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Braces on the same line (if and else)",
            "example":
`if(x == 42) <span class='hl'>{</span>
    meaning_of_life = true;
}`,
            "key": "else_if_brace_style",
            "value": '"AlwaysSameLine"',
            "default": true
        },
        {
            "description": "Braces on the next line (if and else)",
            "example":
`if(x == 42)
<span class='hl'>{</span>
    meaning_of_life = true;
}`,
            "key": "else_if_brace_style",
            "value": '"AlwaysNextLine"',
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Braces on the same line (match/loop/for/while)",
            "example":
`loop <span class='hl'>{</span>
    println!("yes");
}`,
            "key": "control_brace_style",
            "value": '"AlwaysSameLine"',
            "default": true
        },
        {
            "description": "Braces on the next line (match/loop/for/while)",
            "example":
`loop
<span class='hl'>{</span>
    println!("yes");
}`,
            "key": "control_brace_style",
            "value": '"AlwaysNextLine"',
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Empty impl bodies on one line",
            "example":
`impl MyStruct {<span class='hl'>}</span>`,
            "key": "impl_empty_single_line",
            "value": true,
            "default": true
        },
        {
            "description": "Empty impl bodies on two lines",
            "example":
`impl MyStruct {
<span class='hl'>}</span>`,
            "key": "impl_empty_single_line",
            "value": false,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Empty function bodies on one line",
            "example":
`fn empty_fun() {<span class='hl'>}</span>`,
            "key": "fn_empty_single_line",
            "value": true,
            "default": true
        },
        {
            "description": "Empty function bodies on two lines",
            "example":
`fn empty_fun() {
<span class='hl'>}</span>`,
            "key": "fn_empty_single_line",
            "value": false,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Single-line functions on one line",
            "example":
`fn add_two(x: i32) -> i32 <span class='hl'>{ x + 2 }</span>`,
            "key": "fn_single_line",
            "value": false,
            "default": true
        },
        {
            "description": "Single-line functions as regular",
            "example":
`fn add_two(x: i32) -> i32 <span class='hl'>{
    x + 2
}</span>`,
            "key": "fn_single_line",
            "value": false,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Don't report TODO occurrences",
            "example": "",
            "key": "report_todo",
            "value": false,
            "default": true
        },
        {
            "description": "Report TODO occurrences",
            "example": "",
            "key": "report_todo",
            "value": false,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Don't report FIXME occurrences",
            "example": "",
            "key": "report_fixme",
            "value": false,
            "default": true
        },
        {
            "description": "Report FIXME occurrences",
            "example": "",
            "key": "report_fixme",
            "value": false,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Don't reorder imports alphabetically",
            "example":
`use <span class='hl'>some_module;</span>
use <span class='hl'>module_b;</span>`,
            "key": "reorder_imports",
            "value": false,
            "default": true
        },
        {
            "description": "Reorder imports alphabetically",
            "example":
`use <span class='hl'>module_b;</span>
use <span class='hl'>some_module;</span>`,
            "key": "reorder_imports",
            "value": true,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Don't reorder import names alphabetically",
            "example":
`use some_module::{<span class='hl'>B, A</span>};`,
            "key": "reorder_imported_names",
            "value": false,
            "default": true
        },
        {
            "description": "Reorder import names alphabetically",
            "example":
`use some_module::{<span class='hl'>A, B</span>};`,
            "key": "reorder_imported_names",
            "value": true,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Replace <code>/* */</code> by <code>//</code> where possible",
            "example":
`<span class='hl'>/*</span> Some comment <span class='hl'>*/</span>`,
            "key": "normalize_comments",
            "value": true,
            "default": true
        },
        {
            "description": "Don't replace <code>/* */</code> by <code>//</code>",
            "example":
`<span class='hl'>//</span> Some comment`,
            "key": "normalize_comments",
            "value": false,
            "default": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Don't replace <code>try!</code> with <code>?</code>",
            "example":
`<span class='hl'>try!(</span>do_something()<span class='hl'>)</span>.and_something_else();`,
            "key": "use_try_shorthand",
            "value": false,
            "default": true
        },
        {
            "description": "Replace <code>try!</code> with <code>?</code>",
            "example":
`do_something()<span class='hl'>?</span>.and_something_else();`,
            "key": "use_try_shorthand",
            "value": true,
            "default": false
        }
    ]
];