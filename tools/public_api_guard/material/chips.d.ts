export declare const MAT_CHIP_AVATAR: InjectionToken<MatChipAvatar>;

export declare const MAT_CHIP_REMOVE: InjectionToken<MatChipRemove>;

export declare const MAT_CHIP_TRAILING_ICON: InjectionToken<MatChipTrailingIcon>;

export declare const MAT_CHIPS_DEFAULT_OPTIONS: InjectionToken<MatChipsDefaultOptions>;

export declare class MatChip extends _MatChipMixinBase implements FocusableOption, OnDestroy, CanColor, CanDisableRipple, RippleTarget, HasTabIndex, CanDisable {
    _animationsDisabled: boolean;
    _chipListDisabled: boolean;
    _chipListMultiple: boolean;
    protected _disabled: boolean;
    _elementRef: ElementRef<HTMLElement>;
    _hasFocus: boolean;
    readonly _onBlur: Subject<MatChipEvent>;
    readonly _onFocus: Subject<MatChipEvent>;
    protected _removable: boolean;
    protected _selectable: boolean;
    protected _selected: boolean;
    protected _value: any;
    get ariaSelected(): string | null;
    avatar: MatChipAvatar;
    chipListSelectable: boolean;
    readonly destroyed: EventEmitter<MatChipEvent>;
    get disabled(): boolean;
    set disabled(value: boolean);
    get removable(): boolean;
    set removable(value: boolean);
    removeIcon: MatChipRemove;
    readonly removed: EventEmitter<MatChipEvent>;
    rippleConfig: RippleConfig & RippleGlobalOptions;
    get rippleDisabled(): boolean;
    get selectable(): boolean;
    set selectable(value: boolean);
    get selected(): boolean;
    set selected(value: boolean);
    readonly selectionChange: EventEmitter<MatChipSelectionChange>;
    trailingIcon: MatChipTrailingIcon;
    get value(): any;
    set value(value: any);
    constructor(_elementRef: ElementRef<HTMLElement>, _ngZone: NgZone, platform: Platform, globalRippleOptions: RippleGlobalOptions | null, _changeDetectorRef: ChangeDetectorRef, _document: any, animationMode?: string, tabIndex?: string);
    _addHostClassName(): void;
    _blur(): void;
    _handleClick(event: Event): void;
    _handleKeydown(event: KeyboardEvent): void;
    deselect(): void;
    focus(): void;
    ngOnDestroy(): void;
    remove(): void;
    select(): void;
    selectViaInteraction(): void;
    toggleSelected(isUserInput?: boolean): boolean;
    static ngAcceptInputType_disableRipple: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_removable: BooleanInput;
    static ngAcceptInputType_selectable: BooleanInput;
    static ngAcceptInputType_selected: BooleanInput;
    static ngAcceptInputType_tabIndex: NumberInput;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatChip, "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", ["matChip"], { "color": "color"; "disableRipple": "disableRipple"; "tabIndex": "tabIndex"; "selected": "selected"; "value": "value"; "selectable": "selectable"; "disabled": "disabled"; "removable": "removable"; }, { "selectionChange": "selectionChange"; "destroyed": "destroyed"; "removed": "removed"; }, ["avatar", "trailingIcon", "removeIcon"]>;
    static ɵfac: i0.ɵɵFactoryDef<MatChip, [null, null, null, { optional: true; }, null, null, { optional: true; }, { attribute: "tabindex"; }]>;
}

export declare class MatChipAvatar {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatChipAvatar, "mat-chip-avatar, [matChipAvatar]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatChipAvatar, never>;
}

export interface MatChipEvent {
    chip: MatChip;
}

export declare class MatChipInput implements MatChipTextControl, OnChanges, OnDestroy, AfterContentInit {
    _addOnBlur: boolean;
    _chipList: MatChipList;
    protected _elementRef: ElementRef<HTMLInputElement>;
    get addOnBlur(): boolean;
    set addOnBlur(value: boolean);
    chipEnd: EventEmitter<MatChipInputEvent>;
    set chipList(value: MatChipList);
    get disabled(): boolean;
    set disabled(value: boolean);
    get empty(): boolean;
    focused: boolean;
    id: string;
    readonly inputElement: HTMLInputElement;
    placeholder: string;
    separatorKeyCodes: readonly number[] | ReadonlySet<number>;
    constructor(_elementRef: ElementRef<HTMLInputElement>, _defaultOptions: MatChipsDefaultOptions);
    _blur(): void;
    _emitChipEnd(event?: KeyboardEvent): void;
    _focus(): void;
    _keydown(event?: KeyboardEvent): void;
    _keyup(event: KeyboardEvent): void;
    _onInput(): void;
    clear(): void;
    focus(options?: FocusOptions): void;
    ngAfterContentInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_addOnBlur: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatChipInput, "input[matChipInputFor]", ["matChipInput", "matChipInputFor"], { "chipList": "matChipInputFor"; "addOnBlur": "matChipInputAddOnBlur"; "separatorKeyCodes": "matChipInputSeparatorKeyCodes"; "placeholder": "placeholder"; "id": "id"; "disabled": "disabled"; }, { "chipEnd": "matChipInputTokenEnd"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatChipInput, never>;
}

export interface MatChipInputEvent {
    chipInput?: MatChipInput;
    input: HTMLInputElement;
    value: string;
}

export declare class MatChipList extends _MatChipListMixinBase implements MatFormFieldControl<any>, ControlValueAccessor, AfterContentInit, DoCheck, OnInit, OnDestroy, CanUpdateErrorState {
    _ariaDescribedby: string;
    protected _chipInput: MatChipTextControl;
    protected _disabled: boolean;
    protected _elementRef: ElementRef<HTMLElement>;
    _keyManager: FocusKeyManager<MatChip>;
    _onChange: (value: any) => void;
    _onTouched: () => void;
    protected _placeholder: string;
    protected _required: boolean;
    protected _selectable: boolean;
    _selectionModel: SelectionModel<MatChip>;
    _tabIndex: number;
    _uid: string;
    _userTabIndex: number | null;
    protected _value: any;
    ariaOrientation: 'horizontal' | 'vertical';
    readonly change: EventEmitter<MatChipListChange>;
    get chipBlurChanges(): Observable<MatChipEvent>;
    get chipFocusChanges(): Observable<MatChipEvent>;
    get chipRemoveChanges(): Observable<MatChipEvent>;
    get chipSelectionChanges(): Observable<MatChipSelectionChange>;
    chips: QueryList<MatChip>;
    get compareWith(): (o1: any, o2: any) => boolean;
    set compareWith(fn: (o1: any, o2: any) => boolean);
    readonly controlType: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    get empty(): boolean;
    errorStateMatcher: ErrorStateMatcher;
    get focused(): boolean;
    get id(): string;
    get multiple(): boolean;
    set multiple(value: boolean);
    ngControl: NgControl;
    get placeholder(): string;
    set placeholder(value: string);
    get required(): boolean;
    set required(value: boolean);
    get role(): string | null;
    get selectable(): boolean;
    set selectable(value: boolean);
    get selected(): MatChip[] | MatChip;
    get shouldLabelFloat(): boolean;
    set tabIndex(value: number);
    get value(): any;
    set value(value: any);
    readonly valueChange: EventEmitter<any>;
    constructor(_elementRef: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef, _dir: Directionality, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, _defaultErrorStateMatcher: ErrorStateMatcher,
    ngControl: NgControl);
    _allowFocusEscape(): void;
    _blur(): void;
    _focusInput(options?: FocusOptions): void;
    _keydown(event: KeyboardEvent): void;
    _markAsTouched(): void;
    _setSelectionByValue(value: any, isUserInput?: boolean): void;
    protected _updateFocusForDestroyedChips(): void;
    protected _updateTabIndex(): void;
    focus(options?: FocusOptions): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    onContainerClick(event: MouseEvent): void;
    registerInput(inputElement: MatChipTextControl): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDescribedByIds(ids: string[]): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_multiple: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
    static ngAcceptInputType_selectable: BooleanInput;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatChipList, "mat-chip-list", ["matChipList"], { "errorStateMatcher": "errorStateMatcher"; "multiple": "multiple"; "compareWith": "compareWith"; "value": "value"; "required": "required"; "placeholder": "placeholder"; "disabled": "disabled"; "ariaOrientation": "aria-orientation"; "selectable": "selectable"; "tabIndex": "tabIndex"; }, { "change": "change"; "valueChange": "valueChange"; }, ["chips"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<MatChipList, [null, null, { optional: true; }, { optional: true; }, { optional: true; }, null, { optional: true; self: true; }]>;
}

export declare class MatChipListChange {
    source: MatChipList;
    value: any;
    constructor(
    source: MatChipList,
    value: any);
}

export declare class MatChipRemove {
    protected _parentChip: MatChip;
    constructor(_parentChip: MatChip, elementRef: ElementRef<HTMLElement>);
    _handleClick(event: Event): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatChipRemove, "[matChipRemove]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatChipRemove, never>;
}

export interface MatChipsDefaultOptions {
    separatorKeyCodes: readonly number[] | ReadonlySet<number>;
}

export declare class MatChipSelectionChange {
    isUserInput: boolean;
    selected: boolean;
    source: MatChip;
    constructor(
    source: MatChip,
    selected: boolean,
    isUserInput?: boolean);
}

export declare class MatChipsModule {
    static ɵfac: i0.ɵɵFactoryDef<MatChipsModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<MatChipsModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MatChipsModule, [typeof i1.MatChipList, typeof i2.MatChip, typeof i3.MatChipInput, typeof i2.MatChipRemove, typeof i2.MatChipAvatar, typeof i2.MatChipTrailingIcon], [typeof i4.MatCommonModule], [typeof i1.MatChipList, typeof i2.MatChip, typeof i3.MatChipInput, typeof i2.MatChipRemove, typeof i2.MatChipAvatar, typeof i2.MatChipTrailingIcon]>;
}

export declare class MatChipTrailingIcon {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatChipTrailingIcon, "mat-chip-trailing-icon, [matChipTrailingIcon]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatChipTrailingIcon, never>;
}
