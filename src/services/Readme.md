## Services is the Redux.

You will see 3 folders: actions, reducers and store.

## Actions

In order to keep it scalable actions contains 4 files per folder. Each folder is a specific type. For example: Theres a different set of actions for an User, a cart, modals, errors, etc... Every one should have its own folder.

Inside a User folder for example we will find out 3 files:

-   Adapter.js -> Its useful for extract backend's logic and work it better in front.
-   index.js -> Contains Actions type and payload with promises. The actions of all life.
-   types.js -> Contains de Constants for dispatch types.
-   endpoints.js -> Its like the types but with backend's endpoints and with this, we avoid hardcoded endpoints

###### Adapters

El adapter o interfaz separa la forma en la que se trabajan los datos desde el back hacia el front. De esta forma, si la forma en que los datos llegan desde el back cambian, no nos rompe toda la app ya que trabajamos los objetos con nombres de propiedades fijos.
Ademas, los del front pueden elegir los nombres de las variables que mas les gusten, en caso de que los del back no sepan poner buenos nombres :/

## Reducers

Right here there's "slices" but without using redux toolkit. Its really similar to the actions folders which are separated in features. Must include a js reducer file for each type of feature. For example, theres a Reducer for Users, other for the cart, other for external services, etc. Theres only two files which does not follow the above rules: Index.js and common.js;

-   Index.js contains the combineReducers, the function which "combine the reducers/slices".
-   common.js contains miscelaneous staff like: modals, alerts, random stuff, etc.
