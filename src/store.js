import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nowStatus: '', //合同当前状态
        chargePerson: '', //合同负责人
        chargePersonName: '', //合同负责人名称
        contractMoney: '', //合同总金额
        company: '', //合同所属公司
        companyName: '', //合同所属公司名称
        contractName: '', //合同名称
        projectTaskName:'',//项目下任务名称
        projectName:'',//项目名称
        projectStatus:0,//项目状态
        startTime:'',//项目开始时间
        planTime:'',//项目计划结束时间
        projectPerson: '', //项目负责人
        projectpersonName: '',//项目负责人姓名
        onlylook: '', //合同查看
    },
    mutations: {
        setContractNowStatus(state, obj) { //设置合同当前状态
            state.nowStatus = obj;
        },
        setContractChargePerson(state, obj) { //设置合同负责人
            state.chargePerson = obj;
        },
        setContractChargePersonName(state, obj) { //设置合同负责人名称
            state.chargePersonName = obj;
        },
        setContractContractMoney(state, obj) { //设置合同总金额
            state.contractMoney = obj;
        },
        setContractCompany(state, obj) { //设置合同所属公司
            state.company = obj;
        },
        setContractCompanyName(state, obj) { //设置合同所属公司名称
            state.companyName = obj;
        },
        setContractName(state, obj) { //设置合同名称
            state.contractName = obj;
        },
        setProjectTaskName(state, obj){ //设置任务名称
            state.projectTaskName = obj;
        },
        setProjectName(state, obj){//设置项目名
            state.projectName = obj;
        },
        setProjectStatus(state,obj){//设置项目状态
            state.projectStatus = obj;
        },
        setStartTime(state,obj){
            state.startTime = obj;
        },
        setPlanTime(state,obj){
            state.planTime = obj;
        },
        setProjectPerson(state,obj){
            state.projectPerson = obj;
        },
        setOnlyLook(state, obj) {
            state.onlylook = obj;
        },
        setProjectpersonName(state, obj){
            state.projectpersonName = obj;
        }
    },
    actions: {

    }
})