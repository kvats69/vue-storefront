export default interface CartState {
  isMicrocartOpen: boolean,
  itemsAfterPlatformTotals: any,
  platformTotals: any,
  platformTotalSegments: any,
  cartIsLoaded: boolean,
  cartServerToken: string,
  shipping: any,
  payment: any,
  cartItemsHash: string,
  cartServerLastSyncDate: number,
  cartItems: any[]
}
