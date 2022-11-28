import { Swipe,SwipeItem,Button } from 'vant';  
let plugin=[
    Swipe, SwipeItem,Button
]

export default function getVant(app){
    plugin.forEach((item)=>{
     return app.use(item);
    })

}