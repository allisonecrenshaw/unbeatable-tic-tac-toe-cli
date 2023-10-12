/* Doc for notes on things learned during this project

Classes
  If you are creating functions for a class, they don't need to be prefixed with the function keyword

Imports
  When importing something that has a default export, you can use syntax w/o curly braces
    Ex: import Board from "Board";
  But if you're importing something that is not the default export of that file, but it is a named export, you would use a different syntax:
    Ex: import { Board } from "Board";

Exports
  Pros for default exports:
    Simplicity: Default exports provide a simple way to export a single main entity from a module
    Convenience: When importing, you can choose any name for the imported class
  Cons for default exports:
    Clarity: When reading the code, it might be less clear what is being exported - especially if the module contains multiple entities

  Pros for named exports:
    Clarity: Named exports make it clear what entities are being exported from a module (doesn't matter if the module contains multiple entities)
    Flexibility: You can export multiple entities from a single module, and you can add entities later if needed without needing to change the imports
*/
