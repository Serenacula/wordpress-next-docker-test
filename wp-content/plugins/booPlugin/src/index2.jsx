import edit from './edit';


// const {registerBlockType} = wp.blocks

 // Register the block
 wp.blocks.registerBlockType( 'faylee/test-block2', {
     title: "Faylee's test block2",
     icon: "hammer",
     description: "describing the test block",
     category: "design",
     edit: edit,
     save: function() {return null}
 } );