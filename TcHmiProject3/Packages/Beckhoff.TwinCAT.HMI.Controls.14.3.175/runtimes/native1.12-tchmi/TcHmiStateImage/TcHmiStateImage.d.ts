declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiStateImage extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor of the control
         * @param element Element from HTML (internal, do not use)
         * @param pcElement precompiled Element (internal, do not use)
         * @param attrs Attributes defined in HTML in a special format (internal, do not use)
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** HTML image element */
        protected __elementImage: HTMLImageElement;
        /** state var */
        protected __state: any | null | undefined;
        /** state list */
        protected __stateList: TcHmiStateImage.IStateStructure[] | null | undefined;
        /** fallback image*/
        protected __fallbackImage: string | null | undefined;
        protected __ignoreTypeSafety: boolean | undefined;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __previnit(): void;
        /**
         * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __init(): void;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __attach(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Create and set the Image
         * @param iconpath The path to the icon of the new image.
         */
        __displayCurrentState(iconpath: string): void;
        /**
         * Handle the given state.
         */
        __handleState(): void;
        /**
         * Sets the StateList value and calls the associated process function (processStateList).
         * @param valueNew The new value for the StateList attribute.
         *
         */
        setStateList(valueNew: TcHmiStateImage.IStateStructure[] | null): void;
        /**
         * The watch callback for the srcData object resolver.
         */
        protected __onResolverForStateListWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiStateImage.IStateStructure[] | null>): void;
        /**
         * Returns the current StateList value.
         * @returns The current value of the StateList.
         */
        getStateList(): TcHmiStateImage.IStateStructure[] | null | undefined;
        /**
         * Processes the current stateList attribute value.
         */
        __processStateList(): void;
        /**
         * Sets the value of the member variable "State" if the new value is not equal to the current value
         * and calls the associated process function (processState) after that.
         * @param valueNew The new value for text.
         */
        setState(valueNew: any): void;
        /**
         * Returns the current value of the member variable State.
         * @returns the current value of the member variable State.
         */
        getState(): any;
        /**
         * Processes the current value of State and forwards it to the target span element in template html.
         * The current value of State is only forwarded if it is no binding expression.
         */
        protected __processState(): void;
        /**
         * Sets the value of the member variable "FallbackImage" if the new value is not equal to the current value
         * and calls the associated process function (processFallbackImage) after that.
         * @param valueNew The new value for FallbackImage.
         */
        setFallbackImage(valueNew: string | null): void;
        /**
         * Returns the current value of the member variable FallbackImage.
         * @returns the current value of the member variable FallbackImage.
         */
        getFallbackImage(): string | null | undefined;
        protected __processFallbackImage(): void;
        /**
         * Sets the auto focus out attribute and calls the associated process function (processIgnoreTypeSafety).
         * @param valueNew The new value for ignoreTypeSafety.
         */
        setIgnoreTypeSafety(valueNew: boolean | null): void;
        /**
         * Returns the current value of ignoreTypeSafety.
         * @returns The current value of ignoreTypeSafety.
         */
        getIgnoreTypeSafety(): boolean | undefined;
        /**
         * Processes the current ignoreTypeSafety attribute value.
         */
        protected __processIgnoreTypeSafety(): void;
    }
    /**
     * Interface structure for the displayed state icons.
     * Used as an array to match the state with the actual statevar and set the appropriate stateIcon.
     */
    namespace TcHmiStateImage {
        interface IStateStructure {
            state: any;
            stateIcon: string;
        }
    }
}
//# sourceMappingURL=TcHmiStateImage.d.ts.map