import { TcHmiControl, type TcHmiControlSpecificData } from '../dist/TcHmiControl.esm.js';
import { TcHmiContent } from '../dist/TcHmiContent.esm.js';
export declare class TcHmiRegion extends TcHmi.Controls.System.TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** Html template loaded from templateCache. */
    protected __template: string | undefined;
    /**  Internal reference to the attribute "data-tchmi-target-content" */
    protected __targetContent: string | null | undefined;
    protected __targetContentMarkup: string | null | undefined;
    /** Current Content Markup */
    protected __targetMarkup: string | null;
    /** Current Content Object */
    protected __currentContent: TcHmiContent | null;
    protected __widthMode: TcHmi.SizeModeWithContent | undefined;
    protected __heightMode: TcHmi.SizeModeWithContent | undefined;
    /**  Internal reference to the attribute "data-tchmi-scale-mode" */
    protected __scaleMode: TcHmi.ScaleModeString | undefined;
    /**  Internal reference to the attribute "data-tchmi-size-mode" */
    protected __scrolling: 'No' | 'Yes' | 'Auto' | undefined;
    protected __elementTemplateRoot: JQuery;
    private __xhr;
    private __destroyRequestCurrentPartialContents;
    /** Timeout id for async compile new content */
    protected __processTargetMarkupCompileTimeout: number;
    /** Timeout id for async removing/restoring old content */
    protected __processTargetMarkupCleanupOldTimeout: number;
    protected readonly __processTargetMarkupLoadingSpinnerDiv: Element;
    protected __processTargetMarkupOldContent: TcHmiContent | null;
    /** if undefined we have no pending opacity restore */
    protected __processTargetMarkupOldContentOldOpacity: string | undefined;
    protected __asyncWorkData: TcHmiRegionSpecificData;
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
     * Sets __keepAlive
     * @param value
     */
    __setKeepAlive(value: boolean): void;
    /**
     * @param url
     */
    private __tryContentRefresh;
    protected __onContentCreated(_event: TcHmi.EventProvider.Event, data: {
        url: string;
    }): void;
    protected __onContentRemoved(_event: TcHmi.EventProvider.Event, data: {
        url: string;
    }): void;
    protected __onResized(_event: TcHmi.EventProvider.Event, ctrl: TcHmiControl): void;
    protected __doAsyncWork(timestamp?: number): void;
    /**
     * Checks if partial does alredy exist in parent hierarchy of current region instance!
     * @param partial
     */
    protected __isRecursionSave(path: string): boolean;
    /**
     * Sets the value of the width mode attribute.
     * @param valueNew The new width mode value..
     */
    setWidthMode(valueNew: TcHmi.SizeModeWithContent | null): void;
    /**
     * Processes the current width and width unit.
     */
    __processWidth(callerControl?: TcHmiControl): void;
    /**
     * Sets the value of the height mode attribute.
     * @param valueNew The new height mode value..
     */
    setHeightMode(valueNew: TcHmi.SizeModeWithContent | null): void;
    /**
     * Processes the current height and height unit.
     */
    __processHeight(callerControl?: TcHmiControl): void;
    __getContentWidth(): number | null;
    __getContentHeight(): number | null;
    /**
     * Sets the content value and calls the associated process function (processContent).
     * @param valueNew The new value for the content attribute as string. Relative path value.
     */
    setTargetContent(valueNew: string | null): void;
    /**
     * Returns the current content value.
     * @returns The current value of the content member variable as string. Relative path value.
     */
    getTargetContent(): string | null | undefined;
    /**
     * Destroy and remove currently existing content...
     */
    private __destroyAndRemoveTargetCtrl;
    /**
     * Reports Region measurement from detail information in an object.
     * Try `performance.getEntriesByType('measure')` in devTools
     */
    private __reportBenchmarkObject;
    /**
     * Processes the current content value.
     * @param override
     */
    protected __processTargetContent(override?: string | null): void;
    /**
     * Restore opacity of the old content.
     * Important when this is keepAlive.
     * @param benchmarkObj
     */
    protected __cleanUpPostAttach(benchmarkObj?: BenchmarkObject): void;
    protected __processTargetMarkup(controlId: string | undefined, benchmarkObj: BenchmarkObject): void;
    /**
     * Processes the current isEnabled attribute value and of its target.
     */
    __processIsEnabled(): void;
    /**
     * Processes the current AccessConfig attribute value and of its target.
     */
    __processAccessConfig(): void;
    setScaleMode(valueNew: TcHmi.ScaleModeString | null): void;
    getScaleMode(): TcHmi.ScaleModeString | undefined;
    protected __rescaleId: number;
    protected __processScaleMode(): void;
    setScrolling(valueNew: 'No' | 'Yes' | 'Auto' | null): void;
    getScrolling(): "No" | "Yes" | "Auto" | undefined;
    protected __processScrolling(): void;
    /**
     * Return the currently loaded TcHmiContent control object.
     */
    getCurrentContent(): TcHmiContent | null;
}
interface BenchmarkObject {
    targetContent: string | null;
    processStart: number;
    htmlFetchStart: number;
    htmlFetchEnd: number;
    compileStart: number;
    compileEnd: number;
    addContentToDomStart: number;
    addContentToDomEnd: number;
    syncAttachStart: number;
    syncAttachEnd: number;
    asyncAttachStart: number;
    asyncAttachEnd: number;
    screenUpdated: number;
    removeContentFromDomStart: number;
    removeContentFromDomEnd: number;
}
export type { BenchmarkObject as TcHmiRegionBenchmarkObject };
export interface TcHmiRegionSpecificData extends TcHmiControlSpecificData {
    'System.TcHmiRegion.resized': boolean;
}
declare const _TcHmiRegion: typeof TcHmiRegion;
type tTcHmiRegion = TcHmiRegion;
type tIControlSpecificData = TcHmiRegionSpecificData;
type tBenchmarkObject = BenchmarkObject;
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiRegion: typeof _TcHmiRegion;
        type TcHmiRegion = tTcHmiRegion;
        namespace TcHmiRegion {
            type IControlSpecificData = tIControlSpecificData;
            type BenchmarkObject = tBenchmarkObject;
        }
    }
}