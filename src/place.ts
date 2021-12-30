export interface Place {

}

export interface Places {
  [key: string]: Place
}

 export interface PlaceCallback {
  (error?: Error, place?: [Places]): void
}
export const callback: PlaceCallback = (error, place) => {
  if (error == null && place != null) {
    console.log('Success!')
  } else {
    console.error('Fail', error)
  }
}
