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
    ]
];