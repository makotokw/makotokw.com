// noinspection JSUnusedGlobalSymbols

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formatters: {
      dateTime: (value: string, format: string) => string,
      tagName: (value: string) => string,
    }
  }
}

export {};
