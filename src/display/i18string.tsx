import React, { SFC } from 'react';
import { titleCase, capitalizeFirst } from '../utils/wordUtils';



export interface I18nContextData {
    locale: ISO639Locale,
    locales: ISO639Locales
}

export const I18nContext = React.createContext<I18nContextData>(undefined);

export interface I18nSystemProps{
    localeData: I18nContextData
}

/**
 * . . .
 * @example
 * I18nSystem provides context that allows I18String to fetch the traductions, it Must be placed wrapping all components that use I18String, 
 * since useing I18String outside an I18nSystem will result in errors.
 * 
 * Example is assuming you use redux to store locales, however, this is not mandatory, you can manage your state in any way you want as long as 
 * it 
 * 
 * ```javascript
 * 
 * const myLocaleData = store.getState().localeData;
 * 
 * const yourApp = ()=>{
 *      return(
 *          <I18nSystem value={myLocaleData}>
 *             <AppRouter/>
 *          </I18nSystem> 
 *      )
 * }
 * 
 * ```
 * 
 * Multiple I18n:
 * 
 * You might want to keep a separate set of traductions for a part of the app, if that is the case, you can instantiate a I18nSystem wrapping 
 * the section of the app you want with another I18nSystem as follows:
 * 
 * 
 * ```javascript
 * 
 * const myLocaleData = store.getState().localeData;
 * 
 * const myPluginLocale = store.getState().pluginLocales;
 * 
 * const yourApp = ()=>{
 *      return(
 *          <I18nSystem value={myLocaleData}>
 *              <AppRoutes/>
 *              <I18nSystem value={myPluginLocale}>
 *                  <PluginRoutes/>
 *              </I18nSystem
 *          </I18nSystem> 
 *      )
 * }
 * 
 * ```
 * . . .
 */ 
export class I18nSystem extends React.PureComponent<I18nSystemProps,any>{
    render(){
        return(
            <I18nContext.Provider value={this.props.localeData}>
                {this.props.children}
            </I18nContext.Provider>
        )
    }
}

// from https://stackoverflow.com/questions/49564342/typescript-2-8-remove-properties-in-one-type-from-another
type Diff<T, U> = T extends U ? never : T;
type ObjectDiff<T, U> = Pick<T, Diff<keyof T, keyof U>>;


export function withI18n<T extends I18nContextData>(Component: React.ComponentClass<T> | React.StatelessComponent<T>): React.SFC<ObjectDiff<T,I18nContextData>> {
    return (props: ObjectDiff<T,I18nContextData>)=> (
        <I18nContext.Consumer>
            {localeData => <Component {...localeData} {...props} />}
        </I18nContext.Consumer>
    )
}

export interface LocaleLayout {
    [prop: string]: string
}

export enum I18StringFormat {
    CAPITALIZE_FIRST = 'capitalizeFirst',
    UPPERCASE = 'uppercase',
    LOWERCASE = 'lowercase',
    TITLECASE = 'titlecase'
}


/**
 * 
 * check https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for more information
 * 
 * 
 */ 
export interface ISO639Locales {
    aa?: LocaleLayout
    ab?: LocaleLayout
    ae?: LocaleLayout
    af?: LocaleLayout
    ak?: LocaleLayout
    am?: LocaleLayout
    an?: LocaleLayout
    ar?: LocaleLayout
    as?: LocaleLayout
    av?: LocaleLayout
    ay?: LocaleLayout
    az?: LocaleLayout
    ba?: LocaleLayout
    be?: LocaleLayout
    bg?: LocaleLayout
    bh?: LocaleLayout
    bi?: LocaleLayout
    bm?: LocaleLayout
    bn?: LocaleLayout
    bo?: LocaleLayout
    br?: LocaleLayout
    bs?: LocaleLayout
    ca?: LocaleLayout
    ce?: LocaleLayout
    ch?: LocaleLayout
    co?: LocaleLayout
    cr?: LocaleLayout
    cs?: LocaleLayout
    cu?: LocaleLayout
    cv?: LocaleLayout
    cy?: LocaleLayout
    da?: LocaleLayout
    de?: LocaleLayout
    dv?: LocaleLayout
    dz?: LocaleLayout
    ee?: LocaleLayout
    el?: LocaleLayout
    en?: LocaleLayout
    eo?: LocaleLayout
    es?: LocaleLayout
    et?: LocaleLayout
    eu?: LocaleLayout
    fa?: LocaleLayout
    ff?: LocaleLayout
    fi?: LocaleLayout
    fj?: LocaleLayout
    fo?: LocaleLayout
    fr?: LocaleLayout
    fy?: LocaleLayout
    ga?: LocaleLayout
    gd?: LocaleLayout
    gl?: LocaleLayout
    gn?: LocaleLayout
    gu?: LocaleLayout
    gv?: LocaleLayout
    ha?: LocaleLayout
    he?: LocaleLayout
    hi?: LocaleLayout
    ho?: LocaleLayout
    hr?: LocaleLayout
    ht?: LocaleLayout
    hu?: LocaleLayout
    hy?: LocaleLayout
    hz?: LocaleLayout
    ia?: LocaleLayout
    id?: LocaleLayout
    ie?: LocaleLayout
    ig?: LocaleLayout
    ii?: LocaleLayout
    ik?: LocaleLayout
    io?: LocaleLayout
    is?: LocaleLayout
    it?: LocaleLayout
    iu?: LocaleLayout
    ja?: LocaleLayout
    jv?: LocaleLayout
    ka?: LocaleLayout
    kg?: LocaleLayout
    ki?: LocaleLayout
    kj?: LocaleLayout
    kk?: LocaleLayout
    kl?: LocaleLayout
    km?: LocaleLayout
    kn?: LocaleLayout
    ko?: LocaleLayout
    kr?: LocaleLayout
    ks?: LocaleLayout
    ku?: LocaleLayout
    kv?: LocaleLayout
    kw?: LocaleLayout
    ky?: LocaleLayout
    la?: LocaleLayout
    lb?: LocaleLayout
    lg?: LocaleLayout
    li?: LocaleLayout
    ln?: LocaleLayout
    lo?: LocaleLayout
    lt?: LocaleLayout
    lu?: LocaleLayout
    lv?: LocaleLayout
    mg?: LocaleLayout
    mh?: LocaleLayout
    mi?: LocaleLayout
    mk?: LocaleLayout
    ml?: LocaleLayout
    mn?: LocaleLayout
    mr?: LocaleLayout
    ms?: LocaleLayout
    mt?: LocaleLayout
    my?: LocaleLayout
    na?: LocaleLayout
    nb?: LocaleLayout
    nd?: LocaleLayout
    ne?: LocaleLayout
    ng?: LocaleLayout
    nl?: LocaleLayout
    nn?: LocaleLayout
    no?: LocaleLayout
    nr?: LocaleLayout
    nv?: LocaleLayout
    ny?: LocaleLayout
    oc?: LocaleLayout
    oj?: LocaleLayout
    om?: LocaleLayout
    or?: LocaleLayout
    os?: LocaleLayout
    pa?: LocaleLayout
    pi?: LocaleLayout
    pl?: LocaleLayout
    ps?: LocaleLayout
    pt?: LocaleLayout
    qu?: LocaleLayout
    rm?: LocaleLayout
    rn?: LocaleLayout
    ro?: LocaleLayout
    ru?: LocaleLayout
    rw?: LocaleLayout
    sa?: LocaleLayout
    sc?: LocaleLayout
    sd?: LocaleLayout
    se?: LocaleLayout
    sg?: LocaleLayout
    si?: LocaleLayout
    sk?: LocaleLayout
    sl?: LocaleLayout
    sm?: LocaleLayout
    sn?: LocaleLayout
    so?: LocaleLayout
    sq?: LocaleLayout
    sr?: LocaleLayout
    ss?: LocaleLayout
    st?: LocaleLayout
    su?: LocaleLayout
    sv?: LocaleLayout
    sw?: LocaleLayout
    ta?: LocaleLayout
    te?: LocaleLayout
    tg?: LocaleLayout
    th?: LocaleLayout
    ti?: LocaleLayout
    tk?: LocaleLayout
    tl?: LocaleLayout
    tn?: LocaleLayout
    to?: LocaleLayout
    tr?: LocaleLayout
    ts?: LocaleLayout
    tt?: LocaleLayout
    tw?: LocaleLayout
    ty?: LocaleLayout
    ug?: LocaleLayout
    uk?: LocaleLayout
    ur?: LocaleLayout
    uz?: LocaleLayout
    ve?: LocaleLayout
    vi?: LocaleLayout
    vo?: LocaleLayout
    wa?: LocaleLayout
    wo?: LocaleLayout
    xh?: LocaleLayout
    yi?: LocaleLayout
    yo?: LocaleLayout
    za?: LocaleLayout
    zh?: LocaleLayout
    zu?: LocaleLayout
}



export enum ISO639Locale {
    aa = "aa",
    ab = "ab",
    ae = "ae",
    af = "af",
    ak = "ak",
    am = "am",
    an = "an",
    ar = "ar",
    as = "as",
    av = "av",
    ay = "ay",
    az = "az",
    ba = "ba",
    be = "be",
    bg = "bg",
    bh = "bh",
    bi = "bi",
    bm = "bm",
    bn = "bn",
    bo = "bo",
    br = "br",
    bs = "bs",
    ca = "ca",
    ce = "ce",
    ch = "ch",
    co = "co",
    cr = "cr",
    cs = "cs",
    cu = "cu",
    cv = "cv",
    cy = "cy",
    da = "da",
    de = "de",
    dv = "dv",
    dz = "dz",
    ee = "ee",
    el = "el",
    en = "en",
    eo = "eo",
    es = "es",
    et = "et",
    eu = "eu",
    fa = "fa",
    ff = "ff",
    fi = "fi",
    fj = "fj",
    fo = "fo",
    fr = "fr",
    fy = "fy",
    ga = "ga",
    gd = "gd",
    gl = "gl",
    gn = "gn",
    gu = "gu",
    gv = "gv",
    ha = "ha",
    he = "he",
    hi = "hi",
    ho = "ho",
    hr = "hr",
    ht = "ht",
    hu = "hu",
    hy = "hy",
    hz = "hz",
    ia = "ia",
    id = "id",
    ie = "ie",
    ig = "ig",
    ii = "ii",
    ik = "ik",
    io = "io",
    is = "is",
    it = "it",
    iu = "iu",
    ja = "ja",
    jv = "jv",
    ka = "ka",
    kg = "kg",
    ki = "ki",
    kj = "kj",
    kk = "kk",
    kl = "kl",
    km = "km",
    kn = "kn",
    ko = "ko",
    kr = "kr",
    ks = "ks",
    ku = "ku",
    kv = "kv",
    kw = "kw",
    ky = "ky",
    la = "la",
    lb = "lb",
    lg = "lg",
    li = "li",
    ln = "ln",
    lo = "lo",
    lt = "lt",
    lu = "lu",
    lv = "lv",
    mg = "mg",
    mh = "mh",
    mi = "mi",
    mk = "mk",
    ml = "ml",
    mn = "mn",
    mr = "mr",
    ms = "ms",
    mt = "mt",
    my = "my",
    na = "na",
    nb = "nb",
    nd = "nd",
    ne = "ne",
    ng = "ng",
    nl = "nl",
    nn = "nn",
    no = "no",
    nr = "nr",
    nv = "nv",
    ny = "ny",
    oc = "oc",
    oj = "oj",
    om = "om",
    or = "or",
    os = "os",
    pa = "pa",
    pi = "pi",
    pl = "pl",
    ps = "ps",
    pt = "pt",
    qu = "qu",
    rm = "rm",
    rn = "rn",
    ro = "ro",
    ru = "ru",
    rw = "rw",
    sa = "sa",
    sc = "sc",
    sd = "sd",
    se = "se",
    sg = "sg",
    si = "si",
    sk = "sk",
    sl = "sl",
    sm = "sm",
    sn = "sn",
    so = "so",
    sq = "sq",
    sr = "sr",
    ss = "ss",
    st = "st",
    su = "su",
    sv = "sv",
    sw = "sw",
    ta = "ta",
    te = "te",
    tg = "tg",
    th = "th",
    ti = "ti",
    tk = "tk",
    tl = "tl",
    tn = "tn",
    to = "to",
    tr = "tr",
    ts = "ts",
    tt = "tt",
    tw = "tw",
    ty = "ty",
    ug = "ug",
    uk = "uk",
    ur = "ur",
    uz = "uz",
    ve = "ve",
    vi = "vi",
    vo = "vo",
    wa = "wa",
    wo = "wo",
    xh = "xh",
    yi = "yi",
    yo = "yo",
    za = "za",
    zh = "zh",
    zu = "zu",
}



export interface I18StringOwnProps{
    text: string,
    format?: I18StringFormat
}
export interface I18StringContextProps{
    locale: ISO639Locale,
    locales: ISO639Locales | any,
}
export type I18StringProps = I18StringOwnProps & I18StringContextProps;

export interface I18StringState {
    string: string
}



export class _I18String extends React.Component<I18StringProps, I18StringState> {
    constructor(props) {
        super(props);
        this.state = {
            string: this.getString()
        };
    }
    searchTraduction(text: string, locale: ISO639Locale, locales: ISO639Locales | any): string {
        if (locales[locale] && locales[locale][text]) {
            return locales[locale][text];
        } else {
            return text;
        }
    }
    getString() {
        let string = this.props.text.toLocaleLowerCase();
        string = this.searchTraduction(this.props.text, this.props.locale, this.props.locales);
        if (this.props.format) {
            switch (this.props.format) {
                case 'capitalizeFirst':
                    string = capitalizeFirst(string);
                    break;
                case 'uppercase':
                    string = string.toUpperCase();
                    break;
                case 'lowercase':
                    string = string.toLowerCase();
                    break;
                case 'titlecase':
                    string = titleCase(string);
                    break;
                default:
                    break;


            }
        }
        return string;

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.text === this.props.text && this.props.locale === nextProps.locale && this.state.string === nextState.string && this.props.format === nextProps.format) {
            return false;
        } else {
            return true;
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const string = this.getString();
        if (string !== prevState.string) {
            this.setState(() => ({ string }));
        }

    }
    render() {
        return this.state.string;
    }

}

/**
 * . . . 
 * @example
 * Usage of I18String is simple, after you have wrapped your app in the I18nSystem you can use them in place of regular strings
 * 
 * Note: I18String assumes the values provided and the keys of the locales are in english.
 * 
 * 
 * 
 * 
 * ```javascript
 * import I18String, {I18nSystem} from '@axc/react-components/display/i18string'
 * 
 * 
 * 
 * 
 * const MyComponent = ()=>{
 *      return( 
 *         <I18String text='hello'/>
 *      )
 * }
 * 
 * 
 * const MyApp = ()=>{
 *      return(
 *          <I18nSystem localeData={locale: 'es', locales:{es:{hello:'hola'}}}>
 *              <MyComponent/>
 *          </I18nSystem>
 *      )
 * }
 * 
 * ReactDOM.render(<MyApp/>, document.getElementById('app'));
 * 
 * (locale): output:
 *  -----------------
 * 
 * (en): 'hello'
 * 
 * (es): 'hola'
 * 
 * 
 * ```
 * 
 * 
 * . . . 
 */
export const I18String = withI18n(_I18String);

export default I18String;