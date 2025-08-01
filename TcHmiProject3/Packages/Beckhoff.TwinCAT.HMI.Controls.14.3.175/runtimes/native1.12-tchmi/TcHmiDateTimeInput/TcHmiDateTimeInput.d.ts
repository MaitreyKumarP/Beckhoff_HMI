declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiDateTimeInput extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as  html element. */
        protected __elementTemplateRoot: HTMLElement;
        /** Reference to the underlying html text textarea or input element as jquery object. */
        protected __elementInput: HTMLInputElement;
        /** Reference to the underlying button element as html element. */
        protected __elementButton: HTMLElement;
        /** Reference to the DateTimePicker*/
        protected __dateTimePicker: TcHmi.Controls.Beckhoff.TcHmiDateTimePicker;
        /** Reference to the invalid notification label element as jquery object. */
        protected __elementInvalidNotificationLabel: HTMLLabelElement;
        /**
         * Is set to true if the control is locked and to false if the control is unlocked.
         * When the control is locked, calls to setValue are ignored.
         */
        protected __locked: boolean;
        /**  Internal reference to the attribute "data-tchmi-value" */
        protected __value: string | null | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-min-value" (iso timestamp string)
         */
        protected __minValue: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-max-value" (iso timestamp string)
         */
        protected __maxValue: string | undefined;
        /** Internal reference to the attribute 'data-tchmi-ignore-invalid-values' */
        protected __ignoreInvalidValues: boolean | undefined;
        protected __valueBuffer: Helpers.ValueBuffer<string | null> | undefined;
        /** Value at focusin time */
        protected __oldValue: string | null | undefined;
        /** Last input string which could be converted into a number */
        protected __lastValidValue: string | undefined;
        /** Last input string which could be converted into a number */
        protected __lastInput: string | undefined;
        /** Internal reference to the attribute "data-tchmi-text-horizontal-alignment */
        protected __valueHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
        /** Internal reference to the attribute "data-tchmi-content-padding" */
        protected __contentPadding: TcHmi.FourSidedCss | null | undefined;
        /** Internal reference to the attribute "data-tchmi-text-font-size" */
        protected __valueFontSize: number | undefined;
        /** Internal reference to the attribute "data-tchmi-text-font-size-unit" */
        protected __valueFontSizeUnit: FontSizeUnit | undefined;
        /** Internal reference to the attribute "data-tchmi-text-font-family" */
        protected __valueFontFamily: FontFamily | null | undefined;
        /** Internal reference to the attribute "data-tchmi-text-font-style" */
        protected __valueFontStyle: FontStyle | undefined;
        /** Internal reference to the attribute "data-tchmi-text-font-style" */
        protected __valueFontWeight: FontWeight | undefined;
        /** Internal reference to the attribute "data-tchmi-placeholder" */
        protected __placeholder: string | null | undefined;
        /** Internal reference to the attribute "data-tchmi-text-color" */
        protected __valueColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute "data-tchmi-auto-focus-out" */
        protected __autoFocusOut: boolean | undefined;
        /** Internal reference to the attribute "data-tchmi-auto-select-text" */
        protected __autoSelectText: boolean | undefined;
        /** Internal reference to the attribute "data-tchmi-reset-to-last-valid-value" */
        protected __resetToLastValidValue: boolean | undefined;
        /** Internal reference to the attribute 'data-tchmi-button-position' */
        protected __buttonPosition: 'Left' | 'Right' | undefined;
        /**
         * ReadOnly state of the control.
         */
        protected __isReadOnly: boolean | undefined;
        /** Interaction has started so we should raise event after it. */
        protected __triggerUIFinishedOnBlur: boolean;
        /** Localization */
        protected __localizedInput: {
            key: string;
            parameters: any[];
        };
        protected __localizationReader: Locale.LocalizationReader | undefined;
        /** Regex to validate a string after RFC 3339, the subset of ISO 8601 that is used in JsonSchema. See https://regexr.com/5cnhd for tests.*/
        private __REGEX_ISO_8601;
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
         * Validates the value of the html input element. Input must conform to the ISO 8601 standard.
         * Higlights the controls if value is out of range.
         */
        protected __validateInput(): void;
        /**
         * Handle submit on keydown
         */
        protected __onKeydown(event: KeyboardEvent): void;
        /**
         * Handle value change on "input" to support virtual keyboards on mobile devices
         * which caches the value while editing (iOS for example)
         * input is fired when the keys has changed text
         */
        protected __onInput(_event: Event): void;
        /**
         * Is raised if text is pasted into the underlying textarea element.
         */
        protected __onPaste(_event: Event): void;
        /**
         * Is raised if text is cut from the underlying textarea element.
         */
        protected __onCut(_event: Event): void;
        /**
         * Is raised if the underlying input element gets the focus.
         */
        protected __onFocusIn(event: FocusEvent): void;
        /**
         * Is raised if the underlying input element has lost its focus.
         */
        protected __onFocusOut(event: FocusEvent): void;
        /**
         * Performs the steps after a focusout event was received.
         * @param event The focusout event.
         */
        protected __performFocusOut(event: Event): void;
        /**
         * Is raised after successful interaction with a TcHmiKeyboard control with indirect input.
         * @param event The event.
         */
        protected __onIndirectInputFinished(_event: Event): void;
        /**
         * Is raised after canceled interaction with a TcHmiKeyboard control with indirect input.
         * @param event The event.
         */
        protected __onIndirectInputCanceled(event: Event): void;
        /**
         * Is called when the button is clicked.
         */
        protected __onClick(_event: MouseEvent): void;
        /**
         * Is called value of the date time picker control changed.
         */
        protected __onValueChanged(): void;
        /**
         * Is called if the input of the date time picker control was canceled.
         */
        protected __onCancel(_event: EventProvider.Event): void;
        /**
         * Is called if the input of the date time picker control was confirmed.
         */
        protected __onConfirmed(_event: EventProvider.Event): void;
        /**
         * Change the localization of the input elements validity
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        __setLocalizedInputValidity(key: string, ...parameters: any[]): void;
        /**
         * Sets the value of the member variable "value" if the new value is not equal to the current value
         * or the current control instance is locked and calls the associated process function (processValue) after that.
         * @param valueNew The new value for value.
         */
        setValue(valueNew: string | null): void;
        /**
         * Sets the value of the member variable "value" regardless of lock.
         * @param valueNew The new value for value
         * @param writeToInput Whether to write the value back to the input element.
         */
        protected __setValue(valueNew: string | null | undefined, writeToInput?: boolean): void;
        /**
         * Returns the current value of the member variable value.
         * @returns the current value of the member variable value.
         */
        getValue(): string | null | undefined;
        /**
         * Processes the current value of value and forwards it to the value attribute of the underlying input variable.
         * The current value of value is only forwarded if it is no binding expression.
         * @param writeToInput Whether to write the value back to the input element.
         */
        protected __processValue(writeToInput?: boolean): void;
        /**
         * Sets the value of MinValue
         * @param valueNew The new value for MinValue
         */
        setMinValue(valueNew: string | null): void;
        /**
         * Gets the value of MinValue
         */
        getMinValue(): string | undefined;
        /**
         * Processes the value of MinValue
         */
        protected __processMinValue(): void;
        /**
         * Sets the value of MaxValue
         * @param valueNew The new value for MaxValue
         */
        setMaxValue(valueNew: string | null): void;
        /**
         * Gets the value of MaxValue
         */
        getMaxValue(): string | undefined;
        /**
         * Processes the value of MaxValue
         */
        protected __processMaxValue(): void;
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
         * Sets the text horizontal alignment and calls the associated process function (processValueHorizontalAlignment).
         * @param valueNew The new value for textHorizontalAlignment.
         */
        setValueHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
        /**
         * Returns the current value of textHorizontalAlignment.
         * @returns The current value of textHorizontalAlignment.
         */
        getValueHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Processes the current textHorizontalAlignment attribute value.
         */
        protected __processValueHorizontalAlignment(): void;
        /**
         * Sets the contentPadding value and calls the associated process function (processContentPadding) after it.
         * @param valueNew The new value for the contentPadding attribute as object.
         */
        setContentPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the contentPadding object resolver.
         */
        protected __onResolverForContentPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Returns the current contentPadding value.
         * @returns The current value of the contentPadding member variable as json in string format.
         */
        getContentPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current contentPadding attribute.
         */
        protected __processContentPadding(): void;
        /**
         * Sets the font size and calls the associated process function (processValueFontSize).
         * @param valueNew The new value for textFontSize.
         */
        setValueFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of textFontSize.
         * @returns The current value of textFontSize.
         */
        getValueFontSize(): number | undefined;
        /**
         * Processes the current textFontSize attribute value.
         */
        protected __processValueFontSize(): void;
        /**
         * Sets the font size and calls the associated process function (processValueFontSizeUnit).
         * @param valueNew The new value for textFontSize.
         */
        setValueFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of textFontSizeUnit.
         */
        getValueFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current textFontSizeUnit attribute value.
         */
        protected __processValueFontSizeUnit(): void;
        /**
         * Sets the font family and calls the associated process function (processValueFontFamily).
         * @param valueNew The new value for textFontFamily.
         */
        setValueFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of textFontFamily.
         * @returns The current value of textFontFamily.
         */
        getValueFontFamily(): string | null | undefined;
        /**
         * Processes the current textFontFamily attribute value.
         */
        protected __processValueFontFamily(): void;
        /**
         * Sets the font style and calls the associated process function (processValueFontStyle).
         * @param valueNew The new value for textFontStyle.
         */
        setValueFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of textFontStyle.
         * @returns The current value of textFontStyle.
         */
        getValueFontStyle(): FontStyle | undefined;
        /**
         * Processes the current textFontStyle attribute value.
         */
        protected __processValueFontStyle(): void;
        /**
         * Sets the font weight and calls the associated process function (processValueFontWeight).
         * @param valueNew The new value for textFontWeight.
         */
        setValueFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of textFontWeight.
         * @returns The current value of textFontWeight.
         */
        getValueFontWeight(): FontWeight | undefined;
        /**
         * Processes the current textFontWeight attribute value.
         */
        protected __processValueFontWeight(): void;
        /**
         * Sets the placeholder value and calls the associated process function (processPlaceholder).
         * @param valueNew The new value for placeholder.
         */
        setPlaceholder(valueNew: string | null): void;
        /**
         * Returns the current value of placeholder.
         * @returns The current value of placeholder.
         */
        getPlaceholder(): string | null | undefined;
        /**
         * Processes the current placeholder attribute value.
         */
        protected __processPlaceholder(): void;
        /**
         * Sets the text color and calls the associated process function (processValueColor).
         * @param valueNew The new value for textColor.
         */
        setValueColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the textColor object resolver.
         */
        protected __onResolverForValueColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of textColor.
         * @returns The current value of textColor.
         */
        getValueColor(): SolidColor | null | undefined;
        /**
         * Processes the current textColor attribute value.
         */
        protected __processValueColor(): void;
        /**
         * Sets the auto focus out attribute and calls the associated process function (processAutoFocusOut).
         * @param valueNew The new value for autoFocusOut.
         */
        setAutoFocusOut(valueNew: boolean | null): void;
        /**
         * Returns the current value of autoFocusOut.
         * @returns The current value of autoFocusOut.
         */
        getAutoFocusOut(): boolean | undefined;
        /**
         * Processes the current autoFocusOut attribute value.
         */
        protected __processAutoFocusOut(): void;
        /** Lock handling */
        /**
         * Lock the control. Calls to setValue will be ignored until control is unlocked.
         */
        __lock(): void;
        /**
         * Unlocks the control.
         */
        __unlock(): void;
        /**
         * Checks if the Control is deactivated and adjusts the visualization
         */
        protected __processControlActivation(): void;
        /**
         * Processes the current isEnabled attribute value.
         */
        __processIsEnabled(): void;
        /**
         * Processes the current AccessConfig attribute value.
         */
        __processAccessConfig(): void;
        /**
         * Sets the isReadOnly attribute and calls the associated process function (processIsReadOnly).
         * @preserve (Part of the public API)
         */
        setIsReadOnly(valueNew: boolean | null): void;
        /**
         * Returns the effective value of isReadOnly based on own and parent isReadOnly variable.
         */
        getIsReadOnly(): boolean | undefined;
        /**
         * Process IsReadOnly.
         */
        protected __processIsReadOnly(): void;
        /**
         * Sets the auto select text attribute and calls the associated process function (processAutoSelectText).
         * @param valueNew The new value for autoSelectText.
         */
        setAutoSelectText(valueNew: boolean | null): void;
        /**
         * Returns the current value of autoSelectText.
         * @returns The current value of autoSelectText.
         */
        getAutoSelectText(): boolean | undefined;
        /**
         * Sets the resetToLastValidValue attribute.
         * @param valueNew The new value for resetToLastValidValue.
         */
        setResetToLastValidValue(valueNew: boolean | null): void;
        /**
         * Returns the current value of resetToLastValidValue.
         * @returns The current value of resetToLastValidValue.
         */
        getResetToLastValidValue(): boolean | undefined;
        /**
         * Processes the current ResetToLastValidValue attribute value.
         */
        __processResetToLastValidValue(): void;
        /**
         * Sets the buttonPosition attribute.
         * @param valueNew The new value for buttonPosition.
         */
        setButtonPosition(valueNew: 'Left' | 'Right' | null): void;
        /**
         * Returns the current value of buttonPosition.
         * @returns The current value of buttonPosition.
         */
        getButtonPosition(): "Left" | "Right" | undefined;
        /**
         * Processes the current value of attribute buttonPosition.
         */
        protected __processButtonPosition(): void;
        /**
         * Sets the focus to the html input element.
         */
        focus(): void;
    }
}
//# sourceMappingURL=TcHmiDateTimeInput.d.ts.map