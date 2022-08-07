GNATdoc.Documentation = {
  "label": "Cortex_M.Hints",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Send_Event",
          "qualifier": "",
          "line": 44,
          "column": 14,
          "src": "srcs/cortex_m-hints.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Send_Event",
                      "href": "docs/cortex_m__hints___spec.html#L44C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Inline"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "A6.7.57 SEV\n"
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Causes an event to be signaled to all CPUs within a multiprocessor\n"
                },
                {
                  "kind": "span",
                  "text": "system.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Wait_For_Event",
          "qualifier": "",
          "line": 50,
          "column": 14,
          "src": "srcs/cortex_m-hints.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 50,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Wait_For_Event",
                      "href": "docs/cortex_m__hints___spec.html#L50C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Inline"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "A6.7.75 WFE\n"
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Permits the processor to enter a low-power state until one of a number\n"
                },
                {
                  "kind": "span",
                  "text": "of events occurs, including events signaled by the SEV instruction on\n"
                },
                {
                  "kind": "span",
                  "text": "any processor in a multiprocessor system.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Wait_For_Interrupt",
          "qualifier": "",
          "line": 57,
          "column": 14,
          "src": "srcs/cortex_m-hints.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 57,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Wait_For_Interrupt",
                      "href": "docs/cortex_m__hints___spec.html#L57C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Inline"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "A6.7.76 WFI\n"
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Suspends execution until one of a number of events occurs.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Yield",
          "qualifier": "",
          "line": 62,
          "column": 14,
          "src": "srcs/cortex_m-hints.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 62,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Yield",
                      "href": "docs/cortex_m__hints___spec.html#L62C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Inline"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "A6.7.77 YIELD\n"
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Enables software with a multithreading capability to indicate to the\n"
                },
                {
                  "kind": "span",
                  "text": "hardware that it is performing a task, for example a spinlock, that\n"
                },
                {
                  "kind": "span",
                  "text": "could be swapped out to improve overall system performance.  Hardware\n"
                },
                {
                  "kind": "span",
                  "text": "can use this hint to suspend and resume multiple code threads if it\n"
                },
                {
                  "kind": "span",
                  "text": "supports the capability.\n"
                }
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};