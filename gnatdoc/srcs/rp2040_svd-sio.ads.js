GNATdoc.SourceFile = {
  "kind": "code",
  "children": [
    {
      "kind": "line",
      "number": 1,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "pragma"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Style_Checks"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Off"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ")"
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
      "number": 2,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 3,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Copyright (c) 2020 Raspberry Pi (Trading) Ltd."
        }
      ]
    },
    {
      "kind": "line",
      "number": 4,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--"
        }
      ]
    },
    {
      "kind": "line",
      "number": 5,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  SPDX-License-Identifier: BSD-3-Clause"
        }
      ]
    },
    {
      "kind": "line",
      "number": 6,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 7,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  This spec has been automatically generated from rp2040.svd"
        }
      ]
    },
    {
      "kind": "line",
      "number": 8,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 9,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "pragma"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Restrictions"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "No_Elaboration_Code"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ")"
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
      "number": 10,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 11,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL"
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
      "number": 12,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "with"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "System"
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
      "number": 13,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 14,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Single-cycle IO block\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 15,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--          Provides core-local and inter-core hardware for the two processors,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 16,
      "children": [
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  with single-cycle access."
        }
      ]
    },
    {
      "kind": "line",
      "number": 17,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "package"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "RP2040_SVD.SIO",
          "href": "docs/rp2040_svd__sio___spec.html#L17C20"
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
        }
      ]
    },
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
          "text": "pragma"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Preelaborate"
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
      "number": 19,
      "children": [
      ]
    },
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
          "cssClass": "comment",
          "text": "---------------"
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
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "-- Registers --"
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
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "---------------"
        }
      ]
    },
    {
      "kind": "line",
      "number": 23,
      "children": [
      ]
    },
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
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_IN_GPIO_IN_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L24C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 25,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 26,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Input value for GPIO pins"
        }
      ]
    },
    {
      "kind": "line",
      "number": 27,
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
          "text": "GPIO_IN_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L27C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 28,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Input value for GPIO0...29"
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
          "text": "GPIO_IN",
          "href": "docs/rp2040_svd__sio___spec.html#L29C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "text": "GPIO_IN_GPIO_IN_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L24C12"
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
      "number": 30,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
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
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L31C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
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
      "number": 32,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 33,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 34,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 35,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 36,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_IN_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L27C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 37,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_IN"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 38,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 39,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 40,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 41,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_IN_GPIO_HI_IN_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L41C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 42,
      "children": [
      ]
    },
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
          "cssClass": "comment",
          "text": "--  Input value for QSPI pins"
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
          "text": "GPIO_HI_IN_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L44C9"
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
          "text": "record"
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
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Input value on QSPI IO in order 0..5: SCLK, SSn, SD0, SD1,"
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
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  SD2, SD3"
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
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_IN",
          "href": "docs/rp2040_svd__sio___spec.html#L47C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "GPIO_HI_IN_GPIO_HI_IN_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L41C12"
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
      "number": 48,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
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
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L49C7"
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
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
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 51,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 52,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 53,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 54,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_IN_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L44C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_IN"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 58,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 59,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_GPIO_OUT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L59C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 60,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 61,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value"
        }
      ]
    },
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
          "text": "GPIO_OUT_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L62C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 63,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Set output level (1/0 -> high/low) for GPIO0...29.\\n Reading back"
        }
      ]
    },
    {
      "kind": "line",
      "number": 64,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  gives the last value written, NOT the input value from the pins.\\n If"
        }
      ]
    },
    {
      "kind": "line",
      "number": 65,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  core 0 and core 1 both write to GPIO_OUT simultaneously (or to a"
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
          "cssClass": "comment",
          "text": "--  SET/CLR/XOR alias),\\n the result is as though the write from core 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 67,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  took place first,\\n and the write from core 1 was then applied to"
        }
      ]
    },
    {
      "kind": "line",
      "number": 68,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  that intermediate result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 69,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT",
          "href": "docs/rp2040_svd__sio___spec.html#L69C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "GPIO_OUT_GPIO_OUT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L59C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 70,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 71,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L71C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 72,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 73,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 74,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 75,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 76,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L62C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 77,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 78,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 79,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 80,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 81,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_SET_GPIO_OUT_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L81C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 82,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 83,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 84,
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
          "text": "GPIO_OUT_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L84C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 85,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-set on GPIO_OUT, i.e. `GPIO_OUT |= wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 86,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L86C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "GPIO_OUT_SET_GPIO_OUT_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L81C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 87,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 88,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L88C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 89,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 90,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 91,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 92,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 93,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L84C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 94,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_SET"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 95,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 96,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 97,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 98,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_CLR_GPIO_OUT_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L98C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 99,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 100,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 101,
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
          "text": "GPIO_OUT_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L101C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 102,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-clear on GPIO_OUT, i.e. `GPIO_OUT &= ~wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 103,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L103C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "GPIO_OUT_CLR_GPIO_OUT_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L98C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 104,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 105,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L105C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 106,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 107,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 108,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 109,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 110,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L101C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 111,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_CLR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 112,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 113,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 114,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 115,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_XOR_GPIO_OUT_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L115C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 116,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 117,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 118,
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
          "text": "GPIO_OUT_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L118C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 119,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bitwise XOR on GPIO_OUT, i.e. `GPIO_OUT ^= wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 120,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L120C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "GPIO_OUT_XOR_GPIO_OUT_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L115C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 121,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 122,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L122C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 123,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 124,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 125,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 126,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 127,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L118C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 128,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_XOR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 129,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 130,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 131,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 132,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_GPIO_OE_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L132C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 133,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 134,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable"
        }
      ]
    },
    {
      "kind": "line",
      "number": 135,
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
          "text": "GPIO_OE_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L135C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 136,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Set output enable (1/0 -> output/input) for GPIO0...29.\\n Reading"
        }
      ]
    },
    {
      "kind": "line",
      "number": 137,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  back gives the last value written.\\n If core 0 and core 1 both write"
        }
      ]
    },
    {
      "kind": "line",
      "number": 138,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  to GPIO_OE simultaneously (or to a SET/CLR/XOR alias),\\n the result"
        }
      ]
    },
    {
      "kind": "line",
      "number": 139,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  is as though the write from core 0 took place first,\\n and the write"
        }
      ]
    },
    {
      "kind": "line",
      "number": 140,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  from core 1 was then applied to that intermediate result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 141,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE",
          "href": "docs/rp2040_svd__sio___spec.html#L141C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "text": "GPIO_OE_GPIO_OE_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L132C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 142,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 143,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L143C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 144,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 145,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 146,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 147,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 148,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L135C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 149,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 150,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 151,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 152,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 153,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_SET_GPIO_OE_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L153C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 154,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 155,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 156,
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
          "text": "GPIO_OE_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L156C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 157,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-set on GPIO_OE, i.e. `GPIO_OE |= wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 158,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L158C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "GPIO_OE_SET_GPIO_OE_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L153C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 159,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 160,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L160C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 161,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 162,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 163,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 164,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 165,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L156C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 166,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_SET"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 167,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 168,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 169,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 170,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_CLR_GPIO_OE_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L170C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 171,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 172,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 173,
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
          "text": "GPIO_OE_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L173C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 174,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-clear on GPIO_OE, i.e. `GPIO_OE &= ~wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 175,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L175C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "GPIO_OE_CLR_GPIO_OE_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L170C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 176,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 177,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L177C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 178,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 179,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 180,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 181,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 182,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L173C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 183,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_CLR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 184,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 185,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 186,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 187,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_XOR_GPIO_OE_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L187C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 188,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 189,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 190,
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
          "text": "GPIO_OE_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L190C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 191,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bitwise XOR on GPIO_OE, i.e. `GPIO_OE ^= wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 192,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L192C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "GPIO_OE_XOR_GPIO_OE_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L187C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 193,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 194,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31",
          "href": "docs/rp2040_svd__sio___spec.html#L194C7"
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
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 195,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 196,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 197,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 198,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 199,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L190C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 200,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_XOR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "29"
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
      "number": 201,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_30_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "30"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 202,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 203,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 204,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_GPIO_HI_OUT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L204C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 205,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 206,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value"
        }
      ]
    },
    {
      "kind": "line",
      "number": 207,
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
          "text": "GPIO_HI_OUT_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L207C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 208,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Set output level (1/0 -> high/low) for QSPI IO0...5.\\n Reading back"
        }
      ]
    },
    {
      "kind": "line",
      "number": 209,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  gives the last value written, NOT the input value from the pins.\\n If"
        }
      ]
    },
    {
      "kind": "line",
      "number": 210,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  core 0 and core 1 both write to GPIO_HI_OUT simultaneously (or to a"
        }
      ]
    },
    {
      "kind": "line",
      "number": 211,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  SET/CLR/XOR alias),\\n the result is as though the write from core 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 212,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  took place first,\\n and the write from core 1 was then applied to"
        }
      ]
    },
    {
      "kind": "line",
      "number": 213,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  that intermediate result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 214,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT",
          "href": "docs/rp2040_svd__sio___spec.html#L214C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "GPIO_HI_OUT_GPIO_HI_OUT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L204C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 215,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 216,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L216C7"
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 217,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 218,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 219,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 220,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 221,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L207C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 222,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 223,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 224,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 225,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 226,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_SET_GPIO_HI_OUT_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L226C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 227,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 228,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 229,
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
          "text": "GPIO_HI_OUT_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L229C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 230,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-set on GPIO_HI_OUT, i.e. `GPIO_HI_OUT |= wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 231,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L231C7"
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
          "text": "GPIO_HI_OUT_SET_GPIO_HI_OUT_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L226C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 232,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 233,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L233C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 234,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 235,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 236,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 237,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 238,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L229C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 239,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_SET"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 240,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 241,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 242,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 243,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_CLR_GPIO_HI_OUT_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L243C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 244,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 245,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 246,
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
          "text": "GPIO_HI_OUT_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L246C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 247,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-clear on GPIO_HI_OUT, i.e. `GPIO_HI_OUT &="
        }
      ]
    },
    {
      "kind": "line",
      "number": 248,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  ~wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 249,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L249C7"
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
          "text": "GPIO_HI_OUT_CLR_GPIO_HI_OUT_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L243C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 250,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 251,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L251C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 252,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 253,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 254,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 255,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 256,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L246C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 257,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_CLR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 258,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 259,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 260,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 261,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_XOR_GPIO_HI_OUT_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L261C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 262,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 263,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 264,
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
          "text": "GPIO_HI_OUT_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L264C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 265,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bitwise XOR on GPIO_HI_OUT, i.e. `GPIO_HI_OUT ^="
        }
      ]
    },
    {
      "kind": "line",
      "number": 266,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 267,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L267C7"
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
          "text": "GPIO_HI_OUT_XOR_GPIO_HI_OUT_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L261C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 268,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 269,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L269C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 270,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 271,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 272,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 273,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 274,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L264C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 275,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_XOR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 276,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 277,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 278,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 279,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_GPIO_HI_OE_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L279C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 280,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 281,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable"
        }
      ]
    },
    {
      "kind": "line",
      "number": 282,
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
          "text": "GPIO_HI_OE_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L282C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 283,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Set output enable (1/0 -> output/input) for QSPI IO0...5.\\n Reading"
        }
      ]
    },
    {
      "kind": "line",
      "number": 284,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  back gives the last value written.\\n If core 0 and core 1 both write"
        }
      ]
    },
    {
      "kind": "line",
      "number": 285,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  to GPIO_HI_OE simultaneously (or to a SET/CLR/XOR alias),\\n the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 286,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  result is as though the write from core 0 took place first,\\n and the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 287,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  write from core 1 was then applied to that intermediate result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 288,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE",
          "href": "docs/rp2040_svd__sio___spec.html#L288C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "GPIO_HI_OE_GPIO_HI_OE_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L279C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 289,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 290,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L290C7"
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 291,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 292,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 293,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 294,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 295,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L282C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 296,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 297,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 298,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 299,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 300,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_SET_GPIO_HI_OE_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L300C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 301,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 302,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 303,
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
          "text": "GPIO_HI_OE_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L303C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 304,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-set on GPIO_HI_OE, i.e. `GPIO_HI_OE |= wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 305,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L305C7"
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
          "text": "GPIO_HI_OE_SET_GPIO_HI_OE_SET_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L300C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 306,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 307,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L307C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 308,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 309,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 310,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 311,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 312,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L303C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 313,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_SET"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 314,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 315,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 316,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 317,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_CLR_GPIO_HI_OE_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L317C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 318,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 319,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 320,
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
          "text": "GPIO_HI_OE_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L320C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 321,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bit-clear on GPIO_HI_OE, i.e. `GPIO_HI_OE &="
        }
      ]
    },
    {
      "kind": "line",
      "number": 322,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  ~wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 323,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L323C7"
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
          "text": "GPIO_HI_OE_CLR_GPIO_HI_OE_CLR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L317C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 324,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 325,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L325C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 326,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 327,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 328,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 329,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 330,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L320C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 331,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_CLR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 332,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 333,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 334,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 335,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_XOR_GPIO_HI_OE_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L335C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
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
      "number": 336,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 337,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 338,
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
          "text": "GPIO_HI_OE_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L338C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 339,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Perform an atomic bitwise XOR on GPIO_HI_OE, i.e. `GPIO_HI_OE ^="
        }
      ]
    },
    {
      "kind": "line",
      "number": 340,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  wdata`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 341,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L341C7"
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
          "text": "GPIO_HI_OE_XOR_GPIO_HI_OE_XOR_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L335C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 342,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 343,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31",
          "href": "docs/rp2040_svd__sio___spec.html#L343C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "text": "HAL.UInt26",
          "href": "docs/hal___spec.html#L85C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 344,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 345,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 346,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 347,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 348,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L338C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 349,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_XOR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "5"
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
      "number": 350,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_6_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "6"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 351,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 352,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 353,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Status register for inter-core FIFOs (mailboxes).\\n There is one FIFO in"
        }
      ]
    },
    {
      "kind": "line",
      "number": 354,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the core 0 -> core 1 direction, and one core 1 -> core 0. Both are 32"
        }
      ]
    },
    {
      "kind": "line",
      "number": 355,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  bits wide and 8 words deep.\\n Core 0 can see the read side of the 1->0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 356,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FIFO (RX), and the write side of 0->1 FIFO (TX).\\n Core 1 can see the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 357,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  read side of the 0->1 FIFO (RX), and the write side of 1->0 FIFO (TX).\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 358,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The SIO IRQ for each core is the logical OR of the VLD, WOF and ROE"
        }
      ]
    },
    {
      "kind": "line",
      "number": 359,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  fields of its FIFO_ST register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 360,
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
          "text": "FIFO_ST_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L360C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 361,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Value is 1 if this core's RX FIFO is not empty (i.e. if"
        }
      ]
    },
    {
      "kind": "line",
      "number": 362,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FIFO_RD is valid)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 363,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "VLD",
          "href": "docs/rp2040_svd__sio___spec.html#L363C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 364,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Value is 1 if this core's TX FIFO is not full (i.e. if"
        }
      ]
    },
    {
      "kind": "line",
      "number": 365,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FIFO_WR is ready for more data)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 366,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "RDY",
          "href": "docs/rp2040_svd__sio___spec.html#L366C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "True"
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
      "number": 367,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Write data bit of one shall clear (set to zero) the corresponding bit"
        }
      ]
    },
    {
      "kind": "line",
      "number": 368,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  in the field. Sticky flag indicating the TX FIFO was written when"
        }
      ]
    },
    {
      "kind": "line",
      "number": 369,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  full. This write was ignored by the FIFO."
        }
      ]
    },
    {
      "kind": "line",
      "number": 370,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "WOF",
          "href": "docs/rp2040_svd__sio___spec.html#L370C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 371,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Write data bit of one shall clear (set to zero) the corresponding bit"
        }
      ]
    },
    {
      "kind": "line",
      "number": 372,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  in the field. Sticky flag indicating the RX FIFO was read when empty."
        }
      ]
    },
    {
      "kind": "line",
      "number": 373,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  This read was ignored by the FIFO."
        }
      ]
    },
    {
      "kind": "line",
      "number": 374,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ROE",
          "href": "docs/rp2040_svd__sio___spec.html#L374C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 375,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 376,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_4_31",
          "href": "docs/rp2040_svd__sio___spec.html#L376C7"
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
          "text": "HAL.UInt28",
          "href": "docs/hal___spec.html#L89C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 377,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 378,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 379,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 380,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 381,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_ST_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L360C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 382,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "VLD"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "0"
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
      "number": 383,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "RDY"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "1"
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
          "cssClass": "number",
          "text": "1"
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
      "number": 384,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "WOF"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "2"
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
          "cssClass": "number",
          "text": "2"
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
      "number": 385,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ROE"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "3"
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
          "cssClass": "number",
          "text": "3"
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
      "number": 386,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_4_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "4"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 387,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 388,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 389,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control and status register for divider."
        }
      ]
    },
    {
      "kind": "line",
      "number": 390,
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
          "text": "DIV_CSR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L390C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 391,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Reads as 0 when a calculation is in progress, 1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 392,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  otherwise.\\n Writing an operand (xDIVIDEND, xDIVISOR) will"
        }
      ]
    },
    {
      "kind": "line",
      "number": 393,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  immediately start a new calculation, no\\n matter if one is already in"
        }
      ]
    },
    {
      "kind": "line",
      "number": 394,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  progress.\\n Writing to a result register will immediately terminate"
        }
      ]
    },
    {
      "kind": "line",
      "number": 395,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  any in-progress calculation\\n and set the READY and DIRTY flags."
        }
      ]
    },
    {
      "kind": "line",
      "number": 396,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "READY",
          "href": "docs/rp2040_svd__sio___spec.html#L396C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "text": "Boolean"
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
      "number": 397,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Changes to 1 when any register is written, and back to 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 398,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  when QUOTIENT is read.\\n Software can use this flag to make"
        }
      ]
    },
    {
      "kind": "line",
      "number": 399,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  save/restore more efficient (skip if not DIRTY).\\n If the flag is"
        }
      ]
    },
    {
      "kind": "line",
      "number": 400,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  used in this way, it's recommended to either read QUOTIENT only,\\n or"
        }
      ]
    },
    {
      "kind": "line",
      "number": 401,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  REMAINDER and then QUOTIENT, to prevent data loss on context switch."
        }
      ]
    },
    {
      "kind": "line",
      "number": 402,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIRTY",
          "href": "docs/rp2040_svd__sio___spec.html#L402C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "text": "Boolean"
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
      "number": 403,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 404,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_2_31",
          "href": "docs/rp2040_svd__sio___spec.html#L404C7"
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
          "text": "HAL.UInt30",
          "href": "docs/hal___spec.html#L93C9"
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
      "number": 405,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 406,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 407,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 408,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 409,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_CSR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L390C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 410,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "READY"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "0"
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
      "number": 411,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIRTY"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "1"
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
          "cssClass": "number",
          "text": "1"
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
      "number": 412,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_2_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "2"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 413,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 414,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 415,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L415C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 416,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L416C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 417,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L417C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 418,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L418C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
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
      "number": 419,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 420,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  INTERP0_CTRL_LANE0_OVERF array"
        }
      ]
    },
    {
      "kind": "line",
      "number": 421,
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
          "text": "INTERP0_CTRL_LANE0_OVERF_Field_Array",
          "href": "docs/rp2040_svd__sio___spec.html#L421C9"
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
          "text": "array"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
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
          "cssClass": "number",
          "text": "2"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ")"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "of"
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
        }
      ]
    },
    {
      "kind": "line",
      "number": 422,
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
          "text": " Component_Size => 1, Size => 3"
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
      "number": 423,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 424,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Type definition for INTERP0_CTRL_LANE0_OVERF"
        }
      ]
    },
    {
      "kind": "line",
      "number": 425,
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
          "text": "INTERP0_CTRL_LANE0_OVERF_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L425C9"
        }
      ]
    },
    {
      "kind": "line",
      "number": 426,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "As_Array",
          "href": "docs/rp2040_svd__sio___spec.html#L426C7"
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 427,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 428,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "case"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "As_Array"
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
        }
      ]
    },
    {
      "kind": "line",
      "number": 429,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "when"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        }
      ]
    },
    {
      "kind": "line",
      "number": 430,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  OVERF as a value"
        }
      ]
    },
    {
      "kind": "line",
      "number": 431,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Val",
          "href": "docs/rp2040_svd__sio___spec.html#L431C13"
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
          "text": "HAL.UInt3",
          "href": "docs/hal___spec.html#L41C9"
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
      "number": 432,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "when"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "True"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        }
      ]
    },
    {
      "kind": "line",
      "number": 433,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  OVERF as an array"
        }
      ]
    },
    {
      "kind": "line",
      "number": 434,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Arr",
          "href": "docs/rp2040_svd__sio___spec.html#L434C13"
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
          "text": "INTERP0_CTRL_LANE0_OVERF_Field_Array",
          "href": "docs/rp2040_svd__sio___spec.html#L421C9"
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
      "number": 435,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "case"
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
      "number": 436,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 437,
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
          "text": " Unchecked_Union, Size => 3"
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
      "number": 438,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 439,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0_OVERF_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L425C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 440,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Val"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "2"
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
      "number": 441,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Arr"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "2"
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
      "number": 442,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 443,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 444,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 445,
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
          "text": "INTERP0_CTRL_LANE0_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L445C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 446,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Logical right-shift applied to accumulator before masking"
        }
      ]
    },
    {
      "kind": "line",
      "number": 447,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT",
          "href": "docs/rp2040_svd__sio___spec.html#L447C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "INTERP0_CTRL_LANE0_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L415C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 448,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The least-significant bit allowed to pass by the mask (inclusive)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 449,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB",
          "href": "docs/rp2040_svd__sio___spec.html#L449C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP0_CTRL_LANE0_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L416C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 450,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The most-significant bit allowed to pass by the mask (inclusive)\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 451,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Setting MSB < LSB may cause chip to turn inside-out"
        }
      ]
    },
    {
      "kind": "line",
      "number": 452,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L452C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP0_CTRL_LANE0_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L417C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 453,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If SIGNED is set, the shifted and masked accumulator value is"
        }
      ]
    },
    {
      "kind": "line",
      "number": 454,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  sign-extended to 32 bits\\n before adding to BASE0, and LANE0 PEEK/POP"
        }
      ]
    },
    {
      "kind": "line",
      "number": 455,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  appear extended to 32 bits when read by processor."
        }
      ]
    },
    {
      "kind": "line",
      "number": 456,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED",
          "href": "docs/rp2040_svd__sio___spec.html#L456C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 457,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's accumulator into this lane's shift +"
        }
      ]
    },
    {
      "kind": "line",
      "number": 458,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mask hardware.\\n Takes effect even if ADD_RAW is set (the CROSS_INPUT"
        }
      ]
    },
    {
      "kind": "line",
      "number": 459,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mux is before the shift+mask bypass)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 460,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT",
          "href": "docs/rp2040_svd__sio___spec.html#L460C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 461,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's result into this lane's accumulator on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 462,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  POP."
        }
      ]
    },
    {
      "kind": "line",
      "number": 463,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT",
          "href": "docs/rp2040_svd__sio___spec.html#L463C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 464,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, mask + shift is bypassed for LANE0 result. This does not affect"
        }
      ]
    },
    {
      "kind": "line",
      "number": 465,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FULL result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 466,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW",
          "href": "docs/rp2040_svd__sio___spec.html#L466C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 467,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  ORed into bits 29:28 of the lane result presented to the processor on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 468,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the bus.\\n No effect on the internal 32-bit datapath. Handy for using"
        }
      ]
    },
    {
      "kind": "line",
      "number": 469,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  a lane to generate sequence\\n of pointers into flash or SRAM."
        }
      ]
    },
    {
      "kind": "line",
      "number": 470,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L470C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "text": "INTERP0_CTRL_LANE0_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L418C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 471,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Only present on INTERP0 on each core. If BLEND mode is enabled:\\n -"
        }
      ]
    },
    {
      "kind": "line",
      "number": 472,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  LANE1 result is a linear interpolation between BASE0 and BASE1,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 473,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  controlled\\n by the 8 LSBs of lane 1 shift and mask value (a"
        }
      ]
    },
    {
      "kind": "line",
      "number": 474,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  fractional number between\\n 0 and 255/256ths)\\n - LANE0 result does"
        }
      ]
    },
    {
      "kind": "line",
      "number": 475,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  not have BASE0 added (yields only the 8 LSBs of lane 1 shift+mask"
        }
      ]
    },
    {
      "kind": "line",
      "number": 476,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value)\\n - FULL result does not have lane 1 shift+mask value added"
        }
      ]
    },
    {
      "kind": "line",
      "number": 477,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  (BASE2 + lane 0 shift+mask)\\n LANE1 SIGNED flag controls whether the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 478,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  interpolation is signed or unsigned."
        }
      ]
    },
    {
      "kind": "line",
      "number": 479,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "BLEND",
          "href": "docs/rp2040_svd__sio___spec.html#L479C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 480,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 481,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_22_22",
          "href": "docs/rp2040_svd__sio___spec.html#L481C7"
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
          "text": "HAL.Bit",
          "href": "docs/hal___spec.html#L37C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 482,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Indicates if any masked-off MSBs in ACCUM0 are set."
        }
      ]
    },
    {
      "kind": "line",
      "number": 483,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "OVERF",
          "href": "docs/rp2040_svd__sio___spec.html#L483C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "INTERP0_CTRL_LANE0_OVERF_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L425C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        }
      ]
    },
    {
      "kind": "line",
      "number": 484,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "                        "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "As_Array"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ","
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Val"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ")"
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
      "number": 485,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 486,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_26_31",
          "href": "docs/rp2040_svd__sio___spec.html#L486C7"
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
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 487,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 488,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 489,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 490,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 491,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L445C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 492,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "4"
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
      "number": 493,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "5"
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
          "cssClass": "number",
          "text": "9"
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
      "number": 494,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "10"
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
          "cssClass": "number",
          "text": "14"
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
      "number": 495,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "15"
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
          "cssClass": "number",
          "text": "15"
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
      "number": 496,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "16"
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
          "cssClass": "number",
          "text": "16"
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
      "number": 497,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "17"
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
          "cssClass": "number",
          "text": "17"
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
      "number": 498,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "18"
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
          "cssClass": "number",
          "text": "18"
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
      "number": 499,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "19"
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
          "cssClass": "number",
          "text": "20"
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
      "number": 500,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "BLEND"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "21"
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
          "cssClass": "number",
          "text": "21"
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
      "number": 501,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_22_22"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "22"
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
          "cssClass": "number",
          "text": "22"
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
      "number": 502,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "OVERF",
          "href": "docs/rp2040_svd__sio___spec.html#L483C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "23"
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
          "cssClass": "number",
          "text": "25"
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
      "number": 503,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_26_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "26"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 504,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 505,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 506,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L506C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 507,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L507C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 508,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L508C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 509,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L509C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
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
      "number": 510,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 511,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 512,
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
          "text": "INTERP0_CTRL_LANE1_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L512C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 513,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Logical right-shift applied to accumulator before masking"
        }
      ]
    },
    {
      "kind": "line",
      "number": 514,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT",
          "href": "docs/rp2040_svd__sio___spec.html#L514C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "INTERP0_CTRL_LANE1_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L506C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 515,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The least-significant bit allowed to pass by the mask (inclusive)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 516,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB",
          "href": "docs/rp2040_svd__sio___spec.html#L516C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP0_CTRL_LANE1_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L507C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 517,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The most-significant bit allowed to pass by the mask (inclusive)\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 518,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Setting MSB < LSB may cause chip to turn inside-out"
        }
      ]
    },
    {
      "kind": "line",
      "number": 519,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L519C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP0_CTRL_LANE1_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L508C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 520,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If SIGNED is set, the shifted and masked accumulator value is"
        }
      ]
    },
    {
      "kind": "line",
      "number": 521,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  sign-extended to 32 bits\\n before adding to BASE1, and LANE1 PEEK/POP"
        }
      ]
    },
    {
      "kind": "line",
      "number": 522,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  appear extended to 32 bits when read by processor."
        }
      ]
    },
    {
      "kind": "line",
      "number": 523,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED",
          "href": "docs/rp2040_svd__sio___spec.html#L523C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 524,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's accumulator into this lane's shift +"
        }
      ]
    },
    {
      "kind": "line",
      "number": 525,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mask hardware.\\n Takes effect even if ADD_RAW is set (the CROSS_INPUT"
        }
      ]
    },
    {
      "kind": "line",
      "number": 526,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mux is before the shift+mask bypass)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 527,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT",
          "href": "docs/rp2040_svd__sio___spec.html#L527C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 528,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's result into this lane's accumulator on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 529,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  POP."
        }
      ]
    },
    {
      "kind": "line",
      "number": 530,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT",
          "href": "docs/rp2040_svd__sio___spec.html#L530C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 531,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, mask + shift is bypassed for LANE1 result. This does not affect"
        }
      ]
    },
    {
      "kind": "line",
      "number": 532,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FULL result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 533,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW",
          "href": "docs/rp2040_svd__sio___spec.html#L533C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 534,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  ORed into bits 29:28 of the lane result presented to the processor on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 535,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the bus.\\n No effect on the internal 32-bit datapath. Handy for using"
        }
      ]
    },
    {
      "kind": "line",
      "number": 536,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  a lane to generate sequence\\n of pointers into flash or SRAM."
        }
      ]
    },
    {
      "kind": "line",
      "number": 537,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L537C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "text": "INTERP0_CTRL_LANE1_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L509C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 538,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 539,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_21_31",
          "href": "docs/rp2040_svd__sio___spec.html#L539C7"
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
          "text": "HAL.UInt11",
          "href": "docs/hal___spec.html#L56C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 540,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 541,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 542,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 543,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 544,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L512C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 545,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "4"
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
      "number": 546,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "5"
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
          "cssClass": "number",
          "text": "9"
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
      "number": 547,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "10"
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
          "cssClass": "number",
          "text": "14"
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
      "number": 548,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "15"
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
          "cssClass": "number",
          "text": "15"
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
      "number": 549,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "16"
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
          "cssClass": "number",
          "text": "16"
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
      "number": 550,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "17"
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
          "cssClass": "number",
          "text": "17"
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
      "number": 551,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "18"
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
          "cssClass": "number",
          "text": "18"
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
      "number": 552,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "19"
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
          "cssClass": "number",
          "text": "20"
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
      "number": 553,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_21_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "21"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 554,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 555,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 556,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0_ADD_INTERP0_ACCUM0_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L556C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt24",
          "href": "docs/hal___spec.html#L81C9"
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
      "number": 557,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 558,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM0\\n Reading yields lane"
        }
      ]
    },
    {
      "kind": "line",
      "number": 559,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  0's raw shift and mask value (BASE0 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 560,
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
          "text": "INTERP0_ACCUM0_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L560C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 561,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L561C7"
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
          "text": "INTERP0_ACCUM0_ADD_INTERP0_ACCUM0_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L556C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        }
      ]
    },
    {
      "kind": "line",
      "number": 562,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "                            "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 563,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 564,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31",
          "href": "docs/rp2040_svd__sio___spec.html#L564C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "text": "HAL.UInt8",
          "href": "docs/hal___spec.html#L53C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 565,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 566,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 567,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 568,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 569,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L560C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 570,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0_ADD"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "23"
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
      "number": 571,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "24"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 572,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 573,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 574,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1_ADD_INTERP0_ACCUM1_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L574C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt24",
          "href": "docs/hal___spec.html#L81C9"
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
      "number": 575,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 576,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM1\\n Reading yields lane"
        }
      ]
    },
    {
      "kind": "line",
      "number": 577,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1's raw shift and mask value (BASE1 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 578,
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
          "text": "INTERP0_ACCUM1_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L578C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 579,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L579C7"
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
          "text": "INTERP0_ACCUM1_ADD_INTERP0_ACCUM1_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L574C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        }
      ]
    },
    {
      "kind": "line",
      "number": 580,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "                            "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 581,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 582,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31",
          "href": "docs/rp2040_svd__sio___spec.html#L582C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "text": "HAL.UInt8",
          "href": "docs/hal___spec.html#L53C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 583,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 584,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 585,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 586,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 587,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L578C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 588,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1_ADD"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "23"
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
      "number": 589,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "24"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 590,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 591,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 592,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L592C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 593,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L593C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 594,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L594C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 595,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L595C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
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
      "number": 596,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 597,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  INTERP1_CTRL_LANE0_OVERF array"
        }
      ]
    },
    {
      "kind": "line",
      "number": 598,
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
          "text": "INTERP1_CTRL_LANE0_OVERF_Field_Array",
          "href": "docs/rp2040_svd__sio___spec.html#L598C9"
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
          "text": "array"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
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
          "cssClass": "number",
          "text": "2"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ")"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "of"
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
        }
      ]
    },
    {
      "kind": "line",
      "number": 599,
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
          "text": " Component_Size => 1, Size => 3"
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
      "number": 600,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 601,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Type definition for INTERP1_CTRL_LANE0_OVERF"
        }
      ]
    },
    {
      "kind": "line",
      "number": 602,
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
          "text": "INTERP1_CTRL_LANE0_OVERF_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L602C9"
        }
      ]
    },
    {
      "kind": "line",
      "number": 603,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "As_Array",
          "href": "docs/rp2040_svd__sio___spec.html#L603C7"
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 604,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 605,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "case"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "As_Array"
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
        }
      ]
    },
    {
      "kind": "line",
      "number": 606,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "when"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        }
      ]
    },
    {
      "kind": "line",
      "number": 607,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  OVERF as a value"
        }
      ]
    },
    {
      "kind": "line",
      "number": 608,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Val",
          "href": "docs/rp2040_svd__sio___spec.html#L608C13"
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
          "text": "HAL.UInt3",
          "href": "docs/hal___spec.html#L41C9"
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
      "number": 609,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "when"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "True"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        }
      ]
    },
    {
      "kind": "line",
      "number": 610,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  OVERF as an array"
        }
      ]
    },
    {
      "kind": "line",
      "number": 611,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Arr",
          "href": "docs/rp2040_svd__sio___spec.html#L611C13"
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
          "text": "INTERP1_CTRL_LANE0_OVERF_Field_Array",
          "href": "docs/rp2040_svd__sio___spec.html#L598C9"
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
      "number": 612,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "case"
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
      "number": 613,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 614,
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
          "text": " Unchecked_Union, Size => 3"
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
      "number": 615,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 616,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0_OVERF_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L602C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 617,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Val"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "2"
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
      "number": 618,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Arr"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "2"
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
      "number": 619,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 620,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 621,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 622,
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
          "text": "INTERP1_CTRL_LANE0_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L622C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 623,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Logical right-shift applied to accumulator before masking"
        }
      ]
    },
    {
      "kind": "line",
      "number": 624,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT",
          "href": "docs/rp2040_svd__sio___spec.html#L624C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "INTERP1_CTRL_LANE0_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L592C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 625,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The least-significant bit allowed to pass by the mask (inclusive)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 626,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB",
          "href": "docs/rp2040_svd__sio___spec.html#L626C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP1_CTRL_LANE0_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L593C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 627,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The most-significant bit allowed to pass by the mask (inclusive)\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 628,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Setting MSB < LSB may cause chip to turn inside-out"
        }
      ]
    },
    {
      "kind": "line",
      "number": 629,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L629C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP1_CTRL_LANE0_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L594C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 630,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If SIGNED is set, the shifted and masked accumulator value is"
        }
      ]
    },
    {
      "kind": "line",
      "number": 631,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  sign-extended to 32 bits\\n before adding to BASE0, and LANE0 PEEK/POP"
        }
      ]
    },
    {
      "kind": "line",
      "number": 632,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  appear extended to 32 bits when read by processor."
        }
      ]
    },
    {
      "kind": "line",
      "number": 633,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED",
          "href": "docs/rp2040_svd__sio___spec.html#L633C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 634,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's accumulator into this lane's shift +"
        }
      ]
    },
    {
      "kind": "line",
      "number": 635,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mask hardware.\\n Takes effect even if ADD_RAW is set (the CROSS_INPUT"
        }
      ]
    },
    {
      "kind": "line",
      "number": 636,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mux is before the shift+mask bypass)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 637,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT",
          "href": "docs/rp2040_svd__sio___spec.html#L637C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 638,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's result into this lane's accumulator on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 639,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  POP."
        }
      ]
    },
    {
      "kind": "line",
      "number": 640,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT",
          "href": "docs/rp2040_svd__sio___spec.html#L640C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 641,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, mask + shift is bypassed for LANE0 result. This does not affect"
        }
      ]
    },
    {
      "kind": "line",
      "number": 642,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FULL result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 643,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW",
          "href": "docs/rp2040_svd__sio___spec.html#L643C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 644,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  ORed into bits 29:28 of the lane result presented to the processor on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 645,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the bus.\\n No effect on the internal 32-bit datapath. Handy for using"
        }
      ]
    },
    {
      "kind": "line",
      "number": 646,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  a lane to generate sequence\\n of pointers into flash or SRAM."
        }
      ]
    },
    {
      "kind": "line",
      "number": 647,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L647C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "text": "INTERP1_CTRL_LANE0_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L595C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 648,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 649,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_21_21",
          "href": "docs/rp2040_svd__sio___spec.html#L649C7"
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
          "text": "HAL.Bit",
          "href": "docs/hal___spec.html#L37C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 650,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Only present on INTERP1 on each core. If CLAMP mode is enabled:\\n -"
        }
      ]
    },
    {
      "kind": "line",
      "number": 651,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  LANE0 result is shifted and masked ACCUM0, clamped by a lower bound"
        }
      ]
    },
    {
      "kind": "line",
      "number": 652,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  of\\n BASE0 and an upper bound of BASE1.\\n - Signedness of these"
        }
      ]
    },
    {
      "kind": "line",
      "number": 653,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  comparisons is determined by LANE0_CTRL_SIGNED"
        }
      ]
    },
    {
      "kind": "line",
      "number": 654,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CLAMP",
          "href": "docs/rp2040_svd__sio___spec.html#L654C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 655,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read-only. Indicates if any masked-off MSBs in ACCUM0 are set."
        }
      ]
    },
    {
      "kind": "line",
      "number": 656,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "OVERF",
          "href": "docs/rp2040_svd__sio___spec.html#L656C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "INTERP1_CTRL_LANE0_OVERF_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L602C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        }
      ]
    },
    {
      "kind": "line",
      "number": 657,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "                        "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "("
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "As_Array"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ","
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Val"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "=>"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ")"
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
      "number": 658,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 659,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_26_31",
          "href": "docs/rp2040_svd__sio___spec.html#L659C7"
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
          "text": "HAL.UInt6",
          "href": "docs/hal___spec.html#L47C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 660,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 661,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 662,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 663,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 664,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L622C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 665,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "4"
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
      "number": 666,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "5"
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
          "cssClass": "number",
          "text": "9"
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
      "number": 667,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "10"
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
          "cssClass": "number",
          "text": "14"
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
      "number": 668,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "15"
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
          "cssClass": "number",
          "text": "15"
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
      "number": 669,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "16"
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
          "cssClass": "number",
          "text": "16"
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
      "number": 670,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "17"
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
          "cssClass": "number",
          "text": "17"
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
      "number": 671,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "18"
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
          "cssClass": "number",
          "text": "18"
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
      "number": 672,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "19"
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
          "cssClass": "number",
          "text": "20"
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
      "number": 673,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_21_21"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "21"
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
          "cssClass": "number",
          "text": "21"
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
      "number": 674,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CLAMP"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "22"
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
          "cssClass": "number",
          "text": "22"
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
      "number": 675,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "OVERF",
          "href": "docs/rp2040_svd__sio___spec.html#L656C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "23"
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
          "cssClass": "number",
          "text": "25"
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
      "number": 676,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_26_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "26"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 677,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 678,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 679,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L679C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 680,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L680C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 681,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L681C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt5",
          "href": "docs/hal___spec.html#L45C9"
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
      "number": 682,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L682C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt2",
          "href": "docs/hal___spec.html#L39C9"
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
      "number": 683,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 684,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 685,
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
          "text": "INTERP1_CTRL_LANE1_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L685C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 686,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Logical right-shift applied to accumulator before masking"
        }
      ]
    },
    {
      "kind": "line",
      "number": 687,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT",
          "href": "docs/rp2040_svd__sio___spec.html#L687C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "text": "INTERP1_CTRL_LANE1_SHIFT_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L679C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 688,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The least-significant bit allowed to pass by the mask (inclusive)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 689,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB",
          "href": "docs/rp2040_svd__sio___spec.html#L689C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP1_CTRL_LANE1_MASK_LSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L680C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 690,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  The most-significant bit allowed to pass by the mask (inclusive)\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 691,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Setting MSB < LSB may cause chip to turn inside-out"
        }
      ]
    },
    {
      "kind": "line",
      "number": 692,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L692C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "text": "INTERP1_CTRL_LANE1_MASK_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L681C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 693,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If SIGNED is set, the shifted and masked accumulator value is"
        }
      ]
    },
    {
      "kind": "line",
      "number": 694,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  sign-extended to 32 bits\\n before adding to BASE1, and LANE1 PEEK/POP"
        }
      ]
    },
    {
      "kind": "line",
      "number": 695,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  appear extended to 32 bits when read by processor."
        }
      ]
    },
    {
      "kind": "line",
      "number": 696,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED",
          "href": "docs/rp2040_svd__sio___spec.html#L696C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 697,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's accumulator into this lane's shift +"
        }
      ]
    },
    {
      "kind": "line",
      "number": 698,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mask hardware.\\n Takes effect even if ADD_RAW is set (the CROSS_INPUT"
        }
      ]
    },
    {
      "kind": "line",
      "number": 699,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  mux is before the shift+mask bypass)"
        }
      ]
    },
    {
      "kind": "line",
      "number": 700,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT",
          "href": "docs/rp2040_svd__sio___spec.html#L700C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 701,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, feed the opposite lane's result into this lane's accumulator on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 702,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  POP."
        }
      ]
    },
    {
      "kind": "line",
      "number": 703,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT",
          "href": "docs/rp2040_svd__sio___spec.html#L703C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 704,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  If 1, mask + shift is bypassed for LANE1 result. This does not affect"
        }
      ]
    },
    {
      "kind": "line",
      "number": 705,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FULL result."
        }
      ]
    },
    {
      "kind": "line",
      "number": 706,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW",
          "href": "docs/rp2040_svd__sio___spec.html#L706C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "text": "Boolean"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "False"
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
      "number": 707,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  ORed into bits 29:28 of the lane result presented to the processor on"
        }
      ]
    },
    {
      "kind": "line",
      "number": 708,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the bus.\\n No effect on the internal 32-bit datapath. Handy for using"
        }
      ]
    },
    {
      "kind": "line",
      "number": 709,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  a lane to generate sequence\\n of pointers into flash or SRAM."
        }
      ]
    },
    {
      "kind": "line",
      "number": 710,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB",
          "href": "docs/rp2040_svd__sio___spec.html#L710C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "text": "INTERP1_CTRL_LANE1_FORCE_MSB_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L682C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 711,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 712,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_21_31",
          "href": "docs/rp2040_svd__sio___spec.html#L712C7"
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
          "text": "HAL.UInt11",
          "href": "docs/hal___spec.html#L56C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 713,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 714,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 715,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 716,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 717,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L685C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 718,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SHIFT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "4"
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
      "number": 719,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_LSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "5"
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
          "cssClass": "number",
          "text": "9"
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
      "number": 720,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "MASK_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "10"
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
          "cssClass": "number",
          "text": "14"
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
      "number": 721,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIGNED"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "15"
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
          "cssClass": "number",
          "text": "15"
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
      "number": 722,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_INPUT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "16"
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
          "cssClass": "number",
          "text": "16"
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
      "number": 723,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CROSS_RESULT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "17"
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
          "cssClass": "number",
          "text": "17"
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
      "number": 724,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "ADD_RAW"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "18"
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
          "cssClass": "number",
          "text": "18"
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
      "number": 725,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FORCE_MSB"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "19"
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
          "cssClass": "number",
          "text": "20"
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
      "number": 726,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_21_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "21"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 727,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 728,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 729,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0_ADD_INTERP1_ACCUM0_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L729C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt24",
          "href": "docs/hal___spec.html#L81C9"
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
      "number": 730,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 731,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM0\\n Reading yields lane"
        }
      ]
    },
    {
      "kind": "line",
      "number": 732,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  0's raw shift and mask value (BASE0 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 733,
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
          "text": "INTERP1_ACCUM0_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L733C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 734,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L734C7"
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
          "text": "INTERP1_ACCUM0_ADD_INTERP1_ACCUM0_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L729C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        }
      ]
    },
    {
      "kind": "line",
      "number": 735,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "                            "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 736,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 737,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31",
          "href": "docs/rp2040_svd__sio___spec.html#L737C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "text": "HAL.UInt8",
          "href": "docs/hal___spec.html#L53C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 738,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 739,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 740,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 741,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 742,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L733C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 743,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0_ADD"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "23"
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
      "number": 744,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "24"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 745,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 746,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 747,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "subtype"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1_ADD_INTERP1_ACCUM1_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L747C12"
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
          "cssClass": "identifier",
          "text": "HAL.UInt24",
          "href": "docs/hal___spec.html#L81C9"
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
      "number": 748,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 749,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM1\\n Reading yields lane"
        }
      ]
    },
    {
      "kind": "line",
      "number": 750,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1's raw shift and mask value (BASE1 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 751,
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
          "text": "INTERP1_ACCUM1_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L751C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 752,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L752C7"
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
          "text": "INTERP1_ACCUM1_ADD_INTERP1_ACCUM1_ADD_Field",
          "href": "docs/rp2040_svd__sio___spec.html#L747C12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        }
      ]
    },
    {
      "kind": "line",
      "number": 753,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "                            "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 754,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  unspecified"
        }
      ]
    },
    {
      "kind": "line",
      "number": 755,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31",
          "href": "docs/rp2040_svd__sio___spec.html#L755C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "text": "HAL.UInt8",
          "href": "docs/hal___spec.html#L53C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ":="
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
      "number": 756,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 757,
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
          "text": " Volatile_Full_Access, Object_Size => 32,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 758,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          Bit_Order => System.Low_Order_First"
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
      "number": 759,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 760,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L751C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 761,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1_ADD"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "cssClass": "number",
          "text": "23"
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
      "number": 762,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "Reserved_24_31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
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
          "text": "24"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 763,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 764,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 765,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "-----------------"
        }
      ]
    },
    {
      "kind": "line",
      "number": 766,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "-- Peripherals --"
        }
      ]
    },
    {
      "kind": "line",
      "number": 767,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "-----------------"
        }
      ]
    },
    {
      "kind": "line",
      "number": 768,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 769,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Single-cycle IO block\\n Provides core-local and inter-core hardware for"
        }
      ]
    },
    {
      "kind": "line",
      "number": 770,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the two processors, with single-cycle access."
        }
      ]
    },
    {
      "kind": "line",
      "number": 771,
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
          "text": "SIO_Peripheral",
          "href": "docs/rp2040_svd__sio___spec.html#L771C9"
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
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 772,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Processor core identifier\\n Value is 0 when read from processor core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 773,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  0, and 1 when read from processor core 1."
        }
      ]
    },
    {
      "kind": "line",
      "number": 774,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CPUID",
          "href": "docs/rp2040_svd__sio___spec.html#L774C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "              "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 775,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Input value for GPIO pins"
        }
      ]
    },
    {
      "kind": "line",
      "number": 776,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_IN",
          "href": "docs/rp2040_svd__sio___spec.html#L776C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_IN_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L27C9"
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
      "number": 777,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Input value for QSPI pins"
        }
      ]
    },
    {
      "kind": "line",
      "number": 778,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_IN",
          "href": "docs/rp2040_svd__sio___spec.html#L778C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_IN_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L44C9"
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
      "number": 779,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value"
        }
      ]
    },
    {
      "kind": "line",
      "number": 780,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT",
          "href": "docs/rp2040_svd__sio___spec.html#L780C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L62C9"
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
      "number": 781,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 782,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L782C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L84C9"
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
      "number": 783,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 784,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L784C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L101C9"
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
      "number": 785,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output value XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 786,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L786C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L118C9"
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
      "number": 787,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable"
        }
      ]
    },
    {
      "kind": "line",
      "number": 788,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE",
          "href": "docs/rp2040_svd__sio___spec.html#L788C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L135C9"
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
      "number": 789,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 790,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L790C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L156C9"
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
      "number": 791,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 792,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L792C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L173C9"
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
      "number": 793,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  GPIO output enable XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 794,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L794C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L190C9"
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
      "number": 795,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value"
        }
      ]
    },
    {
      "kind": "line",
      "number": 796,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT",
          "href": "docs/rp2040_svd__sio___spec.html#L796C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L207C9"
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
      "number": 797,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 798,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L798C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L229C9"
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
      "number": 799,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 800,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L800C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L246C9"
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
      "number": 801,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output value XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 802,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L802C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L264C9"
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
      "number": 803,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable"
        }
      ]
    },
    {
      "kind": "line",
      "number": 804,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE",
          "href": "docs/rp2040_svd__sio___spec.html#L804C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L282C9"
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
      "number": 805,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable set"
        }
      ]
    },
    {
      "kind": "line",
      "number": 806,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L806C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_SET_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L303C9"
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
      "number": 807,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable clear"
        }
      ]
    },
    {
      "kind": "line",
      "number": 808,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L808C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_CLR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L320C9"
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
      "number": 809,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  QSPI output enable XOR"
        }
      ]
    },
    {
      "kind": "line",
      "number": 810,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L810C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_XOR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L338C9"
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
      "number": 811,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Status register for inter-core FIFOs (mailboxes).\\n There is one FIFO"
        }
      ]
    },
    {
      "kind": "line",
      "number": 812,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  in the core 0 -> core 1 direction, and one core 1 -> core 0. Both are"
        }
      ]
    },
    {
      "kind": "line",
      "number": 813,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  32 bits wide and 8 words deep.\\n Core 0 can see the read side of the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 814,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1->0 FIFO (RX), and the write side of 0->1 FIFO (TX).\\n Core 1 can"
        }
      ]
    },
    {
      "kind": "line",
      "number": 815,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  see the read side of the 0->1 FIFO (RX), and the write side of 1->0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 816,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  FIFO (TX).\\n The SIO IRQ for each core is the logical OR of the VLD,"
        }
      ]
    },
    {
      "kind": "line",
      "number": 817,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  WOF and ROE fields of its FIFO_ST register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 818,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_ST",
          "href": "docs/rp2040_svd__sio___spec.html#L818C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_ST_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L360C9"
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
      "number": 819,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Write access to this core's TX FIFO"
        }
      ]
    },
    {
      "kind": "line",
      "number": 820,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_WR",
          "href": "docs/rp2040_svd__sio___spec.html#L820C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 821,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read access to this core's RX FIFO"
        }
      ]
    },
    {
      "kind": "line",
      "number": 822,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_RD",
          "href": "docs/rp2040_svd__sio___spec.html#L822C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 823,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Spinlock state\\n A bitmap containing the state of all 32 spinlocks"
        }
      ]
    },
    {
      "kind": "line",
      "number": 824,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  (1=locked).\\n Mainly intended for debugging."
        }
      ]
    },
    {
      "kind": "line",
      "number": 825,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK_ST",
          "href": "docs/rp2040_svd__sio___spec.html#L825C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 826,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Divider unsigned dividend\\n Write to the DIVIDEND operand of the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 827,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  divider, i.e. the p in `p / q`.\\n Any operand write starts a new"
        }
      ]
    },
    {
      "kind": "line",
      "number": 828,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  calculation. The results appear in QUOTIENT, REMAINDER.\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 829,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  UDIVIDEND/SDIVIDEND are aliases of the same internal register. The U"
        }
      ]
    },
    {
      "kind": "line",
      "number": 830,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  alias starts an\\n unsigned calculation, and the S alias starts a"
        }
      ]
    },
    {
      "kind": "line",
      "number": 831,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  signed calculation."
        }
      ]
    },
    {
      "kind": "line",
      "number": 832,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_UDIVIDEND",
          "href": "docs/rp2040_svd__sio___spec.html#L832C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 833,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Divider unsigned divisor\\n Write to the DIVISOR operand of the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 834,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  divider, i.e. the q in `p / q`.\\n Any operand write starts a new"
        }
      ]
    },
    {
      "kind": "line",
      "number": 835,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  calculation. The results appear in QUOTIENT, REMAINDER.\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 836,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  UDIVIDEND/SDIVIDEND are aliases of the same internal register. The U"
        }
      ]
    },
    {
      "kind": "line",
      "number": 837,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  alias starts an\\n unsigned calculation, and the S alias starts a"
        }
      ]
    },
    {
      "kind": "line",
      "number": 838,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  signed calculation."
        }
      ]
    },
    {
      "kind": "line",
      "number": 839,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_UDIVISOR",
          "href": "docs/rp2040_svd__sio___spec.html#L839C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 840,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Divider signed dividend\\n The same as UDIVIDEND, but starts a signed"
        }
      ]
    },
    {
      "kind": "line",
      "number": 841,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  calculation, rather than unsigned."
        }
      ]
    },
    {
      "kind": "line",
      "number": 842,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_SDIVIDEND",
          "href": "docs/rp2040_svd__sio___spec.html#L842C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 843,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Divider signed divisor\\n The same as UDIVISOR, but starts a signed"
        }
      ]
    },
    {
      "kind": "line",
      "number": 844,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  calculation, rather than unsigned."
        }
      ]
    },
    {
      "kind": "line",
      "number": 845,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_SDIVISOR",
          "href": "docs/rp2040_svd__sio___spec.html#L845C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 846,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Divider result quotient\\n The result of `DIVIDEND / DIVISOR`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 847,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  (division). Contents undefined while CSR_READY is low.\\n For signed"
        }
      ]
    },
    {
      "kind": "line",
      "number": 848,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  calculations, QUOTIENT is negative when the signs of DIVIDEND and"
        }
      ]
    },
    {
      "kind": "line",
      "number": 849,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  DIVISOR differ.\\n This register can be written to directly, for"
        }
      ]
    },
    {
      "kind": "line",
      "number": 850,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  context save/restore purposes. This halts any\\n in-progress"
        }
      ]
    },
    {
      "kind": "line",
      "number": 851,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  calculation and sets the CSR_READY and CSR_DIRTY flags.\\n Reading"
        }
      ]
    },
    {
      "kind": "line",
      "number": 852,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  from QUOTIENT clears the CSR_DIRTY flag, so should read results in"
        }
      ]
    },
    {
      "kind": "line",
      "number": 853,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the order\\n REMAINDER, QUOTIENT if CSR_DIRTY is used."
        }
      ]
    },
    {
      "kind": "line",
      "number": 854,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_QUOTIENT",
          "href": "docs/rp2040_svd__sio___spec.html#L854C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 855,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Divider result remainder\\n The result of `DIVIDEND % DIVISOR`"
        }
      ]
    },
    {
      "kind": "line",
      "number": 856,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  (modulo). Contents undefined while CSR_READY is low.\\n For signed"
        }
      ]
    },
    {
      "kind": "line",
      "number": 857,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  calculations, REMAINDER is negative only when DIVIDEND is negative.\\n"
        }
      ]
    },
    {
      "kind": "line",
      "number": 858,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  This register can be written to directly, for context save/restore"
        }
      ]
    },
    {
      "kind": "line",
      "number": 859,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  purposes. This halts any\\n in-progress calculation and sets the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 860,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  CSR_READY and CSR_DIRTY flags."
        }
      ]
    },
    {
      "kind": "line",
      "number": 861,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_REMAINDER",
          "href": "docs/rp2040_svd__sio___spec.html#L861C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 862,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control and status register for divider."
        }
      ]
    },
    {
      "kind": "line",
      "number": 863,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_CSR",
          "href": "docs/rp2040_svd__sio___spec.html#L863C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_CSR_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L390C9"
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
      "number": 864,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to accumulator 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 865,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0",
          "href": "docs/rp2040_svd__sio___spec.html#L865C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 866,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to accumulator 1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 867,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1",
          "href": "docs/rp2040_svd__sio___spec.html#L867C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 868,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to BASE0 register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 869,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE0",
          "href": "docs/rp2040_svd__sio___spec.html#L869C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 870,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to BASE1 register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 871,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE1",
          "href": "docs/rp2040_svd__sio___spec.html#L871C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 872,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to BASE2 register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 873,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE2",
          "href": "docs/rp2040_svd__sio___spec.html#L873C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 874,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE0 result, and simultaneously write lane results to both"
        }
      ]
    },
    {
      "kind": "line",
      "number": 875,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  accumulators (POP)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 876,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_POP_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L876C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 877,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE1 result, and simultaneously write lane results to both"
        }
      ]
    },
    {
      "kind": "line",
      "number": 878,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  accumulators (POP)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 879,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_POP_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L879C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 880,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read FULL result, and simultaneously write lane results to both"
        }
      ]
    },
    {
      "kind": "line",
      "number": 881,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  accumulators (POP)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 882,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_POP_FULL",
          "href": "docs/rp2040_svd__sio___spec.html#L882C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 883,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE0 result, without altering any internal state (PEEK)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 884,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_PEEK_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L884C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 885,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE1 result, without altering any internal state (PEEK)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 886,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_PEEK_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L886C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 887,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read FULL result, without altering any internal state (PEEK)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 888,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_PEEK_FULL",
          "href": "docs/rp2040_svd__sio___spec.html#L888C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 889,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 890,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L890C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L445C9"
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
      "number": 891,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 892,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L892C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L512C9"
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
      "number": 893,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM0\\n Reading yields"
        }
      ]
    },
    {
      "kind": "line",
      "number": 894,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lane 0's raw shift and mask value (BASE0 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 895,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L895C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L560C9"
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
      "number": 896,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM1\\n Reading yields"
        }
      ]
    },
    {
      "kind": "line",
      "number": 897,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lane 1's raw shift and mask value (BASE1 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 898,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L898C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L578C9"
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
      "number": 899,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  On write, the lower 16 bits go to BASE0, upper bits to BASE1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 900,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  simultaneously.\\n Each half is sign-extended to 32 bits if that"
        }
      ]
    },
    {
      "kind": "line",
      "number": 901,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lane's SIGNED flag is set."
        }
      ]
    },
    {
      "kind": "line",
      "number": 902,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE_1AND0",
          "href": "docs/rp2040_svd__sio___spec.html#L902C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 903,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to accumulator 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 904,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0",
          "href": "docs/rp2040_svd__sio___spec.html#L904C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 905,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to accumulator 1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 906,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1",
          "href": "docs/rp2040_svd__sio___spec.html#L906C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 907,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to BASE0 register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 908,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE0",
          "href": "docs/rp2040_svd__sio___spec.html#L908C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 909,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to BASE1 register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 910,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE1",
          "href": "docs/rp2040_svd__sio___spec.html#L910C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 911,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read/write access to BASE2 register."
        }
      ]
    },
    {
      "kind": "line",
      "number": 912,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE2",
          "href": "docs/rp2040_svd__sio___spec.html#L912C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 913,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE0 result, and simultaneously write lane results to both"
        }
      ]
    },
    {
      "kind": "line",
      "number": 914,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  accumulators (POP)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 915,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_POP_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L915C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 916,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE1 result, and simultaneously write lane results to both"
        }
      ]
    },
    {
      "kind": "line",
      "number": 917,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  accumulators (POP)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 918,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_POP_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L918C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 919,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read FULL result, and simultaneously write lane results to both"
        }
      ]
    },
    {
      "kind": "line",
      "number": 920,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  accumulators (POP)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 921,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_POP_FULL",
          "href": "docs/rp2040_svd__sio___spec.html#L921C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 922,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE0 result, without altering any internal state (PEEK)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 923,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_PEEK_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L923C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 924,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read LANE1 result, without altering any internal state (PEEK)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 925,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_PEEK_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L925C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 926,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Read FULL result, without altering any internal state (PEEK)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 927,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_PEEK_FULL",
          "href": "docs/rp2040_svd__sio___spec.html#L927C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 928,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 0"
        }
      ]
    },
    {
      "kind": "line",
      "number": 929,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L929C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L622C9"
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
      "number": 930,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Control register for lane 1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 931,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L931C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L685C9"
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
      "number": 932,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM0\\n Reading yields"
        }
      ]
    },
    {
      "kind": "line",
      "number": 933,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lane 0's raw shift and mask value (BASE0 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 934,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L934C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L733C9"
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
      "number": 935,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Values written here are atomically added to ACCUM1\\n Reading yields"
        }
      ]
    },
    {
      "kind": "line",
      "number": 936,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lane 1's raw shift and mask value (BASE1 not added)."
        }
      ]
    },
    {
      "kind": "line",
      "number": 937,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L937C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1_ADD_Register",
          "href": "docs/rp2040_svd__sio___spec.html#L751C9"
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
      "number": 938,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  On write, the lower 16 bits go to BASE0, upper bits to BASE1"
        }
      ]
    },
    {
      "kind": "line",
      "number": 939,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  simultaneously.\\n Each half is sign-extended to 32 bits if that"
        }
      ]
    },
    {
      "kind": "line",
      "number": 940,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lane's SIGNED flag is set."
        }
      ]
    },
    {
      "kind": "line",
      "number": 941,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE_1AND0",
          "href": "docs/rp2040_svd__sio___spec.html#L941C7"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 942,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 943,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 944,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 945,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 946,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 947,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK0",
          "href": "docs/rp2040_svd__sio___spec.html#L947C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 948,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 949,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 950,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 951,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 952,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 953,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK1",
          "href": "docs/rp2040_svd__sio___spec.html#L953C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 954,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 955,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 956,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 957,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 958,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 959,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK2",
          "href": "docs/rp2040_svd__sio___spec.html#L959C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 960,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 961,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 962,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 963,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 964,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 965,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK3",
          "href": "docs/rp2040_svd__sio___spec.html#L965C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 966,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 967,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 968,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 969,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 970,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 971,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK4",
          "href": "docs/rp2040_svd__sio___spec.html#L971C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 972,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 973,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 974,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 975,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 976,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 977,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK5",
          "href": "docs/rp2040_svd__sio___spec.html#L977C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 978,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 979,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 980,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 981,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 982,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 983,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK6",
          "href": "docs/rp2040_svd__sio___spec.html#L983C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 984,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 985,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 986,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 987,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 988,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 989,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK7",
          "href": "docs/rp2040_svd__sio___spec.html#L989C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 990,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 991,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 992,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 993,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 994,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 995,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK8",
          "href": "docs/rp2040_svd__sio___spec.html#L995C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 996,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 997,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 998,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 999,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1000,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1001,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK9",
          "href": "docs/rp2040_svd__sio___spec.html#L1001C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1002,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1003,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1004,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1005,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1006,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1007,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK10",
          "href": "docs/rp2040_svd__sio___spec.html#L1007C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1008,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1009,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1010,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1011,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1012,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1013,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK11",
          "href": "docs/rp2040_svd__sio___spec.html#L1013C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1014,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1015,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1016,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1017,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1018,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1019,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK12",
          "href": "docs/rp2040_svd__sio___spec.html#L1019C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1020,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1021,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1022,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1023,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1024,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1025,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK13",
          "href": "docs/rp2040_svd__sio___spec.html#L1025C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1026,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1027,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1028,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1029,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1030,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1031,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK14",
          "href": "docs/rp2040_svd__sio___spec.html#L1031C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1032,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1033,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1034,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1035,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1036,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1037,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK15",
          "href": "docs/rp2040_svd__sio___spec.html#L1037C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1038,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1039,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1040,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1041,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1042,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1043,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK16",
          "href": "docs/rp2040_svd__sio___spec.html#L1043C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1044,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1045,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1046,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1047,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1048,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1049,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK17",
          "href": "docs/rp2040_svd__sio___spec.html#L1049C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1050,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1051,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1052,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1053,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1054,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1055,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK18",
          "href": "docs/rp2040_svd__sio___spec.html#L1055C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1056,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1057,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1058,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1059,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1060,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1061,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK19",
          "href": "docs/rp2040_svd__sio___spec.html#L1061C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1062,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1063,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1064,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1065,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1066,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1067,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK20",
          "href": "docs/rp2040_svd__sio___spec.html#L1067C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1068,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1069,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1070,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1071,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1072,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1073,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK21",
          "href": "docs/rp2040_svd__sio___spec.html#L1073C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1074,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1075,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1076,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1077,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1078,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1079,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK22",
          "href": "docs/rp2040_svd__sio___spec.html#L1079C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1080,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1081,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1082,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1083,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1084,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1085,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK23",
          "href": "docs/rp2040_svd__sio___spec.html#L1085C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1086,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1087,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1088,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1089,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1090,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1091,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK24",
          "href": "docs/rp2040_svd__sio___spec.html#L1091C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1092,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1093,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1094,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1095,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1096,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1097,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK25",
          "href": "docs/rp2040_svd__sio___spec.html#L1097C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1098,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1099,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1100,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1101,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1102,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1103,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK26",
          "href": "docs/rp2040_svd__sio___spec.html#L1103C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1104,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1105,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1106,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1107,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1108,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1109,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK27",
          "href": "docs/rp2040_svd__sio___spec.html#L1109C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1110,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1111,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1112,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1113,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1114,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1115,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK28",
          "href": "docs/rp2040_svd__sio___spec.html#L1115C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1116,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1117,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1118,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1119,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1120,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1121,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK29",
          "href": "docs/rp2040_svd__sio___spec.html#L1121C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1122,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1123,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1124,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1125,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1126,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1127,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK30",
          "href": "docs/rp2040_svd__sio___spec.html#L1127C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1128,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Reading from a spinlock address will:\\n - Return 0 if lock is already"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1129,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  locked\\n - Otherwise return nonzero, and simultaneously claim the"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1130,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  lock\\n\\n Writing (any value) releases the lock.\\n If core 0 and core"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1131,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  1 attempt to claim the same lock simultaneously, core 0 wins.\\n The"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1132,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  value returned on success is 0x1 << lock number."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1133,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK31",
          "href": "docs/rp2040_svd__sio___spec.html#L1133C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "HAL.UInt32",
          "href": "docs/hal___spec.html#L97C9"
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
      "number": 1134,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1135,
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
          "text": " Volatile"
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
      "number": 1136,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 1137,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "for"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIO_Peripheral",
          "href": "docs/rp2040_svd__sio___spec.html#L771C9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "use"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1138,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "CPUID"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "              "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1139,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_IN",
          "href": "docs/rp2040_svd__sio___spec.html#L776C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "4"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1140,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_IN",
          "href": "docs/rp2040_svd__sio___spec.html#L778C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "8"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1141,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT",
          "href": "docs/rp2040_svd__sio___spec.html#L780C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "           "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "10"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1142,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L782C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "14"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1143,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L784C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "18"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1144,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OUT_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L786C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "1C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1145,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE",
          "href": "docs/rp2040_svd__sio___spec.html#L788C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "20"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1146,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L790C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "24"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1147,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L792C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "28"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1148,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_OE_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L794C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "2C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1149,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT",
          "href": "docs/rp2040_svd__sio___spec.html#L796C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "30"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1150,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L798C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "34"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1151,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L800C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "38"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1152,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OUT_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L802C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "    "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "3C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1153,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE",
          "href": "docs/rp2040_svd__sio___spec.html#L804C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "40"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1154,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_SET",
          "href": "docs/rp2040_svd__sio___spec.html#L806C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "44"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1155,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_CLR",
          "href": "docs/rp2040_svd__sio___spec.html#L808C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "48"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1156,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "GPIO_HI_OE_XOR",
          "href": "docs/rp2040_svd__sio___spec.html#L810C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "4C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1157,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_ST",
          "href": "docs/rp2040_svd__sio___spec.html#L818C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "50"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1158,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_WR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "54"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1159,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "FIFO_RD"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "58"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1160,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK_ST"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "        "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "5C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1161,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_UDIVIDEND"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "60"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1162,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_UDIVISOR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "64"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1163,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_SDIVIDEND"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "68"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1164,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_SDIVISOR"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "6C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1165,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_QUOTIENT"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "       "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "70"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1166,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_REMAINDER"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "74"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1167,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "DIV_CSR",
          "href": "docs/rp2040_svd__sio___spec.html#L863C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "            "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "78"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1168,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "80"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1169,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "84"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1170,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "88"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1171,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "8C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1172,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE2"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "90"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1173,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_POP_LANE0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "94"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1174,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_POP_LANE1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "98"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1175,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_POP_FULL"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "9C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1176,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_PEEK_LANE0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "A0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1177,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_PEEK_LANE1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "A4"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1178,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_PEEK_FULL"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "A8"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1179,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L890C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "AC"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1180,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_CTRL_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L892C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "B0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1181,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM0_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L895C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "B4"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1182,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_ACCUM1_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L898C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "B8"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1183,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP0_BASE_1AND0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "BC"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1184,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "C0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1185,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "     "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "C4"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1186,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "C8"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1187,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "CC"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1188,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE2"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "D0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1189,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_POP_LANE0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "D4"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1190,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_POP_LANE1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "D8"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1191,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_POP_FULL"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "DC"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1192,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_PEEK_LANE0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "E0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1193,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_PEEK_LANE1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "E4"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1194,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_PEEK_FULL"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "  "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "E8"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1195,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE0",
          "href": "docs/rp2040_svd__sio___spec.html#L929C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "EC"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1196,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_CTRL_LANE1",
          "href": "docs/rp2040_svd__sio___spec.html#L931C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "F0"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1197,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM0_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L934C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "F4"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1198,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_ACCUM1_ADD",
          "href": "docs/rp2040_svd__sio___spec.html#L937C7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "F8"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1199,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "INTERP1_BASE_1AND0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "FC"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1200,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK0"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "100"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1201,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK1"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "104"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1202,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK2"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "108"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1203,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK3"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "10C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1204,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK4"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "110"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1205,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK5"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "114"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1206,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK6"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "118"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1207,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK7"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "11C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1208,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK8"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "120"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1209,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK9"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "          "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "124"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1210,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK10"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "128"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1211,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK11"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "12C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1212,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK12"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "130"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1213,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK13"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "134"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1214,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK14"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "138"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1215,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK15"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "13C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1216,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK16"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "140"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1217,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK17"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "144"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1218,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK18"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "148"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1219,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK19"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "14C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1220,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK20"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "150"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1221,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK21"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "154"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1222,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK22"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "158"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1223,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK23"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "15C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1224,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK24"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "160"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1225,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK25"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "164"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1226,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK26"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "168"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1227,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK27"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1228,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK28"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "170"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1229,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK29"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "174"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1230,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK30"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "178"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1231,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "      "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SPINLOCK31"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": "         "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "at"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "16"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
        },
        {
          "kind": "span",
          "cssClass": "number",
          "text": "17C"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "#"
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
          "cssClass": "number",
          "text": "31"
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
      "number": 1232,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "record"
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
      "number": 1233,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 1234,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  Single-cycle IO block\\n Provides core-local and inter-core hardware for"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1235,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "comment",
          "text": "--  the two processors, with single-cycle access."
        }
      ]
    },
    {
      "kind": "line",
      "number": 1236,
      "children": [
        {
          "kind": "span",
          "cssClass": "text",
          "text": "   "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIO_Periph",
          "href": "docs/rp2040_svd__sio___spec.html#L1236C4"
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
          "cssClass": "keyword",
          "text": "aliased"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "SIO_Peripheral",
          "href": "docs/rp2040_svd__sio___spec.html#L771C9"
        }
      ]
    },
    {
      "kind": "line",
      "number": 1237,
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
          "text": " Import, Address => SIO_Base"
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
      "number": 1238,
      "children": [
      ]
    },
    {
      "kind": "line",
      "number": 1239,
      "children": [
        {
          "kind": "span",
          "cssClass": "keyword",
          "text": "end"
        },
        {
          "kind": "span",
          "cssClass": "text",
          "text": " "
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": "RP2040_SVD.SIO"
        },
        {
          "kind": "span",
          "cssClass": "identifier",
          "text": ";"
        }
      ]
    }
  ],
  "label": "rp2040_svd-sio.ads"
};