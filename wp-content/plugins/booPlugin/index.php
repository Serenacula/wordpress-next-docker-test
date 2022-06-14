<?php
/**
 * Plugin Name: Faylee's test block
 * Description: a test block yay
 * Version: 1.0.0
 * Author: Faylee!
 *
 */

defined( 'ABSPATH' ) || exit;

// This is our function that registers the blocks. This means it tells php about it, and tells it where to find the register script
function faylee_test_blocks() {

    wp_register_script('faylee/test-block-js', plugin_dir_url(__FILE__) . "build/index.js", array('wp-blocks', "wp-editor", "wp-element"), null, true);
    wp_register_script('faylee/test-block2-js', plugin_dir_url(__FILE__) . "build/index2.js", array('wp-blocks', "wp-editor", "wp-element"), null, true);

	// Register the block
	register_block_type( "faylee/test-block", array(
        'editor_script' => 'faylee/test-block-js'
    ) );
    register_block_type( "faylee/test-block2", array(
        'editor_script' => 'faylee/test-block2-js'
    ) );

}
// add_action( 'enqueue_block_editor_asserts', 'faylee_test_block' );
add_action('init', 'faylee_test_blocks');

?>