/** This index file allows us to access all the elements in the panel folder at once */
/** If not we'd have to import each component individually as follows */
/** import Direction from "./component/panel/direction" and import PanelWrapper from "./component/panel/panelWrapper" */
/** But now we can simply import {Direction, PanelWrapper} from "./component/panel" */
/** Making sure that the names are exactly the same as their export */
export * from "./direction";
export * from "./panelWrapper";