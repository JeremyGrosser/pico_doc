GNATdoc.Documentation = {
  "label": "RP.Flash",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Flash_Offset",
          "qualifier": "",
          "line": 18,
          "column": 9,
          "src": "srcs/rp-flash.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 18,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Flash_Offset",
                      "href": "docs/rp__flash___spec.html#L18C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "range"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "number",
                      "text": "0"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ".."
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Flash_Size"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "label": "Simple types"
    },
    {
      "entities": [
        {
          "label": "Erase",
          "qualifier": "",
          "line": 43,
          "column": 14,
          "src": "srcs/rp-flash.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 43,
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
                      "text": "Erase",
                      "href": "docs/rp__flash___spec.html#L43C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Offset",
                      "href": "docs/rp__flash___spec.html#L44C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Flash_Offset",
                      "href": "docs/rp__flash___spec.html#L18C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 45,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Length",
                      "href": "docs/rp__flash___spec.html#L45C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Natural"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 46,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " No_Inline, Linker_Section => \".time_critical\","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 47,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          Pre => (Length "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "mod"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Sector_Size) = 0"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 48,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " (Offset "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "mod"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Sector_Size) = 0"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 49,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Offset + Flash_Offset (Length) <= Flash_Offset'Last"
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
                  "text": "Erase Length bytes of flash starting at Offset bytes from\n"
                },
                {
                  "kind": "span",
                  "text": "the beginning of flash. Length and Offset must be multiples of 4096.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Offset",
              "line": 44,
              "column": 8,
              "type": {
                "label": "RP.Flash.Flash_Offset",
                "docHref": "docs/rp__flash___spec.html#L18C9"
              },
              "description": [
              ]
            },
            {
              "label": "Length",
              "line": 45,
              "column": 8,
              "type": {
                "label": "Natural"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "In_Flash",
          "qualifier": "",
          "line": 24,
          "column": 13,
          "src": "srcs/rp-flash.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 24,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "In_Flash",
                      "href": "docs/rp__flash___spec.html#L24C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 25,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Addr",
                      "href": "docs/rp__flash___spec.html#L25C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "System.Address"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 26,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Addr",
              "line": 25,
              "column": 8,
              "type": {
                "label": "Address"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Program",
          "qualifier": "",
          "line": 53,
          "column": 14,
          "src": "srcs/rp-flash.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 53,
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
                      "text": "Program",
                      "href": "docs/rp__flash___spec.html#L53C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 54,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Offset",
                      "href": "docs/rp__flash___spec.html#L54C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Flash_Offset",
                      "href": "docs/rp__flash___spec.html#L18C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 55,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Source",
                      "href": "docs/rp__flash___spec.html#L55C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "System.Address"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 56,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Length",
                      "href": "docs/rp__flash___spec.html#L56C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Natural"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 57,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " No_Inline, Linker_Section => \".time_critical\","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 58,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     Pre => (Length "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "mod"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Page_Size) = 0"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 59,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " (Offset "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "mod"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Page_Size) = 0"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 60,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Offset + Flash_Offset (Length) <= Flash_Offset'Last"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 61,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "not"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " In_Flash (Source)"
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
                  "text": "Program Length bytes of flash starting at Offset bytes from the beginning\n"
                },
                {
                  "kind": "span",
                  "text": "of flash using the Source buffer. Length must be a multiple of 256.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Offset",
              "line": 54,
              "column": 8,
              "type": {
                "label": "RP.Flash.Flash_Offset",
                "docHref": "docs/rp__flash___spec.html#L18C9"
              },
              "description": [
              ]
            },
            {
              "label": "Source",
              "line": 55,
              "column": 8,
              "type": {
                "label": "Address"
              },
              "description": [
              ]
            },
            {
              "label": "Length",
              "line": 56,
              "column": 8,
              "type": {
                "label": "Natural"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "To_Address",
          "qualifier": "",
          "line": 20,
          "column": 13,
          "src": "srcs/rp-flash.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 20,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "To_Address",
                      "href": "docs/rp__flash___spec.html#L20C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 21,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Offset",
                      "href": "docs/rp__flash___spec.html#L21C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Flash_Offset",
                      "href": "docs/rp__flash___spec.html#L18C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 22,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "System.Address"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Offset",
              "line": 21,
              "column": 8,
              "type": {
                "label": "RP.Flash.Flash_Offset",
                "docHref": "docs/rp__flash___spec.html#L18C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "To_Flash_Offset",
          "qualifier": "",
          "line": 28,
          "column": 13,
          "src": "srcs/rp-flash.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 28,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "To_Flash_Offset",
                      "href": "docs/rp__flash___spec.html#L28C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 29,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Addr",
                      "href": "docs/rp__flash___spec.html#L29C8"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "System.Address"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 30,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Flash_Offset",
                      "href": "docs/rp__flash___spec.html#L18C9"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 31,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Pre => In_Flash (Addr)"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Addr",
              "line": 29,
              "column": 8,
              "type": {
                "label": "Address"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Unique_Id",
          "qualifier": "",
          "line": 65,
          "column": 13,
          "src": "srcs/rp-flash.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 65,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Unique_Id",
                      "href": "docs/rp__flash___spec.html#L65C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 66,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "UInt64",
                      "href": "docs/hal___spec.html#L160C9"
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
                  "text": "Read the Unique Id (4Bh) from the flash chip\n"
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