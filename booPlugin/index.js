import edit from './edit';

// const {registerBlockType} = wp.blocks

console.log("running index.js")

 // Register the block
 wp.blocks.registerBlockType( 'faylee/test-block', {
     title: "Faylee's test block",
     icon: "hammer",
     description: "describing the test block",
     category: "design",
     edit: () => {return React.createElement("div", null, "React is working!");},
     save: () => {return null}
 } );