<?php

/**
 * Plugin Name: Test React Blocks
 * Version: 1.0.0
 * Author: Faylee!
 */

defined("ABSPATH") || exit;

function register_my_react_blocks_assets() {
    $asset_file = include(plugin_dir_path(__FILE__)."build/index.asset.php");
    wp_register_script(
        "my-react-blocks-scripts",
        plugins_url("build.index.js", __FILE__),
        $asset_file["dependencies"],
        $asset_file["version"]
    );
    register_block_type("mt/user-card", array(
        "editor_script" => "my-react-blocks-scripts",
        "style" => "my-react-blocks-styles"
    ));
}
add_action("init", "register_my_react_blocks_assets");