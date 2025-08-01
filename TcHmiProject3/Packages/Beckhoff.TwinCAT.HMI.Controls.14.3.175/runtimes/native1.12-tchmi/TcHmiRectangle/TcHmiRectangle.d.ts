declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiRectangle extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as jquery object. */
        protected __elementTemplateRoot: JQuery;
        /** Reference to the underlying html svg rectangle element as jquery object. */
        protected __elementSvgRectangle: JQuery;
        /**
         * Internal reference to the attribute 'data-tchmi-fill-color'.
         */
        protected __fillColor: TcHmi.Color | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-stroke-color'
         */
        protected __strokeColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-stroke-thickness'
         */
        protected __strokeThickness: number | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-stroke-style'
         * Example: "2,2"
         */
        protected __strokeStyle: string | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-radius-x'
         */
        protected __radiusX: number | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-radius-y'
         */
        protected __radiusY: number | undefined;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         * This function is only to be used by the System. Other function calls are not intended.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
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
         * Returns an event handler for the .onResized event
         */
        protected __onResized(_event: EventProvider.Event, ctrl: Controls.System.TcHmiControl): void;
        protected __rectDimensionCache: {
            width: null | number;
            heigth: null | number;
            borderWidthLeftRight: number;
            borderWidthTopBottom: number;
            strokeThickness: number;
        };
        protected __processBorderWidth(): void;
        /**
         * Updates x, y, width, height and stroke-width of rectangle
         */
        protected __updateDimensions(): void;
        /**
         * Sets the fillColor attribute to a new value.
         * @param valueNew The new value for the fillColor attribute;
         */
        setFillColor(valueNew: Color | null): void;
        /**
         * The watch callback for the fillColor object resolver.
         */
        protected __onResolverForFillColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * @returns The current value of the fillColor attribute.
         */
        getFillColor(): Color | null | undefined;
        /**
         * Processes the current value of attribute fillColor.
         */
        protected __processFillColor(): void;
        /**
         * Sets the stroke color attribute to a new value.
         * @param valueNew The new value for the stroke color attribute;
         */
        setStrokeColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the strokeColor object resolver.
         */
        protected __onResolverForStrokeColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * @returns The current value of the strokeColor attribute.
         */
        getStrokeColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute strokeColor.
         */
        protected __processStrokeColor(): void;
        /**
         * Sets the stroke style and calls the associated process function (processStrokeStyle).
         * @param valueNew The new value for strokeStyle.
         */
        setStrokeStyle(valueNew: string | null): void;
        /**
         * Returns the current value of strokeStyle.
         * @returns The current value of strokeStyle.
         */
        getStrokeStyle(): string | undefined;
        /**
         * Processes the current strokeStyle attribute value.
         */
        protected __processStrokeStyle(): void;
        /**
         * Sets the stroke thickness and calls the associated process function (processStrokeThickness).
         * @param valueNew The new value for strokeThickness.
         */
        setStrokeThickness(valueNew: number | null): void;
        /**
         * Returns the current value of strokeThickness.
         * @returns The current value of strokeThickness.
         */
        getStrokeThickness(): number | null | undefined;
        /**
         * Processes the current strokeThickness attribute value.
         */
        protected __processStrokeThickness(): void;
        /**
         * Returns the current value of the member variable rowHeightUnit.
         */
        getStrokeThicknessUnit(): string;
        /**
         * Empty function for compatibility
         */
        protected __processStrokeThicknessUnit(): void;
        /**
         * Sets the radius X and calls the associated process function (processRadiusX).
         * @param valueNew The new value for radiusX.
         */
        setRadiusX(valueNew: number | null): void;
        /**
         * Returns the current value of radiusX.
         * @returns The current value of radiusX.
         */
        getRadiusX(): number | undefined;
        /**
         * Processes the current radiusX attribute value.
         */
        protected __processRadiusX(): void;
        /**
         * Returns the current value of the member variable RadiusXUnit.
         */
        getRadiusXUnit(): string;
        /**
         * Processes the current value of RadiusXUnit.
         */
        protected __processRadiusXUnit(): void;
        /**
         * Sets the radius y and calls the associated process function (processRadiusY).
         * @param valueNew The new value for radiusY.
         */
        setRadiusY(valueNew: number | null): void;
        /**
         * Returns the current value of radiusY.
         * @returns The current value of radiusY.
         */
        getRadiusY(): number | undefined;
        /**
         * Processes the current radiusY attribute value.
         */
        protected __processRadiusY(): void;
        /**
         * Returns the current value of the member variable RadiusYUnit.
         */
        getRadiusYUnit(): string;
        /**
         * Processes the current value of RadiusYUnit.
         */
        protected __processRadiusYUnit(): void;
    }
}
//# sourceMappingURL=TcHmiRectangle.d.ts.map