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
function faylee_test_block() {
    
    wp_register_script('faylee/test-block-js', __DIR__ . "index.js", array('wp-blocks'), true, false);

	// Register the block
	register_block_type( "faylee/test-block", array(
        'editor-script' => 'faylee/test-block-js'
    ) );

}
// add_action( 'enqueue_block_editor_asserts', 'faylee_test_block' );
add_action('init', 'faylee_test_block');

?>