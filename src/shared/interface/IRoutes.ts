import { LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoute {
    name?: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    path: string
    to: string
}