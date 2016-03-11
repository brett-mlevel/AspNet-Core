// Write your Javascript code.
Reveal.initialize({
    history: true,
    dependencies: [
        // Syntax highlight for <code> elements
        {
            src: 'lib/reveal.js/plugin/highlight/highlight.js',
            async: true,
            callback: function () {
                hljs.registerLanguage("razor", function (b) {
                    var a = "foreach|0 var|0 if|0 in|0 else|0 model|0 using|0 false|0true|0 null|0 int|0 for|0 double|0 decimal|0 float|0 string|0 new|0";
                    return { k: a, c: [{ cN: "built_in", b: "Html|Scripts|RenderBody|RenderSection|Styles" }, { cN: "comment", b: "@[*]", e: "[*]@" }, { cN: "start", b: /[@][?\\w]*/, i: /[@][{*]/ }, { cN: "string", b: '"((?!@))', e: '"', i: "\\n" }, { b: "<", e: ">", i: "</?", sL: "xml", c: [{ b: '"@', e: '"', sL: "razor" }] }] }
                });
                hljs.initHighlightingOnLoad();
            }
        }
    ]
});