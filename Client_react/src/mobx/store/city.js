import { observer } from "mobx-react";
import { observable, action, computed ,autorun} from "mobx";

export default class NewStore {
    @observable cityNamelist;  //observable data 注册一个数据，这个数据将会成为一个可mobx监测的数据
    @observable cityNamelist_select;
    @observable modelVisible;
    constructor() {
        this.cityNamelist=['苏州','无锡','宁波'];  //初始化可监测的数据
        this.cityNamelist_select='苏州';
        this.modelVisible=false;
    }
    @action.bound changeAll(newValue){
        for(let key in newValue){
            if(this[key]){
                this[key] = newValue[key]
            }else{
                continue
            }
        }
    }
    @action.bound changeSelect(tag,check){  //注册action ,action里面可以改变mobx注册的数据,从而改变store里的数据
        if(check){
            this.cityNamelist_select = tag
        }else{
            this.cityNamelist_select = ""
        }
        // console.log(tag,check,this.cityNamelist_select)
        // this.cityNamelist = ['苏州','无锡','宁波','湖州']
        
    }
}