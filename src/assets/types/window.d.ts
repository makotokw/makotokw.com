// noinspection JSUnusedGlobalSymbols

interface AddThisConfig {
  data_track_addressbar?: boolean,
}

interface Window {
  jQuery: typeof jQuery,
  Headroom: Headroom,
  addthis_config: AddThisConfig
}
