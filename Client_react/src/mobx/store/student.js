import { observer } from "mobx-react";
import { observable, action, computed ,autorun} from "mobx";
export default class NewStore {
    @observable student1;  //observable data 注册一个数据，这个数据将会成为一个可mobx监测的数据
    @observable student2;
    @observable student3;
    constructor() {
        this.student1=1;  //初始化可监测的数据
        this.student2=2;
        this.student3=3;
    }
    @action changeValue(newvalue){  //注册action ,action里面可以改变mobx注册的数据,从而改变store里的数据
        console.log(newvalue)
    }
}