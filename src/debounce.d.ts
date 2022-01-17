declare module 'lodash.debounce' {

  export interface Options {
    leading?: boolean | undefined;
    maxWait?: number | undefined;
    trailing?: boolean | undefined;
  }

  export interface Func<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): ReturnType<T> | undefined;

    cancel(): void;

    flush(): ReturnType<T> | undefined;
  }

  export default function debounce(func: Func<any>, wait?: number, options?: Options): Func<any>
}
