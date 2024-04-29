export interface TourObjectItem{
    like:number,
    view:number,
    id:string,
    _ragicId:string, 
    file:string | string[],
    name:string,
    createTime:string,
    stars:number,
    address:string,
    type:string,
    [props: string]: any
}

export interface TourSubObjectItem{
    index: string,
    name: string,
    price:string,
    stars:number,
    _ragicId:number
  }
  
  export interface CropImgPositionItem{
    x:number,
    y:number,
    height:number,
    width:number
  }

  export interface CropImgPosition{
    cropDefaultPosition:CropImgPositionItem | string,
    cropConfirmPosition:CropImgPositionItem | string
}

export interface formData{
  loc:string,
  type:string,
  name:string,
  content:string, 
  date:string,
  mainStarCount:string
}

export interface IndexedObject {
  like:number,
  view:number,
  id:string,
  _ragicId:string, 
  file:string | string[],
  name:string,
  createTime:string,
  stars:number,
  address:string,
  seq:string,
  type:string,
  [props: string]: any
}