declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiEventLine extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor of the control
         * @param element Element from HTML (internal, do not use)
         * @param pcElement precompiled Element (internal, do not use)
         * @param attrs Attributes defined in HTML in a special format (internal, do not use)
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /**HTML-ElementTemplate root*/
        protected __elementTemplateRoot: HTMLElement;
        /**HTML-ElementTemplate for the severity icon */
        protected __elementIcon: HTMLElement;
        /**HTML-ElementTemplate for the message display*/
        protected __elementMessageContainer: HTMLElement;
        /**HTML-ElementTemplate for the message display*/
        protected __elementMessage: HTMLElement;
        /** The message displayed in the control*/
        protected __messageContent: string;
        /**HTML-ElementTemplate for link button*/
        protected __elementButton: HTMLElement;
        /** The elements that from the displayed message */
        protected __messageFormat: TcHmiEventLine.MessageFormat | undefined;
        /**mousedown boolean for the document */
        protected __mouseDown: boolean;
        /**text color */
        protected __textColor: SolidColor | null | undefined;
        /**text font size */
        protected __textFontSize: number | undefined;
        /**text font size unit */
        protected __textFontSizeUnit: FontSizeUnit | undefined;
        /**font family of the text*/
        protected __textFontFamily: FontFamily | null | undefined;
        /**font style of the text*/
        protected __textFontStyle: FontStyle | undefined;
        /**font weight of the text*/
        protected __textFontWeight: FontWeight | undefined;
        /**tchmi region to set the target content */
        protected __targetRegion: TcHmi.Controls.System.TcHmiRegion | null | undefined;
        /**target content, content to event-page of the application */
        protected __targetContent: string | null | undefined;
        /**  Internal reference to the attribute "data-tchmi-ignore-escape-sequences" */
        protected __ignoreEscapeSequences: boolean | undefined;
        /**  Internal reference to the attribute "data-tchmi-show-message-if-empty" */
        protected __showMessageIfEmpty: boolean | undefined;
        /**Filter for the displayed Events */
        protected __filter: Filter | null | undefined;
        /**The criteria according to which the events are sorted */
        protected __sorting: TcHmi.SortingInfo[] | undefined;
        /**Eventlist */
        protected __event: TcHmi.Server.Events.Message | TcHmi.Server.Events.Alarm | TcHmi.Server.Events.PayloadEvent | undefined;
        /** The Id of the event subscription*/
        protected __subscriptionId: number;
        /**Server Interval */
        protected __serverInterval: number | null | undefined;
        /**text overflow*/
        protected __textOverflow: TcHmiEventLine.TextOverflow | undefined;
        /** factor for the marquee animation speed */
        protected __marqueeSpeedFactor: number | null | undefined;
        /** Localization */
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
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
        /** */
        protected __updateSubscription(): void;
        /**
         * Handles the response of the subscription.
         */
        protected __serverResponseHandler(data: Server.IResultObject): void;
        /**
         * Update displayed Event
         */
        protected __updateEventLine(): void;
        /**
         * Executes the given format function.
         * @param format The format function to execute.
         * @param value The value to format.
         */
        private __executeFormatFunction;
        /**
         * Set the icon of the EventLine
         * @param severity
         */
        protected __setIconBySeverity(severity: Server.Events.Severity | null): void;
        /**
         * Check if an object is an event property
         * @param obj Object to check
         */
        protected __isEventProperty(obj: TcHmiEventLine.EventProperty | TcHmiEventLine.VerbatimText): obj is TcHmiEventLine.EventProperty;
        /**
         * Check if an object is a verbatim text
         * @param obj Object to check
         */
        protected __isVerbatimText(obj: TcHmiEventLine.EventProperty | TcHmiEventLine.VerbatimText): obj is TcHmiEventLine.VerbatimText;
        /**
         * eventhandler function for onPressed raises logic
         */
        protected __onPressed(_event: TcHmi.EventProvider.Event): void;
        /**
         * eventhandler function for mouse up
         */
        protected __onMouseUp(_event: MouseEvent): void;
        /**
         * eventhandler function for mouse enter
         */
        protected __onMouseEnter(_event: MouseEvent): void;
        /**
         * eventhandler function for mouse down
         */
        protected __onMouseDown(_event: MouseEvent): void;
        /**
         * eventhandler function for mouse leave
         */
        protected __onMouseLeave(_event: MouseEvent): void;
        /**
         * eventhandler function for touch start
         */
        protected __onTouchStart(_event: TouchEvent): void;
        /**
         * eventhandler function for touch start end or cancel
         */
        protected __onTouchEndOrCancel(_event: TouchEvent): void;
        /**
         * eventhandler function for mouse down
         */
        protected __onDocumentMouseUp(_event: MouseEvent): void;
        /**
         * Event callback for rezise event
         */
        protected __onResized(_event: TcHmi.EventProvider.Event): void;
        /**
         * Add an element to be localized.
         * @param element The element.
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
        /**
         * Remove a localized element.
         * @param element The element to remove.
         */
        __removeLocalizedElement(element: HTMLElement): void;
        /**
         * Sets the messageFormat value and calls the associated process function.
         * @param valueNew The new value for messageFormat.
         */
        setMessageFormat(valueNew: TcHmiEventLine.MessageFormat | null): void;
        /**
         * The watch callback for the messageFormat object resolver.
         */
        protected __onResolverForMessageFormatWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiEventLine.MessageFormat>): void;
        /**
         * Returns the current value of messageFormat.
         */
        getMessageFormat(): TcHmiEventLine.MessageFormat | undefined;
        /**
         * Processes the current messageFormat value.
         */
        protected __processMessageFormat(): void;
        /**
         * Sets the serverInterval value and calls the associated process function.
         * @param valueNew The new value for serverInterval.
         */
        setServerInterval(valueNew: number | null): void;
        /**
         * Returns the current value of serverInterval.
         */
        getServerInterval(): number | null | undefined;
        /**
         * Processes the current serverInterval value.
         */
        protected __processServerInterval(): void;
        /**
         * Sets the filter value and calls the associated process function.
         * @param valueNew The new value for filter.
         */
        setFilter(valueNew: Filter | null): void;
        /**
         * The watch callback for the filter object resolver.
         */
        protected __onResolverForFilterWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Filter>): void;
        /**
         * Returns the current value of filter.
         * @returns the current value of filter.
         */
        getFilter(): Filter | null | undefined;
        /**
         * Processes the current filter value.
         */
        protected __processFilter(): void;
        /**
         * Sets the value of the member variable "sorting" if the new value is not equal to the current value
         * and calls the associated process function (processSorting) after that.
         * @param valueNew The new value for sorting.
         */
        setSorting(valueNew: TcHmi.SortingInfo[] | null): void;
        /**
         * The watch callback for the sorting object resolver
         */
        protected __onResolverForSortingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmi.SortingInfo[]>): void;
        /**
         * Returns the current value of the member variable sorting.
         */
        getSorting(): SortingInfo[] | undefined;
        /**
         * Processes the current value of sorting.
         */
        protected __processSorting(): void;
        /**
         * Sets the content value and calls the associated process function (processContent).
         * @param valueNew The new value for the target region attribute
         *
         */
        setTargetRegion(valueNew: TcHmi.Controls.System.TcHmiRegion | null): void;
        /**
         * Returns the current targetRegion value.
         * @returns The current value of the content member variable as string. Relative path value.
         */
        getTargetRegion(): TcHmi.Controls.System.TcHmiRegion | null | undefined;
        /**
         * Processes the current TargetContent attribute value.
         */
        protected __processTargetRegion(): void;
        /**
         * Sets the content value and calls the associated process function (processContent).
         * @param valueNew The new value for the content attribute as string. Relative path value.
         *
         */
        setTargetContent(valueNew: string | null): void;
        /**
         * Returns the current TargetContent value.
         * @returns The current value of the content member variable as string. Relative path value.
         */
        getTargetContent(): string | null | undefined;
        /**
         * Processes the current TargetContent attribute value.
         */
        protected __processTargetContent(): void;
        /**
         * Sets the text color and calls the associated process function (processTextColor).
         * @param valueNew The new value for textFColor.
         */
        setTextColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the textColor object resolver.
         */
        protected __onResolverForTextColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of textColor.
         * @returns The current value of textColor.
         */
        getTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current textColor attribute value.
         */
        protected __processTextColor(): void;
        /**
         * Sets the font size and calls the associated process function (processTextFontSize).
         * @param valueNew The new value for textFontSize.
         */
        setTextFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of textFontSize.
         * @returns The current value of textFontSize.
         */
        getTextFontSize(): number | undefined;
        /**
         * Processes the current textFontSize attribute value.
         */
        protected __processTextFontSize(): void;
        /**
         * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
         * @param valueNew The new value for textFontSizeUnit.
         */
        setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of textFontSizeUnit.
         * @returns The current value of textFontSizeUnit.
         */
        getTextFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current textFontSizeUnit attribute value.
         */
        protected __processTextFontSizeUnit(): void;
        /**
         * Sets the font family and calls the associated process function (processTextFontFamily).
         * @param valueNew The new value for textFontFamily.
         */
        setTextFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of textFontFamily.
         * @returns The current value of textFontFamily.
         */
        getTextFontFamily(): string | null | undefined;
        /**
         * Processes the current textFontFamily attribute value.
         */
        protected __processTextFontFamily(): void;
        /**
         * Sets the font style and calls the associated process function (processTextFontStyle).
         * @param valueNew The new value for textFontStyle.
         */
        setTextFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of textFontStyle.
         * @returns The current value of textFontStyle.
         */
        getTextFontStyle(): FontStyle | undefined;
        /**
         * Processes the current textFontStyle attribute value.
         */
        protected __processTextFontStyle(): void;
        /**
         * Sets the font weight and calls the associated process function (processTextFontWeight).
         * @param valueNew The new value for textFontWeight.
         */
        setTextFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of textFontWeight.
         * @returns The current value of textFontWeight.
         */
        getTextFontWeight(): FontWeight | undefined;
        /**
         * Processes the current textFontWeight attribute value.
         */
        protected __processTextFontWeight(): void;
        /**
         * Sets the value of the member variable IgnoreEscapeSequences.
         * @param valueNew The new value for IgnoreEscapeSequences
         */
        setIgnoreEscapeSequences(valueNew: boolean | null | undefined): void;
        /**
         * Returns the current value of IgnoreEscapeSequences.
         * @returns The current value of IgnoreEscapeSequences.
         */
        getIgnoreEscapeSequences(): boolean | undefined;
        /**
         * Processes the current IgnoreEscapeSequences value.
         */
        protected __processIgnoreEscapeSequences(): void;
        /**
         * Sets the value of the member variable ShowMessageIfEmpty.
         * @param valueNew The new value for ShowMessageIfEmpty
         */
        setShowMessageIfEmpty(valueNew: boolean | null | undefined): void;
        /**
         * Returns the current value of ShowMessageIfEmpty.
         * @returns The current value of ShowMessageIfEmpty.
         */
        getShowMessageIfEmpty(): boolean | undefined;
        /**
         * Processes the current ShowMessageIfEmpty value.
         */
        protected __processShowMessageIfEmpty(): void;
        /**
         * Sets the value of the member variable TextOverflow.
         * @param valueNew The new value for TextOverflow
         */
        setTextOverflow(valueNew: TcHmiEventLine.TextOverflow | null | undefined): void;
        /**
         * Returns the current value of TextOverflow.
         * @returns The current value of TextOverflow.
         */
        getTextOverflow(): TcHmiEventLine.TextOverflow | undefined;
        /**
         * Processes the current TextOverflow value.
         */
        protected __processTextOverflow(): void;
        /**
         * Sets the value of the member variable MarqueeSpeedFactor.
         * @param valueNew The new value for MarqueeSpeedFactor
         */
        setMarqueeSpeedFactor(valueNew: number | null | undefined): void;
        /**
         * Returns the current value of MarqueeSpeedFactor.
         * @returns The current value of MarqueeSpeedFactor.
         */
        getMarqueeSpeedFactor(): number | null | undefined;
        /**
         * Processes the current MarqueeSpeedFactor value.
         */
        protected __processMarqueeSpeedFactor(): void;
    }
    namespace TcHmiEventLine {
        interface EventProperty {
            name: string;
            format?: TcHmi.IFunction<string>;
        }
        interface VerbatimText {
            text: string;
            format?: TcHmi.IFunction<string>;
        }
        type MessageFormat = (EventProperty | VerbatimText)[];
        type TextOverflow = 'Ellipsis' | 'MarqueeLeftToRight' | 'MarqueeRightToLeft';
    }
}
//# sourceMappingURL=TcHmiEventLine.d.ts.map