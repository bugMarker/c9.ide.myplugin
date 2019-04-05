define("plugins/c9.wanghao/package.c9.wanghao", [], {
    "name": "c9.wanghao",
    "description": "wanghao",
    "version": "0.0.1",
    "author": "",
    "contributors": [
        {
            "name": "",
            "email": ""
        }
    ],
    "repository": {
        "type": "git",
        "url": ""
    },
    "categories": [
        "miscellaneous"
    ],
    "licenses": [],
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/c9.ide.awanghao/plugin"
            }
        ]
    }
});

define("plugins/c9.ide.awanghao/plugin",[], function(require, exports, module) {
    main.consumes = ["Plugin", "commands", "tabManager", "terminal", "menus", "ui"];
    main.provides = ["myplugin"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var commands = imports.commands;
        var menus = imports.menus;
        var ui = imports.ui;
        var plugin = new Plugin("Ajax.org", main.consumes);
        var emit = plugin.getEmitter();
        function load() {
            commands.addCommand({
                name: "test",
                bindKey: { mac: "Command-Alt-J", win: "Ctrl-Alt-J" },
                exec: function() {
                    alert("success!");
                },
                isAvailable: function() { return true; }
            }, plugin);
            menus.addItemByPath("Tools/Wanghao", new ui.item({
                command: "test"
            }), 300, plugin);
        }
        plugin.on("load", function() {
            load();
        });
        plugin.on("unload", function() {

        });
        plugin.freezePublicAPI({

        });

        register(null, {
            "myplugin": plugin
        });
    }
});
