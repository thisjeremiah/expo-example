/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type BottomTabParamList = {
  Collection: undefined
  Canvas: undefined
  Queue: undefined
}

export type QueueParamList = {
  Index: undefined
}

export type CollectionParamList = {
  Index: undefined
  Asset: {assetId: string}
  Assets: {assetIds: string[]}
  NewAsset: undefined
  EditAsset: {assetId: string}
}

export type CanvasParamList = {
  Index: undefined
  Queue: undefined
  Settings: undefined
}
