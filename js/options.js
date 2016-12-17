var options = [
    [
        {
            "description": "Use verbose rustfmt output",
            "example": "",
            "key": "verbose",
            "value": true
        },
        {
            "description": "Don't use verbose rustfmt output",
            "example": "",
            "key": "verbose",
            "value": false
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Reformat out of line modules",
            "example": "",
            "key": "skip_children",
            "value": true
        },
        {
            "description": "Don't reformat out of line modules",
            "example": "",
            "key": "skip_children",
            "value": false
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
            "value": '"SameLineWhere"'
        },
        {
            "description": "Braces on the next line (functions)",
            "example":
`fn main()
<span class='hl'>{</span>
    println!("Hello, world!");
}`,
            "key": "fn_brace_style",
            "value": '"AlwaysNextLine"'
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
            "value": '"SameLineWhere"'
        },
        {
            "description": "Braces on the next line (structs and enums)",
            "example":
`struct A
<span class='hl'>{</span>
    value: i32,
}`,
            "key": "item_brace_style",
            "value": '"AlwaysNextLine"'
        }
    ],
    /* ------------------------------------------------ */
    [
        {
            "description": "Empty function bodies on one line",
            "example":
`fn empty_fun() {<span class='hl'>}</span>`,
            "key": "fn_empty_single_line",
            "value": true
        },
        {
            "description": "Empty function bodies on two lines",
            "example":
`fn empty_fun() {
<span class='hl'>}</span>`,
            "key": "fn_empty_single_line",
            "value": false
        }
    ]
];