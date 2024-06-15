// noinspection JSUnusedGlobalSymbols

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formatters: {
      /**
       * @param {string|undefined} value
       * @param {string} luxonFormat
       * @see https://moment.github.io/luxon/#/formatting
       */
      dateTime: (value: string | undefined, luxonFormat: string) => string,
      tagName: (value: string) => string,
    }
  }
}

export {};
