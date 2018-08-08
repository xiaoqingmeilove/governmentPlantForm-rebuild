import { observer } from "mobx-react";
import { observable, action, computed ,autorun,configure} from "mobx";
configure({ enforceActions: true });
export default class NewStore {
    @observable dataSource;  
    @observable modelVisible;  
    constructor() {
        this.dataSource=[]; 
        this.modelVisible=false; 
    }
    @action.bound changeAll(newValue){ 
        for(let key in newValue){
            if(this.hasOwnProperty(key)){
                this[key] = newValue[key]
            }else{
                continue
            }
        }
    }
}