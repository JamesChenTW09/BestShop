export const APIKEY: string = "Basic aHdkVEdYblovMzY4aWk0bDlXVEhyakJJOE9NSjU1T0tnaktWYnJ5elpNS2FLTjU2QWNwUGdweFhGalRBVVFxcw==";

export const TYPELIST: string[] = ["餐廳","漢堡","酒吧","咖啡","茶店","海鮮","中餐","日式","披薩","牛排","小吃","燒肉","甜點","居酒屋","麵包","其它"];

interface  TourStep{
    "INSERTIMG":number,
    "IMGCROP":number,
    "INSERTDATA":number
}
export const ADDTOURSTEP: TourStep = {
    "INSERTIMG":1,
    "IMGCROP":2,
    "INSERTDATA":3
}