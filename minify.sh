#!/bin/bash
pushd css
cat asciidoctor.css asciidoc-pygments.css fonts.css pico_doc.css >all.css
yui-compressor all.css >all.min.css
popd
