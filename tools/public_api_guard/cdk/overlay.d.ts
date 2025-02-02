export declare class BlockScrollStrategy implements ScrollStrategy {
    constructor(_viewportRuler: ViewportRuler, document: any);
    attach(): void;
    disable(): void;
    enable(): void;
}

export declare class CdkConnectedOverlay implements OnDestroy, OnChanges {
    attach: EventEmitter<void>;
    backdropClass: string;
    backdropClick: EventEmitter<MouseEvent>;
    detach: EventEmitter<void>;
    get dir(): Direction;
    disableClose: boolean;
    get flexibleDimensions(): boolean;
    set flexibleDimensions(value: boolean);
    get growAfterOpen(): boolean;
    set growAfterOpen(value: boolean);
    get hasBackdrop(): any;
    set hasBackdrop(value: any);
    height: number | string;
    get lockPosition(): any;
    set lockPosition(value: any);
    minHeight: number | string;
    minWidth: number | string;
    get offsetX(): number;
    set offsetX(offsetX: number);
    get offsetY(): number;
    set offsetY(offsetY: number);
    open: boolean;
    origin: CdkOverlayOrigin;
    overlayKeydown: EventEmitter<KeyboardEvent>;
    overlayOutsideClick: EventEmitter<MouseEvent>;
    get overlayRef(): OverlayRef;
    panelClass: string | string[];
    positionChange: EventEmitter<ConnectedOverlayPositionChange>;
    positionStrategy: FlexibleConnectedPositionStrategy;
    positions: ConnectedPosition[];
    get push(): boolean;
    set push(value: boolean);
    scrollStrategy: ScrollStrategy;
    transformOriginSelector: string;
    viewportMargin: number;
    width: number | string;
    constructor(_overlay: Overlay, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, scrollStrategyFactory: any, _dir: Directionality);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_flexibleDimensions: BooleanInput;
    static ngAcceptInputType_growAfterOpen: BooleanInput;
    static ngAcceptInputType_hasBackdrop: BooleanInput;
    static ngAcceptInputType_lockPosition: BooleanInput;
    static ngAcceptInputType_push: BooleanInput;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkConnectedOverlay, "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", ["cdkConnectedOverlay"], { "origin": "cdkConnectedOverlayOrigin"; "positions": "cdkConnectedOverlayPositions"; "positionStrategy": "cdkConnectedOverlayPositionStrategy"; "offsetX": "cdkConnectedOverlayOffsetX"; "offsetY": "cdkConnectedOverlayOffsetY"; "width": "cdkConnectedOverlayWidth"; "height": "cdkConnectedOverlayHeight"; "minWidth": "cdkConnectedOverlayMinWidth"; "minHeight": "cdkConnectedOverlayMinHeight"; "backdropClass": "cdkConnectedOverlayBackdropClass"; "panelClass": "cdkConnectedOverlayPanelClass"; "viewportMargin": "cdkConnectedOverlayViewportMargin"; "scrollStrategy": "cdkConnectedOverlayScrollStrategy"; "open": "cdkConnectedOverlayOpen"; "disableClose": "cdkConnectedOverlayDisableClose"; "transformOriginSelector": "cdkConnectedOverlayTransformOriginOn"; "hasBackdrop": "cdkConnectedOverlayHasBackdrop"; "lockPosition": "cdkConnectedOverlayLockPosition"; "flexibleDimensions": "cdkConnectedOverlayFlexibleDimensions"; "growAfterOpen": "cdkConnectedOverlayGrowAfterOpen"; "push": "cdkConnectedOverlayPush"; }, { "backdropClick": "backdropClick"; "positionChange": "positionChange"; "attach": "attach"; "detach": "detach"; "overlayKeydown": "overlayKeydown"; "overlayOutsideClick": "overlayOutsideClick"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkConnectedOverlay, [null, null, null, null, { optional: true; }]>;
}

export declare class CdkOverlayOrigin {
    elementRef: ElementRef;
    constructor(
    elementRef: ElementRef);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkOverlayOrigin, "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", ["cdkOverlayOrigin"], {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkOverlayOrigin, never>;
}

export declare class CloseScrollStrategy implements ScrollStrategy {
    constructor(_scrollDispatcher: ScrollDispatcher, _ngZone: NgZone, _viewportRuler: ViewportRuler, _config?: CloseScrollStrategyConfig | undefined);
    attach(overlayRef: OverlayReference): void;
    detach(): void;
    disable(): void;
    enable(): void;
}

export declare class ConnectedOverlayPositionChange {
    connectionPair: ConnectionPositionPair;
    scrollableViewProperties: ScrollingVisibility;
    constructor(
    connectionPair: ConnectionPositionPair,
    scrollableViewProperties: ScrollingVisibility);
}

export interface ConnectedPosition {
    offsetX?: number;
    offsetY?: number;
    originX: 'start' | 'center' | 'end';
    originY: 'top' | 'center' | 'bottom';
    overlayX: 'start' | 'center' | 'end';
    overlayY: 'top' | 'center' | 'bottom';
    panelClass?: string | string[];
    weight?: number;
}

export declare class ConnectedPositionStrategy implements PositionStrategy {
    _positionStrategy: FlexibleConnectedPositionStrategy;
    _preferredPositions: ConnectionPositionPair[];
    readonly onPositionChange: Observable<ConnectedOverlayPositionChange>;
    get positions(): ConnectionPositionPair[];
    constructor(originPos: OriginConnectionPosition, overlayPos: OverlayConnectionPosition, connectedTo: ElementRef<HTMLElement>, viewportRuler: ViewportRuler, document: Document, platform: Platform, overlayContainer: OverlayContainer);
    apply(): void;
    attach(overlayRef: OverlayReference): void;
    detach(): void;
    dispose(): void;
    recalculateLastPosition(): void;
    setOrigin(origin: ElementRef): this;
    withDirection(dir: 'ltr' | 'rtl'): this;
    withFallbackPosition(originPos: OriginConnectionPosition, overlayPos: OverlayConnectionPosition, offsetX?: number, offsetY?: number): this;
    withLockedPosition(isLocked: boolean): this;
    withOffsetX(offset: number): this;
    withOffsetY(offset: number): this;
    withPositions(positions: ConnectionPositionPair[]): this;
    withScrollableContainers(scrollables: CdkScrollable[]): void;
}

export declare class ConnectionPositionPair {
    offsetX?: number | undefined;
    offsetY?: number | undefined;
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
    panelClass?: string | string[] | undefined;
    constructor(origin: OriginConnectionPosition, overlay: OverlayConnectionPosition,
    offsetX?: number | undefined,
    offsetY?: number | undefined,
    panelClass?: string | string[] | undefined);
}

export declare class FlexibleConnectedPositionStrategy implements PositionStrategy {
    _preferredPositions: ConnectionPositionPair[];
    positionChanges: Observable<ConnectedOverlayPositionChange>;
    get positions(): ConnectionPositionPair[];
    constructor(connectedTo: FlexibleConnectedPositionStrategyOrigin, _viewportRuler: ViewportRuler, _document: Document, _platform: Platform, _overlayContainer: OverlayContainer);
    apply(): void;
    attach(overlayRef: OverlayReference): void;
    detach(): void;
    dispose(): void;
    reapplyLastPosition(): void;
    setOrigin(origin: FlexibleConnectedPositionStrategyOrigin): this;
    withDefaultOffsetX(offset: number): this;
    withDefaultOffsetY(offset: number): this;
    withFlexibleDimensions(flexibleDimensions?: boolean): this;
    withGrowAfterOpen(growAfterOpen?: boolean): this;
    withLockedPosition(isLocked?: boolean): this;
    withPositions(positions: ConnectedPosition[]): this;
    withPush(canPush?: boolean): this;
    withScrollableContainers(scrollables: CdkScrollable[]): this;
    withTransformOriginOn(selector: string): this;
    withViewportMargin(margin: number): this;
}

export declare type FlexibleConnectedPositionStrategyOrigin = ElementRef | Element | Point & {
    width?: number;
    height?: number;
};

export declare class FullscreenOverlayContainer extends OverlayContainer implements OnDestroy {
    constructor(_document: any, platform: Platform);
    protected _createContainer(): void;
    getFullscreenElement(): Element;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<FullscreenOverlayContainer, never>;
    static ɵprov: i0.ɵɵInjectableDef<FullscreenOverlayContainer>;
}

export declare class GlobalPositionStrategy implements PositionStrategy {
    apply(): void;
    attach(overlayRef: OverlayReference): void;
    bottom(value?: string): this;
    centerHorizontally(offset?: string): this;
    centerVertically(offset?: string): this;
    dispose(): void;
    height(value?: string): this;
    left(value?: string): this;
    right(value?: string): this;
    top(value?: string): this;
    width(value?: string): this;
}

export declare type HorizontalConnectionPos = 'start' | 'center' | 'end';

export declare class NoopScrollStrategy implements ScrollStrategy {
    attach(): void;
    disable(): void;
    enable(): void;
}

export interface OriginConnectionPosition {
    originX: HorizontalConnectionPos;
    originY: VerticalConnectionPos;
}

export declare class Overlay {
    scrollStrategies: ScrollStrategyOptions;
    constructor(
    scrollStrategies: ScrollStrategyOptions, _overlayContainer: OverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _positionBuilder: OverlayPositionBuilder, _keyboardDispatcher: OverlayKeyboardDispatcher, _injector: Injector, _ngZone: NgZone, _document: any, _directionality: Directionality, _location: Location, _outsideClickDispatcher: OverlayOutsideClickDispatcher);
    create(config?: OverlayConfig): OverlayRef;
    position(): OverlayPositionBuilder;
    static ɵfac: i0.ɵɵFactoryDef<Overlay, never>;
    static ɵprov: i0.ɵɵInjectableDef<Overlay>;
}

export declare class OverlayConfig {
    backdropClass?: string | string[];
    direction?: Direction | Directionality;
    disposeOnNavigation?: boolean;
    hasBackdrop?: boolean;
    height?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    panelClass?: string | string[];
    positionStrategy?: PositionStrategy;
    scrollStrategy?: ScrollStrategy;
    width?: number | string;
    constructor(config?: OverlayConfig);
}

export interface OverlayConnectionPosition {
    overlayX: HorizontalConnectionPos;
    overlayY: VerticalConnectionPos;
}

export declare class OverlayContainer implements OnDestroy {
    protected _containerElement: HTMLElement;
    protected _document: Document;
    protected _platform: Platform;
    constructor(document: any, _platform: Platform);
    protected _createContainer(): void;
    getContainerElement(): HTMLElement;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<OverlayContainer, never>;
    static ɵprov: i0.ɵɵInjectableDef<OverlayContainer>;
}

export declare class OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
    constructor(document: any);
    add(overlayRef: OverlayReference): void;
    protected detach(): void;
    static ɵfac: i0.ɵɵFactoryDef<OverlayKeyboardDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDef<OverlayKeyboardDispatcher>;
}

export declare class OverlayModule {
    static ɵfac: i0.ɵɵFactoryDef<OverlayModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<OverlayModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<OverlayModule, [typeof i1.CdkConnectedOverlay, typeof i1.CdkOverlayOrigin], [typeof i2.BidiModule, typeof i3.PortalModule, typeof i4.ScrollingModule], [typeof i1.CdkConnectedOverlay, typeof i1.CdkOverlayOrigin, typeof i4.ScrollingModule]>;
}

export declare class OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
    constructor(document: any, _platform: Platform);
    add(overlayRef: OverlayReference): void;
    protected detach(): void;
    static ɵfac: i0.ɵɵFactoryDef<OverlayOutsideClickDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDef<OverlayOutsideClickDispatcher>;
}

export declare class OverlayPositionBuilder {
    constructor(_viewportRuler: ViewportRuler, _document: any, _platform: Platform, _overlayContainer: OverlayContainer);
    connectedTo(elementRef: ElementRef, originPos: OriginConnectionPosition, overlayPos: OverlayConnectionPosition): ConnectedPositionStrategy;
    flexibleConnectedTo(origin: FlexibleConnectedPositionStrategyOrigin): FlexibleConnectedPositionStrategy;
    global(): GlobalPositionStrategy;
    static ɵfac: i0.ɵɵFactoryDef<OverlayPositionBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDef<OverlayPositionBuilder>;
}

export declare class OverlayRef implements PortalOutlet, OverlayReference {
    _keydownEvents: Subject<KeyboardEvent>;
    _outsidePointerEvents: Subject<MouseEvent>;
    get backdropElement(): HTMLElement | null;
    get hostElement(): HTMLElement;
    get overlayElement(): HTMLElement;
    constructor(_portalOutlet: PortalOutlet, _host: HTMLElement, _pane: HTMLElement, _config: ImmutableObject<OverlayConfig>, _ngZone: NgZone, _keyboardDispatcher: OverlayKeyboardDispatcher, _document: Document, _location: Location, _outsideClickDispatcher: OverlayOutsideClickDispatcher);
    addPanelClass(classes: string | string[]): void;
    attach<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attach<T>(portal: TemplatePortal<T>): EmbeddedViewRef<T>;
    attach(portal: any): any;
    attachments(): Observable<void>;
    backdropClick(): Observable<MouseEvent>;
    detach(): any;
    detachBackdrop(): void;
    detachments(): Observable<void>;
    dispose(): void;
    getConfig(): OverlayConfig;
    getDirection(): Direction;
    hasAttached(): boolean;
    keydownEvents(): Observable<KeyboardEvent>;
    outsidePointerEvents(): Observable<MouseEvent>;
    removePanelClass(classes: string | string[]): void;
    setDirection(dir: Direction | Directionality): void;
    updatePosition(): void;
    updatePositionStrategy(strategy: PositionStrategy): void;
    updateScrollStrategy(strategy: ScrollStrategy): void;
    updateSize(sizeConfig: OverlaySizeConfig): void;
}

export interface OverlaySizeConfig {
    height?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    width?: number | string;
}

export interface PositionStrategy {
    apply(): void;
    attach(overlayRef: OverlayReference): void;
    detach?(): void;
    dispose(): void;
}

export declare class RepositionScrollStrategy implements ScrollStrategy {
    constructor(_scrollDispatcher: ScrollDispatcher, _viewportRuler: ViewportRuler, _ngZone: NgZone, _config?: RepositionScrollStrategyConfig | undefined);
    attach(overlayRef: OverlayReference): void;
    detach(): void;
    disable(): void;
    enable(): void;
}

export interface RepositionScrollStrategyConfig {
    autoClose?: boolean;
    scrollThrottle?: number;
}

export declare class ScrollingVisibility {
    isOriginClipped: boolean;
    isOriginOutsideView: boolean;
    isOverlayClipped: boolean;
    isOverlayOutsideView: boolean;
}

export interface ScrollStrategy {
    attach: (overlayRef: OverlayReference) => void;
    detach?: () => void;
    disable: () => void;
    enable: () => void;
}

export declare class ScrollStrategyOptions {
    block: () => BlockScrollStrategy;
    close: (config?: CloseScrollStrategyConfig | undefined) => CloseScrollStrategy;
    noop: () => NoopScrollStrategy;
    reposition: (config?: RepositionScrollStrategyConfig | undefined) => RepositionScrollStrategy;
    constructor(_scrollDispatcher: ScrollDispatcher, _viewportRuler: ViewportRuler, _ngZone: NgZone, document: any);
    static ɵfac: i0.ɵɵFactoryDef<ScrollStrategyOptions, never>;
    static ɵprov: i0.ɵɵInjectableDef<ScrollStrategyOptions>;
}

export declare function validateHorizontalPosition(property: string, value: HorizontalConnectionPos): void;

export declare function validateVerticalPosition(property: string, value: VerticalConnectionPos): void;

export declare type VerticalConnectionPos = 'top' | 'center' | 'bottom';
