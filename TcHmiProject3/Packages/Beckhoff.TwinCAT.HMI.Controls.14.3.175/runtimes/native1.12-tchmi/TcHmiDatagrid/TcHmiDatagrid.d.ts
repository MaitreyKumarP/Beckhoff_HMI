declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiDatagrid extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: JQuery;
        /** Reference to the outer container element */
        protected __elementOuter: JQuery;
        /** Reference to the div containing the header table */
        protected __elementHeaderScroll: JQuery;
        /** Reference to the header table */
        protected __elementHeaderTable: JQuery;
        /** Reference to the div containig the main table */
        protected __elementDataScroll: JQuery;
        /** Reference to the main table body */
        protected __elementDataTableBody: JQuery;
        /** The Loading spinner HTML element */
        protected __elementLoadingSpinner: HTMLElement;
        /** Message element in the data table */
        protected __elementMessage: HTMLElement;
        protected __elementSentinelTop: HTMLElement;
        protected __elementSentinelBottom: HTMLElement;
        /**
         * Internal reference to the attribute "data-tchmi-data-schema"
         * The schema describing the __data attribute
         */
        protected __data: TcHmiDatagrid.PagedArray<any> | undefined;
        protected __oldData: TcHmiDatagrid.PagedArray<any> | undefined;
        protected __overriddenSrcData: any[] | null | undefined;
        /** Internal reference to the attribute "data-tchmi-data-symbol" */
        protected __dataSymbol: Symbol<any[]> | undefined | null;
        /** The schema describing the dataSymbol object */
        protected __dataSymbolSchema: JsonSchema | null | undefined;
        protected __destroyDataSymbolWatch: DestroyFunction | null;
        protected __pagingInfo: {
            usePaging: boolean;
            subscriptionId: number | null;
            buffer: number;
            theoreticalOffset: number;
            actualOffset: number;
            maxEntries: number;
            filterMap: number[];
            timing: {
                isScrolling: boolean;
                timeoutID: number | null;
                lastRequestTime: number;
                lastUpdateTime: number;
                minTimeout: number;
                responseLatencies: number[];
                updateTimings: number[];
                firstResponsePending: boolean;
            };
        };
        protected __dataSymbolTransform: ((rowData: any) => any) | null;
        protected __dataSymbolExpressionWatchDestroyer: DestroyFunction | null;
        protected __dataSymbolExpression: SymbolExpression | null;
        protected __formatMax: string | null | {
            name: string;
            formatMax: string;
        }[];
        /** Internal reference to the attribute "data-tchmi-src-column" */
        protected __srcColumn: TcHmiDatagrid.Column[] | TcHmiDatagrid.SimpleColumn | undefined;
        /** Internal reference to the attribute "data-tchmi-sorting" */
        protected __sorting: SortingInfo[] | undefined;
        protected __internalSorting: SortingInfo[];
        /** Internal reference to the attribute "data-tchmi-filter" */
        protected __filter: Filter | null | undefined;
        protected __filterInstance: TcHmi.FilterInstance | null;
        protected __rowClassesProvider: TcHmi.IFunction<string[]> | undefined;
        protected __indirectWrite: boolean | undefined;
        /** Internal reference to the attribute "data-tchmi-src-column" */
        protected __internalSrcColumn: (TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn)[];
        /**  Internal reference to the attribute " data-tchmi-header-height" */
        protected __headerHeight: number | undefined;
        /**  Internal reference to the attribute " data-tchmi-header-height-unit" */
        protected __headerHeightUnit: DimensionUnit | undefined;
        /** Internal reference to the attribute "data-tchmi-header-cell-padding" */
        protected __headerCellPadding: TcHmi.FourSidedCss | null | undefined;
        /**  Internal reference to the attribute "data-tchmi-row-height" */
        protected __rowHeight: number | undefined;
        /** Internal reference to the attribute "data-tchmi-text-color". */
        protected __headerTextColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute "data-tchmi-row-numbers-text-color". */
        protected __rowNumbersTextColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute "data-tchmi-table-border-color". */
        protected __tableBorderColor: TcHmi.SolidColor | null | undefined;
        /** Internal reference to the attribute "data-tchmi-table-border-width". */
        protected __tableBorderWidth: number | undefined;
        /** Internal reference to the attribute "data-tchmi-table-border-style". */
        protected __tableBorderStyle: TcHmi.BorderStyle | null | undefined;
        /** Internal reference to the attribute "data-tchmi-header-background" */
        protected __headerBackgroundColor: TcHmi.Color | null | undefined;
        /** Internal reference to the attribute "data-tchmi-row-numbers-background" */
        protected __rowNumbersBackgroundColor: TcHmi.Color | null | undefined;
        /** Internal reference to the attribute "data-tchmi-cell-content-padding" */
        protected __cellContentPadding: TcHmi.FourSidedCss | null | undefined;
        protected __showRowNumbers: boolean | undefined;
        protected __rowNumbersResizable: boolean | undefined;
        protected __rowNumbersStartNumber: number | undefined;
        protected __rowNumbersWidth: number | undefined;
        protected __rowNumbersWidthUnit: DimensionUnit | undefined;
        protected __rowNumbersHorizontalAlignment: TcHmi.HorizontalAlignment | undefined;
        protected __rowNumbersVerticalAlignment: TcHmi.VerticalAlignment | undefined;
        protected __rowNumbersCellPadding: TcHmi.FourSidedCss | null | undefined;
        protected __headerFontFamily: FontFamily | null | undefined;
        protected __headerFontSize: number | undefined;
        protected __headerFontSizeUnit: FontSizeUnit | undefined;
        protected __headerFontStyle: FontStyle | undefined;
        protected __headerFontWeight: FontWeight | undefined;
        protected __gridFontFamily: FontFamily | null | undefined;
        protected __gridFontSize: number | undefined;
        protected __gridFontSizeUnit: FontSizeUnit | undefined;
        protected __gridFontStyle: FontStyle | undefined;
        protected __gridFontWeight: FontWeight | undefined;
        protected __rowNumbersFontFamily: FontFamily | null | undefined;
        protected __rowNumbersFontSize: number | undefined;
        protected __rowNumbersFontSizeUnit: FontSizeUnit | undefined;
        protected __rowNumbersFontStyle: FontStyle | undefined;
        protected __rowNumbersFontWeight: FontWeight | undefined;
        /**
         * ReadOnly state of the control.
         */
        protected __isReadOnly: boolean | undefined;
        protected __dateTimePickerInstance: TcHmi.Controls.Beckhoff.TcHmiDateTimePicker | undefined;
        protected __timespanPickerInstance: TcHmi.Controls.Beckhoff.TcHmiTimespanPicker | undefined;
        protected __timePickerConfirmedEventDestroyer: DestroyFunction | null;
        protected __timePickerCanceledEventDestroyer: DestroyFunction | null;
        /** Regex to validate a string after RFC 3339, the subset of ISO 8601 that is used in JsonSchema. See https://regexr.com/5cnhd for tests.*/
        private __REGEX_ISO_8601_DATETIME;
        /** Regex to validate an ISO 8601 duration. See https://regexr.com/5d2q2 for tests. */
        private __REGEX_ISO_8601_TIMESPAN;
        /** Store the currently edited numeric inputs state in case we need to reset it. */
        protected __numericInputResetState: {
            value: string;
            selectionStart: number | null;
            selectionEnd: number | null;
            selectionDirection: "forward" | "backward" | "none" | null;
        };
        /** Stores information about the current lock state and which cell is locked */
        protected __lockState: {
            row: number;
            column: number;
            propertyName: string | null;
            rowElement: HTMLTableRowElement;
            editStarted: boolean;
            targetElement: HTMLElement | undefined;
        } | null;
        /** Header width and minWidth for each column including row numbers */
        protected __columnWidths: TcHmiDatagrid.ColumnWidth[];
        protected __draggingInfo: {
            isDragging: boolean;
            columnIndex: number | null;
            startingPoint: number | null;
            offset: number | null;
        };
        protected __lastRemovedSorting: {
            name?: string;
            position: number;
        } | null;
        protected __filterSortMap: number[] | null;
        protected __dataLength: number;
        protected __sortTouches: TcHmiDatagrid.SortTouchInfo[];
        /** Returns if the srcData has changed. */
        protected __srcDataHasChanged: boolean;
        /** Stores the selected cell */
        protected __selectedCell: {
            rowIndex: number | null;
            columnIndex: number;
        } | null;
        protected __scrollInfo: {
            scrollTop: number;
            scrollLeft: number;
            updateScrollPosition: boolean;
            firstIndex: number;
            oldFirstIndex: number;
            rowCount: number;
            oldRowCount: number;
            buffer: number;
        };
        protected __destroyOnVisibilityChanged: DestroyFunction | null;
        protected __comboboxDropdowns: Dictionary<HTMLElement>;
        protected __selectedCombobox: {
            cell: HTMLTableCellElement;
            column: TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn;
            row: number;
            combobox: HTMLElement;
            dropdown: HTMLElement;
        } | null;
        protected __resizeElementMinWidth: number;
        protected __contentWidth: number | null;
        protected __contentHeight: number | null;
        protected __preparedValues: TcHmiDatagrid.UserInput[];
        protected __storage: LocalStorage<{
            sorting: SortingInfo[];
            columnWidths: number[];
        }, {
            sorting: ReturnType<TcHmiDatagrid['getSorting']>;
            columnWidths: string[];
        }> | undefined;
        protected __buttonLeaveDestroyer: (() => void) | null;
        protected __buttonEnterDestroyer: (() => void) | null;
        protected __lastReportedErrorDetail: IErrorDetails | undefined;
        protected __comparisonOptions: Exclude<Parameters<typeof tchmi_equal>[2], boolean | undefined>;
        /** Localization */
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizedValidityElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        protected __localizationReader: Locale.LocalizationReader | undefined;
        protected __asyncWorkData: TcHmiDatagrid.IControlSpecificData;
        /**
         * DEPRECATED! Use __data instead.
         * @deprecated Use __data instead.
         */
        protected get __srcData(): any[] | undefined;
        /**
         * DEPRECATED! Use __data instead.
         * @deprecated Use __data instead.
         */
        protected set __srcData(value: any[] | undefined);
        /**
         * DEPRECATED! Use __oldData instead.
         * @deprecated Use __oldData instead.
         */
        protected get __oldSrcData(): any[] | undefined;
        /**
         * DEPRECATED! Use __oldData instead.
         * @deprecated Use __oldData instead.
         */
        protected set __oldSrcData(value: any[] | undefined);
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
         * Add an element to be localized.
         * @param element The element.
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        private __addLocalizedElement;
        /**
         * Add an input element validity to be localized.
         * @param element The element.
         * @param key The localization key.
         * @param parameters Optional parameters to pass to tchmi_format_string.
         */
        private __addLocalizedValidityElement;
        /**
         * Remove a localized element.
         * @param element The element to remove.
         */
        private __removeLocalizedElement;
        /**
         * Remove a localized input validity element.
         * @param element The element to remove.
         */
        private __removeLocalizedValidityElement;
        private __recalcRowCount;
        /**
         * Returns an event handler function for the onResized event.
         */
        protected __onResized(_event: EventProvider.Event, _control: Controls.System.TcHmiControl): void;
        /**
         * Callback function for onUserDataChanged event.
         */
        protected __onUserDataChanged(): void;
        protected __doAsyncWork(timestamp?: number): void;
        /**
         * Gets every unit element and its width and updates the padding of the corrosponding input element.
         */
        protected __updateUnitPadding(): void;
        /**
         * Apply decimal digits to a value.
         */
        protected __applyDecimalDigits(value: number, decimalDigits: number, decimalPrecisionMode?: TcHmiNumericInput.DecimalPrecisionMode): string;
        /**
         * Floor a numeric value to specific decimal digits
         */
        protected __floorToDecimals(value: number, decimals: number): string;
        /**
         * Ceil a numeric value to specific decimal digits
         */
        protected __ceilToDecimals(value: number, decimals: number): string;
        /**
         * Recalculates the widths of all columns.
         */
        protected __recalcAllColumnWidths(force?: boolean): void;
        protected __setCheckboxRadioButtonSize(): void;
        /**
         * Clears the header and builds a new one
         */
        protected __buildHeader(): void;
        /**
         * Clears the table data and fills the table with the current srcData
         */
        protected __updateTable(updateType: TcHmiDatagrid.__updateTableType): void;
        /**
         * Add the message that no elements were received.
         */
        protected __addNoElementsMessage(): void;
        /**
         * Sets the scroll position to the position stored in __scrollInfo
         */
        protected __updateScrollPosition(): void;
        /**
         * Returns an event handler for the mousedown event of the dropdown elements.
         */
        protected __onMousedown(event: MouseEvent): void;
        /**
         * Returns an event handler for the click event of the dropdown elements.
         */
        protected __onItemClick(event: MouseEvent): void;
        /**
         * Opens the dropdown of the combobox in the specified cell.
         * @param cell The cell containing the combobox.
         */
        protected __openCombobox(cell: HTMLTableCellElement): void;
        /**
         * Closes the open combobox.
         */
        protected __closeCombobox(): void;
        protected __resizeDropdownBoxCb(): void;
        /**
         * Is called from updateTable for each row to append it to the tbody element.
         * @param data The data set with the information about the row.
         * @param body The body to append the row.
         * @param row The information about the position of object. Number between 0 and srcData.length -1
         */
        protected __createRow(dataIndex: number, row: number, rowToRecycle?: HTMLTableRowElement, lockedCell?: number): HTMLTableRowElement;
        /**
         * Fills the given cell with the correct control and the given value.
         * The properties of the current internalColumn have to be executed even if the html element of the cell already exists.
         * Other "cell properties" like cellContentPadding only have to be set when the html element of the cell does not exists as thoses will be set by attribute processors or something similar.
         * @param elementCell The cell to fill.
         * @param internalColumn The column definition.
         * @param value The value the cell should display.
         */
        protected __fillCell(elementCell: HTMLTableCellElement, internalColumn: TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn, value: any, isUserInput?: boolean): void;
        /**
         * Resizes the specified column and remembers the result in __columnWidths
         * @param columnIndex The index of the column to resize. 0 is row numbers column.
         * @param newWidth The new width of the column. Will be set to minWidth if it is smaller. This value already respects the widthUnit.
         * @param override Set to true to resize a column that is marked as not resizable and process the size even when it has not changed. Useful for changes in widthUnit.
         */
        protected __resizeColumn(columnIndex: number, newWidth: number, override?: boolean): void;
        /**
         * Is raised if the span in the first table is mousedown.
         * @param event The event of mouseDown
         */
        protected __onColumnMouseDown(event: MouseEvent): void;
        /**
         * Is raised if the span in the first table is moved.
         * @param event The event of mouseMove
         */
        protected __onColumnMouseMove(event: MouseEvent): void;
        /**
         * Is raised if the span in the first table is mouseup.
         */
        protected __onColumnMouseUp(): void;
        /**
         * Is raised if the span in the first table is double clicked.
         * @param event The event of mouseDblClick.
         */
        protected __onColumnMouseDblClick(event: MouseEvent): void;
        /**
         * Is raised if the header element is keyup. Sort the data table.
         * @param event The event of mouseUp
         */
        protected __onSortClick(event: MouseEvent): void;
        /**
         * Handles touchstart events on table headers for sorting
         */
        protected __onSortTouchStart(event: TouchEvent): void;
        /**
         * Handles touchmove events on table headers for sorting
         */
        protected __onSortTouchMove(event: TouchEvent): void;
        /**
         * Handles touchend events on table headers for sorting
         */
        protected __onSortTouchEnd(event: TouchEvent): void;
        /**
         * Handles touchcancel event on table headers for sorting
         */
        protected __onSortTouchCancel(event: TouchEvent): void;
        /**
         * Modifies the sorting after a click or touch on a sort element.
         * @param sortElement The sort element.
         * @param composing Whether the sorting is modified by composing multiple sort criteria.
         */
        protected __modifySorting(sortElement: HTMLElement, composing: boolean): void;
        /**
         * Generate a map that specifies the indices of the data according to the sort criteria in __sorting
         */
        protected __filterAndSort(): void;
        /**
         * Is raised if the data table is scrolled.
         * @param event The event of scroll
         */
        protected __onScroll(event: Event): void;
        /**
         * Updates the height of the divs above and below the data table to display correct scrollbars.
         */
        protected __updateSentinels(): void;
        /**
         * Is raised if the TextBox or overlay div of TextBlock gets the focus.
         * @param elemCell The event of focus
         */
        protected __onFocusElement(event: Event): void;
        /**
         * Is raised if the TextBox or overlay div of TextBlock loose the focus and set the new value to srcData.
         * @param event The focus out event.
         */
        protected __onFocusElementOut(event: Event): void;
        /**
         * Is raised after successful interaction with a TcHmiKeyboard control with indirect input.
         * @param event
         */
        protected __onIndirectInputAccepted(event: Event): void;
        /**
         * Is raised after canceled interaction with a TcHmiKeyboard control with indirect input.
         * @param event
         */
        protected __onIndirectInputCanceled(event: Event): void;
        /**
         * Event handler for the click event of empty areas.
         * @param event The event object
         */
        protected __onEmptyAreaClick(event: MouseEvent): void;
        /**
         * Event handler for the keydown event of textboxes.
         * @param event The event object
         */
        protected __onKeydown(event: KeyboardEvent): void;
        /**
         * Event handler for the beforeinput event of textboxes.
         * @param event The event object
         */
        protected __onBeforeinput(event: InputEvent): void;
        /**
         * Event handler for the input event of textboxes.
         * Does validation only. Changed data is processed in focusout
         * @param event The event object
         */
        protected __onInput(event: InputEvent): void;
        /**
         * Event handler for the mousedown event of checkboxes.
         * @param event The event object
         */
        protected __onCheckboxMouseDown(event: MouseEvent): void;
        /**
         * Is raised if the CheckBox, ToggleSwitch or RadioButton state is changed.
         * @param elemCell The change event.
         */
        protected __onValueChange(event: Event): void;
        /**
         * Accepts the value entered into a textbox, writes it to the source data and optionally unlocks the table cell.
         * @param inputElement The input element that the value was written into.
         * @param unlock If true, the table cell will be unlocked.
         */
        protected __acceptTextboxInput(inputElement: HTMLInputElement, unlock: boolean): void;
        /**
         * Modifies the srcData when a radio button is pressed. Returns the new value of the modified row and column.
         * @param row The actively manipulated row.
         * @param column The index of the column to modify.
         * @param rowElement The actively manipulated row element.
         * @param forceWrite Force writing the symbol.
         * @param symbolWriteCallback The callback function handling the symbol write response.
         */
        protected __modifyRadioButton(row: number, column: number, rowElement?: HTMLElement, forceWrite?: boolean, symbolWriteCallback?: (data: IErrorDetails | null) => void): {
            convertedValue: boolean;
            needSorting: boolean;
        } | null;
        /**
         * Event handler for the mousedown event of buttons.
         * @param event The event object
         */
        protected __onButtonMousedown(event: MouseEvent): void;
        /**
         * Event handler for the mousedown event of buttons.
         * @param event The event object
         */
        protected __onButtonMouseup(event: MouseEvent): void;
        /**
         * Event handler for the mousedown event of buttons.
         * @param event The event object
         */
        protected __onButtonMouseleave(event: MouseEvent): void;
        /**
         * Event handler for the mousedown event of buttons.
         * @param event The event object
         */
        protected __onButtonMouseenter(event: MouseEvent): void;
        /**
         * Event handler for the touchstart event of buttons.
         * @param event The event object
         */
        protected __onButtonTouchstart(event: TouchEvent): void;
        /**
         * Event handler for the touchend event of buttons.
         * @param event The event object
         */
        protected __onButtonTouchend(event: TouchEvent): void;
        /**
         * Handle interaction with the spinboxes plus or minus button.
         * @param columnDefinition The column definition of the cell that contains the spinbox.
         * @param data The current row data.
         * @param targetButton The button that was interacted with.
         */
        protected __useSpinbox(columnDefinition: TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn, data: any, inputElement: HTMLInputElement, targetButton: HTMLElement): number | null;
        /**
         * Handle interaction with the button of a date time input.
         * @param columnDefinition The column definition of the cell that contains the date time input.
         * @param srcDataRow The index of the current row in the source data.
         * @param inputElement The input element of the date time input.
         * @param buttonElement The button element of the date time input.
         * @param cellElement The cell that contains the date time input.
         */
        protected __useDateTimePicker(columnDefinition: TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn, srcDataRow: number, inputElement: HTMLInputElement, buttonElement: HTMLElement, cellElement: HTMLElement): void;
        /**
         * Handle interaction with the button of a timespan input.
         * @param columnDefinition The column definition of the cell that contains the timespan input.
         * @param srcDataRow The index of the current row in the source data.
         * @param inputElement The input element of the timespan input.
         * @param buttonElement The button element of the timespan input.
         * @param cellElement The cell that contains the timespan input.
         */
        protected __useTimespanPicker(columnDefinition: TcHmiDatagrid.Column | TcHmiDatagrid.SimpleColumn, srcDataRow: number, inputElement: HTMLInputElement, buttonElement: HTMLElement, cellElement: HTMLElement): void;
        /**
         * Modifies the srcData. Returns the new value of the modified row and column.
         * @param valueNew The new value.
         * @param row The row to modify.
         * @param column The index of the column to modify.
         * @param rowElement The actively manipulated row element.
         * @param forceWrite Force writing the symbol.
         * @param symbolWriteCallback The callback function handling the symbol write response.
         */
        protected __modifySrcData(valueNew: any, row: number, column: number, rowElement?: HTMLElement, forceWrite?: boolean, symbolWriteCallback?: (data: IErrorDetails | null) => void): {
            convertedValue: any;
            needSorting: boolean;
        } | null;
        /**
         * Reads the property of an object that can be found by following the specified path.
         * @param obj The object containing the property to read.
         * @param path The path where the property can be found.
         */
        protected __readObjectProperty(obj: object, path: string): any;
        /**
         * Writes the property of an object that is specified by the given path.
         * @param obj The object which will be written to.
         * @param path The path where to write.
         * @param valueNew The value to write.
         */
        protected __writeObjectProperty(obj: Dictionary<any>, path: string, valueNew: any): void;
        /**
         * Sets the value of the member variable "srcColumn" if the new value is not equal to the current value
         * and calls the associated process function (processSrcColumn) after that.
         * @param valueNew The new value for srcColumn.
         */
        setSrcColumn(valueNew: TcHmiDatagrid.Column[] | TcHmiDatagrid.SimpleColumn | null): void;
        /**
         * The watch callback for the srcColumn object resolver.
         */
        protected __onResolverForSrcColumnWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<TcHmiDatagrid.Column[] | TcHmiDatagrid.SimpleColumn>): void;
        /**
         * Returns the current value of the member variable SrcColumn.
         */
        getSrcColumn(): TcHmiDatagrid.SimpleColumn | TcHmiDatagrid.Column[] | undefined;
        /**
         * Processes the current value of srcColumn.
         * UpdateTable is called with srcColumn (Array.<DGColumnDefinition>) and null as parameter.
         */
        protected __processSrcColumn(): void;
        /**
         * Validates the value of the html input element.
         * Higlights the controls if value is out of range.
         */
        protected __validateTextValue(input: HTMLInputElement, maxTextLength: number | undefined): boolean;
        /**
         * Executes the given format function.
         * @param format The format function to execute.
         * @param value The value to format.
         */
        private __executeFormatFunction;
        /**
         * Sets the value of the member variable "srcData" if the new value is not equal to the current value
         * and calls the associated process function (processSrcData) after that.
         * @param valueNew The new value for srcData.
         */
        setSrcData(valueNew: any[] | null): void;
        private __setSrcData;
        /**
         * The watch callback for the srcData object resolver
         */
        protected __onResolverForSrcDataWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<any[]>): void;
        /**
         * Returns the current value of the member variable srcData.
         */
        getSrcData(): any[] | undefined;
        /**
         * Processes the current value of srcData.
         * UpdateTable is called with null and srcData (Array.<Object>) as parameter.
         */
        protected __processSrcData(): void;
        /**
         * Function to process the user input and write changes to the data.
         * @param writeResponseCallback The callback function handling the symbol write response.
         **/
        writePreparedValues(writeResponseCallback?: (data: IErrorDetails) => void): void;
        /**
         * Function to reset the user input and write changes to the data.
         **/
        resetPreparedValues(): void;
        /**
         * Function to check if there is user input for a specific cell
         * @param value the original value
         * @param row the row of the cell
         * @param column the column of the cell
         */
        protected __checkForIndirectWriteValue(value: any, row: number, column: number): {
            value: any;
            isUserInput: boolean;
        };
        /**
         * @param valueNew
         */
        setDataSymbol(valueNew: TcHmi.Symbol<any[]> | null): void;
        /**
         */
        getDataSymbol(): Symbol<any[]> | null | undefined;
        /**
         * Processes the dataSymbol.
         * @param unsubscribeOnly Should be set to true when this method is called from __detach. Prevents a new subscription being created after the existing subscription was unsubscribed.
         */
        protected __processDataSymbol(unsubscribeOnly?: boolean): void;
        /**
         * Updates the data symbol paging parameters.
         */
        protected __updatePaging(force?: boolean): void;
        /**
         * Callback function for dataSymbol paging.
         */
        protected __onDataSymbolPage(data: Server.IResultObject<unknown, any[]>): void;
        /**
         * Checks all levels of a server response for errors and returns any error details that are found.
         * @param data The server resonse.
         */
        protected __checkServerErrors(data: Server.IResultObject): IErrorDetails | null;
        /**
         * Callback function for dataSymbol watch.
         */
        protected __onDataSymbolWatch(data: TcHmi.Symbol.IReadResultObject<any[]>): void;
        __setDataSymbolTransform(valueNew: ((rowData: any) => any) | null): void;
        /**
         * Sets the value of the member variable "sorting" if the new value is not equal to the current value
         * and calls the associated process function (processSorting) after that.
         * @param valueNew The new value for sorting.
         */
        setSorting(valueNew: SortingInfo[] | null): void;
        /**
         * The watch callback for the sorting object resolver
         */
        protected __onResolverForSortingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SortingInfo[]>): void;
        /**
         * Returns the current value of the member variable sorting.
         */
        getSorting(): SortingInfo[] | undefined;
        /**
         * Processes the current value of sorting.
         */
        protected __processSorting(): void;
        /**
         * Sets the value of the member variable "filter" if the new value is not equal to the current value
         * and calls the associated process function (processFilter) after that.
         * @param valueNew The new value for filter.
         */
        setFilter(valueNew: Filter | null): void;
        /**
         * The watch callback for the filter object resolver
         */
        protected __onResolverForFilterWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Filter>): void;
        /**
         * Returns the current value of the member variable filter.
         */
        getFilter(): Filter | null | undefined;
        /**
         * Processes the current value of filter.
         */
        protected __processFilter(): void;
        /**
         * Sets the value of indirectWrite
         * @param valueNew The new value for indirectWrite
         */
        setIndirectWrite(valueNew: boolean | null): void;
        /**
         * Gets the value of IndirectWrite
         * @returns The current value of IndirectWrite
         */
        getIndirectWrite(): boolean | undefined;
        /**
         * Processes IndirectWrite
         */
        protected __processIndirectWrite(): void;
        /**
         * Sets the value of the rowClassesProvider order attribute.
         * @param value The new rowClassesProvider method.
         */
        setRowClassesProvider(valueNew: TcHmi.IFunction<string[]> | null): void;
        /**
         * Gets the current rowClassesProvider method.
         * @returns the current rowClassesProvider method.
         */
        getRowClassesProvider(): IFunction<string[]> | undefined;
        /**
         * Processes the current rowClassesProvider method
         */
        protected __processRowClassesProvider(): void;
        /**
         * Executes the current rowClassesProvider function.
         * @param dataIndex The current index in the data.
         */
        private __executeRowClassesProviderFunction;
        /**
         * Set the required classes on the specified row element
         * @param row The element to set classes on
         * @param dataIndex The index of the row data in srcData
         */
        protected __setRowClasses(row: HTMLElement, dataIndex: number): void;
        /**
         * Sets the value of the member variable "headerHeight" if the new value is not equal to the current value
         * and calls the associated process function (processHeaderHeight) after that.
         * @param valueNew The new value for headerHeight.
         */
        setHeaderHeight(valueNew: number | null): void;
        /**
         * Returns the current value of the member variable headerHeight.
         */
        getHeaderHeight(): number | undefined;
        /**
         * Processes the current value of headerHeight.
         * UpdateTable is called with srcColumn (string) and null as parameter.
         */
        protected __processHeaderHeight(): void;
        /**
         * Sets the value of the member variable "headerHeightUnit" if the new value is not equal to the current value
         * and calls the associated process function (processHeaderHeightUnit) after that.
         * @param valueNew The new value for headerHeightUnit.
         */
        setHeaderHeightUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the current value of the member variable headerHeightUnit.
         */
        getHeaderHeightUnit(): DimensionUnit | undefined;
        /**
         * Processes the current value of headerHeightUnit.
         * UpdateTable is called with srcColumn (string) and null as parameter.
         */
        protected __processHeaderHeightUnit(): void;
        /**
         * Sets the value of the member variable "headerCellPadding" if the new value is not equal to the current value
         * and calls the associated process function (processHeaderCellPadding) after that.
         * @param valueNew The new value for headerCellPadding.
         */
        setHeaderCellPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the headerCellPadding object resolver
         */
        protected __onResolverForHeaderCellPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Returns the current value of the member variable headerCellPadding.
         */
        getHeaderCellPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current value of headerCellPadding.
         * UpdateTable is called with null and srcData (string) as parameter.
         */
        protected __processHeaderCellPadding(): void;
        /**
         * Sets the value of the member variable "rowHeight" if the new value is not equal to the current value
         * and calls the associated process function (processrowHeight) after that.
         * @param valueNew The new value for rowHeight.
         */
        setRowHeight(valueNew: number | null): void;
        /**
         * Returns the current value of the member variable rowHeight.
         */
        getRowHeight(): number | undefined;
        /**
         * Processes the current value of rowHeight.
         * UpdateTable is called with null and srcData (string) as parameter.
         */
        protected __processRowHeight(): void;
        /**
         * Returns the current value of the member variable rowHeightUnit.
         */
        getRowHeightUnit(): string;
        /**
         * Sets the table-border-color attribute value and calls the associated process function (processBorderColor).
         * @param valueNew The new attribute value.
         */
        setTableBorderColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the tableBorderColor object resolver
         */
        protected __onResolverForTableBorderColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current table-border-color value.
         * @returns The current attribute value.
         */
        getTableBorderColor(): SolidColor | null | undefined;
        /**
         * Processes the current table-border-color attribute.
         */
        protected __processTableBorderColor(): void;
        /**
         * Sets the Grid-width attribute value and calls the associated process function (processBorderWidth).
         * @param valueNew The new attribute value.
         */
        setTableBorderWidth(valueNew: number | null): void;
        /**
         * Returns the current table-border-width value.
         * @returns The current attribute value.
         */
        getTableBorderWidth(): number | undefined;
        /**
         * Processes the current border-width attribute.
         */
        protected __processTableBorderWidth(): void;
        /**
         * DEPRECATED! BorderWidthUnit is always 'px'. This function exists purely to avoid errors in existing projects.
         * @deprecated BorderWidthUnit is always 'px'.
         */
        setTableBorderWidthUnit(): void;
        /**
         * Returns the current table-border-width-unit value.
         * @returns The current attribute value.
         */
        getTableBorderWidthUnit(): string;
        /**
         * Internal reference to the attribute "data-tchmi-table-border-type".
         */
        setTableBorderStyle(valueNew: TcHmi.BorderStyle | null): void;
        /**
         * The watch callback for the tableBorderStyle object resolver
         */
        protected __onResolverForTableBorderStyleWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<BorderStyle>): void;
        /**
         * Returns the current table-border-style value.
         * @returns The current attribute value.
         */
        getTableBorderStyle(): BorderStyle | null | undefined;
        /**
         * Processes the current border-style attribute.
         */
        protected __processTableBorderStyle(): void;
        /**
         * Sets the value of showRowNumbers
         * @param valueNew The new value for showRowNumbers
         */
        setShowRowNumbers(valueNew: boolean | null): void;
        /**
         * Gets the value of showRowNumbers
         * @returns The current value of showRowNumbers
         */
        getShowRowNumbers(): boolean | undefined;
        /**
         * Processes showRowNumbers
         */
        protected __processShowRowNumbers(): void;
        /**
         * Sets the value of rowNumbersResizable
         * @param valueNew The new value for rowNumbersResizable
         */
        setRowNumbersResizable(valueNew: boolean | null): void;
        /**
         * Gets the value of rowNumbersResizable
         * @returns The current value of rowNumbersResizable
         */
        getRowNumbersResizable(): boolean | undefined;
        /**
         * Processes rowNumbersResizable
         */
        protected __processRowNumbersResizable(): void;
        /**
         * Sets the value of rowNumbersStartNumber
         * @param valueNew The new value for rowNumbersStartNumber
         */
        setRowNumbersStartNumber(valueNew: number | null): void;
        /**
         * Gets the value of rowNumbersStartNumber
         * @returns The current value of rowNumbersStartNumber
         */
        getRowNumbersStartNumber(): number | undefined;
        /**
         * Processes rowNumbersStartNumber
         */
        protected __processRowNumbersStartNumber(): void;
        /**
         * Sets the value of rowNumbersWidth
         * @param valueNew The new value for rowNumbersWidth
         */
        setRowNumbersWidth(valueNew: number | null): void;
        /**
         * Gets the value of rowNumbersWidth
         * @returns The current value of rowNumbersWidth
         */
        getRowNumbersWidth(): number | undefined;
        /**
         * Processes rowNumbersWidth
         */
        protected __processRowNumbersWidth(): void;
        /**
         * Sets the value of rowNumbersWidthUnit
         * @param valueNew The new value for rowNumbersWidthUnit
         */
        setRowNumbersWidthUnit(valueNew: DimensionUnit | null): void;
        /**
         * Gets the value of rowNumbersWidthUnit
         * @returns The current value of rowNumbersWidthUnit
         */
        getRowNumbersWidthUnit(): DimensionUnit | undefined;
        /**
         * Processes rowNumbersWidthUnit
         */
        protected __processRowNumbersWidthUnit(): void;
        /**
         * Sets the value of rowNumbersHorizontalAlignment
         * @param valueNew The new value for rowNumbersHorizontalAlignment
         */
        setRowNumbersHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
        /**
         * Gets the value of rowNumbersHorizontalAlignment
         * @returns The current value of rowNumbersHorizontalAlignment
         */
        getRowNumbersHorizontalAlignment(): HorizontalAlignment | undefined;
        /**
         * Processes rowNumbersHorizontalAlignment
         */
        protected __processRowNumbersHorizontalAlignment(): void;
        /**
         * Sets the value of rowNumbersVerticalAlignment
         * @param valueNew The new value for rowNumbersVerticalAlignment
         */
        setRowNumbersVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
        /**
         * Gets the value of rowNumbersVerticalAlignment
         * @returns The current value of rowNumbersVerticalAlignment
         */
        getRowNumbersVerticalAlignment(): VerticalAlignment | undefined;
        /**
         * Processes rowNumbersVerticalAlignment
         */
        protected __processRowNumbersVerticalAlignment(): void;
        /**
         * Sets the value of the member variable "rowNumbersCellPadding" if the new value is not equal to the current value
         * and calls the associated process function (processRowNumbersCellPadding) after that.
         * @param valueNew The new value for rowNumbersCellPadding.
         */
        setRowNumbersCellPadding(valueNew: TcHmi.FourSidedCss | null): void;
        /**
         * The watch callback for the rowNumbersCellPadding object resolver
         */
        protected __onResolverForRowNumbersCellPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Returns the current value of the member variable rowNumbersCellPadding.
         */
        getRowNumbersCellPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current value of rowNumbersCellPadding.
         * UpdateTable is called with null and srcData (string) as parameter.
         */
        protected __processRowNumbersCellPadding(): void;
        /**
         * Sets the value of the member variable "cellContentPadding" if the new value is not equal to the current value
         * and calls the associated process function (processCellContentPadding) after that.
         * @param valueNew The new value for cellContentPadding.
         */
        setCellContentPadding(valueNew: FourSidedCss | null): void;
        /**
         * The watch callback for the cellContentPadding object resolver
         */
        protected __onResolverForCellContentPaddingWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>): void;
        /**
         * Returns the current value of the member variable cellContentPadding.
         */
        getCellContentPadding(): FourSidedCss | null | undefined;
        /**
         * Processes the current value of cellContentPadding.
         * UpdateTable is called with null and srcData (string) as parameter.
         */
        protected __processCellContentPadding(): void;
        /**
         * Sets the background value and calls the associated process function ("processHeaderBackground").
         * @param valueNew The new value for the header background attribute as object.
         * ...
         */
        setHeaderBackgroundColor(valueNew: Color | null): void;
        /**
         * The watch callback for the headerBackgroundColor object resolver
         */
        protected __onResolverForHeaderBackgroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current header background value.
         * @returns The current value of the header background member variable as json in string format.
         */
        getHeaderBackgroundColor(): Color | null | undefined;
        /**
         * Processes the current header background attribute.
         */
        protected __processHeaderBackgroundColor(): void;
        /**
         * Sets the text color and calls the associated process function (processHeaderTextColor).
         * @param valueNew The new value for textFColor.
         */
        setHeaderTextColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the headerTextColor object resolver
         */
        protected __onResolverForHeaderTextColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of headertextColor.
         * @returns The current value of headertextColor.
         */
        getHeaderTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current headertextColor attribute value.
         */
        protected __processHeaderTextColor(): void;
        /**
         * Sets the text color and calls the associated process function (processRowNumbersTextColor).
         * @param valueNew The new value for textFColor.
         */
        setRowNumbersTextColor(valueNew: SolidColor | null): void;
        /**
         * The watch callback for the rowNumbersTextColor object resolver
         */
        protected __onResolverForRowNumbersTextColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>): void;
        /**
         * Returns the current value of rowNumberstextColor.
         * @returns The current value of rowNumberstextColor.
         */
        getRowNumbersTextColor(): SolidColor | null | undefined;
        /**
         * Processes the current rowNumberstextColor attribute value.
         */
        protected __processRowNumbersTextColor(): void;
        /**
         * Sets the row numbers background value and calls the associated process function ("processRowNumbersBackground").
         * @param valueNew The new value for the row numbers background attribute.
         */
        setRowNumbersBackgroundColor(valueNew: Color | null): void;
        /**
         * The watch callback for the rowNumbersBackgroundColor object resolver
         */
        protected __onResolverForRowNumbersBackgroundColorWatchCallback(data: Symbol.ObjectResolver.IWatchResultObject<Color>): void;
        /**
         * Returns the current row numbers background value.
         * @returns The current value of the row numbers background member variable.
         */
        getRowNumbersBackgroundColor(): Color | null | undefined;
        /**
         * Processes the current row numbers background attribute.
         */
        protected __processRowNumbersBackgroundColor(): void;
        /**
         * Sets the header font family and calls the associated process function.
         * @param valueNew The new value for headerFontFamily
         */
        setHeaderFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of headerFontFamily.
         * @returns The current value of headerFontFamily.
         */
        getHeaderFontFamily(): string | null | undefined;
        /**
         * Processes the current headerFontFamily.
         */
        protected __processHeaderFontFamily(): void;
        /**
         * Sets the header font size and calls the associated process function.
         * @param valueNew The new value for headerFontSize
         */
        setHeaderFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of headerFontSize.
         * @returns The current value of headerFontSize.
         */
        getHeaderFontSize(): number | undefined;
        /**
         * Processes the current headerFontSize.
         */
        protected __processHeaderFontSize(): void;
        /**
         * Sets the header font size unit and calls the associated process function.
         * @param valueNew The new value for headerFontSizeUnit
         */
        setHeaderFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of headerFontSizeUnit.
         * @returns The current value of headerFontSizeUnit.
         */
        getHeaderFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current headerFontSizeUnit.
         */
        protected __processHeaderFontSizeUnit(): void;
        /**
         * Sets the header font style and calls the associated process function.
         * @param valueNew The new value for headerFontStyle
         */
        setHeaderFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of headerFontStyle.
         * @returns The current value of headerFontStyle.
         */
        getHeaderFontStyle(): FontStyle | undefined;
        /**
         * Processes the current headerFontStyle.
         */
        protected __processHeaderFontStyle(): void;
        /**
         * Sets the header font family and calls the associated process function.
         * @param valueNew The new value for headerFontWeight
         */
        setHeaderFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of headerFontWeight.
         * @returns The current value of headerFontWeight.
         */
        getHeaderFontWeight(): FontWeight | undefined;
        /**
         * Processes the current headerFontWeight.
         */
        protected __processHeaderFontWeight(): void;
        /**
         * Sets the grid font family and calls the associated process function.
         * @param valueNew The new value for gridFontFamily
         */
        setGridFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of gridFontFamily.
         * @returns The current value of gridFontFamily.
         */
        getGridFontFamily(): string | null | undefined;
        /**
         * Processes the current gridFontFamily.
         */
        protected __processGridFontFamily(): void;
        /**
         * Sets the grid font size and calls the associated process function.
         * @param valueNew The new value for gridFontSize
         */
        setGridFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of gridFontSize.
         * @returns The current value of gridFontSize.
         */
        getGridFontSize(): number | undefined;
        /**
         * Processes the current gridFontSize.
         */
        protected __processGridFontSize(): void;
        /**
         * Sets the grid font size unit and calls the associated process function.
         * @param valueNew The new value for gridFontSizeUnit
         */
        setGridFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of gridFontSizeUnit.
         * @returns The current value of gridFontSizeUnit.
         */
        getGridFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current gridFontSizeUnit.
         */
        protected __processGridFontSizeUnit(): void;
        /**
         * Sets the grid font style and calls the associated process function.
         * @param valueNew The new value for gridFontStyle
         */
        setGridFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of gridFontStyle.
         * @returns The current value of gridFontStyle.
         */
        getGridFontStyle(): FontStyle | undefined;
        /**
         * Processes the current gridFontStyle.
         */
        protected __processGridFontStyle(): void;
        /**
         * Sets the grid font family and calls the associated process function.
         * @param valueNew The new value for gridFontWeight
         */
        setGridFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of gridFontWeight.
         * @returns The current value of gridFontWeight.
         */
        getGridFontWeight(): FontWeight | undefined;
        /**
         * Processes the current gridFontWeight.
         */
        protected __processGridFontWeight(): void;
        /**
         * Sets the row numbers font family and calls the associated process function.
         * @param valueNew The new value for rowNumbersFontFamily
         */
        setRowNumbersFontFamily(valueNew: FontFamily | null): void;
        /**
         * Returns the current value of rowNumbersFontFamily.
         * @returns The current value of rowNumbersFontFamily.
         */
        getRowNumbersFontFamily(): string | null | undefined;
        /**
         * Processes the current rowNumbersFontFamily.
         */
        protected __processRowNumbersFontFamily(): void;
        /**
         * Sets the row numbers font size and calls the associated process function.
         * @param valueNew The new value for rowNumbersFontSize
         */
        setRowNumbersFontSize(valueNew: number | null): void;
        /**
         * Returns the current value of rowNumbersFontSize.
         * @returns The current value of rowNumbersFontSize.
         */
        getRowNumbersFontSize(): number | undefined;
        /**
         * Processes the current rowNumbersFontSize.
         */
        protected __processRowNumbersFontSize(): void;
        /**
         * Sets the row numbers font size unit and calls the associated process function.
         * @param valueNew The new value for rowNumbersFontSizeUnit
         */
        setRowNumbersFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
         * Returns the current value of rowNumbersFontSizeUnit.
         * @returns The current value of rowNumbersFontSizeUnit.
         */
        getRowNumbersFontSizeUnit(): FontSizeUnit | undefined;
        /**
         * Processes the current rowNumbersFontSizeUnit.
         */
        protected __processRowNumbersFontSizeUnit(): void;
        /**
         * Sets the row numbers font style and calls the associated process function.
         * @param valueNew The new value for rowNumbersFontStyle
         */
        setRowNumbersFontStyle(valueNew: FontStyle | null): void;
        /**
         * Returns the current value of rowNumbersFontStyle.
         * @returns The current value of rowNumbersFontStyle.
         */
        getRowNumbersFontStyle(): FontStyle | undefined;
        /**
         * Processes the current rowNumbersFontStyle.
         */
        protected __processRowNumbersFontStyle(): void;
        /**
         * Sets the row numbers font family and calls the associated process function.
         * @param valueNew The new value for rowNumbersFontWeight
         */
        setRowNumbersFontWeight(valueNew: FontWeight | null): void;
        /**
         * Returns the current value of rowNumbersFontWeight.
         * @returns The current value of rowNumbersFontWeight.
         */
        getRowNumbersFontWeight(): FontWeight | undefined;
        /**
         * Processes the current rowNumbersFontWeight.
         */
        protected __processRowNumbersFontWeight(): void;
        /**
         * Sets the selected row by index.
         * @param valueNew The new value for selectedRowIndex
         */
        setSelectedRowIndex(valueNew: number | null): void;
        /**
         * Returns the current value of selectedRowIndex.
         * @returns The current value of selectedRowIndex.
         */
        getSelectedRowIndex(): number | null;
        /**
         * Processes the current selectedRowIndex.
         */
        protected __processSelectedRowIndex(): void;
        /**
         * Sets the selected column by index.
         * @param valueNew The new value for selectedColumnIndex
         */
        setSelectedColumnIndex(valueNew: number | null): void;
        /**
         * Returns the current value of selectedColumnIndex.
         * @returns The current value of selectedColumnIndex.
         */
        getSelectedColumnIndex(): number | null;
        /**
         * Processes the current selectedColumnIndex.
         */
        protected __processSelectedColumnIndex(): void;
        /**
         * Returns the current value of srcDataHasChanged.
         * @returns The current value of srcDataHasChanged.
         */
        getSrcDataHasChanged(): boolean;
        /**
         * Returns the current value of selectedCellValue.
         * @returns The current value of selectedCellValue.
         */
        getSelectedCellValue(): any;
        /**
         * Returns the current value of selectedRowValue.
         * @returns The current value of selectedRowValue.
         */
        getSelectedRowValue(): any;
        /**
         * Sets the value of the width mode attribute.
         * @param valueNew The new width mode value.
         */
        setWidthMode(valueNew: SizeModeWithContent | null): void;
        /**
         * Calculates the width of all columns inside the control.
         */
        __getContentWidth(): number | null;
        /**
         * Processes the width attribute
         */
        __processWidth(): void;
        /**
         * Sets the value of the height mode attribute.
         * @param valueNew The new height mode value.
         */
        setHeightMode(valueNew: SizeModeWithContent | null): void;
        /**
         * Calculates the height of all columns inside the control.
         */
        __getContentHeight(): number | null;
        /**
         * Processes the height attribute
         */
        __processHeight(): void;
        /**
         * Lock the cell specified by row and column. A locked cell will not be updated when srcData changes.
         * @param row The row that contains the cell to be locked. This number refers to the index of the row in the unpaged data.
         * @param column The column that contains the cell to be locked.
         * @param rowElement The table row element of the row that contains the cell to be locked.
         * @param targetElement If the cell to be locked contains a button, this is the element that received the click or touchstart event.
         */
        protected __lock(row: number, column: number, rowElement: HTMLTableRowElement, targetElement?: HTMLElement): void;
        /**
         * Unlocks the control.
         */
        protected __unlock(): void;
        /**
         * If server paging is used, translates the index of an item in __srcData to the original index before serverside filtering, sorting and paging.
         * Returns -1 if the index is not included in the filterMap sent from the server.
         * @param index The index to translate, referring to an item in the __srcData array.
         */
        protected __srcDataIndexToOriginalIndex(index: number): number;
        /**
         * If server paging is used, translates an index referring to an item in the original data before serverside filtering, sorting and paging to the index of the item in __srcData.
         * Returns -1 if the index is not included in the filterMap sent from the server.
         * @param index The index to translate, referring to an item in the original data.
         */
        protected __originalIndexToSrcDataIndex(index: number): number;
        /**
         * Processes the current enabled state.
         */
        __processIsEnabled(): void;
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
    }
    namespace TcHmiDatagrid {
        interface IControlSpecificData extends System.TcHmiControl.IControlSpecificData {
            'Controls.Beckhoff.TcHmiDatagrid.triggerProcessUnitSize': boolean;
        }
        type DimensionUnitOrFactor = 'px' | '%' | 'factor';
        interface Column extends SimpleColumn {
            /** Name of the property in the srcData object */
            name: string;
        }
        interface SimpleColumn {
            /** Background color of the cells in this column */
            cellBackground?: TcHmi.SolidColor | null;
            /** Text color of the cells in this column */
            textColor?: TcHmi.SolidColor | null;
            /** Name of the Label for this column */
            label: string;
            /** Type of the input elements for this column */
            control: 'TextBlock' | 'TextBox' | 'CheckBox' | 'ComboBox' | 'Image' | 'PasswordInput' | 'NumericInput' | 'SpinboxInput' | 'DateTimeInput' | 'TimespanInput' | 'Button' | 'ToggleButton' | 'ToggleSwitch' | 'RadioButton' | 'CustomMessage';
            /** Width for this column */
            width: number;
            /** Width unit for this column */
            widthUnit: DimensionUnitOrFactor;
            /** Can this column be resized? */
            resize?: boolean;
            /** Minimum width for this column */
            minWidth?: number;
            /** Minimum width unit for this column */
            minWidthUnit?: DimensionUnit;
            /** Can this column be edited (text, number) or operated (button, checkbox)? */
            editable?: boolean;
            /** Can this column be sorted by user interaction? */
            sortable?: boolean;
            /** Horizontal alignment of this column */
            horizontalAlignment?: TcHmi.HorizontalAlignment;
            /** Vertical alignment of this column */
            verticalAlignment?: TcHmi.VerticalAlignment;
            /** A reference of function which is called with each entry */
            format?: TcHmi.IFunction<string>;
            /** Mapping from the srcData to a Combobox or Image selection */
            dataDefinitions?: DataDefinition[] | DataDefinition;
            /**Horizontal alignment of this header */
            headerHorizontalAlignment?: TcHmi.HorizontalAlignment;
            /**Vertical alignment of this header */
            headerVerticalAlignment?: TcHmi.VerticalAlignment;
            /** When set to true a backslash in a text will be shown verbatim in the HMI. */
            ignoreEscapeSequences?: boolean;
            /** When set to true the control will automatically lose focus when the user presses the enter or escape key */
            autoFocusOut?: boolean;
            /** When set to true all text within the control will be selected when the control gains focus */
            autoSelectText?: boolean;
            /** Maximum text length of the input */
            maxTextLength?: number;
        }
        /**
         * Mapping from the srcData to a combobox or image selection.
         * Text to show on Buttons.
         * Restrictions for number inputs.
         */
        interface DataDefinition {
            /**
             * Value to compare for selecting images in Image control.
             * Value to compare for selecting combobox selections.
             */
            value?: any;
            /** Path to the image in Image Control */
            source?: string;
            /**
             * Alt text (tooltip) for images in Image control.
             * Text to show for Comboboxes.
             * Text to show on Buttons.
             */
            text: string;
            /** Image pixel width in image control */
            width?: number;
            /** Image pixel height in image control */
            height?: number;
            /** The minimal value of the numeric input. No restrictions if it's unset. */
            minValue?: number;
            /** The maximal value of the numeric input. No restrictions if it's unset. */
            maxValue?: number;
            /** Number of displayed decimal digits. No restrictions if it's unset. */
            decimalDigits?: number;
            /** Defines in which step increasing/decreasing the value is possible.
             * If you define a decimal number here it is recommended to set the 'decimal digits'
             * property too to have an effect. */
            step?: number;
            /** Defines an optinal unit displayed in numeric inputs and spinbox inputs */
            unit?: string;
            /** Whether the displayed text is reset to the last valid value on focus out. */
            resetToLastValidValue?: boolean;
            /** Select whether decimal digits are rounded or truncated. */
            decimalPrecisionMode?: TcHmiNumericInput.DecimalPrecisionMode;
        }
        function isNamedColumn(obj: Column | SimpleColumn): obj is Column;
        interface ColumnWidth {
            width: number;
            widthUnit: DimensionUnitOrFactor;
            pixelWidth: number;
            minWidth: number;
            minWidthUnit: DimensionUnit;
            resizable: boolean;
        }
        type SortingInfo = TcHmi.SortingInfo;
        interface SortTouchInfo {
            touchId: number;
            timeoutId: number | null;
            sortElement: HTMLElement;
            clientX: number;
            clientY: number;
        }
        const enum __updateTableType {
            dataChange = 0,
            configChange = 1,
            scroll = 2
        }
        class PagedArray<T> {
            readonly data: T[];
            readonly offset: number;
            readonly length: number;
            constructor(data: T[], offset?: number, length?: number);
            get(index: number): T | undefined;
            set(index: number, value: T): void;
            copy(): PagedArray<T>;
        }
        interface UserInput {
            index: number;
            column?: string;
            columnIndex: number;
            userData: any;
            originalData: any;
        }
    }
}
//# sourceMappingURL=TcHmiDatagrid.d.ts.map