import { observer } from "mobx-react";
import { observable, action, computed ,autorun} from "mobx";
export default class NewStore {
    @observable table1;  //observable data 注册一个数据，这个数据将会成为一个可mobx监测的数据
    @observable table2;
    @observable table3;
    constructor() {
        this.table1="hao1";  //初始化可监测的数据
        this.table2="hao2";
        this.table3="hao3";
    }
    @action changeValue(newvalue){  //注册action ,action里面可以改变mobx注册的数据,从而改变store里的数据
        console.log(newvalue)
    }
}