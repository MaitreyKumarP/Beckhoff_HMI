declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiRadialGauge extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as jquery object. */
        protected __elementTemplateRoot: JQuery;
        /** Reference to the underlying html svg element as jquery object. */
        protected __elementSvg: JQuery;
        /** Reference to the background circle. */
        protected __elementBackgroundCircle: JQuery;
        /** Refernece to the main tick container */
        protected __elementMainTickContainer: JQuery;
        /** Reference to the sub tick container */
        protected __elementSubTickContainer: JQuery;
        /** Reference to the label container */
        protected __elementLabelContainer: JQuery;
        /** Reference to the range container */
        protected __elementRangeContainer: JQuery;
        /** Referenve to the progress bar background */
        protected __elementProgressBackgroundCircle: JQuery;
        /** Reference to the progress bar foreground */
        protected __elementProgressForegroundCircle: JQuery;
        /** Reference to the value text element */
        protected __elementValueText: JQuery;
        /** Reference to the unit text element */
        protected __elementUnitText: JQuery;
        /** Reference to the edit knob group */
        protected __elementKnob: JQuery;
        /** Reference to the knob SVGGElement. */
        protected __elementKnobG: SVGGElement;
        /** Shared promises for the unprocessed knob string. Key is the url. */
        protected static __svgKnobMap: Map<string, Promise<string>>;
        /** Cached knob string for recoloring. */
        protected __knobSvgString: string | null;
        /** Reference to the setPoint group */
        protected __elementSetPointContainer: SVGElement | undefined;
        /** Reference to the markers group */
        protected __elementMarkersContainer: SVGElement | undefined;
        /** Reference to the setPoint group */
        protected __elementSetPoint: SVGElement | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-start-position' */
        protected __startPosition: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-end-position' */
        protected __endPosition: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-min-value' */
        protected __minValue: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-max-value' */
        protected __maxValue: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-step' */
        protected __step: number | undefined;
        protected __stepOffset: number;
        /** Internal reference to the attribute 'data-tchmi-range' */
        protected __range: TcHmiRadialGauge.Range[] | undefined;
        /** Internal reference to the attribute 'data-tchmi-show-label' */
        protected __showLabels: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-start-from-zero' */
        protected __startFromZero: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-editable' */
        protected __editable: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-ignore-invalid-values' */
        protected __ignoreInvalidValues: boolean | undefined;
        protected __valueBuffer: Helpers.ValueBuffer<number> | undefined;
        /** Internal reference to the attribute 'data-tchmi-click-anywhere-to-edit' */
        protected __clickAnywhereToEdit: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-show-value-text' */
        protected __showValueText: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-show-ticks' */
        protected __showTicks: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-position' */
        protected __labelPosition: 'Inside' | 'Outside' | undefined;
        /** Internal reference to the attribute 'data-tchmi-tick-definition' */
        protected __tickDefinition: TcHmiRadialGauge.TickDefinition | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-range' */
        protected __labelRange: number | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-sub-tick-position' */
        protected __subTickPosition: 'Inside' | 'Outside' | undefined;
        /** Internal reference to the attribute 'data-tchmi-value' */
        protected __value: number | undefined;
        /** Last value reported via onPropertyChanged (The value returned by getValue when onPropertyChanged was raised) */
        protected __lastReportedValue: number | bigint | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-set-point' */
        protected __setPoint: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-value-format' */
        protected __valueFormat: TcHmi.IFunction<string> | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-unit' */
        protected __unit: string | undefined;
        /** Internal reference to the attribute 'data-tchmi-markers' */
        protected __markers: Map<TcHmiRadialGauge.Marker, TcHmiRadialGauge.MarkerSvgs | null> | undefined | null;
        /** Internal reference to the attribute 'data-tchmi-legend-font-family' */
        protected __legendFontFamily: FontFamily | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-font-size' */
        protected __legendFontSize: number | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-font-style' */
        protected __legendFontStyle: FontStyle | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-font-weight' */
        protected __legendFontWeight: FontWeight | undefined;
        /** Reference to the legend element. */
        protected __elementLegend: HTMLElement | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-label-font-size'
         */
        protected __labelFontSize: number | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-label-font-size-unit'
         */
        protected __labelFontSizeUnit: FontSizeUnit | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-label-font-family'
         */
        protected __labelFontFamily: FontFamily | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-label-font-style'
         */
        protected __labelFontStyle: FontStyle | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-label-font-style'
         */
        protected __labelFontWeight: FontWeight | undefined;
        /** Internal reference to the attribute 'data-tchmi-label-format' */
        protected __labelFormat: TcHmi.IFunction<string> | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-value-font-size'
         */
        protected __valueFontSize: number | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-value-font-size-unit'
         */
        protected __valueFontSizeUnit: FontSizeUnit | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-value-font-family'
         */
        protected __valueFontFamily: FontFamily | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-value-font-style'
         */
        protected __valueFontStyle: FontStyle | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-value-font-style'
         */
        protected __valueFontWeight: FontWeight | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-unit-font-size'
         */
        protected __unitFontSize: number | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-unit-font-size-unit'
         */
        protected __unitFontSizeUnit: FontSizeUnit | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-unit-font-family'
         */
        protected __unitFontFamily: FontFamily | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-unit-font-style'
         */
        protected __unitFontStyle: FontStyle | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-unit-font-style'
         */
        protected __unitFontWeight: FontWeight | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-value-color'
         */
        protected __valueColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-label-color'
         */
        protected __labelColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-unit-color'
         */
        protected __unitColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-tick-color'
         */
        protected __tickColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-progress-foreground-color'
         */
        protected __progressForegroundColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-progress-background-color'
         */
        protected __progressBackgroundColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-gauge-background-color'
         */
        protected __gaugeBackgroundColor: TcHmi.Color | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-knob-color' */
        protected __knobColor: TcHmi.Color | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-knob-arrows-color' */
        protected __knobArrowsColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-set-point-marker-color' */
        protected __setPointMarkerColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute 'data-tchmi-legend-label-color' */
        protected __legendLabelColor: TcHmi.SolidColor | null | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-base-animation-time'
         */
        protected __baseAnimationTime: number | undefined;
        /**
         * Internal reference to the attribute 'data-tchmi-gauge-alignment'
         */
        protected __gaugeAlignment: TcHmiRadialGauge.GaugeAlignment | null | undefined;
        /** Saved old progress value. */
        protected __oldProgressValue: number | null;
        /** Saved old value of setPoint */
        protected __oldSetPoint: number | undefined;
        /** Stores information about drag operations */
        protected __draggingInfo: {
            isDragging: boolean;
            offset: number;
            touchIdentifier: number | null;
            originalValue: number | null;
        };
        protected __knobConfig: TcHmiRadialGauge.KnobConfig;
        /** Stores proportions for gauge layout. Is only allowed to be updated by __updateLayout. */
        protected __proportions: {
            mainTickLength: number;
            subTickLength: number;
            rangeThickness: number;
            valueThickness: number;
            labelRadius: number;
            tickRadius: number;
            valueRadius: number;
            rangeRadius: number;
            outerRadius: number;
            startAngle: number;
            endAngle: number;
            markerRadius: number;
        };
        protected __labels: {
            element: SVGTextElement;
            angle: number;
        }[];
        /** Normalized internal value */
        protected __internalValue: number;
        protected __internalMinValue: number;
        protected __internalMaxValue: number;
        protected __internalSetPoint: number | undefined;
        /** Reference to the div element used as error display (top most layer) as jquery object. */
        protected __elementInvalidNotification: HTMLElement;
        /** The interval timer for updateInvalidNotification */
        protected __updateInvalidNotificationTimer: number;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __triggerAsyncLayout: boolean;
        protected __progressAnimation: {
            fromOffset: number;
            toOffset: number;
            fromValue: number;
            toValue: number;
            duration: number;
            startTime?: number;
        } | null;
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
         * Is raised if the control are resized.
         */
        protected __onResized(_event: EventProvider.Event, _ctrl: Controls.System.TcHmiControl): void;
        protected __onMove(): void;
        /**
         * Calc position of elementInvalidNotification.
         */
        protected __updateInvalidNotification(): void;
        protected __fetchKnob(): void;
        /**
         * Resolves a LinearGradientColor object to two string representations for use in a svg fill and defs property.
         * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
         * @param gradientColor The colorObject to resolve.
         */
        private __resolveLinearGradientColorAsSvgStrings;
        /**
         * Compiles the knob SVG String and appends the svg to the DOM
         */
        protected __updateKnobColors(): void;
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMouseDownKnob(event: MouseEvent): void;
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMouseDownControl(event: MouseEvent): void;
        /**
         * Check if the angle is between to angles.
         * @param angleToCheck Angle to check.
         * @param angle1 First angle.
         * @param angle2 Second angle.
         */
        private __checkAngleBetweenAngles;
        /**
         * Returns an event handler for the mousemove event.
         */
        protected __onMouseMove(event: MouseEvent): void;
        /**
         * Returns an event handler for the mouseup event.
         */
        protected __onMouseUp(event: MouseEvent): void;
        /**
         * Returns an event handler for the touchstart event.
         */
        protected __onTouchStartKnob(event: TouchEvent): void;
        /**
         * Returns an event handler for the touchstart event.
         */
        protected __onTouchStartControl(event: TouchEvent): void;
        /**
         * Returns an event handler for the touchmove event.
         */
        protected __onTouchMove(event: TouchEvent): void;
        /**
         * Returns an event handler for the touchend event.
         */
        protected __onTouchEnd(event: TouchEvent): void;
        /**
         * Returns an event handler for the touchcancel event.
         */
        protected __onTouchCancel(event: TouchEvent): void;
        /**
         * Calculates the value relating to the screen coordinates of a mouse or touch event.
         * @param x Client x coordinate.
         * @param y Client y coordinate.
         */
        protected __calcValueFromEventCoords(x: number, y: number): number;
        /**
         * Calculates the angle in degrees corresponding to a given value. Angle increases clockwise, is always positive and can be directly used in CSS transforms.
         * @param value The number to calculate the angle from.
         */
        protected __calcAngleFromValue(value: number): number;
        /**
         * Returns an object with proportion values.
         */
        protected __getProportions(): {
            mainTickLength: number;
            subTickLength: number;
            rangeThickness: number;
            valueThickness: number;
            labelRadius: number;
            tickRadius: number;
            valueRadius: number;
            rangeRadius: number;
            outerRadius: number;
            startAngle: number;
            endAngle: number;
            markerRadius: number;
        } | undefined;
        /**
         * Relayouts the gauge by calling all necessary processors and update __proportions cache.
         */
        protected __updateLayout(): void;
        protected __doAsyncWork(timestamp?: number): void;
        /**
         * Draws the progress circles.
         * @param layout Whether to call updateLayout after drawing progress circles.
         */
        protected __drawProgressCircles(layout?: boolean): void;
        /**
         * Sets __internalMinValue/__inernalMaxValue based on __minValue/__maxValue;
         */
        protected __setInternalMinMaxValue(): void;
        /**
         * Sets the internal minValue, maxValue and value attribute for internal using.
         */
        protected __setInternalValues(): void;
        /**
         * Checks if value is valid.
         */
        protected __isValid(value: number): boolean;
        /**
         * Sets the value or setpoint depending on if a setpoint is being used. Useful for handling user interaction.
         * @param valueNew The new value.
         */
        protected __setValueOrSetPoint(valueNew: number | null): void;
        /**
         * Gets the value or setpoint depending on if a setpoint is being used. Useful for handling user interaction.
         */
        protected __getValueOrSetPoint(): number;
        /**
         * Sets the value attribute.
         * @param valueNew The new value for value.
         */
        setValue(valueNew: number | null): void;
        /**
         * Sets the value attribute, regardless of user interaction.
         * @param valueNew The new value for value.
         */
        protected __setValue(valueNew: number | null): void;
        /**
         * Returns the current value of vinternalValue (only valid values).
         * @returns The current value of internalValue.
         */
        getValue(): number | undefined;
        /**
         * Processes the current value of attribute value.
         */
        protected __processValue(): void;
        /**
         * Sets the setPoint attribute.
         * @param valueNew The new value for setPoint.
         */
        setSetPoint(valueNew: number | null): void;
        /**
         * Sets the setPoint attribute, regardless of user interaction.
         * @param valueNew The new value for setPoint.
         */
        protected __setSetPoint(valueNew: number | null): void;
        /**
         * Returns the current value of setPoint.
         * @returns The current value of setPoint.
         */
        getSetPoint(): number | undefined;
        /**
         * Processes the current referenceValue of attribute set point.
         */
        protected __processSetPoint(): void;
        /**
         * Create the the element that displays the set point
         */
        protected __createSetPointElement(): void;
        /**
         * Remove the element that displays the setPoint
         */
        protected __removeSetPointElement(): void;
        /**
         * Updates the setPoint.
         * @param value The value to update to.
         */
        private __updateSetPoint;
        /**
         * Sets the minValue attribute.
         * @param valueNew The new value for minValue.
         */
        setMinValue(valueNew: number | null): void;
        /**
         * Returns the current value of minValue.
         * @returns The current value of minValue.
         */
        getMinValue(): number | undefined;
        /**
         * Processes the current value of attribute minvalue.
         */
        protected __processMinValue(): void;
        /**
         * Sets the maxValue attribute.
         * @param valueNew The new value for maxValue.
         */
        setMaxValue(valueNew: number | null): void;
        /**
         * Returns the current value of maxValue.
         * @returns The current value of maxValue.
         */
        getMaxValue(): number | undefined;
        /**
         * Processes the current value of attribute maxvalue.
         */
        protected __processMaxValue(): void;
        /**
         * Sets the step attribute.
         * @param valueNew The new value for step.
         */
        setStep(valueNew: number | null): void;
        /**
         * Returns the current value of step.
         * @returns The current value of step.
         */
        getStep(): number | undefined;
        /**
         * Processes the current value of attribute step.
         */
        protected __processStep(): void;
        /**
         * Sets the value of the valueFormat order attribute.
         * @param value The new valueFormat method.
         */
        setValueFormat(valueNew: TcHmi.IFunction<string> | null): void;
        /**
         * The watch callback for the valueFormat object resolver.
         */
        protected __onResolverForValueFormatWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<IFunction<string>>): void;
        /**
         * Gets the current valueFormat method.
         * @returns the current valueFormat method.
         */
        getValueFormat(): IFunction<string> | null | undefined;
        /**
         * Processes the current valueFormat method
         */
        protected __processValueFormat(): void;
        /**
         * Executes the current valueFormat function.
         * @param value The value to format.
         */
        private __executeValueFormatFunction;
        /**
         * Sets the range attribute.
         * @param valueNew The new value for range.
         */
        setRange(valueNew: TcHmiRadialGauge.Range[] | null): void;
        /**
         * The watch callback for the range object resolver.
         */
        protected __onResolverForRangeWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiRadialGauge.Range[]>): void;
        /**
         * Returns the current value of range.
         * @returns The current value of range.
         */
        getRange(): TcHmiRadialGauge.Range[] | undefined;
        /**
         * Processes the current value of attribute range.
         */
        protected __processRange(layout?: boolean): void;
        /**
         * Sets the tickDefinition attribute.
         * @param valueNew The new value for tickDefinition.
         */
        setTickDefinition(valueNew: TcHmiRadialGauge.TickDefinition | null): void;
        /**
         * The watch callback for the tickDefinition object resolver.
         */
        protected __onResolverForTickDefinitionWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiRadialGauge.TickDefinition>): void;
        /**
         * Returns the current value of tickDefinition.
         * @returns The current value of tickDefinition.
         */
        getTickDefinition(): TcHmiRadialGauge.TickDefinition | null | undefined;
        /**
         * Processes the current value of attribute tickdefinition.
         */
        protected __processTickDefinition(layout?: boolean): void;
        /**
         * Sets the startPosition attribute.
         * @param valueNew The new value for startPosition.
         */
        setStartPosition(valueNew: number | null): void;
        /**
         * Returns the current value of startPosition.
         * @returns The current value of startPosition.
         */
        getStartPosition(): number | undefined;
        /**
         * Processes the current value of attribute startPosition.
         */
        protected __processStartPosition(): void;
        /**
         * Sets the endPosition attribute.
         * @param valueNew The new value for endPosition.
         */
        setEndPosition(valueNew: number | null): void;
        /**
         * Returns the current value of endPosition.
         * @returns The current value of endPosition.
         */
        getEndPosition(): number | undefined;
        /**
         * Processes the current value of attribute endposition.
         */
        protected __processEndPosition(): void;
        /**
         * Sets the showLabels attribute.
         * @param valueNew The new value for showLabels.
         */
        setShowLabels(valueNew: boolean | null): void;
        /**
         * Returns the current value of showLabels.
         * @returns The current value of showLabels.
         */
        getShowLabels(): boolean | undefined;
        /**
         * Processes the current value of attribute showlabels.
         */
        protected __processShowLabels(layout?: boolean): void;
        /**
         * Sets the value of the labelFormat order attribute.
         * @param valueNew The new labelFormat method.
         */
        setLabelFormat(valueNew: TcHmi.IFunction<string> | null): void;
        /**
         * The watch callback for the labelFormat object resolver.
         */
        protected __onResolverForLabelFormatWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<IFunction<string>>): void;
        /**
         * Gets the current labelFormat method.
         * @returns the current labelFormat method.
         */
        getLabelFormat(): IFunction<string> | null | undefined;
        /**
         * Processes the current labelFormat method
         */
        protected __processLabelFormat(): void;
        /**
         * Executes the current labelFormat function.
         * @param value The value to format.
         */
        private __executeLabelFormatFunction;
        /**
         * Sets the start-from-zero attribute.
         * @param valueNew The new value for start-from-zero.
         */
        setStartFromZero(valueNew: boolean | null): void;
        /**
         * Returns the current value of start-from-zero.
         * @returns The current value of start-from-zero.
         */
        getStartFromZero(): boolean | undefined;
        /**
         * Processes the current value of attribute start-from-zero.
         */
        protected __processStartFromZero(): void;
        /**
         * Sets the editable attribute.
         * @param valueNew The new value for editable.
         */
        setEditable(valueNew: boolean | null): void;
        /**
         * Returns the current value of editable.
         * @returns The current value of editable.
         */
        getEditable(): boolean | undefined;
        /**
         * Processes the current value of attribute editable.
         */
        protected __processEditable(layout?: boolean): void;
        /**
         * Sets the ignoreInvalidValues attribute.
         * @param valueNew The new value for ignoreInvalidValues.
         */
        setIgnoreInvalidValues(valueNew: boolean | null): void;
        /**
         * Returns the current value of ignoreInvalidValues.
         * @returns The current value of ignoreInvalidValues.
         */
        getIgnoreInvalidValues(): boolean | undefined;
        /**
         * Processes the current value of attribute ignoreInvalidValues.
         */
        protected __processIgnoreInvalidValues(): void;
        /**
         * Sets the inputProcessingPoint attribute.
         * @param valueNew The new value for inputProcessingPoint.
         */
        setInputProcessingPoint(valueNew: Helpers.InputProcessingPoint | keyof typeof Helpers.InputProcessingPoint | null): void;
        /**
         * Returns the current value of inputProcessingPoint.
         * @returns The current value of inputProcessingPoint.
         */
        getInputProcessingPoint(): Helpers.InputProcessingPoint | undefined;
        /**
         * Processes the current InputProcessingPoint attribute value.
         */
        __processInputProcessingPoint(): void;
        /**
         * Updates the knob position.
         * @param value The value to update to.
         */
        private __updateEditKnob;
        /**
         * Sets the clickAnywhereToEdit attribute.
         * @param valueNew The new value for clickAnywhereToEdit.
         */
        setClickAnywhereToEdit(valueNew: boolean | null): void;
        /**
         * Returns the current value of clickAnywhereToEdit.
         * @returns The current value of clickAnywhereToEdit.
         */
        getClickAnywhereToEdit(): boolean | undefined;
        /**
         * Processes the current value of attribute clickAnywhereToEdit.
         */
        protected __processClickAnywhereToEdit(): void;
        /**
         * Sets the showValueText attribute.
         * @param valueNew The new value for showValueText.
         */
        setShowValueText(valueNew: boolean | null): void;
        /**
         * Returns the current value of showValueText.
         * @returns The current value of showValueText.
         */
        getShowValueText(): boolean | undefined;
        /**
         * Processes the current value of attribute showValueText.
         */
        protected __processShowValueText(): void;
        /**
         * Sets the showTicks attribute.
         * @param valueNew The new value for showTicks.
         */
        setShowTicks(valueNew: boolean | null): void;
        /**
         * Returns the current value of showTicks.
         * @returns The current value of showTicks.
         */
        getShowTicks(): boolean | undefined;
        /**
         * Processes the current value of attribute showTicks.
         */
        protected __processShowTicks(layout?: boolean): void;
        /**
         * Sets the labelPosition attribute.
         * @param valueNew The new value for labelPosition.
         */
        setLabelPosition(valueNew: 'Inside' | 'Outside' | null): void;
        /**
         * Returns the current value of labelPosition.
         */
        getLabelPosition(): "Inside" | "Outside" | undefined;
        /**
         * Processes the current value of attribute labelposition.
         */
        protected __processLabelPosition(): void;
        /**
         * Sets the subTickPosition attribute.
         * @param valueNew The new value for labelPosition.
         */
        setSubTickPosition(valueNew: 'Inside' | 'Outside' | null): void;
        /**
         * Returns the current value of subTickPosition.
         */
        getSubTickPosition(): "Inside" | "Outside" | undefined;
        /**
         * Processes the current value of attribute subtickposition.
         */
        protected __processSubTickPosition(): void;
        /**
         * Sets the labelRange attribute.
         * @param valueNew The new value for labelRange.
         */
        setLabelRange(valueNew: number | null): void;
        /**
         * Returns the current value of labelRange.
         */
        getLabelRange(): number | null | undefined;
        /**
         * Processes the current value of attribute labelrange.
         */
        protected __processLabelRange(): void;
        /**
         * Sets the gaugeValueColor attribute.
         * @param valueNew The new value for gaugeValueColor.
         */
        setValueColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the valueColor object resolver.
         */
        protected __onResolverForValueColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of valueColor.
         */
        getValueColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute valueColor.
         */
        protected __processValueColor(): void;
        /**
         * Sets the labelColor attribute.
         * @param valueNew The new value for labelColor.
         */
        setLabelColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the labelColor object resolver.
         */
        protected __onResolverForLabelColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of labelColor.
         */
        getLabelColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute labelColor.
         */
        protected __processLabelColor(): void;
        /**
         * Sets the unitColor attribute.
         * @param valueNew The new value for unitColor.
         */
        setUnitColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the unitColor object resolver.
         */
        protected __onResolverForUnitColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of unitColor.
         */
        getUnitColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute unitColor.
         */
        protected __processUnitColor(): void;
        /**
         * Sets the tickColor attribute.
         * @param valueNew The new value for tickColor.
         */
        setTickColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the tickColor object resolver.
         */
        protected __onResolverForTickColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of tickColor.
         */
        getTickColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute tickColor.
         */
        protected __processTickColor(): void;
        /**
         * Sets the gaugeBackgroundColor attribute.
         * @param valueNew The new value for gaugeBackgroundColor.
         */
        setGaugeBackgroundColor(valueNew: Color | null): void;
        /**
         * The watch callback for the gaugeBackgroundColor object resolver.
         */
        protected __onResolverForGaugeBackgroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current value of gaugeBackgroundColor.
         */
        getGaugeBackgroundColor(): Color | null | undefined;
        /**
         * Processes the current value of attribute gaugeBackgroundColor.
         */
        protected __processGaugeBackgroundColor(): void;
        /**
         * Sets the progressForegroundColor attribute.
         * @param valueNew The new value for progressForegroundColor.
         */
        setProgressForegroundColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the progressForegroundColor object resolver.
         */
        protected __onResolverForProgressForegroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of progressForegroundColor.
         */
        getProgressForegroundColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute progressForegroundColor.
         */
        protected __processProgressForegroundColor(): void;
        /**
         * Sets the progressBackColor attribute.
         * @param valueNew The new value for progressBackgroundColor.
         */
        setProgressBackgroundColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the progressBackgroundColor object resolver.
         */
        protected __onResolverForProgressBackgroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of progressBackgroundColor.
         */
        getProgressBackgroundColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute progressBackgroundColor.
         */
        protected __processProgressBackgroundColor(): void;
        /**
         * Sets the knob color attribute.
         * @param valueNew The new value for KnobColor.
         */
        setKnobColor(valueNew: Color | null): void;
        /**
         * The watch callback for the knobColor object resolver.
         */
        protected __onResolverForKnobColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current value of KnobColor.
         */
        getKnobColor(): Color | null | undefined;
        /**
         * Processes the current value of attribute KnobColor.
         */
        protected __processKnobColor(): void;
        /**
         * Sets the knob color attribute.
         * @param valueNew The new value for KnobColor.
         */
        setKnobArrowsColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the knobArrowsColor object resolver.
         */
        protected __onResolverForKnobArrowsColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of KnobColor.
         */
        getKnobArrowsColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute KnobColor.
         */
        protected __processKnobArrowsColor(): void;
        /**
         * Sets the baseAnimationTime attribute.
         * @param valueNew The new value for baseAnimationTime.
         */
        setBaseAnimationTime(valueNew: number | null): void;
        /**
         * Returns the current value of baseAnimationTime.
         */
        getBaseAnimationTime(): number | undefined;
        /**
         * Processes the current value of attribute baseAnimationTime.
         */
        protected __processBaseAnimationTime(): void;
        /**
         * Sets the unit attribute.
         * @param valueNew The new value for Unit.
         */
        setUnit(valueNew: string | null): void;
        /**
         * Returns the current value of Unit.
         * @returns The current value of Unit.
         */
        getUnit(): string | undefined;
        /**
         * Processes the current value of attribute Unit.
         */
        protected __processUnit(): void;
        /**
         * Sets the font size attribute.
         * @param valueNew The new value for labelFontSize.
         */
        setLabelFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of labelFontSize.
         * @returns The current value of labelFontSize.
         */
        getLabelFontSize(): number | undefined;
        /**
         * Processes the current value of attribute labelfontsize.
         */
        protected __processLabelFontSize(): void;
        /**
         * Sets the font size unit attribute.
         * @param valueNew The new value for labelFontSizeUnit.
         */
        setLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of labelFontSizeUnit.
         * @returns The current value of labelFontSizeUnit.
         */
        getLabelFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current value of attribute labelfontsizeunit.
         */
        protected __processLabelFontSizeUnit(): void;
        /**
         * Sets the font family attribute.
         * @param valueNew The new value for labelFontFamily.
         */
        setLabelFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of labelFontFamily.
         * @returns The current value of labelFontFamily.
         */
        getLabelFontFamily(): string | null | undefined;
        /**
         * Processes the current value of attribute labelfontfamily.
         */
        protected __processLabelFontFamily(): void;
        /**
         * Sets the font style attribute.
         * @param valueNew The new value for labelFontStyle.
         */
        setLabelFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of labelFontStyle.
         * @returns The current value of labelFontStyle.
         */
        getLabelFontStyle(): FontStyle | undefined;
        /**
         * Processes the current value of attribute labelfontstyle.
         */
        protected __processLabelFontStyle(): void;
        /**
         * Sets the font weight attribute.
         * @param valueNew The new value for labelFontWeight.
         */
        setLabelFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of labelFontWeight.
         * @returns The current value of labelFontWeight.
         */
        getLabelFontWeight(): FontWeight | undefined;
        /**
         * Processes the current value of attribute labelfontweight.
         */
        protected __processLabelFontWeight(): void;
        /**
         * Sets the font size attribute.
         * @param valueNew The new value for ValueFontSize.
         */
        setValueFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of ValueFontSize.
         * @returns The current value of ValueFontSize.
         */
        getValueFontSize(): number | undefined;
        /**
         * Processes the current value of attribute Valuefontsize.
         */
        protected __processValueFontSize(): void;
        /**
         * Sets the font size unit attribute.
         * @param valueNew The new value for ValueFontSizeUnit.
         */
        setValueFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of ValueFontSizeUnit.
         * @returns The current value of ValueFontSizeUnit.
         */
        getValueFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current value of attribute Valuefontsizeunit.
         */
        protected __processValueFontSizeUnit(): void;
        /**
         * Sets the font family attribute.
         * @param valueNew The new value for ValueFontFamily.
         */
        setValueFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of ValueFontFamily.
         * @returns The current value of ValueFontFamily.
         */
        getValueFontFamily(): string | null | undefined;
        /**
         * Processes the current value of attribute Valuefontfamily.
         */
        protected __processValueFontFamily(): void;
        /**
         * Sets the font style attribute.
         * @param valueNew The new value for ValueFontStyle.
         */
        setValueFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of ValueFontStyle.
         * @returns The current value of ValueFontStyle.
         */
        getValueFontStyle(): FontStyle | undefined;
        /**
         * Processes the current value of attribute Valuefontstyle.
         */
        protected __processValueFontStyle(): void;
        /**
         * Sets the font weight attribute.
         * @param valueNew The new value for ValueFontWeight.
         */
        setValueFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of ValueFontWeight.
         * @returns The current value of ValueFontWeight.
         */
        getValueFontWeight(): FontWeight | undefined;
        /**
         * Processes the current value of attribute Valuefontweight.
         */
        protected __processValueFontWeight(): void;
        /**
         * Sets the font size attribute.
         * @param valueNew The new Unit for UnitFontSize.
         */
        setUnitFontSize(valueNew: number | null): void;
        /**
         * Returns the current Unit of UnitFontSize.
         * @returns The current Unit of UnitFontSize.
         */
        getUnitFontSize(): number | undefined;
        /**
         * Processes the current Unit of attribute Unitfontsize.
         */
        protected __processUnitFontSize(): void;
        /**
         * Sets the font size unit attribute.
         * @param valueNew The new Unit for UnitFontSizeUnit. Possible Units: px, %
         */
        setUnitFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current Unit of UnitFontSizeUnit.
         * @returns The current Unit of UnitFontSizeUnit.
         */
        getUnitFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current Unit of attribute Unitfontsizeunit.
         */
        protected __processUnitFontSizeUnit(): void;
        /**
         * Sets the font family attribute.
         * @param valueNew The new Unit for UnitFontFamily.
         */
        setUnitFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current Unit of UnitFontFamily.
         * @returns The current Unit of UnitFontFamily.
         */
        getUnitFontFamily(): string | null | undefined;
        /**
         * Processes the current Unit of attribute Unitfontfamily.
         */
        protected __processUnitFontFamily(): void;
        /**
         * Sets the font style attribute.
         * @param valueNew The new Unit for UnitFontStyle.
         */
        setUnitFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current Unit of UnitFontStyle.
         * @returns The current Unit of UnitFontStyle.
         */
        getUnitFontStyle(): FontStyle | undefined;
        /**
         * Processes the current Unit of attribute Unitfontstyle.
         */
        protected __processUnitFontStyle(): void;
        /**
         * Sets the font weight attribute.
         * @param valueNew The new Unit for UnitFontWeight.
         */
        setUnitFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current Unit of UnitFontWeight.
         * @returns The current Unit of UnitFontWeight.
         */
        getUnitFontWeight(): FontWeight | undefined;
        /**
         * Processes the current Unit of attribute Unitfontweight.
         */
        protected __processUnitFontWeight(): void;
        /**
         * Sets the set point marker color attribute.
         * @param valueNew The new value for set point marker color.
         */
        setSetPointMarkerColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the set point marker color object resolver.
         */
        protected __onResolverForSetPointMarkerColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of setPointMarkerColor.
         * @returns The current value of SetPointMarkerColor.
         */
        getSetPointMarkerColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute setPointMarkerColor.
         */
        protected __processSetPointMarkerColor(): void;
        /**
         * Sets the gaugeAlignment attribute to a new value.
         * @param valueNew The new value for the gaugeAlignment attribute.
         */
        setGaugeAlignment(valueNew: TcHmiRadialGauge.GaugeAlignment | null): void;
        /**
         * Returns the current  value of the gaugeAlignment attribute
         */
        getGaugeAlignment(): TcHmiRadialGauge.GaugeAlignment | null | undefined;
        /**
         * Processes the current value of the gaugeAlignment attribute.
         */
        protected __processGaugeAlignment(): void;
        /**
         * Sets the markers attribute.
         * @param valueNew The new value for markers.
         */
        setMarkers(valueNew: TcHmiRadialGauge.Marker[] | null): void;
        /**
         * The watch callback for the markers object resolver.
         */
        protected __onResolverForMarkersWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiRadialGauge.Marker[]>): void;
        /**
         * Returns the current value of markers.
         */
        getMarkers(): TcHmiRadialGauge.Marker[] | undefined;
        /**
         * Processes the current value of attribute markers.
         */
        protected __processMarkers(): void;
        /**
         * Create the elements that display the markers
         */
        protected __createMarkerElements(): void;
        /**
         * Remove the elements that display the markers
         */
        protected __removeMarkerElements(): void;
        /**
         * Updates the markers.
         */
        private __updateMarkers;
        /**
         * Sets the value of legendFontFamily
         * @param valueNew The new value for legendFontFamily
         */
        setLegendFontFamily(valueNew: FontFamily | null): void;
        /**
         * Gets the value of legendFontFamily
         * @returns The current value of legendFontFamily
         */
        getLegendFontFamily(): string | undefined;
        /**
         * Processes legendFontFamily
         */
        protected __processLegendFontFamily(): void;
        /**
         * Sets the value of legendFontSize
         * @param valueNew The new value for legendFontSize
         */
        setLegendFontSize(valueNew: number | null): void;
        /**
         * Gets the value of legendFontSize
         * @returns The current value of legendFontSize
         */
        getLegendFontSize(): number | undefined;
        /**
         * Processes legendFontSize
         */
        protected __processLegendFontSize(): void;
        /**
         * Gets the value of legendFontSizeUnit
         * @returns The current value of legendFontSizeUnit
         */
        getLegendFontSizeUnit(): string;
        /**
         * Sets the legend font style and calls the associated process function.
         * @param valueNew The new value for legendFontStyle
         */
        setLegendFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of legendFontStyle.
         * @returns The current value of legendFontStyle.
         */
        getLegendFontStyle(): FontStyle | undefined;
        /**
         * Processes the current legendFontStyle.
         */
        protected __processLegendFontStyle(): void;
        /**
         * Sets the value of legendFontWeight
         * @param valueNew The new value for legendFontWeight
         */
        setLegendFontWeight(valueNew: FontWeight | null): void;
        /**
         * Gets the value of legendFontWeight
         * @returns The current value of legendFontWeight
         */
        getLegendFontWeight(): FontWeight | undefined;
        /**
         * Processes legendFontWeight
         */
        protected __processLegendFontWeight(): void;
        /**
         * Sets the legendLabelColor attribute.
         * @param valueNew The new value for labelColor.
         */
        setLegendLabelColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the labelColor object resolver.
         */
        protected __onResolverForLegendLabelColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of labelColor.
         */
        getLegendLabelColor(): SolidColor | null | undefined;
        /**
         * Processes the current value of attribute labelColor.
         */
        protected __processLegendLabelColor(): void;
    }
    namespace TcHmiRadialGauge {
        interface Range {
            color: TcHmi.SolidColor;
            start: number;
            end: number;
        }
        interface Marker {
            color: TcHmi.SolidColor;
            label: string;
            value: number;
        }
        interface MarkerSvgs {
            svgElementLine: SVGLineElement | undefined;
            svgElementTriangle: SVGPolygonElement | undefined;
        }
        interface TickDefinition {
            mainTickRange: number;
            subTickRange: number;
        }
        interface KnobConfig {
            imagePath: string;
            width: number;
            height: number;
            offsetX: number;
            offsetY: number;
        }
        type GaugeAlignment = 'Start' | 'Center' | 'End';
    }
}
//# sourceMappingURL=TcHmiRadialGauge.d.ts.map