export interface Place {

}

// export interface Places {
//   [key: string]: Place
// }

 export interface PlaceCallback {
  (error?: Error, place?: Place[]): void
}
export const callback: PlaceCallback = (error, place) => {
  if (error == null && place != null) {
    console.log('Success!', place)
  } else {
    console.error('Fail', error)
  }
}
